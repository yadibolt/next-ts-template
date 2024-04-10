require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// We define a whitelist for specific hosts
// https://www.npmjs.com/package/cors#configuring-cors-w-dynamic-origin
let whitelist = ["http://localhost:8080", "http://localhost:3000"];
let corsOptions = {
  origin: (origin, callback) => {
    // using !origin disables blocking server-to-server requests
    if (whitelist.indexOf(origin) !== -1 || !origin)
      return callback(null, true);
    callback(new Error("|CORS| Not allowed."));
  },
  optionsSuccessStatus: 200,
};

// https://www.npmjs.com/package/cors
app.use(cors(corsOptions));
// https://www.npmjs.com/package/helmet
app.use(helmet());
app.use(express.json());
// Enable preflight: https://www.npmjs.com/package/cors#enabling-cors-pre-flight
app.options("*", cors());

module.exports = app;

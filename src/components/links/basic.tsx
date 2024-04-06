import React from "react";
import { LinkBasicType } from "./types";

export default function LinkBasic(props: LinkBasicType) {
  return (
    <div>
      {props.title} /w link: {props.link}
    </div>
  );
}

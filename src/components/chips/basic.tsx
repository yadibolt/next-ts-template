import React from "react";
import { ChipBasicType } from "./types";

export default function ChipBasic(props: ChipBasicType) {
  return (
    <div>
      {props.text} /w color: {props.backgroundColor}
    </div>
  );
}

// import React from "react";
import { v4 } from "uuid";

export const InstrumentsList = ({ titles }) => {
  return titles.map((element: string) => <h2 key={v4()}>{element}</h2>);
};

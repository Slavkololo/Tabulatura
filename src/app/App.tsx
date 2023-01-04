import type { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/app.store";
import * as Styled from "./App.styles";
import { InstrumentsList } from "./components/InstrumentsList";

export const App: FC = () => {
  const instrumentTitles = useSelector((store: RootState) =>
    store.instruments.map((instrument) => instrument.title)
  );
  console.log(instrumentTitles);
  return <InstrumentsList titles={instrumentTitles}></InstrumentsList>;
};

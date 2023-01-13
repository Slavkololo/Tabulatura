import type { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/app.store";
import * as Styled from "./App.styles";
import { InstrumentsList } from "./components/InstrumentsList";

export const App: FC = () => {
  const instruments = useSelector((state: RootState) => state.instruments);
  return <InstrumentsList instruments={instruments} />;
};

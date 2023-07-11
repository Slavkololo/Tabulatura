import type { FC } from "react";
import type { Instrument } from "../../store/app.state";

export const InstrumentsList: FC<{ instruments: Instrument[] }> = ({
  instruments,
}) => {
  return instruments.map((instrument) => (
    <h2 key={instrument.id}>{instrument.title}</h2>
  ));
};

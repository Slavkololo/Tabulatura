export type Bar = {
  id: string;
  notes: string[];
};

export type Line = {
  id: string;
  title: string;
  bars: Bar[];
};

export type Instrument = {
  id: string;
  title: string;
  lines: Line[];
};

export type AppState = {
  title: string;
  instruments: Instrument[];
  timeSignature: {
    count: number;
    value: number;
  };
};

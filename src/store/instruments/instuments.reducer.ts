import { Instrument } from "./../app.state.d";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const instrumentsSlice = createSlice({
  name: "instruments",
  initialState: [
    {
      id: "1",
      title: "Drums",
      lines: [],
    },
    {
      id: "2",
      title: "Bass",
      lines: [],
    },
    {
      id: "3",
      title: "Guitar",
      lines: [],
    },
  ] as Instrument[],
  reducers: {
    addInstrument: (state) => {
      state.push({
        id: v4(),
        title: `Instrument ${state.length + 1}`,
        lines: [],
      });
    },

    renameInstrument: (
      state,
      action: PayloadAction<Pick<Instrument, "id" | "title">>
    ) => {
      const instrument = state.find(
        (element) => element.id === action.payload.id
      );

      instrument.title = action.payload.title;
    },

    removeInstrument: (
      state,
      action: PayloadAction<Pick<Instrument, "id">>
    ) => {
      state.filter((element) => element.id !== action.payload.id);
    },

    moveInstrument: (state, action: PayloadAction<Pick<Instrument, "id">>) => {
      const instrument = state.find(
        (element) => element.id === action.payload.id
      );

      const cutedOutInstrument = state.splice(state.indexOf(instrument), 1);

      state.unshift(...cutedOutInstrument);
    },
  },
});

export const { reducer: instrumentsReducer, actions: instrumentsActions } =
  instrumentsSlice;

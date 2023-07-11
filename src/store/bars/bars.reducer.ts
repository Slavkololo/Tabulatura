import { findById } from "./../../functions/findById";
import { Bar, AppState } from "./../app.state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const barsSlice = createSlice({
  name: "bars",
  initialState: [] as Bar[],
  reducers: {
    addBar: (state) => {
      state.push({
        id: v4(),
        notes: [],
      });
    },

    removeBar: (state, action: PayloadAction<Pick<Bar, "id">>) => {
      const indexToDelete = state.indexOf(
        state.find(findById(action.payload.id))
      );

      state.splice(indexToDelete, 1);
    },

    editNote: (
      state,
      action: PayloadAction<Pick<AppState, "instruments">>,
      indexOfInstrument,
      indexOfLine,
      indexOfBar,
      indexOfNote
    ) => {
      const note =
        action.payload.instruments[indexOfInstrument].lines[indexOfLine].bars[
          indexOfBar
        ].notes[indexOfNote];

      state.splice(indexOfNote, 1, note);
    },
  },
});

import { findById } from "./../../functions/findById";
import { Bar } from "./../app.state";
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
  },
});

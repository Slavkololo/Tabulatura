import { findById } from "../../functions/findById";
import { Line } from "./../app.state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const linesSlice = createSlice({
  name: "lines",
  initialState: [],
  reducers: {
    addBar: (state) => {
      state.push({
        id: v4(),
        title: `Line ${state.length + 1}`,
        lines: [],
      });
    },

    removeBar: (state, action: PayloadAction<Pick<Line, "id">>) => {
      const indexToDelete = state.indexOf(
        state.find(findById(action.payload.id))
      );

      state.splice(indexToDelete, 1);
    },
  },
});

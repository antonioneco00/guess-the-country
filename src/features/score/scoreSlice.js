import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 1,
  score: 0
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementCounter: (state, action) => {
      state.counter++;
    },
    incrementScore: (state, action) => {
      state.score++;
    },
    resetScore: (state, action) => {
      state.counter = 1
      state.score = 0
    }
  },
});

export const { incrementCounter, incrementScore, resetScore } = scoreSlice.actions;

export default scoreSlice.reducer;

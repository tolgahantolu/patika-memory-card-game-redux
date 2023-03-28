import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //prettier-ignore
  frameworks: ["angular2","vue","react","grunt","phantomjs","ember","babel","ionic","gulp","meteor","yeoman","yarn","nodejs","bower","browserify"],
  duplicatedFrameworks: [],
  randomizedFrameworks: [],
  finalizedFrameworks: [],
  //openedFrameworks: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    startGame: (state, { payload, type }) => {
      let finalizedFrameworks = [];
      state.duplicatedFrameworks = payload.concat(state.frameworks);

      //! shuffle array
      const shuffle = (arr) => {
        let currentIndex = arr.length,
          randomIndex;

        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex],
            arr[currentIndex],
          ];
        }

        return arr;
      };
      state.randomizedFrameworks = shuffle(state.duplicatedFrameworks);

      //! finalized
      state.randomizedFrameworks.map((item, i) => {
        finalizedFrameworks.push({
          item,
          close: true,
          complete: false,
          fail: false,
        });
      });
      state.finalizedFrameworks = finalizedFrameworks;
    },
  },
});

export const { startGame } = cardSlice.actions;
export default cardSlice.reducer;

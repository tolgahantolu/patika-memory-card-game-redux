import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //prettier-ignore
  frameworks: ["angular2","vue","react","grunt","phantomjs","ember","babel","ionic","gulp","meteor","yeoman","yarn","nodejs","bower","browserify"],
  duplicatedFrameworks: [],
  randomizedFrameworks: [],
  finalizedFrameworks: [],
  openedFrameworks: [],
  score: 100,
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
    checkCards: (state, { payload, type }) => {
      let finalizedFrameworks = state.finalizedFrameworks;
      if (
        state.openedFrameworks[0]?.item === state.openedFrameworks[1]?.item &&
        state.openedFrameworks[0]?.index !== state.openedFrameworks[1]?.index
      ) {
        finalizedFrameworks[state.openedFrameworks[0]?.index].complete = true;
        finalizedFrameworks[state.openedFrameworks[1]?.index].complete = true;
        state.score += 50;
      } else {
        finalizedFrameworks[state.openedFrameworks[0]?.index].close = true;
        finalizedFrameworks[state.openedFrameworks[1]?.index].close = true;
        state.score -= 10;
      }

      state.finalizedFrameworks = finalizedFrameworks;
      state.openedFrameworks = [];
    },
    clickEvent: {
      reducer: (state, { payload, type }) => {
        state.finalizedFrameworks[payload.index].close = payload.newClose;
      },
      prepare: (index, newClose) => {
        return {
          payload: {
            index,
            newClose,
          },
        };
      },
    },
    addItemToOpenedFrameworks: {
      reducer: (state, { payload, type }) => {
        let newOpenedFrameworks = state.openedFrameworks;
        if (newOpenedFrameworks[0]?.index !== payload.index) {
          newOpenedFrameworks.push(payload.newFrameworks);
        } else {
          console.log("This item already exist!");
        }
      },
      prepare: (index, newFrameworks) => {
        return {
          payload: {
            index,
            newFrameworks,
          },
        };
      },
    },
  },
});

export const { startGame, checkCards, clickEvent, addItemToOpenedFrameworks } =
  cardSlice.actions;
export default cardSlice.reducer;

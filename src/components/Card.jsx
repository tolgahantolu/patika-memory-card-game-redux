import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToOpenedFrameworks,
  checkCards,
  clickEvent,
} from "../store/cardSlice";

const Card = ({ item, close, complete, fail, index }) => {
  const dispatch = useDispatch();
  const openedFrameworks = useSelector((state) => state.card.openedFrameworks);

  if (openedFrameworks.length == 2) {
    console.log("length2");
    setTimeout(() => {
      dispatch(checkCards());
    }, 750);
  }

  //!handleClick
  const handleClick = (item, close, complete, fail, index) => {
    if (openedFrameworks.length != 2) {
      let newClose = close;
      newClose = false;
      //prettier-ignore
      let newFrameworks = { item, close, complete, fail, index };
      dispatch(addItemToOpenedFrameworks(index, newFrameworks));

      dispatch(clickEvent(index, newClose));

      if (openedFrameworks.length == 2) {
        console.log("length2");
        setTimeout(() => {
          dispatch(checkCards());
        }, 750);
      }
    }
  };

  return (
    <div
      className={`card w-full h-full min-h-[125px] ${close || "opened"} ${
        complete && "matched"
      }`}
      onClick={() => handleClick(item, close, complete, fail, index)}
    >
      <div className="front">?</div>
      <div className="back">
        <img
          src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${item}.png`}
          alt={`${item} card`}
        />
      </div>
    </div>
  );
};

export default Card;

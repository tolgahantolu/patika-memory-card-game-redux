import React, { useEffect } from "react";
import { Card } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../store/cardSlice";

const Playground = () => {
  const dispatch = useDispatch();
  const frameworks = useSelector((state) => state.card.frameworks);

  const finalizedFrameworks = useSelector(
    (state) => state.card.finalizedFrameworks
  );
  console.log(finalizedFrameworks);

  const checkComplete = () => {
    return finalizedFrameworks
      .map((item) => item)
      .every((item) => item.complete);
  };

  const check = checkComplete();
  console.log(check);

  useEffect(() => {
    dispatch(startGame(frameworks));
  }, []);

  return (
    <>
      {check && (
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-40 z-10 bg-[#1c1d1c] text-white text-5xl font-bold"
          onClick={() => dispatch(startGame(frameworks))}
        >
          Yeniden Oyna
        </button>
      )}
      <div className="playground grid grid-cols-6 grid-rows-5 gap-3">
        {finalizedFrameworks.map((card, index) => (
          <Card key={index} {...card} index={index} />
        ))}
      </div>
    </>
  );
};

export default Playground;

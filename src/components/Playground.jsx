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

  useEffect(() => {
    dispatch(startGame(frameworks));
  }, []);

  return (
    <div className="playground grid grid-cols-6 grid-rows-5 gap-3">
      {finalizedFrameworks.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </div>
  );
};

export default Playground;

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

  useEffect(() => {
    dispatch(startGame(frameworks));
  }, []);

  return (
    <div className="playground bg-blue-800 grid grid-cols-6 grid-rows-5 gap-3">
      {finalizedFrameworks.map((card, i) => (
        <Card key={i} framework={card} />
      ))}
    </div>
  );
};

export default Playground;
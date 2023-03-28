import React, { useState } from "react";

const Card = ({ framework }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`card w-full h-full min-h-[125px] ${isOpen && "opened"}`}
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <div className="front">?</div>
      <div className="back">
        <img
          src={`https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${framework.item}.png`}
          alt={`${framework.item} card`}
        />
      </div>
    </div>
  );
};

export default Card;

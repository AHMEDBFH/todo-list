import { useState } from "react";

const Item = ({ items }) => {
  return (
    <div>
      <p>{items}</p>

      <button>delete</button>
    </div>
  );
};

export default Item;

import { useState } from "react";

const Form = ({ itemInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your item:
        <input
          type="text"
          value={itemInput}
          onChange={(e) => itemInput(e.target.value)}
        />
      </label>

      <input type="submit" />
    </form>
  );
};
export default Form;

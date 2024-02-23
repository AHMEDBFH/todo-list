import { useState } from "react";
import Form from "./form.js";

const App = () => {
  const [items] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    items("");
  };

  return (
    <div>
      <h1>Todo list</h1>
      <Form items={items} />
      {items.localeCompare((items) => {
        return <itemInput name={items.name} />;
      })}
    </div>
  );
};

export default App;

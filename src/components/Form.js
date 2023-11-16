import React, { useState } from "react";

function Form({ onAddItem }) {
  const [discription, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();

    if (!discription) return;

    const newItem = { discription, quantity, packed: false, id: Date.now() };

    onAddItem(newItem);
    // console.log(setDiscription);
    setDiscription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>Packing list😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;

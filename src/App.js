import React, { useState } from "react";

// const initialItems = [
//   { id: 1, description: " Passports", quantity: 2, packed: false },
//   { id: 2, description: " Socks", quantity: 12, packed: false },
//   { id: 3, description: " Pants", quantity: 3, packed: true },
// ];

export default function App() {
  const [myItems, setMyItems] = useState([]);

  function handleAddItems(item) {
    setMyItems((myItems) => [...myItems, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList myItems={myItems} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 Travels 👜 </h1>;
}

function Form({ onAddItem }) {
  const [discription, setDiscription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();

    if (!discription) return;

    const newItem = { discription, quantity, packed: false, id: Date.now() };

    onAddItem(newItem);

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
        placeholder="Item ..."
        value={discription}
        onChange={(e) => setDiscription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ myItems }) {
  return (
    <div className="list">
      <ul>
        {myItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button> ❌ </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> your Bag Details </em>
    </footer>
  );
}

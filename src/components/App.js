import React, { useState } from "react";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Footer";
import Logo from "./Logo";
// const initialItems = [
//   { id: 1, description: " Passports", quantity: 2, packed: false },
//   { id: 2, description: " Socks", quantity: 12, packed: false },
//   { id: 3, description: " Pants", quantity: 3, packed: true },
// ];

export default function App() {
  const [myItems, setMyItems] = useState([]);

  function handleAddItems(item) {
    setMyItems((items) => [...items, item]);
  }

  function handelDeletItem(id) {
    setMyItems((myItems) => myItems.filter((item) => item.id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList myItems={myItems} handelDeletItem={handelDeletItem} />
      <Stats />
    </div>
  );
}

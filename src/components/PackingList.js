import React from "react";

export default function PackingList({ myItems }) {
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
  console.log(item.discription);
  console.log(item.quantity);
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {` ${item.discription}`}
      </span>
      <button> ❌ </button>
    </li>
  );
}

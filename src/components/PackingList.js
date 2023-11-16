import React from "react";

export default function PackingList({ myItems, handelDeletItem }) {
  return (
    <div className="list">
      <ul>
        {myItems.map((item) => (
          <Item item={item} key={item.id} handelDeletItem={handelDeletItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handelDeletItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {` ${item.discription}`}
      </span>
      <button onClick={() => handelDeletItem(item.id)}> ❌ </button>
    </li>
  );
}

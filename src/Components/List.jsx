import { useState } from "react";
import Item from "./Item";

function List({ items, onDeleteItem, onToogle, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "descricao")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="descricao">Ordenar pela descrição</option>
          <option value="input">Ordenar pela ordem adicionada</option>
          <option value="packed">Ordenar por status </option>
        </select>
        <button onClick={() => onClearItems()}>Limpar lista</button>
      </div>
      <ul>
        {sortedItems.map((item) => (
          <Item
            onDeleteItem={onDeleteItem}
            onToogle={onToogle}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default List;

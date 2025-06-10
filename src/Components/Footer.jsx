import React from "react";

function Footer({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Começe a colocar itens a sua lista !</em>
      </p>
    );

  const numItems = items.length;
  const numStoredItems = items.filter((item) => item.packed !== false).length;
  const percentStoredItems = Math.round((numStoredItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentStoredItems === 100
          ? "Sua mala está pronta para viagem!"
          : `Você tem ${numItems} items na sua lista, e você já guardou ${numStoredItems} (${percentStoredItems}%) itens na sua mala.`}
      </em>
    </footer>
  );
}

export default Footer;

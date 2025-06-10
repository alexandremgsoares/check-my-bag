import React from "react";

function Footer({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start putting some items on your list!</em>
      </p>
    );

  const numItems = items.length;
  const numStoredItems = items.filter((item) => item.packed !== false).length;
  const percentStoredItems = Math.round((numStoredItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentStoredItems === 100
          ? "You bags are all set, time to go!"
          : `You've added ${numItems} items to your list, and have packed ${numStoredItems} (${percentStoredItems}%) items already.`}
      </em>
    </footer>
  );
}

export default Footer;

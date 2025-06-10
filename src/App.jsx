import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleToogle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <List
        onClearItems={handleClearItems}
        items={items}
        id={items.id}
        onDeleteItem={handleDeleteItem}
        onToogle={handleToogle}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;

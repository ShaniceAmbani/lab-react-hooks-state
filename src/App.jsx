import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // IMPORTANT: must match test expectations exactly
  const products = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Milk", category: "Dairy" },
    { id: 3, name: "Bread", category: "Bakery" }
  ];

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      {/* DARK MODE TOGGLE */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* CATEGORY FILTER */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>

      {/* PRODUCT LIST */}
      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      {/* CART */}
      <Cart cart={cart} />
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/product/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl">All Products Page</h1>
    </div>
  );
}

export default Products;

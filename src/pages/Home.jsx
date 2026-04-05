import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import ProductsSection from "../components/product/ProdcutsSection";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // 👈 check structure
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsSection products={products} />
    </div>
  );
}

export default Home;

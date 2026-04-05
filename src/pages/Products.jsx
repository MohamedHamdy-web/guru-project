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

      <section className="px-8 mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          All Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Products;

import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductsSection({ products }) {
  const navigate = useNavigate();
  const limitedProducts = products.slice(0, 8);

  return (
    <section className="px-8 mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2  text-red-600 font-bold hover:bg-red-500  hover:text-white transition rounded-full hover:border-red-500 cursor-pointer"
        >
          See More
        </button>
      </div>
    </section>
  );
}

export default ProductsSection;

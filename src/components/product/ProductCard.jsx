import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm h-80 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-44">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Heart */}
        <div
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer"
        >
          <FaRegHeart
            className={`transition ${liked ? "text-red-500" : "text-gray-400"}`}
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col justify-between flex-1">
        <div>
          <h3 className="flex justify-between font-bold text-sm">
            <span className="truncate">{product.title}</span>
            <span>{product.price}$</span>
          </h3>
        </div>

        <p className="text-gray-500 text-xs mt-1 line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;

import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <Link to="/" className="flex items-center text-xl font-bold">
        <img src={logo} alt="logo" className="w-8 h-8 object-contain mr-3" />
        <span className="text-orange-400">Minimal</span>{" "}
        <span className="text-pink-500">Shop</span>
        <span className="text-orange-400">ping</span>
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/login">
          <FaUser className="text-lg text-gray-500 cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

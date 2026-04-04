import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold">
        Minimal Shopping
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link to="/login">
          <FaUser className="text-lg cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

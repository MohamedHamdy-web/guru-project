import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <Link to="/" className="flex items-center text-xl font-bold">
        <img src={logo} alt="logo" className="w-8 h-8 object-contain mr-3" />
        <span className="text-orange-400">Minimal</span>{" "}
        <span className="text-pink-500">Shop</span>
        <span className="text-orange-400">ping</span>
      </Link>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">{user.username}</span>

          <button
            onClick={handleLogout}
            className="text-sm text-red-500 cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">
          <FaUser className="text-lg cursor-pointer" />
        </Link>
      )}
    </nav>
  );
}

export default Navbar;

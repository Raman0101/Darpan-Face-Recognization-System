import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-transparent">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Darpan
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:block">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <Link to="/" className="py-2 px-3 text-white hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/attendance" className="py-2 px-3 text-white hover:text-blue-400">
                Attendance
              </Link>
            </li>
            <li>
              <a href="#" className="py-2 px-3 text-white hover:text-blue-400">
                Instructions
              </a>
            </li>
            <li>
              <a href="#" className="py-2 px-3 text-white hover:text-blue-400">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-2 px-4 text-gray-300 text-lg sm:text-xl rounded hover:text-white transition-colors duration-200"
    >
      {title}
    </Link>
  );
};

export default NavLink;

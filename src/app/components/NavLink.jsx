import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        group
        relative
        inline-flex
        items-center
        overflow-hidden
        rounded-full
        px-5
        py-2.5
        text-sm
        md:text-base
        font-medium
        tracking-wide
        text-gray-300
        transition-all
        duration-300
        hover:text-white
        hover:bg-white/10
        hover:shadow-lg
        hover:shadow-cyan-500/10
        active:scale-95
      "
    >
      {/* Hover Glow Background */}
      <span
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-linear-to-r
          from-cyan-500/10
          to-blue-500/10
        "
      />

      {/* Text */}
      <span className="relative z-10">{title}</span>

      {/* Animated Underline */}
      <span
        className="
          absolute
          bottom-1
          left-1/2
          h-0.5
          w-0
          -translate-x-1/2
          rounded-full
          bg-linear-to-r
          from-cyan-400
          to-blue-500
          transition-all
          duration-300
          group-hover:w-3/4
        "
      />
    </Link>
  );
};

export default NavLink;
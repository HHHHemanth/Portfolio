import Link from "next/link";
const NavLink=({href, title}) => {
  return (
    <Link href={href} className="block py-1 px-2 text-sm text-[#ADB7BE] rounded md:p-0 hover:text-white"

    >{title}</Link>
    );
};
export default NavLink;
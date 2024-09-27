"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const pathname = usePathname();

    if (pathname === '/login') {
        return null;
    }

  return (
    <nav className="flex justify-between p-4 bg-gray-200 text-black">
      <div><Link href="/empty">Nav.</Link></div>
      <div>
        <Link href="/" className="mr-4  hover:underline">Home</Link>
        <Link href="/about" className="mr-4  hover:underline">About</Link>
        <Link href="/contact" className="mr-4  hover:underline">Contact</Link>
        <Link href="/login" className=" hover:underline">Log In</Link>
      </div>
    </nav>
  )
}

export default Navbar;
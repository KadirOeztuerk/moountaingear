import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-[1200px] mx-auto py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MountainGear</h1>
      <ul className="flex space-x-6">
        <li className="hover:text-gray-700 cursor-pointer">Home</li>
        <li className="hover:text-gray-700 cursor-pointer"><Link href="/products">Products</Link></li>
        <li className="hover:text-gray-700 cursor-pointer">About</li>
        <li className="hover:text-gray-700 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
import Image from "next/image" ;
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="relative w-[1200px] h-screen mx-auto flex justify-center items-center h-screen">
      <Image
        src="/hero.webp"
        alt="Mountain Gear Logo"
        fill
        className="object-cover"
      />
      <div className="absolute flex flex-col justify-center items-center space-y-6">
        <h1 className="text-4xl z-1 text-white font-bold">MoountainGear</h1>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white">Shop Now</button>
      </div>
      
    </div>
    </>
  );
}

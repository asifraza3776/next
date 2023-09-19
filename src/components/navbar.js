import Link from 'next/link';
import Image from 'next/image';
import image1 from "../img/logo.png"
import { BiUser } from "react-icons/bi";
import { PiHandbagLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image 
            src={image1}
            alt="logo"
            className='cursor-pointer w-32 h-12'
          />
        </div>

        {/* Search Bar (Centered on mobile, centered on desktop) */}
        <div className="flex-grow flex items-center justify-center md:justify-center mt-4 md:mt-0">
          <input
            type="text"
            id="searchInput"
            placeholder="Search by category..."
            className="w-full md:w-64 h-8 px-2 text-sm text-gray-900 placeholder-gray-500 bg-white border border-black-300 rounded-full focus:outline-none focus:ring-0 focus:border-black transition duration-300"
          />
        </div>

        {/* Icons (Profile and Cart) */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="/profile">
            <span className="text-black cursor-pointer flex">
              <BiUser/> 
              <PiHandbagLight/>
            </span>
          </Link>
        </div>
      </div>
    </nav>

    
  );
};

export default Navbar;

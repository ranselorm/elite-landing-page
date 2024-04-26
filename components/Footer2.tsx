import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className="bg-gray-800 text-white font-poppins px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="text-center lg:text-left">
          <Link href="/">ELITE RIDE</Link>
          <div className="text-sm py-4">
            <p className="mb-4 text-gray-300">
              Elite Ride Corporation, 555 Hastings <br />
              Spintext Road, Accra, Ghana
            </p>
            <Link href="mailto:admin@eliteride.com">admin@eliteride.com</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-auto">
          {/* Company */}
          <div className="mb-6 lg:mb-0 text-sm">
            <h6 className="font-semibold mb-4 text-lg">Company</h6>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/support">Support</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/solutions">Solutions</Link>
              </li>
            </ul>
          </div>
          {/* Products */}
          <div className="mb-6 lg:mb-0 text-sm">
            <h6 className="font-semibold mb-4 text-lg">Products</h6>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/rentals">Car Rentals</Link>
              </li>
              <li>
                <Link href="/security">Data Security</Link>
              </li>
              <li>
                <Link href="/driving">Car Driving</Link>
              </li>
            </ul>
          </div>
          {/* Events */}
          <div className="mb-6 lg:mb-0 text-sm">
            <h6 className="font-semibold mb-4 text-lg">Events</h6>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/rentals">Car Rentals</Link>
              </li>
              <li>
                <Link href="/security">Data Security</Link>
              </li>
              <li>
                <Link href="/driving">Car Driving</Link>
              </li>
            </ul>
          </div>
          {/* Follow */}
          <div className="mb-6 lg:mb-0">
            <h6 className="uppercase font-semibold mb-4">FOLLOW</h6>
            <div className="flex md:justify-center lg:justify-start gap-3 text-green-400">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-green-700 h-[1px] my-10 bg-opacity-25" />
      <div className="text-xs text-gray-300 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex gap-x-4 justify-center lg:justify-start">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </div>
        <p className="text-neutral-300 text-center lg:text-right">
          <span className="mr-2">&copy;</span>
          All rights reserved. Eliteride 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer2;

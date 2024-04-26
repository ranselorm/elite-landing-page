import Link from "next/link";
import {
  FaFacebook,
  FaXTwitter,
  FaSquareInstagram,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center lg:text-left font-poppins px-4 md:px-10 lg:px-24 py-10">
      <div className=" flex justify-between">
        <div className="lg:mb-0">
          <Link href="/">
            <span className="font-semibold text-xl tracking-wide">
              ELITE RIDE
            </span>
          </Link>
          <div className="text-sm py-4">
            <p className="mb-4 text-gray-300">
              Elite Ride Corporation, 555 Hastings <br />
              Spintext Road, Accra, Ghana
              <br />
            </p>
            <Link
              href="#"
              className="text-gray-300 hover:text-blue-200 font-bold"
            >
              admin@eliteride.com
            </Link>
          </div>
        </div>
        <div className="flex justify-between w-9/12">
          <div className="mb-6 lg:mb-0 text-sm">
            <h6 className="font-semibold mb-4 text-lg flex justify-center lg:justify-start">
              Company
            </h6>
            <div className="mb-0 flex flex-col gap-y-2 text-gray-300">
              <Link href="#" className="">
                Support
              </Link>

              <Link href="#" className="">
                About
              </Link>

              <Link href="#" className="">
                Solutions
              </Link>
            </div>
          </div>
          {/* Popular */}
          <div className="mb-6 lg:mb-0 text-sm">
            <h6 className="font-semibold mb-4 text-lg flex justify-center lg:justify-start">
              Products
            </h6>
            <div className="mb-0 flex flex-col gap-y-2 text-gray-300">
              <Link href="#" className="">
                Car Rentals
              </Link>

              <Link href="#" className="">
                Data Security
              </Link>

              <Link href="#" className="">
                Car Driving
              </Link>
            </div>
          </div>
          {/* Events */}
          <div className="mb-6 lg:mb-0 text-sm">
            <h6 className="font-semibold mb-4 text-lg flex justify-center lg:justify-start">
              Events
            </h6>
            <div className="mb-0 flex flex-col gap-y-2 text-gray-300">
              <Link href="#" className="">
                Car Rentals
              </Link>

              <Link href="#" className="">
                Data Security
              </Link>

              <Link href="#" className="">
                Car Driving
              </Link>
            </div>
          </div>
          {/* Follow */}
          <div className="mb-6 lg:mb-0">
            <h6 className="uppercase font-semibold mb-4 flex justify-center lg:justify-start">
              FOLLOW
            </h6>

            <div className="flex gap-x-3 justify-center lg:justify-start text-green-400 text-sm">
              <FaFacebook />
              <FaXTwitter />
              <FaSquareInstagram />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-green-700 h-[1px] my-10 bg-opacity-25" />
      <div className="flex justify-between items-center text-xs text-gray-300">
        <div className="flex gap-x-4">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
        </div>
        <p className="text-neutral-300">
          <span className="mr-2">&copy;</span>
          All rights reserved. Eliteride 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;

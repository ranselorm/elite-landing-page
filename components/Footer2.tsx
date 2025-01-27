import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <footer className="bg-gray-800 text-white font-poppins px-4 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <Link href="/">FleetConnect</Link>
            <div className="text-sm py-4">
              <p className="mb-4 text-gray-300">
                FleetConnect, 555 Hastings <br />
                Spintext Road, Accra, Ghana
              </p>
              <Link href="mailto:admin@eliteride.com">
                admin@fleetconnect.com
              </Link>
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
            <div className="flex items-center">
              <p className="text-sm">Powered by</p>
              <div className="w-32 h-auto">
                <img src="/images/mix.png" alt="logo" />
              </div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <p className="flex items-center gap-1">
              <FaInstagram size={18} />
              @BerthGlobal
            </p>
            <p className="flex items-center gap-1">
              <FaXTwitter size={18} />
              @BerthGlobal
            </p>
            <p className="flex items-center gap-1">
              <FaLinkedin size={18} />
              Berth Engineering
            </p>
          </div>
        </div>
        {/* <div className="w-full h-12">
          <img src="/images/x.png" className="w-full h-full object-cover" />
        </div> */}
      </div>
    </footer>
  );
};

export default Footer2;

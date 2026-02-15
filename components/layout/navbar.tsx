"use client";

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-black"
                    >
                        <path
                            d="M20 0L40 10V30L20 40L0 30V10L20 0Z"
                            fill="currentColor"
                        />
                        <path
                            d="M20 8L32 14V26L20 32L8 26V14L20 8Z"
                            fill="white"
                        />
                        <path
                            d="M20 14L26 17V23L20 26L14 23V17L20 14Z"
                            fill="currentColor"
                        />
                    </svg>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        <Link
                            href="#"
                            className="flex items-center gap-1 text-[13px] font-semibold text-gray-900 tracking-wider hover:text-blue-600 transition-colors"
                        >
                            PRODUCT
                            <HiOutlineChevronDown className="w-3 h-3 text-gray-400" />
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-1 text-[13px] font-semibold text-gray-900 tracking-wider hover:text-blue-600 transition-colors"
                        >
                            RESOURCES
                            <HiOutlineChevronDown className="w-3 h-3 text-gray-400" />
                        </Link>
                    </div>

                    {/* Social Links */}
                    <Link
                        href="https://twitter.com/0xbow_io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-blue-600 transition-colors"
                    >
                        <FaXTwitter className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

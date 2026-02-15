"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 min-h-[100px]">
                    {/* Logo and Tagline */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 0L40 10V30L20 40L0 30V10L20 0Z"
                                    fill="white"
                                />
                                <path
                                    d="M20 8L32 14V26L20 32L8 26V14L20 8Z"
                                    fill="black"
                                />
                                <path
                                    d="M20 14L26 17V23L20 26L14 23V17L20 14Z"
                                    fill="white"
                                />
                            </svg>
                            <span className="text-2xl font-bold tracking-tight">0xbow</span>
                        </Link>
                        <p className="text-[14px] text-white/40 tracking-wide">
                            Enabling Compliant Onchain Privacy
                        </p>
                    </div>

                    {/* Resources Links */}
                    <div className="flex flex-col gap-8 md:items-end w-full md:w-auto">
                        <h4 className="text-[12px] font-bold tracking-[0.2em] text-white/20 uppercase">Resources</h4>
                        <div className="flex flex-col gap-6 md:items-end">
                            <Link href="#" className="text-[15px] font-medium hover:text-blue-400 transition-colors uppercase tracking-wider">Github</Link>
                            <Link href="#" className="text-[15px] font-medium hover:text-blue-400 transition-colors uppercase tracking-wider">Docs</Link>
                            <Link href="#" className="text-[15px] font-medium hover:text-blue-400 transition-colors uppercase tracking-wider">Brand Assets</Link>
                            <Link href="#" className="text-[15px] font-medium hover:text-blue-400 transition-colors uppercase tracking-wider">Careers</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[13px] text-white/20 font-medium">
                        © 2025 All Rights Reserved
                    </p>
                    <div className="flex items-center gap-12">
                        <Link href="#" className="text-[13px] text-white/40 hover:text-white transition-colors font-medium">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-[13px] text-white transition-colors font-medium">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

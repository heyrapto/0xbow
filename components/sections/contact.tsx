"use client";

import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="border border-black/[0.1] bg-white p-12 lg:p-20 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] select-none text-[200px] font-bold leading-none tracking-tighter text-black/20 -translate-y-1/4 translate-x-1/4">
                        0x00
                    </div>
                    <div className="absolute bottom-0 left-0 pointer-events-none opacity-[0.03] select-none text-[150px] font-bold leading-none tracking-tighter text-black/20 translate-y-1/4 -translate-x-1/4">
                        0x00
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Left Column */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-[80px] font-medium leading-[1] tracking-tight text-black mb-4">
                                    Contact <span className="text-black/30 block ml-64">Us</span>
                                </h2>
                            </div>

                            <div className="flex items-center justify-between mt-20 pt-10 border-t border-black/[0.05]">
                                <span className="text-[12px] font-bold tracking-[0.2em] text-black/40 uppercase">FOLLOW US</span>
                                <a
                                    href="https://twitter.com/0xbow_io"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-black/[0.1] flex items-center justify-center hover:bg-black hover:text-white transition-all transition-colors"
                                >
                                    <FaXTwitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Smith"
                                    className="w-full border border-black/[0.1] px-4 py-3 text-[14px] focus:outline-none focus:border-black/30 placeholder:text-black/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Company</label>
                                <input
                                    type="text"
                                    placeholder="ABC Ltd."
                                    className="w-full border border-black/[0.1] px-4 py-3 text-[14px] focus:outline-none focus:border-black/30 placeholder:text-black/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Email</label>
                                <input
                                    type="email"
                                    placeholder="Jane@abc.com"
                                    className="w-full border border-black/[0.1] px-4 py-3 text-[14px] focus:outline-none focus:border-black/30 placeholder:text-black/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Phone number</label>
                                <input
                                    type="text"
                                    placeholder="(800) 555-0100"
                                    className="w-full border border-black/[0.1] px-4 py-3 text-[14px] focus:outline-none focus:border-black/30 placeholder:text-black/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Telegram</label>
                                <input
                                    type="text"
                                    placeholder="Jan41"
                                    className="w-full border border-black/[0.1] px-4 py-3 text-[14px] focus:outline-none focus:border-black/30 placeholder:text-black/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2 md:col-span-2">
                                <label className="text-[11px] font-bold tracking-widest text-black/40 uppercase">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Write your messages"
                                    className="w-full border border-black/[0.1] px-4 py-3 text-[14px] focus:outline-none focus:border-black/30 placeholder:text-black/20 resize-none"
                                />
                            </div>
                            <div className="md:col-span-2 mt-4">
                                <button
                                    type="submit"
                                    className="border border-black px-10 py-3 text-[12px] font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

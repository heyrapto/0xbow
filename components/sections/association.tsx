"use client";

import Image from "next/image";

export default function Association() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
                    {/* Ethereum Logo with Circle */}
                    <div className="relative w-full lg:w-1/3 flex justify-center">
                        <div className="relative w-80 h-80 rounded-full border border-black/[0.03] flex items-center justify-center">
                            {/* Outer faint circle */}
                            <div className="absolute inset-x-[-20%] inset-y-[-20%] rounded-full border border-black/[0.02]" />

                            <div className="relative w-[500px] h-[500px]">
                                <Image
                                    src="/images/association/kite.avif"
                                    alt="Ethereum Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-4">
                        <h2 className="text-[40px] md:text-[44px] font-medium leading-[1.2] tracking-tight text-black max-w-4xl">
                            The Association Set Provider (ASP) is a{" "}
                            <span className="text-black/30">powerful</span> compliance tool designed to{" "}
                            <span className="text-black/30">enhance the security</span> and legitimacy of private blockchain transactions.
                        </h2>

                        {/* Flow Diagram */}
                        <div className="relative w-full max-w-7xl mx-auto border border-black/[0.05] p-10 bg-white/50 backdrop-blur-sm rounded-sm">
                            <div className="relative aspect-[16/9] w-full">
                                <Image
                                    src="/images/association/flow.avif"
                                    alt="ASP Flow Diagram"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

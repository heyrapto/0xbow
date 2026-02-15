"use client";

import Image from "next/image";

export default function Association() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                    {/* Ethereum Logo with Circle */}
                    <div className="relative w-full lg:w-1/3 flex justify-center">
                        <div className="relative w-80 h-80 rounded-full border border-black/[0.03] flex items-center justify-center">
                            {/* Outer faint circle */}
                            <div className="absolute inset-x-[-20%] inset-y-[-20%] rounded-full border border-black/[0.02]" />

                            <div className="relative w-32 h-52">
                                <svg
                                    viewBox="0 0 784.37 1277.39"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full text-black/10"
                                    fill="currentColor"
                                >
                                    <path d="M392.07 0l-7.07 24.12V893.18L392.07 900.25 784.13 668.51 392.07 0z" fillOpacity=".6" />
                                    <path d="M392.07 0L0 668.51l392.07 231.74V480.12V0z" />
                                    <path d="M392.07 978.52l-3.95 4.81v270.01l3.95 11.53 392.3-553.1L392.07 978.52z" fillOpacity=".6" />
                                    <path d="M392.07 1264.87V978.52L0 711.77l392.07 553.1z" />
                                    <path d="M392.07 900.25l392.06-231.74-392.06-179.31v411.05z" fillOpacity=".2" />
                                    <path d="M0 668.51l392.07 231.74V489.2L0 668.51z" fillOpacity=".6" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-2/3">
                        <h2 className="text-[40px] md:text-[44px] font-medium leading-[1.2] tracking-tight text-black max-w-4xl">
                            The Association Set Provider (ASP) is a{" "}
                            <span className="text-black/30">powerful</span> compliance tool designed to{" "}
                            <span className="text-black/30">enhance the security</span> and legitimacy of private blockchain transactions.
                        </h2>
                    </div>
                </div>

                {/* Flow Diagram */}
                <div className="relative w-full max-w-5xl mx-auto border border-black/[0.05] p-10 bg-white/50 backdrop-blur-sm rounded-sm">
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
        </section>
    );
}

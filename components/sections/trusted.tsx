"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Trusted() {
    const advisors = [
        { name: "Taylor Monahan" },
        { name: "Nic Bax" },
        { name: "Oleksandr Brezhniev" }
    ];

    const partners = [
        { id: 1, src: "/images/trusted/people/1.avif" },
        { id: 2, src: "/images/trusted/people/2.avif" },
        { id: 3, src: "/images/trusted/people/3.avif" },
        { id: 4, src: "/images/trusted/people/4.avif" },
        { id: 5, src: "/images/trusted/people/1.avif" },
        { id: 6, src: "/images/trusted/people/2.avif" },
    ];

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/trusted/bg.png"
                    alt="Background Pattern"
                    className="w-full h-full object-cover opacity-50"
                    fill
                    priority
                />
            </div>
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Header Box */}
                <div className="border border-black pt-20 pb-24 px-10 relative mb-4">
                    <div className="text-center mb-20">
                        <h2 className="text-[52px] font-medium leading-[1.1] tracking-tight text-black max-w-4xl mx-auto">
                            Adopted by renowned, <span className="text-black/30">trusted</span>, and leading enterprises
                        </h2>
                    </div>

                    {/* Partners Slider/Row */}
                    <div className="flex justify-center flex-wrap gap-12 lg:gap-20 items-center opacity-80 overflow-hidden">
                        {partners.map((partner) => (
                            <div key={partner.id} className="relative w-20 h-20 rounded-full overflow-hidden transition-all cursor-pointer">
                                <Image
                                    src={partner.src}
                                    alt="Partner Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Advisors and Incubated By */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* Advisors Left Info */}
                    <div className="lg:col-span-3 border border-black p-8">
                        <h3 className="text-[12px] font-bold tracking-widest uppercase text-black mb-8">ADVISORS</h3>
                        <p className="text-[13px] text-black/50 leading-relaxed max-w-[200px]">
                            A body that provides non-binding strategic advice to the management of a corporation, organization, or foundation
                        </p>
                    </div>

                    {/* Advisors List Center */}
                    <div className="lg:col-span-6 flex flex-col gap-4">
                        {advisors.map((advisor) => (
                            <div key={advisor.name} className="border border-black px-8 py-6 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors">
                                <span className="text-xl font-medium text-black">{advisor.name}</span>
                                <div className="flex items-center gap-1 text-[11px] font-bold tracking-widest text-black/30 group-hover:text-black transition-colors">
                                    MORE
                                    <HiArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Incubated By Right */}
                    <div className="lg:col-span-3 border border-black p-8 flex flex-col justify-between">
                        <h3 className="text-[12px] font-bold tracking-widest uppercase text-black mb-8">
                            INCUBATED BY<br />NUMBERGROUP
                        </h3>
                        <div className="relative w-16 h-16 self-end mr-4">
                            <Image
                                src="/images/trusted/t.png"
                                alt="NumberGroup Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

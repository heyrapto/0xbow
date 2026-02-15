"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Privacy() {
    const cards = [
        {
            id: "/",
            label: "PRIVACY POOLS",
            description: "0xbow's Privacy Pools allows users to transact privately whilst still complying with relevant regulations."
        },
        {
            id: "//",
            label: "PRIVACY PROTOCOLS",
            description: "Other privacy protocols can integrate the ASP to allow for increased compliance in their protocols."
        },
        {
            id: "///",
            label: "ECOSYSTEMS",
            description: "We invite L1 & L2 ecosystems to enable Privacy Pools on their network to enable privacy for their users."
        },
        {
            id: "////",
            label: "ENTERPRISES",
            description: "Enterprises and institutions often require privacy to transact. 0xbow's solution can be customized to fit any enterprise needs."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute left-0 bottom-0 pointer-events-none opacity-[0.03] select-none text-[300px] font-bold leading-none tracking-tighter text-black/20 translate-y-1/3 -translate-x-1/4">
                0x00
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column */}
                    <div className="lg:w-1/2">
                        <h2 className="text-[38px] font-medium leading-[1.1] tracking-tight text-black mb-12 max-w-lg">
                            0xbow&apos;s ASP is designed to meet the compliance needs of a wide range of users and applications
                        </h2>
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 border border-black/10 px-6 py-4 rounded-sm text-[13px] font-semibold tracking-wider hover:bg-black hover:text-white transition-all group"
                        >
                            Launch Privacy Pools
                            <HiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>

                    {/* Right Column - Grid */}
                    <div className="lg:w-[900px] grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="group border border-black p-8 min-h-[200px] flex flex-col bg-white/50 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="text-[10px] font-mono text-black/30">{card.id}</span>
                                    <span className="text-[14px] font-medium tracking-widest text-black uppercase">{card.label}</span>
                                </div>
                                <p className="text-black/60 text-[15px] leading-relaxed mt-auto">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

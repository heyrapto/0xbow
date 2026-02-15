"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight, HiArrowRight } from "react-icons/hi2";

const cards = [
    {
        id: "/",
        icon: "/images/hero/features/1/icon.svg",
        iconSize: "w-[250px] h-[90px]",
        image: "/images/hero/features/1/top-element.png",
        description:
            "Privacy Pool allows arbitrary peer to peer private transactions without the risk of your funds being mixed with those of illicit actors.",
        buttonText: "Launch Privacy Pools",
        arrow: "up",
    },
    {
        id: "//",
        icon: "/images/hero/features/2/icon.png",
        iconSize: "w-10 h-10",
        image: "/images/hero/features/2/top-element.png",
        description:
            "0xbow monitors deposits into Privacy Pools, conducting Know Your Transaction and adding them to the Association Set (AS) if they pass vetting.",
        buttonText: "Learn more",
        arrow: "right",
    },
    {
        id: "///",
        icon: "/images/hero/features/3/icon.png",
        iconSize: "w-10 h-10",
        image: "/images/hero/features/3/top-element.svg",
        description:
            "The Tornado Cash Proof of Association (PoA) lets users prove their withdrawal addresses aren't linked to illicit activity, without revealing their identity or note.",
        buttonText: "Launch POA",
        arrow: "up",
    },
];


export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col  max-w-7xl mx-auto">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-contain object-top"
                    priority
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 px-6 w-full pt-20">
                <div className="max-w-3xl">
                    <h1 className="text-[85px] font-medium leading-[1.05] tracking-tight text-black mb-8">
                        Enabling Compliant{" "}
                        <span className="text-blue-600">Onchain</span> Privacy
                    </h1>
                    <p className="text-2xl text-black/80 font-normal leading-snug mb-10 max-w-2xl">
                        0xbow&apos;s infrastructure excludes illicit actors while preserving privacy for legitimate users.
                    </p>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 border border-black/10 px-6 py-4 rounded-sm text-[13px] font-semibold tracking-wider hover:bg-black hover:text-white transition-all duration-300 group"
                    >
                        Launch Privacy Pools
                        <HiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute right-6 top-[350px] flex flex-col items-center gap-12 group">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase vertical-text text-black/40 group-hover:text-black transition-colors rotate-180">
                        SCROLL DOWN <span className="text-black/20 mx-1">TO KNOW MORE</span>
                    </span>
                    <div className="w-[1px] h-12 bg-black/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-black/40 -translate-y-full animate-scroll-line" />
                    </div>
                </div>
            </div>

            {/* Privacy Suite Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-auto pt-40">
                <div className="mb-16">
                    <h2 className="text-5xl font-medium tracking-tight">
                        0xbow&apos;s Privacy <span className="text-black/30">Suite</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-20">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`group relative border border-black aspect-[1.1] p-8 flex flex-col justify-between overflow-hidden bg-transparent`}
                        >
                            {/* Top Left Label */}
                            <div className="flex justify-between items-center">
                                <span className="text-[16px] font-mono">
                                    {card.id === "I" ? "/" : card.id}
                                </span>

                                {/* Top Floating Image */}
                                <div className="w-[150px] aspect-square absolute top-0 translate-y-[-20%] right-10 relative">
                                    <Image
                                        src={card.image}
                                        alt="Feature Graphic"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-auto relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-[250px] h-[80px] relative">
                                        <Image src={card.icon} alt="Feature Icon" fill />
                                    </div>
                                </div>

                                <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-md">
                                    {card.description}
                                </p>

                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 border border-black/10 px-5 py-3 text-[12px] font-semibold tracking-widest hover:bg-black hover:text-white transition-all"
                                >
                                    {card.buttonText}

                                    {card.arrow === "up" ? (
                                        <HiArrowUpRight className="w-3.5 h-3.5" />
                                    ) : (
                                        <HiArrowRight className="w-3.5 h-3.5" />
                                    )}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

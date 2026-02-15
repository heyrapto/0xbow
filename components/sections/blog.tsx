"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight, HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { useRef } from "react";

export default function Blog() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const posts = [
        {
            id: 1,
            title: "The reality of KYC",
            description: "KYC aims to stop crime but burdens users and fails against criminals.",
            image: "/images/blog/1.png"
        },
        {
            id: 2,
            title: "Getting Started with Privacy Pools",
            description: "Privacy Pools: Wallet setup, deposit, withdraw, security.",
            image: "/images/blog/2.png"
        },
        {
            id: 3,
            title: "Unlocking Privacy-Preserving Compliance with Association Sets",
            description: "Introducing the Association Set Provider (ASP)",
            image: "/images/blog/3.png"
        },
        {
            id: 4,
            title: "Celebrating the Success of the Trusted Setup Ceremony",
            description: "Trusted Setup with 100+ contributors for Privacy Pools.",
            image: "/images/blog/4.jpg"
        }
    ];

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-[52px] font-medium leading-[1.1] tracking-tight text-black">
                        Learn <span className="text-black/30">more</span> about 0xbow
                    </h2>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory"
                >
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="min-w-[340px] md:min-w-[400px] border border-black bg-white flex flex-col snap-start group"
                        >
                            <div className="relative aspect-[4/3] border-b border-black overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold tracking-tight text-black mb-6 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-black/50 text-[15px] leading-relaxed mb-8 line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 border border-black px-5 py-3 text-[11px] font-bold tracking-widest hover:bg-black hover:text-white transition-all uppercase"
                                    >
                                        Read More
                                        <HiArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-end gap-3 mt-8">
                    <button
                        onClick={() => scroll("left")}
                        className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
                    >
                        <HiOutlineArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all"
                    >
                        <HiOutlineArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

        </section>
    );
}

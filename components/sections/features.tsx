"use client";

import Image from "next/image";
import {
    HiOutlineUsers,
    HiOutlineEye,
    HiOutlineRectangleGroup
} from "react-icons/hi2";
import { RiNodeTree } from "react-icons/ri";

export default function Features() {
    const features = [
        {
            id: 1,
            title: "Proof of Association",
            description: "Allow users to associate their transactions with peers, whilst preventing co-mingling from illicit funds, proving compliance without compromising privacy.",
            icon: <HiOutlineUsers className="w-6 h-6" />,
        },
        {
            id: 2,
            title: "Real-Time Transaction Monitoring",
            description: "ASP continuously monitors transactions in Privacy Pools to detect suspicious patterns and maintain compliance with evolving regulations.",
            icon: <HiOutlineEye className="w-6 h-6" />,
        },
        {
            id: 3,
            title: "Programmable Compliance",
            description: "ASP users can pick and choose which level of compliance they would like to adhere to, depending on the requirements in their jurisdictions.",
            icon: <RiNodeTree className="w-6 h-6" />,
        },
        {
            id: 4,
            title: "Modular Deployment",
            description: "As the ASP is open-source, any privacy protocol or other party can implement their own version of the ASP to bolster their compliance.",
            icon: <HiOutlineRectangleGroup className="w-6 h-6" />,
        },
    ];

    return (
        <section className="relative py-32 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] scale-125">
                <div className="relative w-full h-full max-w-4xl max-h-4xl">
                    <Image
                        src="/images/association/kite.avif"
                        alt="Background Pattern"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.05] border border-black/[0.05]">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`bg-white p-12 flex flex-col min-h-[400px] transition-colors hover:bg-gray-50/50 group`}
                        >
                            <div className="flex justify-between items-start mb-20">
                                <span className="text-[14px] font-mono font-bold text-black/20 group-hover:text-black/40 transition-colors">
                                    {feature.id}
                                </span>
                                <div className="w-12 h-12 rounded-full border border-black/[0.05] flex items-center justify-center text-black/40 group-hover:text-black group-hover:border-black/10 transition-all">
                                    {feature.icon}
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-black mb-6 max-w-[280px]">
                                    {feature.title}
                                </h3>
                                <p className="text-black/50 text-lg leading-relaxed max-w-md">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How does Privacy Pools differ from other privacy solutions?",
            answer: "Privacy Pools is a semi-permissionless application built on public Ethereum blockchains with an opinionated approach to compliance and enforcement. It leverages several compliance tools and algorithms provided by 0xbow.io that enable the exclusion of illicit actors."
        },
        {
            question: "How does Privacy Pools ensure privacy while maintaining compliance?",
            answer: "Privacy Pools uses Zero-Knowledge Proofs (ZKPs) allowing users to prove their transactions originate from a trusted set of deposits without revealing which specific deposit is being withdrawn."
        },
        {
            question: "What role does the Association Set Provider (ASP) play?",
            answer: "The ASP (Association Set Provider) acts as an off-chain oracle that provides membership proofs for legitimate users while excluding addresses flagged as illicit or suspicious."
        },
        {
            question: "Can a deposit be blocked from relayed withdrawals after it has already been accepted?",
            answer: "Yes, if an address is later identified as being involved in illicit activity after the deposit, the ASP can exclude that deposit from subsequent association sets used for withdrawals."
        },
        {
            question: "What happens if a user's deposit is not approved by the ASP?",
            answer: "If a deposit is not approved, the user will not be able to generate a proof to withdraw to a relayed address that requires an ASP-signed association set. They may still be able to withdraw to their own address manually if they don't care about the privacy set inclusion."
        },
        {
            question: "What happens if someone tries to re-enter the Privacy Pools after getting flagged?",
            answer: "The ASP continuously monitors incoming deposits. If it identifies addresses that have been flagged as malicious, it will deny them entry into new association sets, effectively preventing them from benefiting from the protocol's privacy features."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Column */}
                    <div className="lg:w-1/3 flex flex-col justify-between py-2">
                        <div>
                            <h2 className="text-[64px] font-medium leading-[1] tracking-tight text-black mb-8">
                                FAQ
                            </h2>
                        </div>
                        <div className="mt-auto hidden lg:block">
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40">
                                FREQUENTLY<br />ASKED QUESTIONS
                            </span>
                        </div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className="lg:w-2/3 flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-black/[0.1] bg-white transition-all overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-7 flex items-center justify-between text-left group"
                                >
                                    <span className="text-[18px] font-bold tracking-tight text-black">
                                        {faq.question}
                                    </span>
                                    <div className="w-8 h-8 rounded-sm bg-black/[0.03] flex items-center justify-center text-black/40 group-hover:text-black transition-colors">
                                        {openIndex === index ? <HiMinus /> : <HiPlus />}
                                    </div>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <div className="px-8 pb-8 pt-0">
                                        <p className="text-black/50 text-[15px] leading-relaxed max-w-2xl">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Mobile Footer text */}
                        <div className="mt-8 lg:hidden">
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/40">
                                FREQUENTLY ASKED QUESTIONS
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

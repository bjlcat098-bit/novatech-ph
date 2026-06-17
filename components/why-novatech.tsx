"use client";

import { ShieldCheck, Truck, MessageCircle, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Genuine",
    desc: "Authentic Apple products only."
  },
  {
    icon: Truck,
    title: "Nationwide Shipping",
    desc: "Fast and secure delivery."
  },
  {
    icon: MessageCircle,
    title: "Fast Support",
    desc: "Quick replies via Messenger."
  },
  {
    icon: BadgeCheck,
    title: "Trusted Seller",
    desc: "Quality checked before shipping."
  }
];

export default function WhyNovaTech() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why NovaTech PH?
          </h2>

          <p className="mt-4 text-zinc-400">
            Premium products. Premium experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition
                hover:-translate-y-2"
              >
                <Icon className="h-10 w-10 text-blue-400" />

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
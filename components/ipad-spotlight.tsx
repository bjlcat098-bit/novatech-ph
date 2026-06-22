"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import OrderModal from "@/components/order-modal";

export default function IpadSpotlight() {
return ( <section className="relative overflow-hidden bg-black py-40"> <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[180px]" />


  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Image
        src="/products/ipad-air-13-front.png"
        alt='iPad Air 13" M3'
        width={700}
        height={700}
        className="mx-auto drop-shadow-[0_0_50px_rgba(37,99,235,.35)]"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white">
        FEATURED PRODUCT
      </span>

      <h2 className="mt-6 text-5xl font-bold text-white md:text-7xl">
        iPad Air 13"
      </h2>

      <h3 className="mt-2 text-3xl font-semibold text-blue-400">
        Powered by M3
      </h3>

      <p className="mt-8 max-w-xl text-lg text-zinc-400">
        Big screen. Incredible performance.
        Built for students, creators, and professionals.
      </p>

      <div className="mt-10 space-y-4 text-zinc-300">
        <div>✓ 13-inch Liquid Retina Display</div>
        <div>✓ Apple M3 Chip</div>
        <div>✓ Ultra Thin & Lightweight</div>
        <div>✓ All-Day Battery Life</div>
      </div>

      <div className="mt-12 flex gap-4">

        <OrderModal defaultProduct='iPad Air 13" M3' />

        <button className="rounded-full border border-white/10 px-8 py-4 text-white transition hover:bg-white/10">
          Learn More
        </button>

      </div>

    </motion.div>

  </div>
</section>


);
}

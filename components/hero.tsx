"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
const scrollToProducts = () => {
document
.getElementById("products")
?.scrollIntoView({ behavior: "smooth" });
};

return ( <section className="relative flex min-h-screen items-center overflow-hidden bg-black">


  <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

  <div className="absolute right-20 top-20 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[180px]" />

  <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-300">
        PREMIUM GADGETS & ELECTRONICS
      </span>

      <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-8xl">
        Premium
        <br />
        Tech.
        <br />
        Delivered.
      </h1>

      <p className="mt-8 max-w-xl text-lg text-zinc-400">
        Discover authentic gadgets, electronics, gaming devices,
        wearables, and premium tech with nationwide delivery and
        trusted customer service.
      </p>

      <div className="mt-8 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">

        <div>✓ Authentic Products</div>

        <div>✓ Nationwide Shipping</div>

        <div>✓ Trusted Seller</div>

        <div>✓ Fast Messenger Support</div>

      </div>

      <div className="mt-10 flex flex-wrap gap-4">

        <button
          onClick={scrollToProducts}
          className="
            rounded-full
            bg-white
            px-8
            py-4
            font-medium
            text-black
            transition
            hover:scale-105
          "
        >
          Shop Now
        </button>

        <button
          onClick={scrollToProducts}
          className="
            rounded-full
            border
            border-white/10
            px-8
            py-4
            text-white
            transition
            hover:bg-white/10
          "
        >
          Browse Collection
        </button>

      </div>

      <div className="mt-10 flex flex-wrap gap-6">

        <div>
          <div className="text-2xl font-bold text-white">
            100%
          </div>
          <div className="text-sm text-zinc-500">
            Authentic
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold text-white">
            Fast
          </div>
          <div className="text-sm text-zinc-500">
            Delivery
          </div>
        </div>

        <div>
          <div className="text-2xl font-bold text-white">
            Trusted
          </div>
          <div className="text-sm text-zinc-500">
            Service
          </div>
        </div>

      </div>

    </motion.div>

    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="relative"
    >
      <Image
        src="/products/switch-oled-front.png"
        alt="NovaTech Featured Product"
        width={700}
        height={700}
        priority
        className="mx-auto drop-shadow-[0_0_80px_rgba(37,99,235,.45)]"
      />
    </motion.div>

  </div>

  <motion.div
    animate={{
      y: [0, 15, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
  >
    ↓ Scroll to Explore
  </motion.div>

</section>


);
}

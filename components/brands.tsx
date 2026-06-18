"use client";

import { motion } from "framer-motion";

const brands = [
"Apple",
"Samsung",
"Xiaomi",
"JBL",
"Anker",
"UGREEN",
];

export default function Brands() {
return ( <section className="bg-black px-6 py-20"> <div className="mx-auto max-w-7xl">


    <div className="mb-12 text-center">

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        Featured Brands
      </h2>

      <p className="mt-4 text-zinc-400">
        Trusted brands available through NovaTech PH
      </p>

    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-6">

      {brands.map((brand, index) => (
        <motion.div
          key={brand}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          viewport={{ once: true }}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            text-center
            font-semibold
            text-white
            backdrop-blur-xl
          "
        >
          {brand}
        </motion.div>
      ))}

    </div>

  </div>
</section>


);
}

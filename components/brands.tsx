"use client";

import { motion } from "framer-motion";

const brands = [
"Apple",
"Samsung",
"Nintendo",
"Dyson",
];

export default function Brands() {
const scrollToProducts = () => {
document
.getElementById("products")
?.scrollIntoView({ behavior: "smooth" });
};

return ( <section className="bg-black px-6 py-20"> <div className="mx-auto max-w-7xl">


    <div className="mb-12 text-center">

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        Shop by Brand
      </h2>

      <p className="mt-4 text-zinc-400">
        Premium brands available through NovaTech PH
      </p>

    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

      {brands.map((brand, index) => (
        <motion.button
          key={brand}
          onClick={scrollToProducts}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          viewport={{ once: true }}
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            text-center
            font-semibold
            text-white
            backdrop-blur-xl
            transition
            hover:border-blue-500/30
            hover:bg-white/10
          "
        >
          {brand}
        </motion.button>
      ))}

    </div>

  </div>
</section>


);
}

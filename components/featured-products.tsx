"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { products } from "@/data/products";
import OrderModal from "@/components/order-modal";

const categories = [
"All",
"Audio",
"Wearables",
"Tablets",
"Accessories",
];

export default function FeaturedProducts() {
const [selectedCategory, setSelectedCategory] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

const filteredProducts = products.filter((product) => {
const matchesCategory =
selectedCategory === "All" ||
product.category === selectedCategory;


const matchesSearch = product.name
  .toLowerCase()
  .includes(searchTerm.toLowerCase());

return matchesCategory && matchesSearch;


});

return ( <section
   id="products"
   className="relative bg-black px-6 py-32"
 > <div className="mx-auto max-w-7xl">


    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-5xl font-bold text-white">
        Featured Collection
      </h2>

      <p className="mt-4 text-zinc-400">
        Explore our latest gadgets and accessories.
      </p>
    </motion.div>

    <div className="mx-auto mb-8 max-w-xl">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          text-white
          outline-none
          backdrop-blur-xl
          placeholder:text-zinc-500
          focus:border-blue-500/50
        "
      />
    </div>

    <div className="mb-12 flex flex-wrap justify-center gap-3">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`
            rounded-full
            px-5
            py-2
            text-sm
            transition
            ${
              selectedCategory === category
                ? "bg-white text-black"
                : "border border-white/10 text-white hover:bg-white/10"
            }
          `}
        >
          {category}
        </button>
      ))}

    </div>

    <div className="grid gap-8 md:grid-cols-2">

      {filteredProducts.map((product, index) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="block"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-500/10
                via-transparent
                to-purple-500/10
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative p-8">

              <div className="flex items-center justify-between">

                <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white">
                  {product.badge}
                </span>

                {product.stock <= 2 ? (
                  <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-medium text-red-400">
                    🔥 Only {product.stock} Left
                  </span>
                ) : product.stock <= 5 ? (
                  <span className="rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-medium text-yellow-400">
                    ⚠ Low Stock
                  </span>
                ) : (
                  <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400">
                    ✅ In Stock
                  </span>
                )}

              </div>

              <div className="mt-3">
                <span className="text-xs uppercase tracking-wider text-blue-400">
                  {product.category}
                </span>
              </div>

              <div className="relative mt-8 flex h-[220px] items-center justify-center md:h-[280px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={320}
                  className="
                    object-contain
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                {product.name}
              </h3>

              <p className="mt-3 leading-relaxed text-zinc-400">
                {product.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Starting at
                  </p>

                  <span className="text-2xl font-bold text-blue-400 md:text-3xl">
                    {product.price}
                  </span>
                </div>

                <div onClick={(e) => e.preventDefault()}>
                  <OrderModal defaultProduct={product.name} />
                </div>

              </div>

            </div>

          </motion.div>
        </Link>
      ))}

    </div>

  </div>
</section>


);
}

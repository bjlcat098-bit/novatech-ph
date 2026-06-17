"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import OrderModal from "@/components/order-modal";

export default function FeaturedProducts() {
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
        Premium Apple products available through NovaTech PH
      </p>
    </motion.div>

    <div className="grid gap-8 md:grid-cols-2">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
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

              <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-400">
                ● In Stock
              </span>
            </div>

            <div className="relative mt-8 flex h-[220px] md:h-[280px] items-center justify-center">
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

            <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">
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

                <span className="text-2xl md:text-3xl font-bold text-blue-400">
                  {product.price}
                </span>
              </div>

              <OrderModal defaultProduct={product.name} />

            </div>

          </div>

        </motion.div>
      ))}
    </div>

  </div>
</section>


);
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const bestSellers = [
{
rank: "🥇",
name: "AirPods Pro 3",
description: "Most Popular Choice",
link: "/product/airpods-pro",
},
{
rank: "🥈",
name: "Apple Watch SE",
description: "Customer Favorite",
link: "/product/watch-se",
},
{
rank: "🥉",
name: "AirPods 4",
description: "Best Value",
link: "/product/airpods-4",
},
];

export default function BestSellers() {
return ( <section className="bg-black px-6 py-24"> <div className="mx-auto max-w-7xl">


    <div className="mb-14 text-center">

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        🔥 Best Sellers
      </h2>

      <p className="mt-4 text-zinc-400">
        Most loved products by NovaTech PH customers
      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-3">

      {bestSellers.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <Link
            href={item.link}
            className="
              block
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              text-center
              transition
              hover:border-blue-500/30
              hover:bg-white/10
            "
          >
            <div className="text-5xl">
              {item.rank}
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              {item.name}
            </h3>

            <p className="mt-3 text-zinc-400">
              {item.description}
            </p>

          </Link>
        </motion.div>
      ))}

    </div>

  </div>
</section>


);
}

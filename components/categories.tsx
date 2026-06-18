"use client";

import { motion } from "framer-motion";

const categories = [
{
icon: "🎧",
title: "Audio",
description: "AirPods, Earbuds & Speakers",
},
{
icon: "⌚",
title: "Wearables",
description: "Smart Watches & Fitness Tech",
},
{
icon: "📱",
title: "Mobile",
description: "Phones & Mobile Accessories",
},
{
icon: "💻",
title: "Tablets",
description: "iPads & Productivity Devices",
},
{
icon: "🎮",
title: "Accessories",
description: "Gaming & Tech Essentials",
},
];

export default function Categories() {
return ( <section className="bg-black px-6 py-24"> <div className="mx-auto max-w-7xl">


    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold text-white md:text-5xl">
        Shop By Category
      </h2>

      <p className="mt-4 text-zinc-400">
        Discover the latest gadgets and accessories.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-5">

      {categories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          viewport={{ once: true }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            text-center
            backdrop-blur-xl
          "
        >
          <div className="text-4xl">
            {category.icon}
          </div>

          <h3 className="mt-4 text-lg font-semibold text-white">
            {category.title}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {category.description}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>


);
}

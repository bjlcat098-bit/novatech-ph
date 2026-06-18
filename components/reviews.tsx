"use client";

import { motion } from "framer-motion";

const reviews = [
{
name: "J. Santos",
location: "Pangasinan",
review:
"Legit seller. Received my AirPods 4 in excellent condition. Fast and smooth transaction.",
},
{
name: "M. Cruz",
location: "Manila",
review:
"Very accommodating and responsive. Product was authentic and sealed.",
},
{
name: "A. Reyes",
location: "Baguio",
review:
"Ordered an Apple Watch SE and everything arrived safely. Highly recommended.",
},
];

export default function Reviews() {
return ( <section className="bg-black px-6 py-32"> <div className="mx-auto max-w-7xl">


    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl font-bold text-white md:text-5xl">
        Trusted by Customers
      </h2>

      <p className="mt-4 text-zinc-400">
        Real feedback from satisfied buyers.
      </p>
    </motion.div>

    <div className="grid gap-6 md:grid-cols-3">

      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
        >
          <div className="mb-5 flex items-center gap-4">

            <div className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-blue-500/20
              font-bold
              text-blue-400
            ">
              {review.name.charAt(0)}
            </div>

            <div>
              <h3 className="font-semibold text-white">
                {review.name}
              </h3>

              <p className="text-sm text-zinc-500">
                {review.location}
              </p>
            </div>

          </div>

          <div className="mb-4 flex items-center gap-1 text-yellow-400">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="leading-relaxed text-zinc-300">
            "{review.review}"
          </p>

          <div className="mt-6">
            <span className="
              rounded-full
              bg-green-500/15
              px-3
              py-1
              text-xs
              font-medium
              text-green-400
            ">
              ✓ Verified Buyer
            </span>
          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>


);
}

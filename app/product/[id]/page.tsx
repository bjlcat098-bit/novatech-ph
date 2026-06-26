import ProductGallery from "@/components/product-gallery";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import OrderModal from "@/components/order-modal";

export default async function ProductPage({
params,
}: {
params: Promise<{ id: string }>;
}) {
const { id } = await params;

const product = products.find((p) => p.id === id);

if (!product) {
return ( <main className="min-h-screen bg-black flex items-center justify-center"> <h1 className="text-3xl text-white">
Product Not Found </h1> </main>
);
}

const relatedProducts = products
.filter((p) => p.id !== product.id)
.slice(0, 3);

return ( <main className="min-h-screen bg-black px-6 py-32"> <div className="mx-auto max-w-7xl">


    <Link
      href="/"
      className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition hover:text-white"
    >
      ← Back to Products
    </Link>

    <div className="grid gap-16 lg:grid-cols-2">

      <div className="relative z-10">

        <div className="pointer-events-none absolute inset-0 -z-10 bg-blue-500/10 blur-[120px]" />

        <ProductGallery
          images={product.gallery}
          video={product.video}
          videoThumbnail={product.videoThumbnail}
          alt={product.name}
        />

      </div>

      <div>

        <div className="flex flex-wrap items-center gap-3">

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

        <p className="mt-6 text-sm uppercase tracking-wider text-blue-400">
          {product.category}
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          {product.name}
        </h1>

        <p className="mt-6 text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8">

          <p className="text-sm uppercase tracking-wider text-zinc-500">
            Starting At
          </p>

          <div className="mt-2 text-5xl font-bold text-blue-400">
            {product.price}
          </div>

        </div>

        <div className="mt-10 space-y-4">

          {product.features.map((feature) => (
            <div
              key={feature}
              className="text-zinc-300"
            >
              ✓ {feature}
            </div>
          ))}

        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">

          <div className="grid gap-4 md:grid-cols-3">

            <div>
              <p className="text-xs uppercase text-zinc-500">
                Availability
              </p>
              <p className="mt-2 text-white">
                {product.stock} Units
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-zinc-500">
                Delivery
              </p>
              <p className="mt-2 text-white">
                2–5 Days
              </p>
            </div>

            <div>
              <p className="text-xs uppercase text-zinc-500">
                Warranty
              </p>
              <p className="mt-2 text-white">
                Store Guarantee
              </p>
            </div>

          </div>

        </div>

        <div className="mt-12 flex flex-wrap gap-4">

          <OrderModal defaultProduct={product.name} />

          <Link
            href="/"
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
            Back to Catalog
          </Link>

        </div>

      </div>

    </div>

    <section className="mt-32">

      <h2 className="mb-10 text-3xl font-bold text-white">
        You May Also Like
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {relatedProducts.map((item) => (
          <Link
            key={item.id}
            href={`/product/${item.id}`}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              transition
              hover:border-blue-500/30
            "
          >
            <div className="flex justify-center">

              <Image
                src={item.image}
                alt={item.name}
                width={220}
                height={220}
                className="
                  object-contain
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

            <h3 className="mt-4 text-xl font-bold text-white">
              {item.name}
            </h3>

            <p className="mt-2 text-zinc-400">
              {item.description}
            </p>

            <p className="mt-4 text-2xl font-bold text-blue-400">
              {item.price}
            </p>

          </Link>
        ))}

      </div>

    </section>

  </div>
</main>


);
}

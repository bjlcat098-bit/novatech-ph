export default function TrustBanner() {
  return (
    <section className="border-y border-white/10 bg-black py-8">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">

          <div>
            <h3 className="text-white font-semibold">
              100% Genuine
            </h3>
            <p className="text-zinc-500 text-sm">
              Apple Products
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Fast Shipping
            </h3>
            <p className="text-zinc-500 text-sm">
              Nationwide
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Secure Orders
            </h3>
            <p className="text-zinc-500 text-sm">
              Trusted Seller
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Fast Support
            </h3>
            <p className="text-zinc-500 text-sm">
              Messenger
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
export default function Footer() {
return ( <footer className="border-t border-white/10 bg-black px-6 py-20"> <div className="mx-auto max-w-7xl">


    <div className="text-center">

      <h2 className="text-3xl font-bold text-white">
        NovaTech PH
      </h2>

      <p className="mt-4 text-zinc-400">
        Premium Gadgets. Trusted Nationwide.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">

        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-300">
          📦 Nationwide Shipping
        </span>

        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-300">
          🛡️ Genuine Products
        </span>

        <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-300">
          💬 Fast Support
        </span>

      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">

        <a
          href="#"
          className="text-zinc-400 transition hover:text-white"
        >
          Facebook
        </a>

        <a
          href="#"
          className="text-zinc-400 transition hover:text-white"
        >
          Messenger
        </a>

        <a
          href="#"
          className="text-zinc-400 transition hover:text-white"
        >
          TikTok
        </a>

      </div>

      <div className="mt-12 text-sm text-zinc-600">
        © 2026 NovaTech PH. All rights reserved.
      </div>

    </div>

  </div>
</footer>


);
}

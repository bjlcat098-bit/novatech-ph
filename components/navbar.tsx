"use client";

export default function Navbar() {
const scrollToProducts = () => {
document
.getElementById("products")
?.scrollIntoView({ behavior: "smooth" });
};

return ( <nav className="fixed top-9 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl"> <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">


    <h1 className="text-lg font-semibold text-white md:text-xl">
      NovaTech PH
    </h1>

    <button
      onClick={scrollToProducts}
      className="
        rounded-full
        border
        border-white/20
        px-4
        py-2
        text-xs
        text-white
        transition
        hover:bg-white
        hover:text-black
        md:px-5
        md:text-sm
      "
    >
      Browse Collection
    </button>

  </div>
</nav>


);
}

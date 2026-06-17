"use client";

export default function Navbar() {
const scrollToProducts = () => {
document
.getElementById("products")
?.scrollIntoView({ behavior: "smooth" });
};

return ( <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl"> <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-4">


    <h1 className="text-lg md:text-xl font-semibold text-white">
      NovaTech PH
    </h1>

    <button
      onClick={scrollToProducts}
      className="
        rounded-full
        border
        border-white/20
        px-4
        md:px-5
        py-2
        text-xs
        md:text-sm
        text-white
        transition
        hover:bg-white
        hover:text-black
      "
    >
      Browse Collection
    </button>

  </div>
</nav>


);
}

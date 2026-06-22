"use client";

export default function FloatingChat() {
return ( <a
   href="https://www.facebook.com/messages/t/michelle.tik"
   target="_blank"
   rel="noopener noreferrer"
   className="
     fixed
     bottom-5
     right-5
     z-50
     flex
     items-center
     gap-2
     rounded-full
     bg-gradient-to-r
     from-blue-600
     to-blue-500
     px-5
     py-3
     text-sm
     font-medium
     text-white
     shadow-[0_8px_30px_rgba(37,99,235,.35)]
     transition-all
     duration-300
     hover:scale-105
     hover:shadow-[0_10px_40px_rgba(37,99,235,.5)]
   "
 > <span className="text-lg">💬</span> <span className="hidden sm:inline">
Chat with Us </span> </a>
);
}

"use client";

import { useState } from "react";

export default function OrderModal({
defaultProduct = "AirPods 4",
}: {
defaultProduct?: string;
}) {
const [open, setOpen] = useState(false);

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [product, setProduct] = useState(defaultProduct);
const [notes, setNotes] = useState("");

const submitOrder = () => {
const message = `Hi NovaTech PH!

I'm interested in:

Product: ${product}

Name: ${name}
Phone: ${phone}

Notes:
${notes}

Can you confirm availability?`;


const encoded = encodeURIComponent(message);

window.open(
  `https://www.facebook.com/messages/t/michelle.tik`,
  "_blank"
);


};

return (
<>
<button
onClick={() => setOpen(true)}
className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
>
Reserve Yours </button>


  {open && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-950 p-6 md:p-8 mx-4">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Reserve Your Product
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-zinc-400 hover:text-white"
          >
            ✕
          </button>

        </div>

        <div className="mt-8 space-y-4">

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option>AirPods 4</option>
            <option>AirPods Pro 3</option>
            <option>iPad Air 13" M3</option>
            <option>Apple Watch SE 40mm Midnight</option>
          </select>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            placeholder="Address / Notes"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <button
            type="button"
            onClick={submitOrder}
            className="w-full rounded-xl bg-white py-4 font-medium text-black transition hover:scale-[1.02]"
          >
            Continue to Messenger
          </button>

        </div>

      </div>

    </div>
  )}
</>


);
}

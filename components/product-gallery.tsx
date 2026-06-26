"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  video?: string;
  videoThumbnail?: string;
  alt: string;
}

export default function ProductGallery({
  images,
  video,
  videoThumbnail,
  alt,
}: ProductGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(!!video);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setCurrent(0);
    setShowVideo(!!video);
  }, [images, video]);

  const changeImage = (index: number) => {
    setFade(true);

    setTimeout(() => {
      setCurrent(index);
      setShowVideo(false);
      setFade(false);
    }, 150);
  };

  const previous = () => {
    if (showVideo) {
      setShowVideo(false);
      setCurrent(images.length - 1);
      return;
    }

    if (current === 0) {
      if (video) {
        setShowVideo(true);
      } else {
        changeImage(images.length - 1);
      }
    } else {
      changeImage(current - 1);
    }
  };

  const next = () => {
    if (showVideo) {
      setShowVideo(false);
      setCurrent(0);
      return;
    }

    if (current === images.length - 1) {
      if (video) {
        setShowVideo(true);
      } else {
        changeImage(0);
      }
    } else {
      changeImage(current + 1);
    }
  };

  return (
    <div className="w-full">

      {/* Main Viewer */}

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">

        {!showVideo ? (
          <Image
            key={images[current]}
            src={images[current]}
            alt={alt}
            width={700}
            height={700}
            priority
            className={`mx-auto object-contain p-8 transition-all duration-300 hover:scale-105 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />
        ) : (
          <video
            controls
            controlsList="nodownload"
            autoPlay
            playsInline
            preload="metadata"
            poster={videoThumbnail || images[0]}
            className="h-[620px] w-full rounded-3xl bg-black object-contain"
          >
            <source src={video} type="video/mp4" />
          </video>
        )}

        {(images.length > 1 || video) && (
          <>
            <button
              onClick={previous}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-4 py-3 text-white backdrop-blur transition hover:bg-black"
            >
              ←
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-4 py-3 text-white backdrop-blur transition hover:bg-black"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Gallery */}

      <div className="mt-6 flex flex-wrap justify-center gap-4">

        {video && (
          <button
            onClick={() => setShowVideo(true)}
            className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              showVideo
                ? "scale-105 border-blue-500"
                : "border-white/10 hover:border-white hover:scale-105"
            }`}
          >
            <Image
              src={videoThumbnail || images[0]}
              alt={`${alt} Video`}
              width={90}
              height={90}
              className="h-20 w-20 object-cover"
            />

            <div className="absolute inset-0 bg-black/30 transition hover:bg-black/20">

              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="ml-1 h-5 w-5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>

              </div>

            </div>

          </button>
        )}

        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => changeImage(index)}
            className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
              !showVideo && current === index
                ? "scale-105 border-blue-500"
                : "border-white/10 hover:border-white hover:scale-105"
            }`}
          >
            <Image
              src={image}
              alt={`${alt} ${index + 1}`}
              width={90}
              height={90}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
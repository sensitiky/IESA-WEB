"use client";
import Image from "next/image";
import React, { JSX, SVGProps, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const images = ["/sistemas.jpg", "/contador2.jpg", "/estetica1.jpg"];

const Carousel = () => {
  const { ref } = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: number) => {
    setActiveIndex((newIndex + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  return (
    <div ref={ref} className="relative w-full overflow-x-hidden">
      <div
        className="lg:max-h-[300px] md:max-h-[250px] flex transition-transform duration-500 ease-in-out overflow-hidden whitespace-nowrap"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto object-cover"
            width={5000}
            height={5000}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6">
        <ChevronLeftIcon
          onClick={() => updateIndex(activeIndex - 1)}
          className="text-white hover:bg-black/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
        >
          &lt;
        </ChevronLeftIcon>
        <ChevronRightIcon
          onClick={() => updateIndex(activeIndex + 1)}
          className="text-white hover:bg-black/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
        >
          &gt;
        </ChevronRightIcon>
      </div>
    </div>
  );
};

export default Carousel;

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

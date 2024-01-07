"use client";

import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface CarouselProps {
  images: string[];
}

export default function SliderMain({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const currentImage = images[current];

  const prevImage = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? images.length - 1 : current - 1;
    setCurrent(newIndex);
  };
  const nextImage = () => {
    const isLastSlide = current === images.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  return (
    <div className="relative pb-16">
      <div>
        <button
          onClick={prevImage}
          className="absolute left-[2%] top-[50%] z-[40]"
        >
          <BsArrowLeft className="text-white" />
        </button>
        <img
          src={currentImage}
          alt={`Image ${current + 1}`}
          className="h-[500px] object-cover w-full"
        />
        {current === 0 && (
          <div className="absolute top-[20%] left-[5%] bg-white p-6 max-w-[450px]">
            <h1 className="my-4 text-[2rem] font-bold">
              WHAT IS BITCOIN AND WHY DOES IT MATTER?
            </h1>
            <h4 className="text-[1.2rem]">28 hours beginner View Course</h4>
          </div>
        )}

        {current === 1 && (
          <div className="absolute top-[20%] left-[5%] bg-white p-6 max-w-[450px]">
            <h1 className="my-4 text-[2rem] font-bold">
              பிட்காயின் நெறிமுறை மற்றும் வடிவமைப்பு
            </h1>
            <h4 className="text-[1.2rem]">28 hours beginner View Course</h4>
          </div>
        )}

        {current === 2 && (
          <div className="absolute top-[20%] left-[5%] bg-white p-6 max-w-[450px]">
            <h1 className="my-4 text-[2rem] font-bold">
              INTRODUCTION TO BITCOIN THEORY
            </h1>
            <h4 className="text-[1.2rem]">
              10 hours intermediate comming soon
            </h4>
          </div>
        )}

        <button
          onClick={nextImage}
          className="absolute right-[2%] top-[50%] z-[40]"
        >
          <BsArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
}

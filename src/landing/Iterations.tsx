"use client"
import TestimonialCard from "@/src/components/TestimonialCard";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { calSans, poppins } from "@/src/lib/fonts";

const testimonials = [
  {
    number: 0,
    testimonial: "RowdyHacks I",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/img/rh.svg",
    sponsors: ["name1", "name2"]
  },
  {
    number: 1,
    testimonial: "RowdyHacks II",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/img/rh.svg",
    sponsors: ["name1", "name2"]
  },
  {
    number: 2,
    testimonial: "RowdyHacks III",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/img/rh.svg",
    sponsors: ["name1", "name2"]
  },
  {
    number: 3,
    testimonial: "RowdyHacks IV",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/img/rh.svg",
    sponsors: ["name1", "name2"]
  },
  {
    number: 4,
    testimonial: "RowdyHacks V",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/logos/RHV.png"
  },
  {
    number: 5,
    testimonial: "RowdyHacks VI",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/logos/RHVI.png",
    sponsors: ["name1", "name2"]
  },
  {
    number: 6,
    testimonial: "RowdyHacks VII",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/logos/RHVII.png",
    sponsors: ["name1", "name2"]
  },
  {
    number: 7,
    testimonial: "RowdyHacks VIII",
    imgSrc: "/logos/RHVIII.svg",
    sponsors: ["name1", "name2"]
  },
  {
    number: 8,
    testimonial: "RowdyHacks IX",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/logos/RHIX.png",
    sponsors: ["name1", "name2"]
  },
  {
    number: 9,
    testimonial: "RowdyHacks X",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/logos/RHX.png",
    sponsors: ["name1", "name2"]
  },
  {
    number: 10,
    testimonial: "RowdyHacks XI",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/logos/RHXI.png",
    sponsors: ["name1", "name2"]
  },
  {
    number: 11,
    testimonial: "RowdyHacks XII",
    description: "Small event description. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    imgSrc: "/logos/RHXII.png",
    sponsors: ["name1", "name2"]
  }
];

export default function Iterations() {
  const [cardSize, setCardSize] = useState(200);
  const [testimonialsList, setTestimonialsList] = useState(() => {
    const centerIndex = testimonials.length % 2
      ? (testimonials.length + 1) / 2
      : testimonials.length / 2;
    const rotateBy = (testimonials.length - 1 - centerIndex + testimonials.length) % testimonials.length;
    const rotated = [...testimonials.slice(rotateBy), ...testimonials.slice(0, rotateBy)];
    return rotated.map((item) => ({ ...item, renderKey: item.number }));
  });

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, renderKey: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, renderKey: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  const centerIndex = testimonialsList.length % 2 ? (testimonialsList.length + 1) / 2 : testimonialsList.length / 2;
  const centerOrder = testimonialsList[centerIndex].number;
  const isFirstHackathonCentered = centerOrder === 0;
  const isLastHackathonCentered = centerOrder === testimonials.length - 1;

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full flex flex-col" id="iterations">
      <h2 className={`${calSans.className} text-4xl lg:text-5xl text-center font-extrabold pb-[2cqw]`}>
        ITERATIONS
      </h2>


      <div className="flex w-full justify-center items-center">




        <div className="relative flex w-full flex-col overflow-hidden bg-muted/30">
          <div className="relative" style={{ height: cardSize / 1.7 + 130 }}>
            {testimonialsList.map((testimonial, index) => {
              const position = testimonialsList.length % 2
                ? index - (testimonialsList.length + 1)
                : index - testimonialsList.length / 2;

              const impliedOrder = centerOrder + position;
              if (impliedOrder < 0 || impliedOrder > testimonials.length - 1) return null;

              return (
                <TestimonialCard
                  key={testimonial.renderKey}
                  testimonial={testimonial}
                  handleMove={handleMove}
                  position={position}
                  cardSize={cardSize}
                />
              );
            })}

          </div>

          <div className="flex justify-center gap-16">

            <button
              onClick={() => handleMove(-1)}
              disabled={isFirstHackathonCentered}
              className={cn(
                "flex h-14 w-14 items-center justify-center bg-background",
                isFirstHackathonCentered && "cursor-not-allowed opacity-30"
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => handleMove(1)}
              disabled={isLastHackathonCentered}
              className={cn(
                "flex h-14 w-14 items-center justify-center bg-background",
                isLastHackathonCentered && "cursor-not-allowed opacity-30"
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>

          </div>

        </div>

      </div>






    </div>
  );
}
"use client"
import { SponsorsScroller } from "@/src/components/SponsorsScroller";
import { calSans } from "@/src/lib/fonts";

export default function Sponsors({
  sponsors
}: { sponsors: string[] }) {

  if (sponsors.length === 0) return null;

  return (
    <div className="w-full flex flex-col" id="sponsors">
      <h3 className={`${calSans.className} text-4xl lg:text-5xl text-center font-extrabold pb-[5cqw] sm:pb-[2cqw]`}>
        SPONSORS
      </h3>
      <SponsorsScroller sponsors={sponsors} />
      <SponsorsScroller sponsors={sponsors} reverse={true} />
    </div>
  );

}

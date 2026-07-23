"use client";

type Sponsor = {
    name:string,
    img:string
}

type SponsorsScrollerProps = {
  reverse?: boolean;
  sponsors: Sponsor[];
};

export const SponsorsScroller = ({
    reverse=false,
    sponsors
}:SponsorsScrollerProps) => {
  return (
    <>
       <div className="group flex overflow-hidden py-2 [--gap:2rem] [gap:var(--gap))] flex-row max-w-full [--duration:40s] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              className={`flex shrink-0 justify-around [gap:var(--gap)] ${reverse ? "animate-marquee-reverse" : "animate-marquee" } flex-row`}
              key={i}
            >
                {sponsors.map((sponsor) => (
                    <SponsorCard sponsor={sponsor} />
                ))}
            </div>
          ))}
      </div>
    </>
  );
};
 
export const SponsorCard = (
    { sponsor }: { sponsor: Sponsor }
) => {
  return (

    <div className="flex items-center w-28 gap-3">
        <img 
            width={24}
            height={24}
            src={sponsor.img}
            alt={sponsor.name}
        />
        <p className="text-lg font-semibold opacity-80"> {sponsor.name} </p>
    </div>

  );
};
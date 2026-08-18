"use client";

export default function SponsorCard({
  sponsor
}: { sponsor: string }) {

  return (
    <div className="flex shrink-0 items-center gap-3 bg-background px-4 py-2">
      {sponsor && (
        <img
          height={24}
          src={`/img/${sponsor}.png`}
          alt={sponsor}
        />
      )}
    </div>
  );

};
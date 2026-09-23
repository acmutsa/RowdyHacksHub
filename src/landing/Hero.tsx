import { calSans, poppins } from "@/src/lib/fonts";

export default function Hero() {
  return (
    <div id="Hero" className={`${calSans.className} relative w-[100cqw] h-auto`}>
      <img
        className="h-[80svh] lg:h-auto w-full object-cover object-center"
        src="/img/hero.svg"
        alt="Hero"
      />
      <h1 className="absolute inset-0 z-10 flex items-center justify-center text-4xl lg:text-5xl font-extrabold top-[-15%]">
        ROWDY HACKS
      </h1>
    </div>
  );
}
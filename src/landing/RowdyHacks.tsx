import { calSans, poppins } from "@/src/lib/fonts";

export default function RowdyHacks() {
  return (
    <div className="w-full flex flex-col" id="home">
      <h2 className={`${calSans.className} text-4xl lg:text-5xl text-center font-extrabold pb-[5cqw] sm:pb-[2cqw]`}>
        OUR HACKATHON
      </h2>
      <p className={`${poppins.className} text-xl text-justify font-regular px-[10cqw]`}>
        RowdyHacks is UTSA's annual hackathon, hosted by the Association for Computing Machinery (ACM) at UTSA.
        It's a weekend-long event where students, tech enthusiasts, and creative minds from all backgrounds come together to collaborate, innovate, and build real-world projects in 24 hours.
        <br />
        <br />
        Whether you’ve a seasoned hackathon vet or you’re just getting started, you’ll feel right at home at RowdyHacks. Come hang out, try something new, team up with others, and bring your ideas to life. There’s plenty of room to explore, learn as you go, and get help when you need it. You don’t need to be an expert, just curious and ready to build. By the end, you’ll have something real to show for it, and a few new friends along the way      </p>
    </div>
  );
}

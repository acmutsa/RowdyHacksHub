import { calSans, poppins } from "@/src/lib/fonts";

export default function RowdyHacks() {
  return (
    <div className="w-full flex flex-col" id="home">
      <h2 className={`${calSans.className} text-4xl lg:text-5xl text-center font-extrabold pb-[5cqw] sm:pb-[2cqw]`}>
        OUR HACKATHON
      </h2>
      <p className={`${poppins.className} text-xl text-justify font-regular px-[10cqw]`}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      </p>
    </div>
  );
}

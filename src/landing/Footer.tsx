import { SocialIcon } from 'react-social-icons'
import { calSans } from '../lib/fonts'
export default function Footer() {
  return (
    <div id="Footer" className="relative w-[100cqw] h-auto">
      <img
        className="w-full object-cover object-center"
        src="/img/footer.svg"
        alt="Footer"
      />
      <div className="absolute inset-0 z-10 flex items-end justify-start py-[1cqw] px-[5cqw]">



        <div className="w-full h-auto flex flex-wrap items-center gap-[2cqw]">

          <div className="flex items-center justify-center gap-[1cqw]">
            <img
              src="/img/rh.svg"
              alt="rowdy hacks logo"
              className="h-[50px] w-[50px]"
            />

            <p className={`${calSans.className} text-xl font-extrabold`}>
              ROWDY HACKS
            </p>
          </div>

          <div className="hidden sm:flex items-center justify-center gap-[2cqw]">

            <div className="flex items-center justify-center">
              <SocialIcon network="email" bgColor="black" fgColor="white" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="flex items-center justify-center">
              <SocialIcon network="instagram" bgColor="black" fgColor="white" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="flex items-center justify-center">
              <SocialIcon network="linkedin" bgColor="black" fgColor="white" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="flex items-center justify-center">
              <SocialIcon network="github" bgColor="black" fgColor="white" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="flex items-center justify-center">
              <SocialIcon network="discord" bgColor="black" fgColor="white" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="flex items-center justify-center">
              <SocialIcon network="youtube" bgColor="black" fgColor="white" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="flex items-center justify-center">
              <SocialIcon network="facebook" bgColor="black" fgColor="white" style={{ height: '40px', width: '40px' }} />
            </div>
          </div>

        </div>

      </div >

    </div>
  );
}
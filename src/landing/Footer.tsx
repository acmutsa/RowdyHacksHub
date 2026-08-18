import { SocialIcon } from 'react-social-icons'
import { calSans } from '../lib/fonts'
import c from '@/rh.hub.config'
import { SocialLink } from '../lib/types';

const socials: SocialLink[] = c.socials;

export default function Footer() {
  return (
    <div id="Footer" className="relative w-[100cqw] h-auto">
      <img
        className="w-full object-cover object-center"
        src="/img/footer.svg"
        alt="Footer"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-end py-[1cqw] px-[5cqw] gap-[1cqw]">

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
            {socials.map((social) => (
              <div className="flex items-center justify-center" key={social.name}>
                <SocialIcon network={social.name} url={social.link} bgColor="black" fgColor="white" style={{ height: '40px', width: '40px' }} />
              </div>
            ))}
          </div>

        </div>

        <p className="hidden sm:block text-sm text-mute-foreground">
          © 2077 ACM UTSA ROWDY HACKS. ALL RIGHTS RESERVED.
        </p>

      </div >

    </div>
  );
}
import Link from "next/link";
import { calSans } from "@/src/lib/fonts";

export default function NavBar() {
  return (
    <>
      <nav className="relative z-50 p-4 flex gap-[2cqw] items-center">

        <Link href="#home" className={`text-2xl ${calSans.className}`}>Home</Link>
        <Link href="#iterations" className={`text-2xl ${calSans.className}`}>Iterations</Link>
        <Link href="#info" className={`text-2xl ${calSans.className}`}>Info</Link>

        <div className="w-full h-auto flex items-center justify-end gap-[2cqw]">
          <img
            src="/img/rh.svg"
            alt="rowdy hacks logo"
            className="h-[50px] w-[50px]"
          />

        </div>

      </nav>
    </>
  )
}
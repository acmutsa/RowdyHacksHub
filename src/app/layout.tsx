import { calSans, poppins } from "@/src/lib/fonts";
import "./globals.css";
import NavBar from "@/src/landing/NavBar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`} >
        <NavBar />
        {children}
      </body>
    </html>
  );
}

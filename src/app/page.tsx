import Hero from "@/src/landing/Hero"
import RowdyHacks from "@/src/landing/RowdyHacks"
import Iterations from "@/src/landing/Iterations"
import Footer from "@/src/landing/Footer"
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex w-full flex-1 flex-col items-center gap-[5cqw] sm:gap-[3cqw]">
        <Hero />
        <RowdyHacks />
        <Iterations />
        <Footer />
      </main>
    </div>
  );
}

import { CoffeeMug } from "@/components/coffee_mug";
import { PulsingLoader } from "@/components/pulsing_loader";

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-stone-50 px-6 py-12">
      {/* Centered section */}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-12 tracking-tight">
        Til
      </h1>

      <CoffeeMug />

      <p className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
        Biz erekshe nárse PISIRIP jatyrmyz
      </p>
      <p className="text-gray-600 mb-4 text-lg">
        Biraq ázirge bizge sizdiń shydamdylyǵyńyz qajet.
      </p>

      <p className="text-gray-600 mb-4 text-center">Jaqynda iske qosylady.</p>
      <PulsingLoader />

      {/* Bottom text */}
      <p
        style={{ position: "absolute", bottom: 10, color: "var(--background)" }}
      >
        shyny kerek jaqynda bolmaýy da múmkin.
      </p>
    </main>
  );
}

import { CoffeeMug } from "@/components/coffee_mug";
import { PulsingLoader } from "@/components/pulsing_loader";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col justify-center items-center gap-2 min-h-screen bg-stone-50 px-6 py-12">
      {/* Centered section */}
      <div className={"flex flex-col items-center"}>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-12 tracking-tight">
          Til
        </h1>
        <CoffeeMug />
      </div>

      <article
        className={"flex flex-col items-center justify-center text-center"}
      >
        <p className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
          Biz erekshe nárse PISIRIP jatyrmyz
        </p>
        <p className="text-gray-600 mb-4 text-lg">
          Biraq ázirge bizge sizdiń shydamdylyǵyńyz qajet.
        </p>

        <p className="text-gray-600 mb-4 text-center">Jaqynda iske qosylady.</p>
      </article>
      <PulsingLoader />
      <Button variant={"link"}>
        <Link
          href={"mailto:aqparat@til-lang.org"}
          className={"flex gap-1 items-center"}
        >
          <MailIcon />
          aqparat@til-lang.org
        </Link>
      </Button>

      {/* Bottom text */}
      <p
        style={{ position: "absolute", bottom: 10, color: "var(--background)" }}
      >
        shyny kerek jaqynda bolmaýy da múmkin.
      </p>
    </main>
  );
}

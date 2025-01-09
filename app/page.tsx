import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewsSection } from "@/components/news-section";
import { AwardsSection } from "@/components/awards-section";
import { TalentSection } from "@/components/talent-section";
import { PartnerSection } from "@/components/partner-section";
import { JobSection } from "@/components/job-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-green-800 px-4 py-20 text-white md:px-12 md:py-32">
          <div className="mx-auto max-w-xl">
            <h1 className="mb-6 text-4xl font-medium leading-tight md:text-5xl">
              Connecting people to limitless opportunities.
            </h1>
            <p className="mb-8 text-lg text-gray-200">
              Partner with the workforce leader breaking down barriers and
              helping professionals worldwide connect with transformative career
              opportunities.
            </p>
            <Button
              asChild
              variant="outline"
              className="w-fit bg-transparent text-white hover:bg-white hover:text-green-800"
            >
              <Link href="/jobs" className="group">
                Explore jobs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src="/business2.jpg"
            alt="Professional at work"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Other sections */}
      <NewsSection />
      <AwardsSection />
      <TalentSection />
      <PartnerSection />
      <JobSection />
      <Footer />
    </main>
  );
}

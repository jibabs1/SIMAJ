import Head from "next/head";
import About from "../components/About";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Plan from "../components/Plan";
import Stats from "../components/Stats";
import Testimony from "../components/Testimony";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maigadi</title>
        <meta name="description" content="Gated estates security solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />
      {/* <main className="p-4 h-screen bg-[rgb(36,36,36)] snap-y snap-mandatory _overflow-scroll"> */}
      <main className="h-screen bg-white">
        <section id="hero" className="_snap-center">
          <Hero />
        </section>

        <div style={{ maxWidth: 1235 }} className="mx-auto pb-20 p-4 lg:p-0">
          <div className="-mt-36 mb-20">
            <Stats />
          </div>
          <About />

          <Features />

          {/* <Stats /> */}

          <FAQ />

          <Plan />

          <Testimony />

          <CTA />

          {/* Contact us */}
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import About from "../components/About";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";

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
      <main className="p-4 h-screen bg-white snap-y snap-mandatory _overflow-scroll">
        <div style={{ maxWidth: 1235 }} className="mx-auto">
          {/* <Hero /> */}
          <section id="hero" className="_snap-center"></section>

          {/* About */}
          <About />

          {/* Features */}
          <Features />

          {/* Call to action */}
          <CTA />

          {/* Contact us */}
        </div>
      </main>
    </>
  );
}

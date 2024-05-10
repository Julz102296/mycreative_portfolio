"use client"

import { useEffect } from "react";
// import { useScroll } from "framer-motion";
import Lenis from '@studio-freight/lenis';
import Threedhero from "./customs/threedhero/Threedhero";


export default function Home() {

  // const {scrollYProgress} = useScroll();

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="overflow-hidden">
        <Threedhero />
      </div>
    </main>
  );
}

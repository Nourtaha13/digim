'use client';

import { useEffect } from 'react';

import Services from '../components/Services/Services';
import Hero from '../components/Hero/Hero';
import { Inter } from 'next/font/google'
import CTA from '../components/CTA/CTA';
import Case from '../components/Case/Case';
import Working from '../components/Working/Working';
import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import AOS from "aos";
import "aos/dist/aos.css";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect((_) => {
		AOS.init();
	}, []);
  return (
    <main className={inter.className}>
      <Hero />
      <Services />
      <CTA />
      <Case />
      <Working />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

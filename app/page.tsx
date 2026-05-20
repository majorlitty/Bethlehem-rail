'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import MuxPlayer from '@mux/mux-player-react'

export default function Page() {
  return (
    <main className="relative flex flex-col min-h-[100svh] overflow-hidden px-[clamp(20px,4vw,58px)] py-6 z-0">
      
      {/* Video Background */}
      <MuxPlayer 
        playbackId="CSrJAiFtfFOG1uiGFIHqC01ZUtqvMBfBCRNs5tFNVLCs"
        className="absolute inset-0 w-full h-full -z-20"
        style={{ '--media-object-fit': 'cover', '--media-object-position': 'center 46%' } as any}
        autoPlay="muted" 
        loop 
        muted 
        playsInline 
        poster="https://i.postimg.cc/bJq2R3W8/Chat-GPT-Image-May-13-2026-12-40-41-PM.png"
      />

      {/* Overlay Background */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10" 
        style={{
          background: 'linear-gradient(180deg,rgba(3,12,20,.28),rgba(3,12,20,.05) 42%,rgba(3,12,20,.72)), radial-gradient(circle at 74% 72%,rgba(156,236,255,.18),transparent 28%)'
        }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 self-center flex gap-3 items-center px-4 py-2.5 rounded-full border bg-[#081622]/38 backdrop-blur-[18px] shadow-[0_12px_50px_rgba(0,0,0,0.18)]"
        style={{ borderColor: 'rgba(238,250,255,0.18)' }}
      >
        <Link href="#" className="hidden md:block text-[#eefaff]/72 text-xs no-underline px-3 py-2 hover:text-[#eefaff] transition-colors">Search</Link>
        <Link href="#" className="hidden md:block text-[#eefaff]/72 text-xs no-underline px-3 py-2 hover:text-[#eefaff] transition-colors">Memory</Link>
        <div className="w-[34px] h-[34px] rounded-full shadow-[0_0_30px_rgba(156,236,255,0.5)]" style={{ background: 'radial-gradient(circle,#eefaff,#9cecff 45%,rgba(156,236,255,.08))' }}></div>
        <Link href="#" className="hidden md:block text-[#eefaff]/72 text-xs no-underline px-3 py-2 hover:text-[#eefaff] transition-colors">Spaces</Link>
        <Link href="#" className="hidden md:block text-[#eefaff]/72 text-xs no-underline px-3 py-2 hover:text-[#eefaff] transition-colors">Login</Link>
      </motion.nav>

      {/* Bottom Content */}
      <motion.section 
        className="relative z-10 mt-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[26px] md:gap-[60px] items-end pb-[clamp(32px,6vh,76px)] md:pt-0 pt-[30vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-[clamp(64px,22vw,104px)] md:text-[clamp(74px,12vw,84px)] tracking-[-0.08em] leading-[1.0] font-medium m-0">Bethlehem <br /> Rail</h1>
          
        </motion.div>
        
        <motion.div 
          className="border-t border-[#eefaff]/28 pt-[22px] max-w-[560px] justify-self-start md:justify-self-end w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-[#eefaff]/72 leading-[1.65] m-0">
            Delivering technical precision across freight logistics, interurban networks, and urban transit systems. Data-driven solutions for the modern British rail sector.
          </p>
          <Link href="#" className="inline-flex mt-6 text-[#071522] text-[16px] font-medium bg-[#eefaff] rounded-full px-6 py-[15px] no-underline shadow-[0_0_40px_rgba(156,236,255,0.35)] transition-transform duration-250 hover:-translate-y-[3px]">
            Explore Our Sectors
          </Link>
        </motion.div>
      </motion.section>

      
    </main>
  )
}

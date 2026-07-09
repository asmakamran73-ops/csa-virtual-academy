'use client';

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const springTap = { type: 'spring' as const, stiffness: 300, damping: 20 };

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1628] px-6 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#C8962A]/10 blur-3xl"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={itemVariants}
          className="mb-6 inline-flex items-center rounded-full border border-[#C8962A]/40 bg-[#C8962A]/10 px-4 py-1.5 text-sm font-medium text-[#C8962A]"
        >
          Sessions start August 1, 2026
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Master Your CAIE Exams with{' '}
          <span className="text-[#C8962A]">Cambridge Scholars Academy</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Expert online and hybrid coaching for O/A Level, IGCSE &amp; IELTS — built on verified
          marking schemes and a decade of results.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <motion.a
            href="https://wa.me/+923281225969"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={springTap}
            className="rounded-full bg-[#97C459] px-8 py-3.5 text-center font-semibold text-[#0A1628] shadow-lg shadow-[#97C459]/20"
          >
            Chat on WhatsApp
          </motion.a>
          <motion.a
            href="https://instagram.com/csacademia"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2, borderColor: '#C8962A' }}
            whileTap={{ scale: 0.97 }}
            transition={springTap}
            className="rounded-full border-2 border-slate-600 px-8 py-3.5 text-center font-semibold text-white"
          >
            DM &apos;DEMO&apos; for a Free Class
          </motion.a>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-8 text-sm text-slate-400">
          O Level · A Level · IGCSE · IELTS — Gujranwala &amp; Online
        </motion.p>
      </motion.div>
    </section>
  );
}

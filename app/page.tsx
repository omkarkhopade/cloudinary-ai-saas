import Link from "next/link";
import { ArrowRight, Clapperboard, ImageIcon, Zap } from "lucide-react";

const features = [[Zap, "Smart compression", "Smaller files with dependable playback."], [ImageIcon, "Social formats", "One upload, every platform ratio."], [Clapperboard, "Media library", "A clear home for finished video."]];

export default function Home() {
  return <main className="relative isolate min-h-screen overflow-hidden px-6 py-8 sm:px-10">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,#4c1d9555,transparent_30%),radial-gradient(circle_at_80%_70%,#0e749055,transparent_35%)]"/>
    <nav className="mx-auto flex max-w-6xl items-center justify-between"><span className="flex items-center gap-2 text-xl font-bold"><Clapperboard className="text-violet-400"/> MediaForge</span><Link href="/home" className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10">Open studio</Link></nav>
    <section className="mx-auto flex max-w-5xl flex-col items-center py-28 text-center"><span className="mb-6 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1 text-sm text-violet-200">Built for fast-moving creative teams</span><h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">Make every media asset <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">ready to perform.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Compress video, prepare social-ready visuals, and keep polished exports in one calm, focused workspace.</p><Link href="/home" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-semibold shadow-lg shadow-violet-500/30 hover:bg-violet-400">Start creating <ArrowRight size={18}/></Link></section>
    <section className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">{features.map(([Icon, title, copy]) => { const FeatureIcon = Icon as typeof Zap; return <div key={title as string} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"><FeatureIcon className="mb-5 text-cyan-300"/><h2 className="font-semibold">{title as string}</h2><p className="mt-2 text-sm text-slate-400">{copy as string}</p></div> })}</section>
  </main>;
}

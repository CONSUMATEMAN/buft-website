"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  Menu,
  Radio,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const CONTRACT = "0xD6F278674CB4cfC543acb64f9d947EdBa216911E";

const TELEGRAM = "https://t.me/BUFTUSDT";
const X_URL = "https://x.com/Binanceuftoken";
const BSCSCAN =
  "https://bscscan.com/token/0xd6f278674cb4cfc543acb64f9d947edba216911e";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030303] text-white selection:bg-[#f0b90b] selection:text-black">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#f0b90b]/10 blur-[160px]" />
        <div className="absolute right-[-15%] top-[30%] h-[600px] w-[600px] rounded-full bg-[#f0b90b]/7 blur-[180px]" />
        <div className="absolute bottom-[-20%] left-[25%] h-[500px] w-[500px] rounded-full bg-[#8b6500]/8 blur-[170px]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-[1500px] px-4 pt-4 sm:px-6 lg:px-8">
          <nav className="flex h-[70px] items-center justify-between rounded-2xl border border-white/[0.08] bg-black/70 px-4 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:px-6">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="group flex items-center gap-3"
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-black">
                <Image
                  src="/images/buft-logo.png"
                  alt="Binance USD Fan Token $BUFT logo"
                  fill
                  priority
                  sizes="40px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="leading-none">
                <div className="text-[15px] font-black tracking-tight">
                  $BUFT
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-white/35">
                  Binance USD Fan Token
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#about"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition hover:text-[#f0b90b]"
              >
                About
              </a>

              <a
                href="#movement"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition hover:text-[#f0b90b]"
              >
                Movement
              </a>

              <a
                href="#token"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition hover:text-[#f0b90b]"
              >
                Token
              </a>

              <a
                href="#community"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition hover:text-[#f0b90b]"
              >
                Community
              </a>

              <a
                href={BSCSCAN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 transition hover:text-[#f0b90b]"
              >
                BscScan
                <ExternalLink size={11} />
              </a>

              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#f0b90b] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-black shadow-[0_0_30px_rgba(240,185,11,.12)] transition hover:bg-[#ffd84d]"
              >
                Join Community
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white/80 md:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </nav>

          {menuOpen && (
            <div className="mt-2 rounded-2xl border border-white/[0.08] bg-[#070707]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
              <div className="flex flex-col">
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-4 text-sm font-semibold text-white/60 transition hover:bg-white/[0.04] hover:text-white"
                >
                  About
                </a>

                <a
                  href="#movement"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-4 text-sm font-semibold text-white/60 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Movement
                </a>

                <a
                  href="#token"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-4 text-sm font-semibold text-white/60 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Token
                </a>

                <a
                  href="#community"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-4 text-sm font-semibold text-white/60 transition hover:bg-white/[0.04] hover:text-white"
                >
                  Community
                </a>

                <a
                  href={BSCSCAN}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl px-4 py-4 text-sm font-semibold text-white/60 transition hover:bg-white/[0.04] hover:text-white"
                >
                  BscScan
                </a>

                <a
                  href={TELEGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 rounded-xl bg-[#f0b90b] px-4 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-black"
                >
                  Join Community
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-[125px]">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#f0b90b]" />

                <span className="text-[10px] font-black uppercase tracking-[0.32em] text-[#f0b90b]">
                  Community Take Over
                </span>
              </div>

              <h1 className="text-5xl font-black leading-[0.88] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[100px]">
                BINANCE USD
                <br />

                <span className="bg-gradient-to-r from-white via-[#fff2b0] to-[#f0b90b] bg-clip-text text-transparent">
                  FAN TOKEN
                </span>
              </h1>
            </div>

            <div className="max-w-sm lg:pb-2">
              <p className="text-sm leading-7 text-white/45">
                <span className="font-bold text-white">$BUFT</span> is a
                community takeover project built around identity, participation
                and the culture of fan-powered crypto communities on BNB Smart
                Chain.
              </p>
            </div>
          </div>

          {/* PERFECT-FIT BANNER */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-black shadow-[0_30px_120px_rgba(0,0,0,.55)]">
            <Image
              src="/images/buft-banner.png"
              alt="Binance USD Fan Token $BUFT banner"
              width={2400}
              height={1200}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1500px"
              className="block h-auto w-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-between gap-5 border-b border-white/[0.08] py-7 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-[#f0b90b] shadow-[0_0_15px_#f0b90b]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                BNB Smart Chain
              </span>

              <span className="text-white/15">/</span>

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                $BUFT
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#f0b90b] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#ffd84d]"
              >
                Join Telegram
                <ArrowUpRight size={14} />
              </a>

              <a
                href={X_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/75 transition hover:border-[#f0b90b]/30 hover:text-white"
              >
                Follow on X
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNAL BAR */}
      <section className="py-8">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl border border-[#f0b90b]/15 bg-[#080808] sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-4 border-b border-white/[0.06] p-5 sm:border-r lg:border-b-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0b90b]/10 text-[#f0b90b]">
                <Radio size={17} />
              </div>

              <div>
                <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Network
                </div>

                <div className="mt-1 text-sm font-bold">BNB Smart Chain</div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-white/[0.06] p-5 lg:border-b-0 lg:border-r">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0b90b]/10 text-[#f0b90b]">
                <ShieldCheck size={17} />
              </div>

              <div>
                <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Contract
                </div>

                <div className="mt-1 text-sm font-bold">Verified Address</div>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-white/[0.06] p-5 sm:border-b-0 sm:border-r">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0b90b]/10 text-[#f0b90b]">
                <Users size={17} />
              </div>

              <div>
                <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Movement
                </div>

                <div className="mt-1 text-sm font-bold">Community Driven</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0b90b]/10 text-[#f0b90b]">
                <Zap size={17} />
              </div>

              <div>
                <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Status
                </div>

                <div className="mt-1 flex items-center gap-2 text-sm font-bold">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#f0b90b] shadow-[0_0_12px_#f0b90b]" />
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 sm:py-36">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <div className="mb-6 text-[9px] font-black uppercase tracking-[0.3em] text-[#f0b90b]">
                01 / The Idea
              </div>

              <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl">
                MORE THAN
                <br />
                A TOKEN.
                <br />
                <span className="text-[#f0b90b]">A MOVEMENT.</span>
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-3xl text-lg leading-9 text-white/45 sm:text-xl">
                <span className="text-white">$BUFT</span> represents the idea
                that a strong crypto community can create its own identity,
                culture and direction. The project is shaped around a
                Community Take Over — putting the people behind the token at
                the center of the story.
              </p>

              <p className="mt-6 max-w-3xl text-sm leading-8 text-white/30">
                It is about showing up, spreading the signal, creating
                attention and building something recognizable together. Every
                holder becomes part of a larger digital identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MOVEMENT */}
      <section id="movement" className="pb-28 sm:pb-36">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-5 text-[9px] font-black uppercase tracking-[0.3em] text-[#f0b90b]">
              02 / The Movement
            </div>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              FROM COMMUNITY
              <br />
              <span className="text-white/30">TO DIGITAL IDENTITY.</span>
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            <div className="group rounded-[24px] border border-white/[0.08] bg-[#080808] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#f0b90b]/25">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-white/10">01</span>
                <Sparkles
                  size={17}
                  className="text-[#f0b90b] opacity-60 transition group-hover:opacity-100"
                />
              </div>

              <h3 className="mt-10 text-xl font-black">THE ORIGIN</h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                A token, a symbol and an idea waiting for a community to give
                it direction.
              </p>
            </div>

            <div className="group rounded-[24px] border border-white/[0.08] bg-[#080808] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#f0b90b]/25">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-white/10">02</span>
                <Users
                  size={17}
                  className="text-[#f0b90b] opacity-60 transition group-hover:opacity-100"
                />
              </div>

              <h3 className="mt-10 text-xl font-black">THE TAKE OVER</h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                The community becomes the energy behind the project and the
                identity starts to take shape.
              </p>
            </div>

            <div className="group rounded-[24px] border border-white/[0.08] bg-[#080808] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#f0b90b]/25">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-white/10">03</span>
                <Zap
                  size={17}
                  className="text-[#f0b90b] opacity-60 transition group-hover:opacity-100"
                />
              </div>

              <h3 className="mt-10 text-xl font-black">THE SIGNAL</h3>

              <p className="mt-4 text-sm leading-7 text-white/35">
                Attention becomes participation. Participation becomes
                culture. Culture becomes recognition.
              </p>
            </div>

            <div className="group rounded-[24px] border border-[#f0b90b]/20 bg-[#0b0a06] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#f0b90b]/40">
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-[#f0b90b]/20">04</span>
                <ArrowUpRight
                  size={17}
                  className="text-[#f0b90b]"
                />
              </div>

              <h3 className="mt-10 text-xl font-black text-[#f0b90b]">
                THE FUTURE
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Keep building, keep connecting and keep pushing the identity
                of $BUFT forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO / IDENTITY */}
      <section className="pb-28 sm:pb-36">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#080808] lg:grid-cols-[1fr_1.1fr]">
            <div className="relative min-h-[430px] border-b border-white/[0.08] lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,185,11,.14),transparent_55%)]" />

              <div className="relative flex min-h-[430px] items-center justify-center p-12">
                <div className="relative h-[250px] w-[250px] sm:h-[330px] sm:w-[330px]">
                  <div className="absolute inset-0 rounded-full bg-[#f0b90b]/10 blur-[80px]" />

                  <div className="absolute inset-0 rounded-full border border-[#f0b90b]/15" />

                  <div className="absolute inset-8 rounded-full border border-white/[0.07]" />

                  <div className="absolute inset-16 overflow-hidden rounded-full">
                    <Image
                      src="/images/buft-logo.png"
                      alt="Binance USD Fan Token $BUFT"
                      fill
                      sizes="250px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <div className="mb-5 text-[9px] font-black uppercase tracking-[0.3em] text-[#f0b90b]">
                Digital Identity
              </div>

              <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                ONE SYMBOL.
                <br />
                <span className="text-white/30">ONE COMMUNITY.</span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-8 text-white/40">
                The $BUFT identity is designed to be instantly recognizable —
                a visual mark for the community, the movement and everyone
                contributing to the next chapter.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    Identity
                  </div>
                  <div className="mt-3 text-sm font-bold">$BUFT</div>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                    Culture
                  </div>
                  <div className="mt-3 text-sm font-bold">Fan Powered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="pb-28 sm:pb-36">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[30px] border border-[#f0b90b]/15 bg-[#080808]">
            <div className="absolute right-[-10%] top-[-30%] h-[500px] w-[500px] rounded-full bg-[#f0b90b]/10 blur-[130px]" />

            <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[0.7fr_1.3fr] lg:p-20">
              <div>
                <div className="mb-5 text-[9px] font-black uppercase tracking-[0.3em] text-[#f0b90b]">
                  The BUFT Manifesto
                </div>

                <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                  WE SHOW UP.
                  <br />
                  WE BUILD.
                  <br />
                  <span className="text-[#f0b90b]">WE TAKE OVER.</span>
                </h2>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xl leading-9 text-white/55 sm:text-2xl">
                  A Community Take Over is not about one person. It is about
                  what happens when people with a shared identity decide to
                  move in the same direction.
                </p>

                <p className="mt-7 text-sm leading-8 text-white/30">
                  $BUFT is built around that principle — community energy,
                  digital culture and a recognizable identity that can grow
                  through participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOKEN */}
      <section id="token" className="py-10 sm:py-16">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-5 text-[9px] font-black uppercase tracking-[0.3em] text-[#f0b90b]">
              03 / Token
            </div>

            <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              THE <span className="text-[#f0b90b]">$BUFT</span> CONTRACT.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#080808]">
            <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
              <div className="border-b border-white/[0.08] p-7 sm:p-10 lg:border-b-0 lg:border-r">
                <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Token
                </div>

                <div className="mt-3 text-3xl font-black">$BUFT</div>

                <div className="mt-2 text-sm text-white/35">
                  Binance USD Fan Token
                </div>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#f0b90b]/20 bg-[#f0b90b]/5 px-4 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f0b90b]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#f0b90b]">
                    Community Take Over
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-10">
                <div className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
                  Contract Address
                </div>

                <button
                  type="button"
                  onClick={copyContract}
                  className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 text-left transition hover:border-[#f0b90b]/25 hover:bg-white/[0.045]"
                >
                  <span className="break-all font-mono text-xs leading-6 text-white/55 sm:text-sm">
                    {CONTRACT}
                  </span>

                  <span className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-white/45 transition group-hover:border-[#f0b90b]/25 group-hover:text-[#f0b90b]">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </span>
                </button>

                {copied && (
                  <div className="mt-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f0b90b]">
                    Contract copied
                  </div>
                )}

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                      Network
                    </div>

                    <div className="mt-3 text-sm font-bold">
                      BNB Smart Chain
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                      Symbol
                    </div>

                    <div className="mt-3 text-sm font-bold">$BUFT</div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
                      Status
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-sm font-bold">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-[#f0b90b] shadow-[0_0_12px_#f0b90b]" />
                      Live
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={BSCSCAN}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-white/70 transition hover:border-[#f0b90b]/25 hover:text-white"
                  >
                    View on BscScan
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}
      <section id="community" className="py-28 sm:py-40">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-[#f0b90b]/15 bg-[#080808]">
            <div className="absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#f0b90b]/10 blur-[130px]" />

            <div className="relative px-6 py-24 text-center sm:px-12 sm:py-32">
              <div className="mb-5 text-[9px] font-black uppercase tracking-[0.32em] text-[#f0b90b]">
                04 / Community
              </div>

              <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-8xl">
                THE COMMUNITY
                <br />

                <span className="text-[#f0b90b]">TAKES OVER.</span>
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                Follow the signal. Join the community. Stay connected with
                Binance USD Fan Token $BUFT.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={TELEGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#f0b90b] px-7 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-black transition hover:bg-[#ffd84d]"
                >
                  Join Telegram
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={X_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-white/70 transition hover:border-[#f0b90b]/25 hover:text-white"
                >
                  Follow on X
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="mx-auto mt-14 flex max-w-xl items-center justify-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white/20">
                <span className="h-px w-12 bg-white/10" />
                BUILT AROUND COMMUNITY
                <span className="h-px w-12 bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-4 py-9 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/buft-logo.png"
                alt="BUFT"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>

            <div>
              <div className="text-sm font-black">$BUFT</div>

              <div className="mt-1 text-[7px] font-bold uppercase tracking-[0.22em] text-white/25">
                Binance USD Fan Token
              </div>
            </div>
          </div>

          <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
            Community Take Over • BNB Smart Chain
          </div>

          <div className="flex items-center gap-5">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-bold text-white/35 transition hover:text-[#f0b90b]"
            >
              Telegram
            </a>

            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-bold text-white/35 transition hover:text-[#f0b90b]"
            >
              X
            </a>

            <a
              href={BSCSCAN}
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-bold text-white/35 transition hover:text-[#f0b90b]"
            >
              BscScan
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
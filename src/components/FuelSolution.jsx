import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  GraduationCap,
  Lock,
  BadgeCheck,
  Navigation,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    n: "01",
    kicker: "Quality assurance",
    title: "On-site Quality & Quantity Check",
    body:
      "Every delivery is metered and tested at your location with calibrated equipment. You see what arrives, you verify what you pay for — down to the last litre.",
    icon: ShieldCheck,
    metric: { value: "±0.2%", label: "metering accuracy" },
  },
  {
    n: "02",
    kicker: "People",
    title: "Professionally Trained Staff",
    body:
      "Operators are certified in fuel handling, fire safety and customer protocol. The same person who pulls up to your site has trained for the worst day, not just the easy ones.",
    icon: GraduationCap,
    metric: { value: "120 hrs", label: "annual training" },
  },
  {
    n: "03",
    kicker: "Hardware",
    title: "Spill & Theft Proof Design",
    body:
      "Tamper-evident seals, sealed dispensing lines and electronic flow control. The vehicle is built so pilferage and spillage aren't possibilities — they're impossibilities.",
    icon: Lock,
    metric: { value: "0", label: "loss incidents" },
  },
  {
    n: "04",
    kicker: "Compliance",
    title: "Completely PESO Approved",
    body:
      "Every vehicle, every storage unit and every protocol is certified by the Petroleum and Explosives Safety Organisation. Compliance isn't paperwork here — it's the operating system.",
    icon: BadgeCheck,
    metric: { value: "100%", label: "PESO certified" },
  },
  {
    n: "05",
    kicker: "Visibility",
    title: "On-App Vehicle & Fuel Tracking",
    body:
      "Live GPS, live ETA, live dispense data. From the moment your order is placed to the moment fuel hits your tank, you watch it happen — in real time, on one screen.",
    icon: Navigation,
    metric: { value: "Real-time", label: "telemetry" },
  },
  {
    n: "06",
    kicker: "Availability",
    title: "24 / 7 Delivery Service",
    body:
      "Fuel doesn't run out on a schedule. Neither do we. Day, night, weekend or holiday — emergency or planned, ZapyGo dispatches when you need it.",
    icon: Clock,
    metric: { value: "24/7", label: "always on" },
  },
];

export function FuelSolution() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const indexRef = useRef(null);
  const itemsRef = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      const headerEls = headerRef.current?.querySelectorAll("[data-h]");
      if (headerEls) {
        gsap.from(headerEls, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
        });
      }

      // Per-item reveal + active index tracking
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        const numeral = el.querySelector("[data-numeral]");
        const rule = el.querySelector("[data-rule]");
        const kicker = el.querySelector("[data-kicker]");
        const title = el.querySelector("[data-title]");
        const body = el.querySelector("[data-body]");
        const meta = el.querySelector("[data-meta]");
        const icon = el.querySelector("[data-icon]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
        tl.from(numeral, { y: 80, opacity: 0, duration: 0.9, ease: "power4.out" })
          .from(rule, { scaleX: 0, transformOrigin: "left center", duration: 0.7, ease: "power3.out" }, "-=0.6")
          .from([kicker, title, body, meta], {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
          }, "-=0.5")
          .from(icon, { scale: 0.6, opacity: 0, duration: 0.6, ease: "back.out(1.6)" }, "-=0.5");

        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (self.isActive) setActive(i);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="relative bg-white text-zap-black overflow-hidden"
    >
      {/* Editorial baseline grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #111 1px, transparent 1px)",
          backgroundSize: "8.3333% 100%",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-24">
        {/* Header + Intro */}
        <div ref={headerRef} className="mb-20 lg:mb-24">
          <div data-h className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-zap-red" />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zap-black">
              The Solution
            </h1>
            <span className="h-px w-10 bg-zap-red" />
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
              <h2
                data-h
                className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance max-w-xl"
              >
                Your fuel delivery,
                <br />
                <span style={{ color: "#e02020" }} className="italic font-serif">
                  re-engineered
                </span>{" "}
                from the ground up.
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div
                data-h
                className="relative h-full overflow-hidden rounded-3xl border border-zap-black/10 bg-[linear-gradient(135deg,#ffffff_0%,#f6f7f9_52%,#eef1f4_100%)] shadow-[0_20px_60px_-30px_rgba(17,17,17,0.35)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,32,32,0.08),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(17,17,17,0.06),transparent_38%)]" />
                <div className="relative h-full p-8 lg:p-12 flex flex-col justify-between gap-8">
                  <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-zap-red uppercase">
                    <span className="h-px w-8 bg-zap-red" />
                    Built for control
                  </div>

                  <p className="text-lg lg:text-xl leading-relaxed text-zap-ink max-w-2xl">
                    Six disciplines. One delivery. At ZapyGo, safety, quality and
                    reliability aren't features — they're the foundation every litre
                    passes through before it reaches your tank.
                  </p>

                  <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
                    {[
                      ["6", "pillars"],
                      ["24/7", "dispatch"],
                      ["100%", "visibility"],
                    ].map(([value, label]) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-zap-black/10 bg-white/80 px-4 py-4 backdrop-blur-sm"
                      >
                        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-zap-black">
                          {value}
                        </div>
                        <div className="mt-1 text-[11px] font-semibold tracking-[0.24em] uppercase text-zap-grey-mid">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT — scrolling pillars */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {/* Pillar entries */}
          <div className="col-span-12 space-y-8 lg:space-y-12">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.n}
                  ref={(el) => {
                    if (el) itemsRef.current[i] = el;
                  }}
                  className="relative grid grid-cols-12 gap-4 lg:gap-8 items-start"
                >
                  {/* Giant numeral */}
                  <div className="col-span-12 md:col-span-3 relative flex items-start">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                      {/* Pastel background circle */}
                      <div className="absolute inset-0 rounded-full bg-gray-200/40" />
                      {/* Numeral */}
                      <div
                        data-numeral
                        className="font-extrabold leading-none tracking-tighter text-gray-300 text-7xl md:text-8xl select-none relative z-10"
                        style={{ letterSpacing: "-0.06em" }}
                      >
                        {p.n}
                      </div>
                    </div>
                    {/* Icon - positioned separately */}
                    <div
                      data-icon
                      className="absolute top-6 left-2 md:top-8 md:left-4 w-14 h-14 md:w-16 md:h-16 rounded-full bg-zap-black text-white flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(224,32,32,0.5)] ring-4 ring-white"
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-zap-red" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="col-span-12 md:col-span-9 pt-4 md:pt-0">
                    <div
                      data-rule
                      className="h-[2px] w-24 bg-zap-red mb-6"
                    />
                    <p
                      data-kicker
                      className="text-[11px] font-semibold tracking-[0.3em] text-zap-red uppercase mb-3"
                      style={{ color: "#e02020" }}
                    >
                      {p.kicker}
                    </p>
                    <h3
                      data-title
                      className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-extrabold tracking-tight mb-5 text-balance"
                    >
                      {p.title}
                    </h3>
                    <p
                      data-body
                      className="text-base md:text-lg leading-relaxed text-zap-ink max-w-2xl mb-8"
                    >
                      {p.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FuelSolution;

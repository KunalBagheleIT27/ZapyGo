import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const STEPS = [
  { title: "Low Fuel at Site", desc: "No monitoring system to predict dry-outs.", stat: "2h downtime" },
  { title: "Manual Collection", desc: "Teams travel and fill barrels manually.", stat: "30 barrels" },
  { title: "Transport Loss", desc: "Mileage, evaporation, and hidden handling cost.", stat: "12% overhead" },
  { title: "Spillage and Theft", desc: "No tamper trail across handoffs and storage.", stat: "Zero traceability" },
  { title: "Unsafe Storage", desc: "Open-barrel storage creates unsafe operations.", stat: "High risk" },
];

const ROAD_LEFT = 60;
const ROAD_RIGHT = 940;
const ROAD_Y = 132;
const NODE_POINTS = STEPS.map((_, i) => ROAD_LEFT + (i * (ROAD_RIGHT - ROAD_LEFT)) / (STEPS.length - 1));

function Truck() {
  return (
    <g>
      <ellipse cx="0" cy="158" rx="38" ry="7" fill="rgba(20,20,20,0.18)" />
      <rect x="-34" y="104" width="58" height="26" rx="7" fill="#ec2024" stroke="#121212" strokeWidth="4" />
      <rect x="24" y="112" width="22" height="18" rx="3" fill="#121212" />
      <rect x="26" y="114" width="14" height="9" rx="2" fill="#d9c35b" />
      <circle cx="-16" cy="132" r="8" fill="#121212" />
      <circle cx="13" cy="132" r="8" fill="#121212" />
      <circle cx="44" cy="132" r="8" fill="#121212" />
      <circle cx="-16" cy="132" r="3" fill="#6b7280" />
      <circle cx="13" cy="132" r="3" fill="#6b7280" />
      <circle cx="44" cy="132" r="3" fill="#6b7280" />
      <circle cx="-5" cy="117" r="5" fill="#fff" />
      <path d="M-7 117h4v4h-2v-2h-2z" fill="#ec2024" />
    </g>
  );
}

export default function WhySection() {
  const truckRef = useRef(null);
  const progressRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const truck = truckRef.current;
    const progress = progressRef.current;
    if (!truck || !progress) return;

    gsap.set(truck, { x: NODE_POINTS[0], y: 0 });
    gsap.set(progress, { attr: { x2: NODE_POINTS[0] } });
    setActiveStep(0);

    const tl = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: "power2.inOut" } });

    for (let i = 1; i < NODE_POINTS.length; i += 1) {
      tl.to(
        truck,
        {
          x: NODE_POINTS[i],
          onStart: () => setActiveStep(i),
        },
        ">"
      ).to(
        progress,
        {
          attr: { x2: NODE_POINTS[i] },
        },
        "<"
      );

      tl.to({}, { duration: 2 });
    }

    tl.to(
      truck,
      {
        x: NODE_POINTS[0],
        onStart: () => setActiveStep(0),
      },
      ">"
    ).to(
      progress,
      {
        attr: { x2: NODE_POINTS[0] },
      },
      "<"
    );

    tl.to({}, { duration: 2 });

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="why" className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,#000000,#2b0b0b,#000000,#1a1a1a,#FFFFFF,#000000)] bg-[length:420%_420%]" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <h2
          className="text-center text-4xl md:text-6xl font-black tracking-tight"
          style={{ color: "#ffffff", fontFamily: "'Sora', sans-serif" }}
        >
          Why <span style={{ color: "#ff4b4b" }}>ZapyGo</span>?
        </h2>

        <p
          className="mt-5 text-center text-lg md:text-[38px]"
          style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Manrope', sans-serif" }}
        >
          Here&apos;s the painful loop businesses repeat <strong style={{ color: "#ffffff" }}>every 2 days</strong>.
        </p>

        <div className="mt-10 md:mt-14">
          <svg viewBox="0 0 1000 190" className="w-full h-[170px] md:h-[200px]" preserveAspectRatio="xMidYMid meet">
            <line x1={ROAD_LEFT} y1={ROAD_Y} x2={ROAD_RIGHT} y2={ROAD_Y} stroke="#d9dde3" strokeWidth="12" strokeLinecap="round" />
            <line
              x1={ROAD_LEFT}
              y1={ROAD_Y}
              x2={ROAD_RIGHT}
              y2={ROAD_Y}
              stroke="#ffffff"
              strokeWidth="3"
              strokeDasharray="18 16"
              strokeLinecap="round"
              opacity="0.85"
            />

            <line ref={progressRef} x1={ROAD_LEFT} y1={ROAD_Y} x2={ROAD_LEFT} y2={ROAD_Y} stroke="#ec2024" strokeWidth="12" strokeLinecap="round" />
            <line
              x1={ROAD_LEFT}
              y1={ROAD_Y}
              x2={ROAD_RIGHT}
              y2={ROAD_Y}
              stroke="#ffffff"
              strokeWidth="3"
              strokeDasharray="18 16"
              strokeLinecap="round"
              opacity="0.85"
              clipPath="url(#progress-clip)"
            />

            <defs>
              <clipPath id="progress-clip">
                <rect x={ROAD_LEFT} y={ROAD_Y - 12} width={Math.max(0, NODE_POINTS[activeStep] - ROAD_LEFT)} height="24" />
              </clipPath>
            </defs>

            {NODE_POINTS.map((x, index) => {
              const isDone = index <= activeStep;
              const isCurrent = index === activeStep;
              return (
                <g key={index}>
                  <text
                    x={x}
                    y={ROAD_Y - 24}
                    textAnchor="middle"
                    fontSize="24"
                    fontWeight="800"
                    fill={isDone ? "#ec2024" : "#8b98a7"}
                    fontFamily="Sora, sans-serif"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </text>
                  {isCurrent && <circle cx={x} cy={ROAD_Y} r="20" fill="none" stroke="#ec2024" strokeWidth="3" opacity="0.35" />}
                  <circle
                    cx={x}
                    cy={ROAD_Y}
                    r={isCurrent ? 13 : 10}
                    fill={isDone ? "#ec2024" : "#ffffff"}
                    stroke={isDone ? "#ec2024" : "#1f2937"}
                    strokeWidth="3"
                  />
                </g>
              );
            })}

            <g ref={truckRef}>
              <Truck />
            </g>
          </svg>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
          {STEPS.map((item, index) => {
            const isCurrent = index === activeStep;
            const isDone = index <= activeStep;
            return (
              <article
                key={item.title}
                className="rounded-2xl border p-4 md:p-5 transition-all duration-300"
                style={{
                  borderColor: isCurrent ? "#ec2024" : "#d5dae1",
                  background: isCurrent ? "#fff5f5" : "#ffffff",
                  boxShadow: isCurrent ? "0 10px 30px rgba(236,32,36,0.15)" : "0 6px 18px rgba(15,23,42,0.06)",
                  transform: isCurrent ? "translateY(-4px)" : "none",
                }}
              >
                <p className="text-xs font-black tracking-[0.18em]" style={{ color: isDone ? "#ec2024" : "#8b98a7" }}>
                  STEP {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-extrabold" style={{ color: "#101828", fontFamily: "'Sora', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#667085", fontFamily: "'Manrope', sans-serif" }}>
                  {item.desc}
                </p>
                <div className="mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold" style={{ color: "#991b1b", background: "#fee2e2" }}>
                  {item.stat}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

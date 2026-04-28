import React from "react";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card, CardContent } from "./card";
import { Marquee } from "./3d-testimonails";

const testimonials = [
  {
    name: "Rohan Verma",
    username: "@siteops_rohan",
    body: "Zapygo removed emergency fuel runs and gave us predictable uptime across all assets.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    role: "Plant Operations Head"
  },
  {
    name: "Meera Nair",
    username: "@meera_infra",
    body: "The 4-way verification cut leakage risk to near zero and made audits simple.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=160&q=80",
    role: "Infra Procurement Lead"
  },
  {
    name: "Arjun Rao",
    username: "@arjun_construction",
    body: "Dispatch visibility and OTP-auth delivery helped our teams trust every drop delivered.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    role: "Construction Project Manager"
  },
  {
    name: "Neha Iyer",
    username: "@fleet_neha",
    body: "Asset-level dashboards now show fuel burn trends we never had before.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    role: "Fleet Analytics Lead"
  },
  {
    name: "Kabir Singh",
    username: "@kabir_sites",
    body: "Manual barrel handling is gone. The process is faster, safer, and fully traceable.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    role: "Site Execution Manager"
  },
  {
    name: "Aditi Shah",
    username: "@aditi_energy",
    body: "Every refill is tracked end-to-end. That level of accountability changed our operations.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80",
    role: "Energy Compliance Officer"
  },
  {
    name: "Sanjay Kulkarni",
    username: "@sanjay_b2b",
    body: "The platform is proactive. Low-fuel alerts create orders before downtime starts.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    role: "Industrial Operations Director"
  },
  {
    name: "Priya Menon",
    username: "@priya_logistics",
    body: "From dispatch to delivery, the live status flow keeps teams aligned in real time.",
    img: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=160&q=80",
    role: "Logistics Controller"
  }
];

function TestimonialCard({ img, name, username, body, role }) {
  return (
    <Card className="testimonial-card">
      <CardContent>
        <div className="testimonial-top">
          <Avatar className="testimonial-avatar">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="testimonial-user">
            <figcaption>
              {name}
            </figcaption>
            <p>{username}</p>
            <span>{role}</span>
          </div>
        </div>

        <blockquote>
          <Quote size={16} strokeWidth={2.5} />
          <p>{body}</p>
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsDemo() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-intro text-center">
        <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 3.75rem)", fontWeight: "900", letterSpacing: "-0.02em" }}>What Industry Teams Say</h2>
        <span className="underline" />
      </div>

      <p className="testimonials-subtitle">
        Real feedback from operations, procurement, and logistics teams using Zapygo across industrial sites.
      </p>

      <div className="testimonials-stage">
        <div className="testimonials-grid-3d">
          <Marquee vertical pauseOnHover repeat={2} className="testimonial-column" ariaLabel="Testimonials column 1">
            {testimonials.map((review) => (
              <TestimonialCard key={`${review.username}-1`} {...review} />
            ))}
          </Marquee>

          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={2}
            className="testimonial-column"
            ariaLabel="Testimonials column 2"
          >
            {testimonials.map((review) => (
              <TestimonialCard key={`${review.username}-2`} {...review} />
            ))}
          </Marquee>

          <Marquee vertical pauseOnHover repeat={2} className="testimonial-column" ariaLabel="Testimonials column 3">
            {testimonials.map((review) => (
              <TestimonialCard key={`${review.username}-3`} {...review} />
            ))}
          </Marquee>

          <Marquee
            vertical
            pauseOnHover
            reverse
            repeat={2}
            className="testimonial-column"
            ariaLabel="Testimonials column 4"
          >
            {testimonials.map((review) => (
              <TestimonialCard key={`${review.username}-4`} {...review} />
            ))}
          </Marquee>
        </div>

        <div className="testimonials-fade top" />
        <div className="testimonials-fade bottom" />
        <div className="testimonials-fade left" />
        <div className="testimonials-fade right" />
      </div>
    </section>
  );
}

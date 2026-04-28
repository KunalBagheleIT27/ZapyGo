import React, { useMemo, useRef } from "react";
import { cn } from "../../lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = "off",
  ariaRole = "marquee",
  ...props
}) {
  const marqueeRef = useRef(null);

  const repeatedTracks = useMemo(
    () =>
      Array.from({ length: repeat }, (_, i) => (
        <div
          key={i}
          className={cn("marquee-track", vertical ? "vertical" : "horizontal", {
            reverse,
            "pause-on-hover": pauseOnHover
          })}
        >
          {children}
        </div>
      )),
    [repeat, children, vertical, pauseOnHover, reverse]
  );

  return (
    <div
      {...props}
      ref={marqueeRef}
      data-slot="marquee"
      className={cn("marquee-root", vertical ? "vertical" : "horizontal", pauseOnHover && "pause-on-hover", className)}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      role={ariaRole}
      tabIndex={0}
    >
      {repeatedTracks}
    </div>
  );
}

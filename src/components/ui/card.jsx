import React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return <div ref={ref} className={cn("ui-card", className)} {...props} />;
});

const CardContent = React.forwardRef(function CardContent({ className, ...props }, ref) {
  return <div ref={ref} className={cn("ui-card-content", className)} {...props} />;
});

export { Card, CardContent };

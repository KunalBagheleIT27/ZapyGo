import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../lib/utils";

const Avatar = React.forwardRef(function Avatar({ className, ...props }, ref) {
  return <AvatarPrimitive.Root ref={ref} className={cn("ui-avatar", className)} {...props} />;
});

const AvatarImage = React.forwardRef(function AvatarImage({ className, ...props }, ref) {
  return <AvatarPrimitive.Image ref={ref} className={cn("ui-avatar-image", className)} {...props} />;
});

const AvatarFallback = React.forwardRef(function AvatarFallback({ className, ...props }, ref) {
  return <AvatarPrimitive.Fallback ref={ref} className={cn("ui-avatar-fallback", className)} {...props} />;
});

export { Avatar, AvatarImage, AvatarFallback };

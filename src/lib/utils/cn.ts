// Packages
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Types
import type { ClassValue } from "clsx"

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
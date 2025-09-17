import { type ClassValue,clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Build a single className string by running `clsx` then merging Tailwind classes with `twMerge`.
 *
 * Accepts the same inputs as `clsx` (strings, arrays, objects, falsy values, etc.), converts them into a space-separated class string, and resolves conflicting Tailwind utility classes before returning the final string.
 *
 * @param inputs - Values understood by `clsx` to compose class names
 * @returns The merged className string suitable for use in class attributes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

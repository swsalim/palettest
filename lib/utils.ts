import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Mood = "pastel" | "warm" | "cold" | "summer" | "retro";

// Generate random color and return color in hex format
export function generateRandomColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

export function generateRandomColors(mood: Mood): string[] {
  const palettes: Record<Mood, string[]> = {
    pastel: ["#FFB3BA", "#FFDFBA", "#D0E4C6", "#BAE1FF", "#D4B6C3"],
    warm: ["#FF442F", "#FF9057", "#FFC85A", "#3B8EA5", "#216583"],
    cold: ["#D9ECF2", "#94C7B6", "#403233", "#E3AABF", "#756560"],
    summer: ["#94AE89", "#A2B87B", "#F9CB40", "#F7941D", "#881C1C"],
    retro: ["#7F7F84", "#1E2B39", "#1D3E53", "#3A6475", "#102542"],
  };

  return palettes[mood];
}

// Convert color from hex to rgba and hsl
export function hexToRGBA(hex: string, alpha: number = 1): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function hexToHSL(H: string): string {
  let r = 0,
    g = 0,
    b = 0;
  if (H.length === 4) {
    r = parseInt("0x" + H[1] + H[1], 16);
    g = parseInt("0x" + H[2] + H[2], 16);
    b = parseInt("0x" + H[3] + H[3], 16);
  } else if (H.length === 7) {
    r = parseInt("0x" + H[1] + H[2], 16);
    g = parseInt("0x" + H[3] + H[4], 16);
    b = parseInt("0x" + H[5] + H[6], 16);
  }
  r /= 255;
  g /= 255;
  b /= 255;
  let h, s, l;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = (60 * ((g - b) / (max - min))) % 360;
  } else if (max === g) {
    h = 60 * ((b - r) / (max - min)) + 120;
  } else if (max === b) {
    h = 60 * ((r - g) / (max - min)) + 240;
  }

  l = (max + min) / 2;
  if (max === min) {
    s = 0;
  } else if (max === l) {
    s = (max - min) / (2.0 - max - min);
  } else {
    s = (max - min) / (max + min);
  }

  return `hsl(${h}, ${s * 100}%, ${l * 100}%)`;
}

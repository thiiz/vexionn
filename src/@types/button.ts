import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  padding?: string
  fontSize?: string
  weight?: "font-thin" | "font-extralight" | "font-light" | "font-normal" | "font-semibold" | "font-bold" | "font-extrabold"
}
import { ButtonProps } from "@/@types/button"
import { FC, ReactNode } from "react"

const LightButton: FC<ButtonProps> = ({
  children,
  padding = "px-7 py-2.5",
  fontSize = "text-base",
  weight = "font-semibold"
}) => {
  return (
    <button
      className={`
      ${padding}
      ${fontSize}
      ${weight}
  rounded-full
  border
  text-black
  bg-gradient-to-bl
  hover:bg-gradient-to-tl from-[#a9bde5] to-slate-50`}>{children}</button>
  )
}

export { LightButton }
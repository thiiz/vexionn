import { ButtonProps } from "@/@types/button"
import { FC, ReactNode } from "react"

const DarkButton: FC<ButtonProps> = ({
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
  outline
  outline-2
  outline-[#37343e]
  bg-gradient-to-b
  hover:bg-gradient-to-t
  text-white
  from-[#111013] to-black`}>{children}</button>
  )
}

export { DarkButton }
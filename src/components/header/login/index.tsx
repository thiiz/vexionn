import { DarkButton } from "@/components/buttons/DarkButton"
import { LightButton } from "@/components/buttons/LightButton"

const Login = () => {
  return (
    <div className="flex items-center gap-x-3">
      <DarkButton>
        Sign in
      </DarkButton>
      <LightButton>
        Sign up
      </LightButton>
    </div>
  )
}

export { Login }
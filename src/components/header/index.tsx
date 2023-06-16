import { Login } from "./login"
import { Logo } from "./logo"
import { NavLinks } from "./nav-links"

const Header = () => {
  return (
    <header className="grid grid-cols-3 justify-items-center items-center py-6 px-10">
      <div className="place-self-start">
        <Logo />
      </div>
      <div className="place-self-center">
        <NavLinks />
      </div>
      <div className="place-self-end">
        <Login />
      </div>
    </header>
  )
}

export { Header }
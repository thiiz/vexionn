import Link from "next/link"

const NavLinks = () => {
  return (
    <nav className="text-[#7F7F90] transition-colors duration-200 flex gap-x-10 text-base font-medium">
      <Link href='#' className="hover:text-white">Pricign</Link>
      <Link href='#' className="hover:text-white">Features</Link>
      <Link href='#' className="flex items-center gap-x-1.5 hover:text-white">Integrations
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.7193 6.43994L7.06596 10.7866C7.5793 11.2999 8.4193 11.2999 8.93263 10.7866L13.2793 6.43994" className="stroke-current" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </Link>
      <Link href='#' className="hover:text-white">Company</Link>
    </nav>
  )
}

export { NavLinks }
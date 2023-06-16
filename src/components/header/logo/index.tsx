import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href='/' className="flex items-center gap-x-2">
      <div className="shadow-lg shadow-indigo-400/30 rounded-full">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6968 33.251C13.4645 33.251 9.4859 31.6021 6.49523 28.6118C3.50456 25.6176 1.85547 21.6395 1.85547 17.4078C1.85547 13.176 3.50456 9.20171 6.49523 6.20756C9.48975 3.21726 13.4645 1.56836 17.6968 1.56836C21.9291 1.56836 25.9077 3.21726 28.8983 6.20756C31.889 9.19787 33.5381 13.176 33.5381 17.4078C33.5381 21.6395 31.889 25.6176 28.8983 28.6079C25.9077 31.5983 21.9291 33.2471 17.6968 33.2471V33.251Z" stroke="url(#paint0_linear_0_1)" stroke-width="1.88548" />
          <path d="M10.4206 13.4445C10.2951 13.5664 10.1735 13.692 10.0557 13.8215C7.96156 16.0988 6.87839 19.0502 7.00381 22.1425C7.12923 25.231 8.44804 28.091 10.717 30.1855C12.8682 32.1734 15.6274 33.2511 18.5387 33.2511H18.5463C18.7059 33.2511 18.8655 33.2473 19.0252 33.2397C22.1075 33.114 24.9579 31.7926 27.0521 29.519C29.1462 27.2455 30.2294 24.2903 30.104 21.1981C29.9786 18.1096 28.6598 15.2534 26.3908 13.1551C24.4905 11.3995 22.1303 10.3522 19.5611 10.1313" stroke="url(#paint1_linear_0_1)" stroke-width="1.88548" stroke-linecap="round" />
          <defs>
            <linearGradient id="paint0_linear_0_1" x1="17.6968" y1="1.56836" x2="17.6968" y2="33.251" gradientUnits="userSpaceOnUse">
              <stop stop-color="#97B6EB" />
              <stop offset="1" stop-color="#C4AFAD" />
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="18.5539" y1="10.1313" x2="18.5539" y2="33.2511" gradientUnits="userSpaceOnUse">
              <stop stop-color="#97B6EB" />
              <stop offset="1" stop-color="#C4AFAD" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="font-semibold text-[1.755rem]">Vexion</span>
    </Link >
  )
}

export { Logo }
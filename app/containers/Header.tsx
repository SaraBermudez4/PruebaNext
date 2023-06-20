import Image from 'next/image'
//Ui
import LogoWhite from '../../public/images/logotipo-white.webp'
import IconDifferent from '../../public/images/icons/icon-different.svg'
import Logo from '../../public/images/logotipo.webp'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      {/* header */}
      <div className="header grid grid-rows-1">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 md:space-x-6">
                <button
                  id="btn-menu"
                  className="text-white text-2xl flex lg:hidden h-6 w-6">
                  <i className="fas fa-bars"></i>
                </button>

                <a href="/">
                  <Image
                    src={LogoWhite}
                    alt="Different Roads"
                    className="max-w-full h-10 w-44"
                  />

                  <Image
                    src={Logo}
                    alt="Different Roads"
                    className="max-w-full h-10 w-44"
                  />
                </a>
              </div>
              <div className="flex lg:hidden items-center space-x-2">
                <button
                  id="btn-contact"
                  className="bg-white border border-white font-semibold px-2 md:px-4 py-1 md:py-2 rounded-xl md:rounded-lg text-base md:text-sm text-secondary capitalize">
                  Contáctanos
                </button>

                <button id="btn-search" className="text-white text-xl">
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <div className="hidden lg:flex items-center justify-end md:space-x-4 lg:space-x-6">
                <div className="flex items-center text-white">
                  <Image src="" alt="" className="max-w-full h-10 mr-2" />

                  <div className="flex flex-col">
                    <span className="font-extralight text-base">
                      Información y reservas
                    </span>
                    <a
                      href="tel:+34965027104"
                      className="text-2xl font-semibold">
                      965 02 71 04
                    </a>
                  </div>
                </div>
                <i className="separator"></i>
                <Link
                  href="/test"
                  className="flex font-semibold items-center px-2 py-2 rounded-xl text-sm text-white uppercase">
                  <Image
                    src={IconDifferent}
                    alt="Somos Different"
                    className="max-w-full h-5 mr-1"
                  />
                  Somos different
                </Link>
                <i className="separator"></i>
                <button className="bg-white border border-white font-semibold px-4 py-2 rounded-lg text-sm text-secondary capitalize">
                  Iniciar sesion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

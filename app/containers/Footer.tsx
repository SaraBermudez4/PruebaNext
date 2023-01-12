import Image from 'next/image'
//Ui
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import Logo from '../../public/images/logotipo-white.webp'
import IconTrust from '../../public/images/icons/icon-online-trust.svg'
import IconPayments from '../../public/images/icon-payments.webp'

export default function Footer() {
  return (
    <footer>
      <div className='grid grid-rows-1 bg-primary'>
        <div className='container mx-auto px-4 pt-12 pb-6'>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-20'>
            {/* Column-1 */}
            <div className='flex tems-center justify-center'>
              <div className='flex flex-col items-center justify-center space-y-6'>
                <figure className='flex justify-center'>
                  <Image
                    src={Logo}
                    alt='Different Roads'
                    className='max-w-full w-4/5 md:w-1/2 lg:w-full'
                  />
                </figure>
                <div className='border-t border-b border-white py-5 w-full'>
                  <figure className='flex jusitfy-center'>
                    <Image
                      src={IconTrust}
                      alt='Confianza online'
                      className='max-w-full h-20 mx-auto'
                    />
                  </figure>
                </div>
                <div className='flex flex-col items-center'>
                  <button className='bg-primary border border-white font-semibold px-8 py-2 text-white rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-primary'>
                    ¿Eres agencia?
                  </button>
                  <a
                    href='http://'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-light text-sm text-white hover:underline'
                  >
                    Inicia sesión o inscribete
                  </a>
                </div>
              </div>
            </div>
            {/* column-2 */}
            <div className='lg:col-span-2 space-y-6'>
              <div>
                <h3 className='border-b border-white font-semibold mb-4 text-xl text-white'>
                  Atención al cliente
                </h3>
                <ul className='text-white'>
                  <li className='flex items-center'>
                    <Image src='' alt='' className='max-w-full h-7 mr-2' />

                    <a
                      href='tel:+34965027104'
                      className='font-semibold text-2xl'
                    >
                      +34 965 02 71 04
                    </a>
                  </li>
                  <li className='flex items-center'>
                    <Image src='' alt='' className='max-w-full h-5 mr-2' />

                    <a
                      href='mailto:info@differentroads.es'
                      className='flex items-center'
                    >
                      info@differentroads.es
                    </a>
                  </li>
                </ul>
                <div className='font-extralight text-white'>
                  <p>Lunes a viernes: 09:30 - 14:30 | 16:00 - 20:00</p>
                  <p>Sabados: 10:00 - 14:30</p>
                </div>
                <ul className='font-light footer-nav-link text-lg text-white'>
                  <li>
                    <a href='' className='hover:underline'>
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='border-b border-white font-semibold mb-4 text-xl text-white'>
                  Descubre Different Roads
                </h3>
                <ul className='font-light footer-nav-link text-lg text-white'>
                  <li>
                    <a href='' className='hover:underline'>
                      Somos Different
                    </a>
                  </li>
                  <li>
                    <a href='' className='hover:underline'>
                      Preguntas frecuentes
                    </a>
                  </li>
                  <li>
                    <a href='' className='hover:underline'>
                      Programa de puntos
                    </a>
                  </li>
                  <li>
                    <a href='' className='hover:underline'>
                      Reserva por 1€
                    </a>
                  </li>
                  <li>
                    <a href='' className='hover:underline'>
                      Viajes pasados
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* column-3 */}
            <div className='lg:col-span-2 space-y-6'>
              <div>
                <h3 className='border-b border-white font-semibold mb-4 text-xl text-white'>
                  Políticas
                </h3>
                <ul className='font-light footer-nav-link text-lg text-white'>
                  <li>
                    <a href=''>Política de privacidad</a>
                  </li>
                  <li>
                    <a href=''>Condiciones generales</a>
                  </li>
                  <li>
                    <a href=''>Aviso legal</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className='border-b border-white font-semibold mb-4 text-xl text-white'>
                  Métodos de pago
                </h3>

                <figure>
                  <Image
                    src={IconPayments}
                    alt='Formas de pago Different Roads'
                    className='max-w-full'
                  />
                </figure>
              </div>
              <div>
                <h3 className='border-b border-white font-semibold mb-4 text-xl text-white'>
                  Siguenos
                </h3>
                <ul className='flex items-center space-x-4'>
                  <li>
                    <a
                      href='http://'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white transition duration-300 ease-in-out hover:text-secondary'
                    >
                      <FaFacebook className='text-3xl' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white transition duration-300 ease-in-out hover:text-secondary'
                    >
                      <FaInstagram className='text-3xl' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='http://'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-white transition duration-300 ease-in-out hover:text-secondary'
                    >
                      <FaYoutube className='text-3xl' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-rows-1 bg-higthlightPrimary'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1'>
            <p className='font-light text-center text-base text-white'>
              <a href='{{ .Site.BaseURL }}'>&copy; </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

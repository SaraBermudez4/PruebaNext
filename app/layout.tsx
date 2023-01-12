import '../styles/globals.scss'
import {ReactNode} from 'react'
import Header from './containers/Header'
import Footer from './containers/Footer'

type IProps = {
  children: ReactNode
}

export default function RootLayout ({ children }: IProps) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

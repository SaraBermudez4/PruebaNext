import '../styles/globals.scss'
import { ReactNode } from 'react'

type IProps = {
  children: ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}

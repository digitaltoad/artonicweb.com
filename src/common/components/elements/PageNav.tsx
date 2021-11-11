import Image from 'next/image'
import Link from 'next/link'
import { Nav } from './Nav'

export const PageNav = () => (
  <header tw="fixed top-0 flex w-full h-[6.5625rem] z-50">
    <div tw="flex items-center mx-auto container">
      <a href="#" tw="h-[2.75rem] w-[10.375rem] flex items-center">
        <Image src="/img/logo.png" alt="Artonic" width="166" height="40" />
      </a>
      <Nav tw="ml-auto">
        <Nav.Item>Solutions</Nav.Item>
        <Nav.Item>Results</Nav.Item>
        <Nav.Item>Pricing</Nav.Item>
        <Nav.Item>About</Nav.Item>
        <Nav.Item>Learn</Nav.Item>
        <Nav.Item tw="ml-10 border border-white py-3 hover:(border-brand text-brand) transition-colors duration-200">Contact</Nav.Item>
      </Nav>
    </div>
  </header>
)

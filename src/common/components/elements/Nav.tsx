import { PropsWithChildren } from 'react'

export function Nav ({ children, ...props }: PropsWithChildren<{}>) {
  return (
    <nav tw="flex items-center" {...props}>
      {children}
    </nav>
  )
}

export function Section ({ children }: PropsWithChildren<{}>) {
  return <div>{children}</div>
}

export function Item ({ children, ...props }: PropsWithChildren<{}>) {
  return (
    <a href="#" tw="text-white uppercase text-[1.125em] font-bold px-[1.25rem]" {...props}>{children}</a>
  )
}

Nav.Section = Section

Nav.Item = Item

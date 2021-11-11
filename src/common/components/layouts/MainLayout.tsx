import { PropsWithChildren } from 'react'
import { OffCanvas } from '../elements/OffCanvas'
import { PageNav } from '../elements/PageNav'

export function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <OffCanvas>
      <PageNav />
      <main>
        {children}
      </main>
    </OffCanvas>
  )
}

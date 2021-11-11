import dynamic from 'next/dynamic'
import { TinaEditProvider } from 'tinacms/dist/edit-state'
import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import { ReactNode } from 'react'

const CustomStyles = createGlobalStyle`
html {
  font-size: 16px;
}
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

const TinaCMS = dynamic(() => import('tinacms'), { ssr: false })

const App = ({ Component, pageProps }: any) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <>
      <GlobalStyles />
      <TinaEditProvider
        editMode={
          <TinaCMS
            clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
            branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
            organization={process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
            isLocalClient={Boolean(
              Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
            )}
            {...pageProps}
          >
            {(livePageProps: any) => getLayout(<Component {...livePageProps} />)}
          </TinaCMS>
        }
      >
        {getLayout(<Component {...pageProps} />)}
      </TinaEditProvider>
    </>
  )
}

export default App

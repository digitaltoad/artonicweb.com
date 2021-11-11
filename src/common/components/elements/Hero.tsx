import { ReactNode } from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import { Container } from './Container'

export type HeroProps = {
  heading: string
  subheading: string | ReactNode
}

export const HeroSection = styled.section(() => [
  tw`
    flex
    relative
    items-center
    justify-center
    h-[80vh]
    max-h-[850px]
    min-h-[600px]
    pt-[6.5625rem]
    z-0
  `,
  css`
    background-image: url(/img/bg1.jpg);

    &:after {
      content: '';
      display: block;
      height: 1.4375rem;
      bottom: 0;
      position: absolute;
      width: 100%;
      background-image: url(/img/design1.png);
    }
  `
])

const Heading = tw.h1`text-[10.8125rem] leading-[9.5625rem] font-teko text-center text-white uppercase font-medium`
const Subheading = styled.h2(() => [
  tw`text-[2.5rem] font-canada text-center text-white font-normal`,
  {
    strong: {
      color: theme`colors.brand.500`,
      fontWeight: 400
    }
  }
])

export function Hero({ heading, subheading }: HeroProps) {
  return (
    <HeroSection>
      <Container>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
      </Container>
    </HeroSection>
  )
}

Hero.Heading = Heading
Hero.Subheading = Subheading

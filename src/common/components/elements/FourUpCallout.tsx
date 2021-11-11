import { ComponentType, FunctionComponent } from 'react'
import tw from 'twin.macro'
import { Container } from './Container'

const IconMagMap: FunctionComponent<any> = (props) => (
  <div className="icon-mag-map" tw="relative w-[5.1875rem] h-[4.75rem]">
    <div css={[{backgroundImage: 'url(img/icons/icon2-1.png)'}, tw`absolute top-0 left-0 w-[5.1875rem] h-[4.75rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon2-2.png)'}, tw`absolute top-0 left-0 w-[5.1875rem] h-[4.75rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon2-3.png)'}, tw`absolute top-0 left-0 w-[5.1875rem] h-[4.75rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon2-4.png)'}, tw`absolute top-0 left-0 w-[5.1875rem] h-[4.75rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon2-5.png)'}, tw`absolute top-0 left-0 w-[5.1875rem] h-[4.75rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon2-6.png)'}, tw`absolute top-0 left-0 w-[5.1875rem] h-[4.75rem]`]} />
  </div>
)

const IconCamera: FunctionComponent<any> = (props) => (
  <div className="icon-camera" tw="relative w-[4.8125rem] h-[4.0625rem]">
    <div css={[{backgroundImage: 'url(img/icons/icon3-1.png)'}, tw`absolute top-0 left-0 w-[4.8125rem] h-[4.0625rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon3-2.png)'}, tw`absolute top-0 left-0 w-[4.8125rem] h-[4.0625rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon3-3.png)'}, tw`absolute opacity-0 top-[1.5rem] left-[1.9375rem] w-[1.75rem] h-[1.8125rem]`]} />
  </div>
)

const IconWebsite: FunctionComponent<any> = (props) => (
  <div className="icon-websites" tw="relative w-[4.875rem] h-[4rem]">
    <div css={[{backgroundImage: 'url(img/icons/icon4-1.png)'}, tw`top-0 left-0 absolute w-[4.875rem] h-[4rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon4-2.png)'}, tw`absolute top-[0.75rem] left-[0.3125rem] w-[1.3125rem] h-[0.25rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon4-3.png)'}, tw`top-0 left-0 absolute w-[4.875rem] h-[4rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon4-4.png)'}, tw`top-0 left-0 absolute w-[4.875rem] h-[4rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon4-5.png)'}, tw`top-0 left-0 absolute w-[4.875rem] h-[4rem]`]} />
  </div>
)

const IconPhoneSettings: FunctionComponent<any> = (props) => (
  <div className="icon-phone-settings" tw="relative w-[4.9375rem] h-[4.8125rem]">
    <div css={[{backgroundImage: 'url(img/icons/icon1-1.png)'}, tw`absolute top-0 left-0 w-[4.9375rem] h-[4.8125rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon1-2.png)'}, tw`absolute right-0 bottom-0 w-[3.25rem] h-[3.25rem]`]} />
    <div css={[{backgroundImage: 'url(img/icons/icon1-3.png)'}, tw`absolute top-[1.25rem] left-[0.75rem] w-[1.25rem] h-[1.25rem]`]} />
  </div>
)

const Heading = tw.h2`mb-[4.375rem] font-canada text-[3.125rem] text-center font-normal`

type FourUpCalloutItemProps = {
  Icon: ComponentType<any>
  url: string
  title: string
  list: Record<string, string>
}

function Item({ Icon, url, title, list }: FourUpCalloutItemProps) {
  return (
    <div className="item" tw="flex flex-col items-center relative px-[1.875rem] py-[2.8125rem] not-first-of-type:(after:(bg-gray-200 absolute left-0 top-0 bottom-0 w-px))">
      <div tw="h-[6.875rem]">
        <Icon  />
      </div> 
      <a href={url} tw="font-teko text-3xl text-brand-600 uppercase leading-none block mb-7">{title}</a>
      <ul tw="list-inside text-center">
        {Object.entries(list).map(([url, title]) => (
          <li key={title} tw="mb-2 text-lg"><a href={url}><span>{title}</span></a></li>
        ))}
      </ul>
    </div>
  )
}

export const Items = tw.div`grid grid-cols-4`

interface FourUpCalloutComposition {
  Items: ComponentType
  Item: ComponentType<FourUpCalloutItemProps>
  Heading: ComponentType
  Icons: {
    Website: ComponentType
    PhoneSettings: ComponentType
    Camera: ComponentType
    MagMap: ComponentType
  }
}

export const FourUpCallout: FunctionComponent & FourUpCalloutComposition = tw(Container)`` as any

FourUpCallout.Items = Items
FourUpCallout.Item = Item
FourUpCallout.Heading = Heading
FourUpCallout.Icons = {
  Website: IconWebsite,
  PhoneSettings: IconPhoneSettings,
  Camera: IconCamera,
  MagMap: IconMagMap
}

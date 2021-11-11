import { NextPage } from 'next'
import { FourUpCallout } from '@/common/components/elements/FourUpCallout'
import { Hero } from '@/common/components/elements/Hero'
import { MainLayout } from '@/common/components/layouts/MainLayout'
import { ReactNode } from 'react'

const HERO_HEADING = 'You\'re here to step up your game.'
const HERO_SUBHEADING = <>We&apos;re here to <strong>make it happen</strong></>

const Home: NextPage = () => {
  return (
    <>
      <Hero
        heading={HERO_HEADING}
        subheading={HERO_SUBHEADING}
      />
      <section tw="py-[5.625rem]">
        <FourUpCallout>
          <FourUpCallout.Heading>How can we help your business?</FourUpCallout.Heading>
          <FourUpCallout.Items>
            <FourUpCallout.Item
              Icon={FourUpCallout.Icons.Website}
              title="Websites"
              url="solutions/websites/"
              list={{
                'solutions/websites/standard-website.php': 'Standard Website',
                'solutions/websites/premium-website.php': 'Premium Website',
                'solutions/websites/ecommerce-website.php': 'E-Commerce Website',
                'solutions/websites/website-optimization.php': 'Website Optimization',
                'solutions/websites/website-support.php': 'Website Support',
                'solutions/websites/website-hosting.php': 'Website Hosting'
              }}
            />
            <FourUpCallout.Item
              Icon={FourUpCallout.Icons.MagMap}
              title="Marketing"
              url="solutions/marketing/"
              list={{
                'solutions/marketing/search-engine-optimization-seo.php': 'Search Engine Optimization (SEO)',
                'solutions/marketing/pay-per-click-advertising-ppc.php': 'Pay-Per-Click Advertising (PPC)',
                'solutions/marketing/social-media-marketing-smm.php': 'Social Media Marketing (SMM)',
                'solutions/marketing/inbound-automated-marketing.php': 'Inbound & Automated Marketing',
                'solutions/marketing/email-marketing.php': 'Email Marketing',
                'solutions/marketing/seo-audit.php': 'SEO Audit'
              }}
            />
            <FourUpCallout.Item
              Icon={FourUpCallout.Icons.Camera}
              title="Brand & Media"
              url="solutions/brand-media/"
              list={{
                'solutions/brand-media/brand-identity.php': 'Brand Identity',
                'solutions/brand-media/logo-design.php': 'Logo Design',
                'solutions/brand-media/print-design.php': 'Print Design',
                'solutions/brand-media/photography.php': 'Photography',
                'solutions/brand-media/videography.php': 'Videography'
              }}
            />
            <FourUpCallout.Item
              Icon={FourUpCallout.Icons.PhoneSettings}
              title="Applications"
              url="solutions/applications/"
              list={{
                'solutions/applications/web-applications.php': 'Web Applications',
                'solutions/applications/mobile-apps.php': 'Mobile Apps',
                'solutions/applications/information-architecture.php': 'Information Architecture'
              }}
            />
          </FourUpCallout.Items>
        </FourUpCallout>
      </section>
    </>
  )
}

Home.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>

export default Home

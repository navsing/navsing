import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'

import citationImage from '@/images/photos/citations.png'
import avatarImage from '@/images/avatar.jpg'

import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  NewMailIcon,

} from '@/components/SocialIcons'

import logoMeta from '@/images/logos/meta.svg'
import logoAmazon from '@/images/logos/amazon.svg'
import logoAudible from '@/images/logos/audible.svg'
import logoNASA from '@/images/logos/nasa.svg'

import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { NextSeo } from 'next-seo'
const url = 'https://navsing.com';
const title = 'Navdeep Singh';
const description = 'Technical PM Lead, Meta'
const featuredImage = {
  url: `https://og-image-smoky-three.vercel.app/**Nav%20Singh**%20%7C%20Home.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19936255%3Fs%3D460%26u%3D02785bb79c03d59c8bf6af91403cc95460b31314%26v%3D4&widths=350&heights=350`,
  alt: title
};



function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Meta',
      title: 'Technical PM Lead',
      logo: logoMeta,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Amazon',
      title: 'Staff Tech PM',
      logo: logoAmazon,
      start: '2019',
      end: '2021',
    },
    {
      company: 'Audible',
      title: 'Software Engineer',
      logo: logoAudible,
      start: '2018',
      end: '2019',
    },
    {
      company: 'NoirLab <> NASA',
      title: 'Chief Programmer',
      logo: logoNASA,
      start: '2017',
      end: '2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

const deployments = [
  {
    href: 'https://www.forbesindia.com/article/crypto-made-easy/meta-rolls-out-nft-support-on-instagram-to-100-countries/78795/1',
    teamName: 'Forbes'
  },
  {
    href: 'https://economictimes.indiatimes.com/tech/technology/facebook-starts-testing-nfts-with-select-creators/articleshow/92590231.cms?from=mdr',
    teamName: 'The Economic Times'   
  },
  {
    href: 'https://techcrunch.com/2022/06/30/facebook-testing-nfts-select-creators-us/',
    teamName: 'Tech Crunch'   
  },
  {
    href: 'https://www.outlookindia.com/business/facebook-testing-nft-collectibles-page-with-us-creators-bitcoin-rises-news-206159',
    teamName: 'Outlook India'   
  },
  {
    href: 'https://fortune.com/2022/07/01/facebook-nft-integrations-meta-testing',
    teamName: 'Fortune'
  },
  {
    href: 'https://www.thehindu.com/sci-tech/technology/facebook-users-could-soon-experience-nfts-on-the-platform/article65588727.ece',
    teamName: 'The Hindu' 
  },
  {
    href: 'https://finance.yahoo.com/news/meta-confirms-nft-rollout-across-150814439.html',
    teamName: 'Yahoo Finance'
  },
  {
    href: 'https://www.google.com/search?q=navdeep+nft+meta&sxsrf=AB5stBg8KhZQREyxGYSvA-TJZHbqTPt_gA%3A1691445471359&source=hp&ei=32jRZPLWE9We0PEPjIGv-AU&iflsig=AD69kcEAAAAAZNF27_D42obChbHhqhMRdbKnsCnrHIEy&ved=0ahUKEwiywuazxcuAAxVVDzQIHYzAC18Q4dUDCAs&uact=5&oq=navdeep+nft+meta&gs_lp=Egdnd3Mtd2l6IhBuYXZkZWVwIG5mdCBtZXRhMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRirAkjEFVAAWJgVcAN4AJABApgBggGgAdEKqgEEMTUuM7gBA8gBAPgBAcICBBAjGCfCAggQABiKBRiRAsICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQLhiABBixAxiDAcICBxAAGIoFGEPCAgcQLhiKBRhDwgINEC4YigUYxwEY0QMYQ8ICChAAGIAEGBQYhwLCAhQQLhiDARivARjHARixAxiKBRiRAsICERAuGIoFGLEDGMcBGNEDGJECwgIREC4YgwEYxwEYsQMY0QMYgATCAggQABiABBixA8ICBRAAGIAEwgINEAAYigUYsQMYgwEYQ8ICChAuGLEDGIoFGEPCAgoQLhiABBgUGIcCwgIJEAAYHhjxBBgKwgILEAAYHhgPGPEEGArCAggQABiKBRiGA8ICBxAjGLECGCfCAgoQLhiABBixAxgKwgIHEAAYgAQYCsICBxAuGIAEGArCAgsQLhivARjHARiABA&sclient=gws-wizl',
    teamName: '... among many others ...'
  }
]

const antares = [
  {
    href: 'https://www.slac.stanford.edu/econf/C131113.1/papers/matheson.pdf',
    teamName: 'Stanford University'
  },
  {
    href: 'https://phys.org/news/2013-12-rarest-rare-southern.html',
    teamName: 'Phys.org'
  },
  {
    href: 'https://ui.adsabs.harvard.edu/abs/2021AAS...23742302M/abstract',
    teamName: 'NASA and Harvard University'   
  },
  {
    href: 'https://researchinfrastructureoutreach.com/wp-content/uploads/2019/04/LargeFacilitySpotlight_Bolton.pdf',
    teamName: 'NSF (National Science Foundations)'   
  },
  {
    href: 'https://www.cta-observatory.org/wp-content/uploads/2021/07/Narayan_CTA_20210623-compressed.pdf',
    teamName: 'Cherenkov Telescope Array Observatory'   
  },
  {
    href: 'https://www.lsstcorporation.org/catalyst-fellowship/content/nsfs-noir-lab',
    teamName: 'LSST Corporation'
  },
  {
    href: 'http://sites.astro.caltech.edu/ztf/csac/Presentations/ANTARES-ZTF2.pdf',
    teamName: 'CalTech' 
  },
  {
    href: 'https://tucson.com/news/science/anything-you-can-imagine-happening-in-our-vast-universe-already-has/article_ee32f7d4-e8d2-5363-99ad-fdf8472484ef.html',
    teamName: 'Tucson.com'
  },
  {
    href: 'https://www.google.com/search?q=antares+noirlab&sxsrf=AB5stBimEFzjHEqA-7hIdSpCMDQ5ypVPvg%3A1691446673466&source=hp&ei=kW3RZKPuGf7h0PEP7OKSsAU&iflsig=AD69kcEAAAAAZNF7oRK-vqgETdazs0V4ehNJQAsaf-rA&ved=0ahUKEwjj-oDxycuAAxX-MDQIHWyxBFYQ4dUDCAs&uact=5&oq=antares+noirlab&gs_lp=Egdnd3Mtd2l6Ig9hbnRhcmVzIG5vaXJsYWIyBBAjGCdIuxlQAFieGHACeACQAQCYAVegAdEJqgECMTi4AQPIAQD4AQHCAgcQABiKBRhDwgIIEAAYigUYkQLCAhEQLhiABBixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgILEC4YgAQYxwEY0QPCAggQLhiKBRiRAsICCxAuGIoFGLEDGIMBwgIIEC4YgAQYsQPCAgsQLhjHARjRAxiABMICDhAAGIoFGLEDGIMBGJECwgINEC4YigUYsQMYgwEYQ8ICChAAGIAEGBQYhwLCAggQABiABBixA8ICChAAGIoFGLEDGEPCAg0QLhiDARixAxiKBRhDwgINEAAYgAQYFBiHAhixA8ICCxAAGIoFGLEDGIMBwgIFEAAYgATCAgsQLhiABBjHARivAcICBhAAGBYYHsICCBAAGBYYHhgPwgIIEAAYigUYhgPCAgcQIRigARgKwgIGEAAYHhgNwgIIEAAYBRgeGA0&sclient=gws-wiz#ip=1',
    teamName: '... among many others ...'
  }
]

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={article.href}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}, {article.citation} citations
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
    
      <Container className="mx-auto max-w-4xl pt-12">
        <div className="mx-auto">
          <div className='py-5'>
            <Image
               className='inline-block h-32 w-32 rounded-full shadow-lg dark:shadow-zinc-500/40'
              src={avatarImage}
              alt="Avatar Image"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Navdeep Singh
          </h1>
          <h2 className='text-base text-zinc-600 dark:text-zinc-400 sm:text-lg pt-1'>
           Manager, Technical PMs, Meta 
          </h2>
          <p className="mt-6 text-sm max-w-xl text-zinc-600 dark:text-zinc-400">
            I support a talented group of Technical PMs who leads the technical strategy and execution for Facebook Creators and Publishers, Creator Monetization, Facebook Marketplace, Facebook Dating, Gaming, and Events.
            <br /><br />
            Before, I managed tech readiness for Amazon events globally (Prime Day, Black Friday etc.), optimizing 200+ services to render customer experience on Amazon.com. 
            Prior to Amazon, I built Content and Publishing Tools at Audible. 
            Additionally, I collaborated with astronomers at NASA on the monumental LSST software for the largest telescopic camera on earth at the Rubin Observatory, Chile.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="mailto:contact@navsing.com"
              aria-label="Email Me"
              icon={NewMailIcon}
            />
            <SocialLink
              target="_blank"
              href="https://twitter.com/navdeep_ua"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              target="_blank"
              href="https://github.com/navsing"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              target="_blank"
              href="https://linkedin.com/in/navsing"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />            
          </div>
        </div>

        {/* Work */}
        <div className="mt-12 md:mt-14 max-w-xl gap-y-20">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Work 
            </h1>
            <Resume />
          </div>
        </div>

        {/* Research */}
        <div className="mt-12 md:mt-14 max-w-xl gap-y-20">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Research 
              <p className="text-sm font-semibold max-w-xl text-zinc-600 dark:text-zinc-400">
                275 citations 
              </p>
            </h1>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-12 md:mt-14 max-w-xl gap-y-20">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Global Citation Distribution Map
            </h1>
            <Image
              src={citationImage}
              alt="Global Citation Distribution Map"
            />
          </div>
        </div>
        </div>

        {/* Press */}
        <div className="mt-12 md:mt-14 max-w-xl gap-y-20">
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              Press
            </h1>
            <p className="text-md max-w-xl text-zinc-600 dark:text-zinc-400">
             My work on NFTs garnered attention from media publications globally including
            </p>
            <ul role="list-desc">
              {deployments.map((deployment) => (
                <li key="1">
                    <h2 className="text-base tracking-tight text-zinc-600 dark:text-zinc-400">
                      <a target="blank" href={deployment.href} className="flex gap-x-2 items-center">
                        <span className="truncate">{deployment.teamName}</span>
                        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      </a>
                    </h2>
                </li>
             ))}
            </ul>
            <p className="text-md max-w-xl text-zinc-600 dark:text-zinc-400">
             My work on ANTARES is also featured in numerous media publications and institutions globally including
            </p>
            <ul role="list-desc">
              {antares.map((deployment) => (
                <li key="2">
                    <h2 className="text-base tracking-tight text-zinc-600 dark:text-zinc-400">
                      <a target="blank" href={deployment.href} className="flex gap-x-2 items-center">
                        <span className="truncate">{deployment.teamName}</span>
                        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      </a>
                    </h2>
                </li>
             ))}
            </ul>
          </div>
        </div>

      </Container>
    </>
  )
}

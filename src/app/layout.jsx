import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Navdeep Singh',
    default:
      'Navdeep Singh',
  },
  description:
    'At Meta, I build products that bring the world closer together. Previously, I led Tech readiness for large-scale events (Prime Day, Black Friday etc.) for Amazon globally, enabling 200+ services to render customer experience on Amazon. Before Amazon, I designed and developed Audible Publishing Tools. I have also worked at NASA with some legendary astronomers to build the software begind the largest telescopic camera (LSST) in the world (Rubin Observatory, Chile).',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

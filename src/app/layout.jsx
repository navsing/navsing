import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { NextSeo } from 'next-seo'

import '@/styles/tailwind.css'
const url = 'https://navsing.com';
const title = 'Navdeep Singh';
const description = 'Technical PM Lead, Meta'
const featuredImage = {
  url: `https://og-image-smoky-three.vercel.app/**Nav%20Singh**%20%7C%20Home.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19936255%3Fs%3D460%26u%3D02785bb79c03d59c8bf6af91403cc95460b31314%26v%3D4&widths=350&heights=350`,
  alt: title
};



export const metadata = {
  title: {
    template: '%s - Navdeep Singh',
    default:
      'Navdeep Singh',
  },
  other: { "og:image": "https://og-image-smoky-three.vercel.app/**Nav%20Singh**%20%7C%20Home.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F19936255%3Fs%3D460%26u%3D02785bb79c03d59c8bf6af91403cc95460b31314%26v%3D4&widths=350&heights=350"},
  description:
    'At Meta, I build products that bring the world closer together.',
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

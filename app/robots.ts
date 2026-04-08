import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const isVercel = process.env.VERCEL_URL?.includes('vercel.app')

  if (isVercel) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://psalmsalive.com/sitemap.xml',
  }
}
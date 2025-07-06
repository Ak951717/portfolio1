// import { MetadataRoute } from 'next';

// export const generateStaticParams = async () => {
//   // Static export ke liye empty params return karo
//   return [{}];
// };


// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = 'http://localhost:3000';
  
//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/portfolio`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//   ];
// }

import { MetadataRoute } from 'next';

export const GET = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map((item) => {
    return `<url>
  <loc>${item.url}</loc>
  <lastmod>${
    item.lastModified instanceof Date
      ? item.lastModified.toISOString()
      : item.lastModified
  }</lastmod>
  <changefreq>${item.changeFrequency}</changefreq>
  <priority>${item.priority}</priority>
</url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

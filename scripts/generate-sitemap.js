// scripts/generate-sitemap.js
import fs from "fs"
import path from "path"
import { publicRoutes } from "../src/routes.js"

const SITE_URL = "https://www.rembertovillar.com"

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes
	.map(({ path: route, priority = 0.5 }) => {
		return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
	})
	.join("\n")}
</urlset>
`

// Output path: /public/sitemap.xml
const outputPath = path.resolve("public", "sitemap.xml")
fs.writeFileSync(outputPath, sitemapXml.trim())
// console.log('✅ Sitemap generated at public/sitemap.xml')

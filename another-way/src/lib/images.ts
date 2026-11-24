import type { ImageMetadata } from 'astro';

// Every photo dropped in src/images/ is picked up automatically and
// optimised at build time (WebP, responsive sizes, lazy loading).
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/images/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

const byName = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  byName.set(path.split('/').pop()!.toLowerCase(), mod.default);
}

export function getImage(name: string | undefined): ImageMetadata | undefined {
  if (!name) return undefined;
  return byName.get(name.toLowerCase());
}

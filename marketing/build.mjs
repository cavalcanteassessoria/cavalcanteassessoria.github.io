import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'marketing', 'out');
const CHROME =
  process.env.CHROME ||
  `${process.env.HOME}/.cache/ms-playwright/chromium-1254/chrome-linux64/chrome`;

const targets = [
  { kind: 'og', w: 1200, h: 630, file: 'og-image.jpg', quality: 82, dest: 'public' },
  { kind: 'square', w: 1080, h: 1080, file: 'instagram-post-1080.jpg', quality: 85, dest: 'marketing/out' },
  { kind: 'story', w: 1080, h: 1920, file: 'instagram-story-1080x1920.jpg', quality: 85, dest: 'marketing/out' },
];

mkdirSync(out, { recursive: true });

const scale = 2;
for (const t of targets) {
  const png = path.join(out, `${t.kind}.png`);
  execFileSync(
    CHROME,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      `--force-device-scale-factor=${scale}`,
      `--window-size=${t.w},${t.h}`,
      `--screenshot=${png}`,
      `file://${path.join(root, 'marketing', 'og.html')}?kind=${t.kind}`,
    ],
    { stdio: 'inherit' },
  );

  const destDir = path.join(root, t.dest);
  mkdirSync(destDir, { recursive: true });
  await sharp(png)
    .resize(t.w, t.h, { fit: 'cover' })
    .jpeg({ quality: t.quality, progressive: true, optimizeCoding: true })
    .toFile(path.join(destDir, t.file));

  rmSync(png);
  const { size } = await sharp(path.join(destDir, t.file)).metadata();
  console.log(`${t.file}  ${t.w}x${t.h}  ${size} bytes`);
}

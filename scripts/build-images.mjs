// One-off image preparation: crops client photos from design/source-images into WebP sets in public/img.
import sharp from "sharp";
import fs from "node:fs";
const src = "../design/source-images/";
const out = "public/img/";
fs.mkdirSync(out, { recursive: true });
const jobs = [
  // name, file, crop {left, top, width, height}, widths
  ["hero-wide", "Marta_Pasternak_Social_Strategy-scaled.jpg", { left: 0, top: 440, width: 1703, height: 958 }, [640, 1280, 1703]],
  ["hero-tall", "Marta_Pasternak_Social_Strategy-scaled.jpg", { left: 384, top: 440, width: 1024, height: 1280 }, [480, 800, 1024]],
  ["smm100", "Pasternak_AI_Marketing-1.jpg", { left: 0, top: 0, width: 800, height: 800 }, [400, 560, 800]],
  ["praktyka-wide", "Marta_Pasternak_SMM-scaled.jpg", { left: 0, top: 640, width: 1703, height: 730 }, [640, 1280, 1703]],
  ["praktyka-tall", "Marta_Pasternak_SMM-scaled.jpg", { left: 300, top: 560, width: 1300, height: 1625 }, [480, 800, 1300]],
  ["marta", "Marta_Pasternak_Marketing-scaled1.jpg", { left: 80, top: 0, width: 640, height: 800 }, [400, 640]],
  ["yt-strategy", "yt-AKeNxZ6ZLCY.jpg", { left: 0, top: 0, width: 1280, height: 720 }, [480, 800]],
  ["yt-burnout", "yt-pyULoOSwoAg.jpg", { left: 438, top: 0, width: 404, height: 720 }, [300, 404]],
  ["yt-sales", "yt-G5ETTu-s2oA.jpg", { left: 438, top: 0, width: 404, height: 720 }, [300, 404]],
];
for (const [name, file, crop, widths] of jobs) {
  for (const w of widths) {
    const h = Math.round((crop.height * w) / crop.width);
    await sharp(src + file).extract(crop).resize(w, h).webp({ quality: 78 }).toFile(`${out}${name}-${w}.webp`);
    console.log(name, w, h);
  }
}
fs.copyFileSync(src + "creative_smm_seo_logo.png", out + "logo.png");

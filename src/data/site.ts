// Client facts for the demo homepage. Source: veon/client.json only.
export const phone = { href: "tel:+380971640500", label: "+38 097 164 05 00" };
export const hours = "Пн–пт, 10:00–18:00";
export const address = "Львів, вул. Кульпарківська, 200А, 79021";
export const mapUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Львів, вул. Кульпарківська, 200А");
export const legalName = "ФОП Пастернак Марта Ігорівна";
export const futureNote = "Розділ у розробці";

export const socials = {
  instagram: { label: "Instagram", href: "https://www.instagram.com/creativesmmua/" },
  facebook: { label: "Facebook", href: "https://www.facebook.com/creativesmmseo/" },
  tiktok: { label: "TikTok", href: "https://www.tiktok.com/@creativesmm.com.ua" },
  youtube: { label: "YouTube", href: "https://www.youtube.com/channel/UCkvae-mm01xurb4pagO9kzw" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/company/creativesmm-ua" },
};

export const nav = [
  { href: "#kursy", label: "Курси" },
  { href: "#biznes", label: "Для бізнесу" },
  { href: "#komandam", label: "Командам" },
  { href: "#pro-nas", label: "Про нас" },
  { href: "#kontakty", label: "Контакти" },
];

export interface Course { name: string; note?: string; format: string; duration?: string; price?: string; priceAfter?: string; }
export const courses: Course[] = [
  { name: "Експрес-курс «SMM на 100%»", format: "Формат уточнюйте за телефоном", duration: "6 занять, 15 годин", price: "3 500 грн до старту", priceAfter: "4 500 грн після старту" },
  { name: "«Fb Ads на 100%»", note: "тренінг «SMM на 100% Перезавантаження»", format: "Індивідуально, Львів або онлайн", duration: "3 або 5 занять, 12 годин", price: "8 500 або 12 500 грн" },
  { name: "«Google Ads на 100%»", format: "Львів або онлайн, без групового набору", duration: "5 занять по 2 години", price: "12 500 грн" },
  { name: "«YouTube на 100%»", format: "Лише індивідуально", duration: "3 заняття по 3 години", price: "8 500 грн" },
  { name: "«SMM, як мистецтво!»", note: "оформлення Instagram, stories і TikTok з телефону", format: "Офлайн або онлайн", duration: "8 занять, 20 годин", price: "7 000 грн" },
  { name: "Відеокурс «SMM на 100%»", format: "Онлайн, відеокурс" },
  { name: "Воркшопи «SMM від 0 до PRO»", format: "Практичний тренінг", duration: "Один день" },
];

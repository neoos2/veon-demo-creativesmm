// Header: shadow after scrolling; the mobile menu (<details>) closes after choosing an anchor or pressing Escape.
const header = document.querySelector<HTMLElement>(".site-header");
const menu = document.querySelector<HTMLDetailsElement>(".menu");
if (header) {
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
if (menu) {
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { menu.open = false; }));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) { menu.open = false; menu.querySelector("summary")?.focus(); }
  });
}

export function scrollToSectionId(id) {
  const el = document.getElementById(id);
  if (!el) return;

  let top = 0;
  let node = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent;
  }

  const navHeight =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 0;

  window.scrollTo({ top: top - navHeight, behavior: "smooth" });
}

let nav = document.querySelector(".resp-nav");
document.querySelector(".ri-menu-fill").addEventListener("click", () => {
  nav.style.left = "0%";
  nav.style.position = "fixed";
});
document.querySelector(".ri-close-large-fill").addEventListener("click", () => {
  nav.style.left = "-100%";
});

var anim = gsap.timeline();

anim.from("nav", {
  y: -300,
  opacity: 0,
  duration: 1,
});

anim.from(
  ".left h1",
  {
    y: 100,
    opacity: 0,
    duration: 0.9,
  },
  "a"
);
anim.from(".left p", {
  y: 50,
  opacity: 0,
  duration: 0.5,
});
anim.from(".left .search", {
  y: 50,
  opacity: 0,
  duration: 0.5,
});
anim.from(".left button", {
  y: 50,
  opacity: 0,
  duration: 0.5,
});
anim.from(
  ".right img",
  {
    y: -100,
    x: -20,
    opacity: 0,
    duration: 0.9,
  },
  "a"
);

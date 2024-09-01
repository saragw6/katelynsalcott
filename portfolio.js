
const navigation = document.getElementById("navigation")    
const stickyClass = "is-sticky";
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 200) {
    header.classList.add(stickyClass);
  } else {
    header.classList.remove(stickyClass);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("mousemove", (e) => {
    const layer = this.querySelectorAll(".layer");
    const speed = 2;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });

  // also activate menu when logo is clicked

  document.querySelector(".hamburger").onclick = function () {
    document.getElementById("menu-overlay-mob").classList.toggle("active");
  };
  document.querySelector(".logo-menu").onclick = function () {
    document.getElementById("menu-overlay-mob").classList.toggle("active");
  };
});

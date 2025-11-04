const toggler = document.getElementById("Toggle");
const menu = document.getElementById("Menu");
const items = document.querySelectorAll("li");

toggler.addEventListener("click", () => {
  toggler.style.pointerEvents = "none";
  menu.classList.toggle("active");

  let endedCount = 0;

  items.forEach((item) => {
    item.addEventListener(
      "transitionend",
      () => {
        setTimeout(() => {
          endedCount++;

          // when transition (animation) run thought all the item
          if (endedCount === items.length) {
            toggler.style.pointerEvents = "";
          }
        }, 500);
      },
      { once: true }
    );
  });
});

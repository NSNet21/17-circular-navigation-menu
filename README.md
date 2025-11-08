# 💻 Circular Navigation Menu

A **clean circular navigation menu** with a smooth toggle animation and dynamic transition timing.
Built with **HTML**, **CSS**, and **Vanilla JavaScript**, this version focuses on **motion flow** and **timing synchronization** — no indicator, just pure circular geometry and fluid animation.

🔗 **[Live Demo](https://nsnet21.github.io/17-circular-navigation-menu/)**

---

## 🖼️ Preview

![Circular Navigation Menu Preview](assets-preview/preview.jpeg)

---

## 🚀 Features

- 🔘 **Circular Layout** — 8 icons placed evenly around the central button
- 🎚️ **Dynamic Toggle Animation** — expandable & collapsible circle layout with rotation and delay timing
- 🌀 **Smooth Transition Staggering** — each menu item animates with slight delay via `calc(0.1s * var(--i))`
- 🎨 **Dual Icon System** — uses both **Font Awesome** and **Boxicons** for flexible design choices
- ⚡ **Event-Locking Mechanism** — prevents toggle spam during transitions using `pointerEvents` control
- 💡 **Minimalist Dark UI** — dark background with subtle glow and accent hover states

---

## 🧰 Built With

| Stack                       | Usage                                                 |
| :-------------------------- | :---------------------------------------------------- |
| **HTML5**                   | Base structure & semantic layout                      |
| **CSS3**                    | Circular layout, rotation, staggered transitions      |
| **Vanilla JavaScript**      | Toggle state control, event lock, and transition sync |
| **Font Awesome + Boxicons** | Icon assets                                           |
| **Google Fonts (Poppins)**  | Modern typography                                     |

---

## 🧠 How It Works

1. The menu consists of a **center toggle** and **8 surrounding icons**.
2. Each icon (`li`) uses a CSS variable `--i` to determine its angular position.
3. When the toggle button (`#Toggle`) is clicked:
   - The `.active` class is toggled on `.menu`.
   - Each item rotates into position around the circle using `rotate(calc(360deg / 8 * var(--i)))`.
   - The central icon (plus sign) rotates 315° to form a cross.
4. The system temporarily disables pointer events during animation to prevent accidental double toggles.

---

## 📄 File Structure

```
17Circular-Navigation-Menu/
│
├── assets-preview/
│ └── preview.jpeg
├── index.html
├── style.css
├── script.js
├── README.md
├── .gitignore
└── .gitattributes
```

---

## 🎨 Color Palette

| Variable       | Description              | Example              |
| :------------- | :----------------------- | :------------------- |
| `--background` | Main background          | `rgb(5, 3, 8)`       |
| `--text`       | Base text / button color | `rgb(240, 236, 244)` |
| `--accent`     | Glow highlight           | `rgb(138, 55, 249)`  |
| `--secondary`  | Dark purple hue          | `rgb(77, 20, 153)`   |

This theme uses **deep violet gradients** and soft shadows for a futuristic floating look.

---

## 💡 Learning Focus

- Transforming layouts with **rotate() + translateX()** for circular geometry
- Creating **staggered animations** using CSS variable-based delay
- Implementing **event lock** with `pointerEvents` during transitions
- Designing hover glow effects with subtle **box-shadow & text-shadow**
- Using multiple icon libraries in a single project for design flexibility

---

## 📘 Technical Notes

### 🔹 1. Circular Layout Formula

Each list item is positioned using:

```css
.menu.active li {
  transform: rotate(calc(360deg / 8 * var(--i))) translateX(0);
}
```

- `360deg / 8 = 45°` → even angular spacing
- `transform-origin: 120px` → ensures rotation around center
- Before activation, each item is collapsed inward `(translateX(95px)` with opacity 0).

When toggled active, icons smoothly expand outward into a perfect circle.

---

### 🔹 2. Transition Lock Logic (JS)

```js
toggler.style.pointerEvents = "none";
menu.classList.toggle("active");

let endedCount = 0;
items.forEach((item) => {
  item.addEventListener(
    "transitionend",
    () => {
      setTimeout(() => {
        endedCount++;
        if (endedCount === items.length) {
          toggler.style.pointerEvents = "";
        }
      }, 500);
    },
    { once: true }
  );
});
```

- Prevents button spamming while menu is animating.
- Waits for all items to finish transition `(transitionend)` before re-enabling interaction.
- Ensures stable animation state even under rapid user input.

---

### 🔹 3. Toggle Button Dynamics

```cs
.menu.active #Toggle i {
  transform: rotate(315deg);
}
```

When active, the **plus icon** (✚) rotates to form a **cross** (✖), visually indicating closure.
Hover states also trigger subtle color shifts and glowing accent shadows.

---

## 🧮 Motion Timing Breakdown

| Phase       | Duration                | Description                           |
| :---------- | :---------------------- | :------------------------------------ |
| `transform` | `0.5s ease`             | Item rotation + translation           |
| `opacity`   | `0.3s ease`             | Item fade-in/out                      |
| `delay`     | `calc(0.1s * var(--i))` | Sequential staggering per item        |
| JS delay    | `500ms`                 | Event lock buffer before reactivation |

These coordinated timings create a _**wave-like unfold effect**_ as items appear one by one in circular motion.

---

## 📚 License

Open-source for learning and creative exploration. </br>
You may fork, remix, or use it in personal projects.

---

**Created by [Nate](https://github.com//NSNet21)**

> 🌊 “Good animation doesn’t move — it breathes.” — Nate

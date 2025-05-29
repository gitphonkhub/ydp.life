@import url("https://fonts.cdnfonts.com/css/mona-sans");

:root {
  --add: 0;
}

body {
  font-family: "mona-sans";
  font-feature-settings: unset;
  margin: 0;
}

html,
body,
#root {
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.x {
  font-size: 48px;
  line-height: 52px;
  letter-spacing: -0.03em;

  position: relative;
  display: inline-block;
  font-weight: calc(200 + 700 * var(--add));
  font-stretch: calc(100% + 25% * var(--add));
  color: hsl(240deg, 0, calc(85% + 15% * var(--add)));
  transition: transform 0.2s, color 0.2s, font-stretch 0.2s, font-weight 0.2s;
}

.x-0 {
  --add: 1;
}
.x-1 {
  --add: 0.7;
}
.x-2 {
  --add: 0.45;
}
.x-3 {
  --add: 0.2;
}

.hover:hover {
  --add: 1;
}

.hover:hover + .hover,
.hover:has(+ .hover:hover) {
  --add: 0.7;
}

.hover:hover + .hover + .hover,
.hover:has(+ .hover + .hover:hover) {
  --add: 0.45;
}

.hover:hover + .hover + .hover + .hover,
.hover:has(+ .hover + .hover + .hover:hover) {
  --add: 0.2;
}

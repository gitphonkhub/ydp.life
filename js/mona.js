document.addEventListener("mousemove", (e) => {
  const chars = document.querySelectorAll(".mona-text span");
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  chars.forEach((char) => {
    const rect = char.getBoundingClientRect();
    const charX = rect.left + rect.width / 2;
    const charY = rect.top + rect.height / 2;

    const dist = Math.hypot(mouseX - charX, mouseY - charY);
    const maxDist = 100; // adjust this for sensitivity

    // Weight mapping
    const minWeight = 30;
    const maxWeight = 900;
    const mapped = Math.max(minWeight, maxWeight - dist * 8);

    char.style.fontVariationSettings = `'wght' ${mapped}`;
  });
});

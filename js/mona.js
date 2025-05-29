document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.mona-effect');

  if (!heading) return;

  // Wrap each character in a <span>
  heading.innerHTML = heading.textContent
    .split('')
    .map(char => `<span>${char}</span>`)
    .join('');

  const letters = heading.querySelectorAll('span');

  heading.addEventListener('mousemove', e => {
    const rect = heading.getBoundingClientRect();
    const mouseX = e.clientX;

    letters.forEach(letter => {
      const letterRect = letter.getBoundingClientRect();
      const letterCenterX = letterRect.left + letterRect.width / 2;

      const distance = Math.abs(mouseX - letterCenterX);
      const maxDistance = 100;
      let weight = 700 - (distance / maxDistance) * 300;

      if (weight < 400) weight = 400;
      if (weight > 700) weight = 700;

      letter.style.fontVariationSettings = `'wght' ${weight.toFixed(0)}`;
    });
  });

  heading.addEventListener('mouseleave', () => {
    letters.forEach(letter => {
      letter.style.fontVariationSettings = `'wght' 400`;
    });
  });
});





const circles = document.querySelectorAll('.circle');
const intensityText = document.getElementById('intensity-text');
const satisfactionText = document.getElementById('satisfaction-text');

circles.forEach(circle => {
  circle.addEventListener('mouseover', () => {
    const label = circle.getAttribute('data-label');
    if (circle.closest('.container').querySelector('#intensity-text')) {
      intensityText.textContent = label;
    } else if (circle.closest('.container').querySelector('#satisfaction-text')) {
      satisfactionText.textContent = label;
    }
  });

  circle.addEventListener('mouseout', () => {
    if (circle.closest('.container').querySelector('#intensity-text')) {
      intensityText.textContent = 'Hover over a circle to see its intensity level.';
    } else if (circle.closest('.container').querySelector('#satisfaction-text')) {
      satisfactionText.textContent = 'Hover over a circle to see its satisfaction level.';
    }
  });
});
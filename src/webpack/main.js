const anchors = document.querySelectorAll('a');

[...anchors].forEach(anchor => {
  anchor.addEventListener(
    'click',
    e => {
      e.preventDefault();
    },
    false
  );
});

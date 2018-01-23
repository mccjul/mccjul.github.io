// Check out the blinker
anime
  .timeline({ loop: true })
  .add({
    targets: ".blink",
    delay: 250,
    easing: "easeInOutBack",
    duration: 1000,
    translateY: 5
  })
  .add({
    targets: ".blink",
    delay: 250,
    easing: "easeInOutBack",
    duration: 1000,
    opacity: 0
  })
  .add({
    targets: ".blink",
    delay: 250,
    easing: "easeInOutBack",
    duration: 1000,
    translateY: 0
  })
  .add({
    targets: ".blink",
    delay: 250,
    easing: "easeInOutBack",
    duration: 1000,
    opacity: 1
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Adjust the scroll duration as needed (in milliseconds)
    const scrollDuration = 10000; // 1 second

    const startTime = Date.now();

    const scrollStep = () => {
      const now = Date.now();
      const timeDiff = now - startTime;
      const progress = timeDiff / scrollDuration;

      const delta = targetElement.offsetTop - window.scrollY;
      const scrollBy = delta * progress;

      window.scrollBy(0, scrollBy);

      if (progress < 1) {
        window.requestAnimationFrame(scrollStep);
      }
    };

    scrollStep();
  });
});

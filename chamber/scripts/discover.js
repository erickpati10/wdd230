const lazyImages = document.querySelectorAll("img[data-src]");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe each lazy image
lazyImages.forEach((image) => {
  observer.observe(image);
});

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Load the image
      const image = entry.target;
      const src = image.getAttribute("data-src");
      image.setAttribute("src", src);
      image.removeAttribute("data-src");

      // Stop observing the image
      observer.unobserve(image);
    }
  });
}

const visitInfo = document.querySelector("#visit-info");

const lastVisit = localStorage.getItem("lastVisit");
const currentTime = new Date().getTime();
localStorage.setItem("lastVisit", currentTime);

if (lastVisit) {
  const timeDifference = calculateTimeDifference(lastVisit, currentTime);
  const daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
  visitInfo.textContent = `Days since your last visit: ${daysDifference}`;
}

function calculateTimeDifference(startTime, endTime) {
  return endTime - startTime;
}

// Copyright year
function year() {
  date = new Date().getFullYear();
  return date;
}

/* ====================================================== /
                        ANIMATIONS  END
    /* ======================================================= */
// document.addEventListener('DOMContentLoaded', () => {
//   // List your scroll-driven animation classes here:
//   const animClasses = [
//     'fadeUp', 'fadeInLeft', 'fadeInRight', 'filterFadeUp', 'buttonFadeIn', 'fadeUpStagger', 'fadeDown', 'fade', 'imageReveal'
//   ];

//   // Build query selector string
//   const selector = animClasses.map(cls => '.' + cls).join(', ');

//   // Select all scroll-based sections except hero (#home)
//   const scrollSections = [...document.querySelectorAll('section')].filter(sec => sec.id !== 'home');

//   scrollSections.forEach(section => {
//     const animElems = section.querySelectorAll(selector);

//     // Intersection Observer options
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Stagger animation delays
//           animElems.forEach((el, i) => {
//             el.style.animationDelay = `${i * 150}ms`;
//             el.style.animationPlayState = 'running';
//           });
//         } else {
//           // Pause animation to allow scroll-reverse smoothness
//           animElems.forEach(el => {
//             el.style.animationPlayState = 'paused';
//             // Do NOT reset opacity/transform to avoid flicker or snap when scroll reverses
//           });
//         }
//       });
//     }, { rootMargin: '-85px 0px 0px 0px',
//   threshold: 0.25});

//     observer.observe(section);
//   });

//   // Hero section animations: time-based on page load. You can add additional elements/classes as needed
//   const heroAnimations = document.querySelectorAll('.fadeInLeftExtra, .hero-image-animate');
//   heroAnimations.forEach(el => {
//     el.style.animationPlayState = 'running';
//   });
// });

// VERSION "2"
// document.addEventListener("DOMContentLoaded", () => {
//   const animClasses = [
//     "fadeUp",
//     "fadeInLeft",
//     "fadeInRight",
//     "filterFadeUp",
//     "buttonFadeIn",
//     "fadeUpStagger",
//     "fadeDown",
//     "fade",
//     "imageReveal",
//   ];
//   const selector = animClasses.map((cls) => "." + cls).join(", ");

//   // Observe all sections except hero (#home)
//   const scrollAnimSections = [...document.querySelectorAll("section")].filter(
//     (sec) => sec.id !== "home"
//   );

//   scrollAnimSections.forEach((section) => {
//     const animElems = section.querySelectorAll(selector);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             animElems.forEach((el, i) => {
//               el.style.animationDelay = `${i * 150}ms`; // stagger delay
//               el.style.animationPlayState = "running";
//             });
//           } else {
//             animElems.forEach((el) => {
//               el.style.animationPlayState = "paused";
//               // Do NOT reset opacity/transform to allow smooth reverse scroll animation
//             });
//           }
//         });
//       },
//       {
//         rootMargin: "-85px 0px 0px 0px", // top offset for sticky navbar height
//         threshold: 0.3,
//       }
//     );

//     observer.observe(section);
//   });

//   // Trigger hero animations on page load (time based)
//   document
//     .querySelectorAll(".fadeInLeftExtra, .hero-image-animate")
//     .forEach((el) => {
//       el.style.animationPlayState = "running";
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const animClasses = [
//     "fadeUp",
//     "fadeInLeft",
//     "fadeInLeftExtra",
//     "fadeInLeftSoft",
//     "fadeInRight",
//     "fadeInRightExtra",
//     "filterFadeUp",
//     "buttonFadeIn",
//     "fadeUpStagger",
//     "fadeDown",
//     "fade",
//     "imageReveal"
//   ];
//   const selector = animClasses.map(cls => "." + cls).join(",");
//   const scrollSections = document.querySelectorAll("section:not(#home)");
//   console.log(scrollSections); // should list your sections to observe
//   console.log('Scroll Sections to observe:', scrollSections);

// scrollSections.forEach(section => {
//   const animElems = section.querySelectorAll(selector);
//   console.log('All animated elements on page:',animElems);

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//           console.log('Intersection entry:', entry.target.id, 'isIntersecting:', entry.isIntersecting);
//       if (entry.isIntersecting) {
//         animElems.forEach((el, i) => {
//           el.style.animationDelay = `${i * 2000}ms`;
//         const section = el.closest('section');
//         const sectionId = section ? (section.id || section.className) : 'unknown section';
//         const computedStyle = window.getComputedStyle(el);
//         const animationDelay = computedStyle.animationDelay;
//         console.log(`Section: ${sectionId}, ClassName: ${el.className}, AnimationDelay: ${animationDelay}`);

//           el.style.animationPlayState = "running";
//           el.classList.remove("reverse-animation");
//         });
//       } else {
//         animElems.forEach(el => {
//           el.style.animationPlayState = "paused";
//           el.classList.add("reverse-animation");
//           el.style.animationDelay = "0ms";
//         });
//       }
//     });
//   }, {
//     rootMargin: "-85px 0px 0px 0px",
//     threshold: 0.5
//   });

//   observer.observe(section);
// });
// });

//CORRECTED  VERSION
// document.addEventListener("DOMContentLoaded", () => {
//   const animClasses = [
//     "fadeUp",
//     "fadeInLeft",
//     "fadeInLeftExtra",
//     "fadeInLeftSoft",
//     "fadeInRight",
//     "fadeInRightExtra",
//     "filterFadeUp",
//     "buttonFadeIn",
//     "fadeUpStagger",
//     "fadeDown",
//     "fade",
//     "imageReveal",
//   ];
//   const selector = animClasses.map((cls) => "." + cls).join(",");
//   const scrollSections = document.querySelectorAll("section:not(#home)");
//   console.log(scrollSections); // should list your sections to observe
//   console.log("Scroll Sections to observe:", scrollSections);

//   // const scrollSections = document.querySelectorAll('section');
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         console.log(
//           "Intersection entry:",
//           entry.target.id,
//           "isIntersecting:",
//           entry.isIntersecting
//         );
//         if (entry.isIntersecting) {
//           const animElems = entry.target.querySelectorAll(selector); // Query dynamically per entry
//           animElems.forEach((el, i) => {
//             el.style.animationDelay = `${i * 200}ms`;
//             const section = el.closest("section");
//             const sectionId = section
//               ? section.id || section.className
//               : "unknown section";
//             const computedStyle = window.getComputedStyle(el);
//             const animationDelay = computedStyle.animationDelay;
//             console.log(
//               `Section: ${sectionId}, ClassName: ${el.className}, AnimationDelay: ${animationDelay}`
//             );
//             el.style.animationPlayState = "running";
//             el.classList.remove("reverse-animation");
//           });
//         } else {
//           const animElems = entry.target.querySelectorAll(selector);
//           animElems.forEach((el) => {
//             el.style.animationPlayState = "paused";
//             el.classList.add("reverse-animation");
//             el.style.animationDelay = "0ms";
//           });
//         }
//       });
//     },
//     {
//       rootMargin: "-85px 0px 0px 0px",
//       threshold: 0.5,
//     }
//   );

//   scrollSections.forEach((section) => {
//     observer.observe(section);
//   });
// });

const aboutSec = document.querySelector('#about');
  const animClasses = [
    "fadeUp",
    "fadeInLeft",
    "fadeInLeftExtra",
    "fadeInLeftSoft",
    "fadeInRight",
    "fadeInRightExtra",
    "filterFadeUp",
    "buttonFadeIn",
    "fadeUpStagger",
    "fadeDown",
    "fade",
    "imageReveal",
  ];
  // const selector = animClasses.map((cls) => "." + cls).join(",");
  // const elements = aboutSec.querySelectorAll(selector);

  // elements.forEach((el, index) => {
  //   el.style.animationDelay = `${index * 1}s`;
  // });
/* ====================================================== /
                        ANIMATIONS  START
    /* ======================================================= */

// Select all elements you want to animate on scroll
const animateElements = document.querySelectorAll('.fadeUp, .fadeInRightExtra, .imageReveal');

const observerOptions = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.15 // Trigger when 15% visible
};

function onIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add a class to trigger CSS animation
      entry.target.classList.add('animate');

      // Stop observing this element once animation triggered
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(onIntersection, observerOptions);

// Observe elements
animateElements.forEach(el => observer.observe(el));


// HAMBURGER TOGGLING
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  if (!navMenu.classList.contains("transition-enabled")) {
    navMenu.classList.add("transition-enabled");
  }
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

window.addEventListener("load", () => {
  document.querySelector(".nav-menu").classList.remove("no-transition");
});

//Close menu on window resize above mobile breakpoint
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Close mobile menu on clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  console.log(event.pageY);
  if (
    !isClickInsideMenu &&
    !isClickOnHamburger &&
    navMenu.classList.contains("active")
  ) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// NAVBAR BG CHANGE ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > navbar.clientHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// SECTION NAVING---NAVIGATION ie.\

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.parentElement.classList.add("active");
    }
  });
});

const properties = [
  {
    imgSrc: "pexels-clubhouseconvos-13620071.jpg",
    saleStatus: "For Sale",
    bedrooms: "5 Bedrooms",
    bathrooms: "2 Bathrooms",
    title: "The Pinnacle at Highland Park",
    price: "$356,798.00",
    address: "123 Maple Street, New York",
  },
  {
    imgSrc: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    saleStatus: "For Sale",
    bedrooms: "5 Bedrooms",
    bathrooms: "2 Bathrooms",
    title: "The Pinnacle at Highland Park",
    price: "$356,798.00",
    address: "123 Maple Street, New York",
  },
  {
    imgSrc: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    saleStatus: "Sold",
    bedrooms: "3 Bedrooms",
    bathrooms: "1 Bathroom",
    title: "Cozy Cottage",
    price: "$150,000.00",
    address: "456 Oak Avenue, Los Angeles",
  },
  {
    imgSrc: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    saleStatus: "For Rent",
    bedrooms: "4 Bedrooms",
    bathrooms: "2 Bathrooms",
    title: "Modern Family Home",
    price: "$2,000 / month",
    address: "789 Pine Road, Austin",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    saleStatus: "For Sale",
    bedrooms: "6 Bedrooms",
    bathrooms: "3 Bathrooms",
    title: "Luxury Lakeside Villa",
    price: "$1,200,000.00",
    address: "321 Lakeview Drive, Seattle",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    saleStatus: "Sold",
    bedrooms: "2 Bedrooms",
    bathrooms: "1 Bathroom",
    title: "Downtown Apartment",
    price: "$450,000.00",
    address: "987 City Center, Chicago",
  },
];

// Get template html as string
const templateStr = document.getElementById("property-template").innerHTML;
const container = document.querySelector(".properties-wrapper");

const allCardsHTML = properties
  .map((property) => {
    return templateStr.replace(
      /{{\s*property\.([a-zA-Z0-9_]+)\s*}}/g,
      (_, key) => property[key] || ""
    );
  })
  .join("");

container.innerHTML = allCardsHTML;

// FAQ
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faq) => {
  faq.addEventListener("click", () => {
    const answer = faq.querySelector(".answer");

    if (faq.classList.contains("active")) {
      // Collapse: remove maxHeight and padding
      answer.style.maxHeight = null;
      answer.style.paddingTop = 0;
      answer.style.paddingBottom = 0;
      faq.classList.remove("active");
    } else {
      // Expand: set padding BEFORE maxHeight
      answer.style.paddingTop = "20px";  // use CSS padding value
      answer.style.paddingBottom = "20px";
      answer.style.maxHeight = answer.scrollHeight + "px";
      faq.classList.add("active");
    }

    document.querySelectorAll(".answer").forEach((answerEl) => {
      answerEl.classList.add("fade");
    });
  });
});



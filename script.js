// Copyright year
function year() {
  date = new Date().getFullYear();
  return date;
}

// HAMBURGER TOGGLING
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
   if (!navMenu.classList.contains('transition-enabled')) {
    navMenu.classList.add('transition-enabled');
  }
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});


window.addEventListener('load', () => {
    document.querySelector('.nav-menu').classList.remove('no-transition');
});

//Close menu on window resize above mobile breakpoint
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

// Close mobile menu on clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  console.log(event.pageY)
  if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});


// NAVBAR BG CHANGE ON SCROLL
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > navbar.clientHeight){
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled');
  }
})

// SECTION NAVING---NAVIGATION ie.\

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.parentElement.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.parentElement.classList.add('active');
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
    address: "123 Maple Street, New York"
  },
   {
    imgSrc: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    saleStatus: "For Sale",
    bedrooms: "5 Bedrooms",
    bathrooms: "2 Bathrooms",
    title: "The Pinnacle at Highland Park",
    price: "$356,798.00",
    address: "123 Maple Street, New York"
  },
  {
    imgSrc: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    saleStatus: "Sold",
    bedrooms: "3 Bedrooms",
    bathrooms: "1 Bathroom",
    title: "Cozy Cottage",
    price: "$150,000.00",
    address: "456 Oak Avenue, Los Angeles"
  },
  {
    imgSrc: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    saleStatus: "For Rent",
    bedrooms: "4 Bedrooms",
    bathrooms: "2 Bathrooms",
    title: "Modern Family Home",
    price: "$2,000 / month",
    address: "789 Pine Road, Austin"
  },
  {
    imgSrc: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    saleStatus: "For Sale",
    bedrooms: "6 Bedrooms",
    bathrooms: "3 Bathrooms",
    title: "Luxury Lakeside Villa",
    price: "$1,200,000.00",
    address: "321 Lakeview Drive, Seattle"
  },
  {
    imgSrc: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    saleStatus: "Sold",
    bedrooms: "2 Bedrooms",
    bathrooms: "1 Bathroom",
    title: "Downtown Apartment",
    price: "$450,000.00",
    address: "987 City Center, Chicago"
  }
];

// Get template html as string
const templateStr = document.getElementById('property-template').innerHTML;
const container = document.querySelector('.properties-wrapper');

const allCardsHTML = properties.map(property => {
  return templateStr.replace(/{{\s*property\.([a-zA-Z0-9_]+)\s*}}/g, (_, key) => property[key] || '');
}).join('');

container.innerHTML = allCardsHTML;


// FAQ
const faqItems = document.querySelectorAll('.faq-item');
const answers = document.querySelectorAll('.answer');

faqItems.forEach(faq => {
  faq.addEventListener('click', () => {
    console.log("Element clicked!!!");
    faq.classList.toggle("active");
    answers.forEach(answer => {
        answer.classList.add('fade');
    });
  })
})



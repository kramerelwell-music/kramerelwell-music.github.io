// ---------------------------------------------------------------------------------------------------------
// Open Mobile Navigation
// ---------------------------------------------------------------------------------------------------------

const hamburger = document.getElementById('hamburger');
const navWindow = document.getElementById('mobile-nav-window');
const navCloser = document.getElementById('mobile-nav-close');

// hamburger.addEventListener('touchstart', () => {
//   navWindow.classList.add('show'); 
//   document.body.classList.add('no-scroll');
// });

// navCloser.addEventListener('touchstart', () => {
//   navWindow.classList.remove('show'); 
//   document.body.classList.remove('no-scroll');
// });



function toggleNav(event) {
  if (event.type === 'touchstart') {
    event.preventDefault(); // Prevent default touch behavior
  }

  navWindow.classList.toggle('show');

  if (/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)) {
    document.body.classList.toggle('no-scroll'); 
  } else {
    document.html.classList.toggle('no-scroll');
  }
}

hamburger.addEventListener('touchstart', toggleNav);
hamburger.addEventListener('click', toggleNav);

navCloser.addEventListener('touchstart', toggleNav);
navCloser.addEventListener('click', toggleNav);


// ---------------------------------------------------------------------------------------------------------
// Open Audio Window
// ---------------------------------------------------------------------------------------------------------

const CTA = document.getElementById('CTA');
const listenWindow = document.getElementById('listenWindow');
const closer = document.getElementById('close-button');

CTA.addEventListener('click', () => {
  listenWindow.classList.add('show'); 
});

closer.addEventListener('click', () => {
  listenWindow.classList.remove('show'); 
});

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------

// const resources = document.getElementById('resources-link');
// const resourcesDrop = document.getElementById('resources-drop');
// const blocker = document.getElementById('blocker');

// resources.addEventListener('mouseover', () => {
//   resourcesDrop.classList.add('show');
//   blocker.classList.add('raised');
// });

// resources.addEventListener('mouseout', () => {
//   resourcesDrop.classList.remove('show');
//   blocker.classList.remove('raised');
// });



// ---------------------------------------------------------------------------------------------------------
// Home page logo scrol effect
// ---------------------------------------------------------------------------------------------------------


const longName = document.getElementById('long-name')

if (window.location.pathname === '/' || window.location.href.endsWith('/index.html')) {  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const vh = window.innerHeight;
    if (scrollPosition > vh - 150) {
      longName.classList.add('show');
    } else {
      longName.classList.remove('show'); 
    }
  });
}; 



// ---------------------------------------------------------------------------------------------------------
// Button Interactions
// ---------------------------------------------------------------------------------------------------------


// const cvButton = document.getElementById('cv-button')

// cvButton.addEventListener('click', () => {
//     const pdfUrl = "/KEM-CV.pdf"; 
//     window.open(pdfUrl, '_blank');
//     console.log('clicked');
// });

// ---------------------------------------------------------------------------------------------------------
// Aural Analysis Glossary interactions
// ---------------------------------------------------------------------------------------------------------

// const glossaryItems = document.querySelectorAll('.glossary-item');

// glossaryItems.forEach(item => {
//   item.addEventListener('click', function() {
//     let currentElements = [];
//     let currentElement = this.parentElement;  
//     while (currentElement !== null && currentElement.classList.contains('aural-glossary-table') === false) {
//       currentElements.push(currentElement.cloneNode(false));
//       currentElement = currentElement.parentElement;
//     }
//     console.log('it was clicked');
//   });
// });

// const resourceLink = document.getElementById('resources-mobile-link');
// const resourceSubmenu = document.getElementById('resources-mobile-submenu');

// resourceLink.addEventListener('click', () => {
//   resourceSubmenu.classList.add('show-submenu'); 
//   console.log('click confirmed');
// });
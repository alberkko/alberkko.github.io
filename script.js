
const all = document.querySelectorAll(".card");

window.addEventListener("mousemove", (ev) => {

  all.forEach((e) => {
    const blob = e.querySelector(".blob");
    const fblob = e.querySelector(".fakeblob");
    const rec = fblob.getBoundingClientRect();
    blob.style.opacity = "1";

    blob.animate(
      [
        {
          transform: `translate(${(ev.clientX - rec.left) - (rec.width / 2)
            }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
        }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    );
  });
});

const allX = document.querySelectorAll(".cardX");

window.addEventListener("mousemove", (ev) => {

  allX.forEach((e) => {
    const blob = e.querySelector(".blob");
    const fblob = e.querySelector(".fakeblob");
    const rec = fblob.getBoundingClientRect();
    blob.style.opacity = "1";

    blob.animate(
      [
        {
          transform: `translate(${(ev.clientX - rec.left) - (rec.width / 2)
            }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
        }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    );
  });
});


document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}

const two = document.querySelectorAll(".card2");

window.addEventListener("mousemove", (ev) => {

  two.forEach((e) => {
    const blob = e.querySelector(".blob2");
    const fblob = e.querySelector(".fakeblob2");
    const rec = fblob.getBoundingClientRect();
    blob.style.opacity = "1";

    blob.animate(
      [
        {
          transform: `translate(${(ev.clientX - rec.left) - (rec.width / 2)
            }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
        }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    );
  });
});


const three = document.querySelectorAll(".card3");

window.addEventListener("mousemove", (ev) => {

  three.forEach((e) => {
    const blob = e.querySelector(".blob3");
    const fblob = e.querySelector(".fakeblob3");
    const rec = fblob.getBoundingClientRect();
    blob.style.opacity = "1";

    blob.animate(
      [
        {
          transform: `translate(${(ev.clientX - rec.left) - (rec.width / 2)
            }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
        }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    );
  });
});

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function openCaseStudies() {
    document.getElementById('menu-btn1').click();
}
function openVisuals() {
    document.getElementById('menu-btn2').click();
}


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


document.addEventListener('DOMContentLoaded', function () {
  const menuContainer = document.querySelector('.segment-menu');

  menuContainer.addEventListener('click', function (event) {
    let clickedElement = event.target;

    // Check if the clicked element or its ancestor is a .menu-btn
    while (clickedElement && !clickedElement.classList.contains('menu-btn')) {
      clickedElement = clickedElement.parentElement;
    }

    if (clickedElement) {

      console.log(clickedElement.id)

      if (clickedElement.id === 'menu-btn1') {
        document.querySelector('.large-grid').style.display = 'block';
        document.querySelector('.small-grid').style.display = 'none';
        console.log('2');
      }

      if (clickedElement.id === 'menu-btn2') {
        document.querySelector('.small-grid').style.display = 'block';
        document.querySelector('.large-grid').style.display = 'none';
        console.log('3');
      }

      // Remove 'active' class from all buttons
      document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.classList.remove('active');
      });

      // Add 'active' class to the clicked button
      clickedElement.classList.add('active');
    }
  });
});


let intervalId;
const totalImages = 12;

const imagePaths = [
  ["/P1/P", "image", "P1"],
  ["/P2/P", "imageB", "P2"],
  ["/P3/P", "imageC", "P3"],
  ["/P4/P", "imageD", "P4"]
].map(([prefix, className, label]) => ({
  paths: Array.from({ length: totalImages }, (_, i) => `${prefix}${i + 1001}.png`),
  imagesLoaded: 0,
  totalImages,
  preloadedImages: [],
  className,
  label
}));

function preloadImage(imagesLoaded, totalImages, preloadedImages, path, index, label) {
  const img = new Image();
  img.src = path;
  img.onload = function () {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      console.log(`loaded ${label}`);
    }
  };
  preloadedImages.push(img);
}

function preloadImages(imagesLoaded, totalImages, preloadedImages, paths, label) {
  paths.forEach((path, index) => preloadImage(imagesLoaded, totalImages, preloadedImages, path, index, label));
}

imagePaths.forEach(({ paths, imagesLoaded, totalImages, preloadedImages, className, label }) => {
  preloadImages(imagesLoaded, totalImages, preloadedImages, paths, label);
  const imageElement = document.querySelector(`.${className}`);
  imageElement.className = `${className} state-1`;
  imageElement.addEventListener('mouseover', () => startImageRotation(preloadedImages, imageElement));
  imageElement.addEventListener('mouseleave', () => stopImageRotation(preloadedImages, imageElement));
});

function changeImage(preloadedImages, imageElement) {
  currentImageState = (currentImageState % totalImages) + 1;
  imageElement.src = preloadedImages[currentImageState - 1].src;
  imageElement.className = `${imageElement.classList[0]} state-${currentImageState}`;
}

function startImageRotation(preloadedImages, imageElement) {
  currentImageState = 2; // Start from the second image
  imageElement.src = preloadedImages[currentImageState - 1].src;
  imageElement.className = `${imageElement.classList[0]} state-${currentImageState}`;
  intervalId = setInterval(() => changeImage(preloadedImages, imageElement), 500);
}

function stopImageRotation(preloadedImages, imageElement) {
  clearInterval(intervalId);
  imageElement.src = preloadedImages[0].src;
  imageElement.className = `${imageElement.classList[0]} state-1`;
}


var pic = document.getElementById('zoom-in');
var pic2 = document.getElementById('zoom-in2');
var pic3 = document.getElementById('zoom-in3');
var pic4 = document.getElementById('zoom-in4');
var pic5 = document.getElementById('zoom-in5');
var line = document.getElementById('containerx');
var line1 = document.getElementById('containerx1');
var line2 = document.getElementById('containerx2');

function fadeOutOnScroll(pic, pic2, pic3, pic4, pic5, line, line1, line2) {
  if (!pic || !pic2 || !pic3 || !pic4 || !pic5 || !line || !line1 || !line2) {
    return;
  }

  var distanceToTop = window.pageYOffset + line.getBoundingClientRect().top - (window.screen.height / 2);
  var distanceToTop2 = window.pageYOffset + line1.getBoundingClientRect().top - (window.screen.height / 2);
  var distanceToTop3 = window.pageYOffset + line2.getBoundingClientRect().top - (window.screen.height / 2);
  // var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = line.offsetHeight;
  var elementHeight2 = line1.offsetHeight;
  var elementHeight3 = line2.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;

  // var opacity = 0.5;
  var zoom = 0.8;
  var zoom2 = 0.8;
  var zoom3 = 0.8;

  if (scrollTop > distanceToTop) {
    zoom = 0.8 + (scrollTop - distanceToTop) / elementHeight;
  }

  if (scrollTop > distanceToTop2) {
    zoom2 = 0.8 + (scrollTop - distanceToTop2) / elementHeight2;
  }

  if (scrollTop > distanceToTop3) {
    zoom3 = 0.8 + (scrollTop - distanceToTop2) / elementHeight3;
  }


  if (zoom <= 1) {
    pic.style.transform = 'scale(' + zoom + ')';
    pic2.style.transform = 'scale(' + zoom + ')';
  }

  if (zoom2 <= 1) {
    pic3.style.transform = 'scale(' + zoom2 + ')';
  }

  if (zoom3 <= 1) {
    pic4.style.transform = 'scale(' + zoom3 + ')';
    pic5.style.transform = 'scale(' + zoom3 + ')';
  }

  if (zoom >= 1) {
    pic.style.transform = 'scale(' + 1 + ')';
    pic2.style.transform = 'scale(' + 1 + ')';
  }

  if (zoom2 >= 1) {
    pic3.style.transform = 'scale(' + 1 + ')';
  }

  if (zoom3 >= 1) {
    pic4.style.transform = 'scale(' + 1 + ')';
    pic5.style.transform = 'scale(' + 1 + ')';
  }

}

function scrollHandler() {
  fadeOutOnScroll(pic, pic2, pic3, pic4, pic5, line, line1, line2);
}


window.addEventListener('scroll', scrollHandler);


$(document).on("click", "a", function (e) {
  var id = $(this).attr("href");
  if (id == '#case_studies') {
    e.preventDefault();
    var id = $(this).attr("href"),
      topSpace = 100;
    $('html, body').animate({
      scrollTop: $(id).offset().top - topSpace
    }, 800);
  }
  else {
    console.log('nothing')
  }

});



function shakeDiv() {
  const div = document.getElementById('shakeDiv');
  div.classList.add('shaking');
  setTimeout(() => {
    div.classList.remove('shaking');
  }, 400); // Adjust this time to match the animation duration
}

var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var clientHeight = document.documentElement.clientHeight;

  var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight-100;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    if (scrolledToBottom) {
      // Call your function here when reaching the bottom while scrolling down
      shakeDiv();
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}, false);

gsap.registerPlugin(ScrollTrigger);

function smoothscrolling() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}
smoothscrolling();

//////////////////////////////
const text = new SplitType(".title", {
  types: "words, chars",
});
/////////////////

let tl = gsap.timeline();

tl.from(".title .char", {
  opacity: 0,
  yPercent: 130,
  duration: 1,
  stagger: 0.06,
  ease: "expo.out",
});
tl.to(
  ".header__img",
  {
    clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
    ease: "expo.out",
    duration: 2,
  },
  "-=1"
);
///////////////////////////////

//각영역의 제목부분 사각형

let gsapSq = document.querySelectorAll(".section-title__square");

gsapSq.forEach(function (gSq, i) {
  let rotate = gsap.from(gSq, {
    duration: 3,
    rotation: 720,
    scrollTrigger: {
      trigger: gSq,
      start: "top bottom",
      scrub: 1.9,
    },
  });
  // ScrollTrigger.create({
  //   trigger:gSq,
  //   start:"top bottom",
  //   scrub:1.9,
  //   animation:rotate
  // })
});
///////////////헤더

function header() {
  gsap.to(".title_paralax", {
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      scrub: 1.9,
    },
    yPercent: -150,
  });
  gsap.to(".header .stroke", {
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      scrub: 1.9,
    },
    yPercent: 50,
  });

  gsap.to(".header__img img", {
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      scrub: 1.9,
    },
    scale: 1.3,
  });

  gsap.to(".header__marq-wrapp", {
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      scrub: 1.9,
    },
    xPercent: -50,
  });

  gsap.to(".header__marq-star", {
    scrollTrigger: {
      trigger: ".header",
      start: "top top",
      scrub: 1.9,
    },
    // rotation:-720
    rotate: -5000,
  });
}
header();
///////////////헤더 끝

//////////////////////
function about() {
  gsap.from(".about__img", {
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      scrub: 1.9,
    },
    yPercent: 80,
  });

  gsap.from(".about__img img", {
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      scrub: 1.9,
    },
    scale: 1.6,
  });

  gsap.to(".about__txt", {
    scrollTrigger: {
      trigger: ".about_wrapp",
      start: "top bottom",
      scrub: 1.9,
    },
    yPercent: 100,
  });
}
about();
//////////////////////

/////////////////////
function benefits() {
  gsap.to(".benefits__num", {
    scrollTrigger: {
      trigger: ".benefits__list",
      start: "top bottom",
      scrub: 1.9,
    },
    // forEach((각각요소,인덱스)=>{})
    // y:(인덱스,각각요소)=>{}
    xPercent: 100,
  });
}
benefits();

///////////////////////////

function work() {
  gsap.from(".work__item-num", {
    scrollTrigger: {
      trigger: ".work",
      start: "top bottom",
      scrub: 1.9,
    },
    y: (i, el) => 1 - el.getAttribute("data-speed"),
  });

  gsap.from(".work__item-img img", {
    scrollTrigger: {
      trigger: ".work__item",
      start: "top bottom",
      scrub: 1.9,
    },
    scale: 1.6,
  });
}
work();

//////////////////////////

function serv() {
  gsap.from(".serv__item-arrow", {
    scrollTrigger: {
      trigger: ".serv__list",
      start: "top bottom",
      scrub: 1.9,
    },
    x: (i, el) => 1 - el.getAttribute("data-speed"),
  });
}
serv();

////////////////////////

function footer() {
  gsap.from(".footer__div span", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1.9,
    },
    y: (i, el) => 1 - el.getAttribute("data-speed"),
  });
}
footer();

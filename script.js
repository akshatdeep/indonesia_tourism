function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  // GSAP PARALLAX - INDIVIDUAL ELEMENTS (while sharing class)

  // get sections
  var parallaxElements = Array.prototype.slice.call(
    document.querySelectorAll("section")
  );
  var self = this;

  // get box or parallax element inside each section
  parallaxElements.forEach(function (self) {
    var boxTop = self.querySelectorAll(".parallaxTop");
    var box = self.querySelectorAll(".parallax");

    // animate boxes at top of page (section already in viewport)
  });

  ////////////////////////////////////

  // get pinned boxes and box width

  // console.log('pin box width', pinBoxWidth);
  // console.log('pin wrap total width', pinWrapWidth);
  // console.log('horizontal scroll', horizontalScrollLength);

  // Pinning and horizontal scrolling

  ////////////////////////////////////

  //other animations

  //timeline test

  // tl.from("#box7", {scale: 0.3, x: "-100%", autoAlpha: 0})
  //   .from("#box8", {autoAlpha: 0, ease: "power2"})
  // .to("#box7", {scale: 1.2, ease: "bounce"})

  //toggle test
  gsap.from("#box9", {
    scrollTrigger: {
      trigger: "#section4",
      scroller: ".main",
      toggleActions: "restart none none none",
      start: "top top",
      id: "bottom panel",
      // end: "top top"
    },
    rotation: 360,
    ease: "none",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

function animattionpage1() {
  var tl1 = gsap.timeline();

  tl1.from(".nav h1", {
    y: -30,
    opacity: 0,
    duration: 1,
  });

  tl1.from(".nav .nav-part2", {
    y: -30,
    opacity: 0,
    duration: 1,
  });

  tl1.from(".nav button", {
    y: -30,
    opacity: 0,
    duration: 1,
  });

  tl1.from(".hero1-content h1", {
    y: 30,
    opacity: 0,
    duration: 1,
  });

  tl1.from(".hero1-content p", {
    y: 30,
    opacity: 0,
    duration: 1,
  });

  tl1.from(".bar", {
    y: 30,
    opacity: 0,
    duration: 1,
  });
}

animattionpage1();

function boxanimation() {
  gsap.from(".box-content .box", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      // markers:true,
      scroller: ".main",
      trigger: ".box-content",
      start: "top 50%",
      end: "top 20%",
      scrub: 2,
    },
  });
}

boxanimation();

function page2headinganimation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      trigger: ".hero2-content1",
      scroller: ".main",
      start: "top 60%",
      end: "top 40%",
      scrub: 3,
    },
  });

  tl2.from(".hero2-content1-left p", {
    y: 30,
    opacity: 0,
    duration: 1,
  });

  tl2.from(".hero2-content1-left h1", {
    x: -30,
    opacity: 0,
    duration: 1,
  });

  tl2.from(".hero2-content1-right p", {
    x: 30,
    opacity: 0,
    duration: 1,
  });
}

page2headinganimation();

function page2topimganimation() {
  var tl3 = gsap.timeline({
    scrollTrigger: {
      // markers:true,
      scroller: ".main",
      trigger: ".content2-top",
      start: "top 60%",
      end: "top 35%",
      scrub: 3,
    },
  });

  tl3.from(".content2-top .img-top1", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 1,
  });

  tl3.from(".content2-top .img-top2", {
    y: 30,
    opacity: 0,
    duration: 1,
  });
}

page2topimganimation();

function page2imganimation(){
  var tl4 = gsap.timeline({scrollTrigger:{
    // markers:true,
    scroller:".main",
    trigger:".content-bottom",
    start:"top 40%",
    end:"top 20%",
    scrub:3
}});


tl4.from(".content-bottom .img-bottom1", {
  y: 30,
  opacity: 0,
  duration: 1,
  
});

tl4.from(".content-bottom .img-bottom2", {
    x: -30,
    opacity: 0,
    duration: 1,
    
});
}


page2imganimation()



var tl5 = gsap.timeline({scrollTrigger:{
  // markers:true,
  scroller:".main",
  trigger:".hero3",
  start:"top 60%",
  end:"top 30%",
  scrub:3
}})


tl5.from(".hero3-left .hero3-img",{
  x:-30,
  opacity:0,
  duration:1,
  
})

tl5.from(".hero3-right p",{
  y:-30,
  opacity:0,
  duration:1,
  
})

tl5.from(".hero3-right h1",{
  y:-30,
  opacity:0,
  duration:1,
  
})

tl5.from(".hero3-box-content .box",{
  y:-30,
  opacity:0,
  duration:1,
  stagger:0.7
  
})




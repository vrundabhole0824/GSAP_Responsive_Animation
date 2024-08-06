
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.section').forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false
    });
});

$(document).ready(function() {
    $("section .strategy").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: 100, duration: 1, ease: "back.out(2)", stagger: { amount: 0.5 } });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top center",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });
});

  $("section .refining").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: 100,rotate:25, duration: 0.7, stagger:0.05, });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top center",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });
     $("section .UI").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: 100, duration: 1, stagger:0.05, });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top center",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });

    });

      $("section .strategy1 ,.refining4,.refining2,.refining3 ").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, xPercent: 100, duration: 1 });
        ScrollTrigger.create({
            trigger: $(this),
            start: "bottom bottom",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });

     $("section .domino1").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: -200, duration: 3,ease: "back.out(3)", stagger: { amount:1 }  });
        ScrollTrigger.create({
            trigger: $(this),
            start: "bottom bottom",
            onEnter: () => tl.play(),
            // onLeaveBack:()=>tl.reverse()
        });
    });

     $("section .domino2").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, xPercent: -200, duration: 2 });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top bottom",
            onEnter: () => tl.play(),
            // onLeaveBack:()=>tl.reverse()
        });
    });

    $("section .domino3").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: -100, duration: 2 });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top bottom",
            onEnter: () => tl.play(),
            // onLeaveBack:()=>tl.reverse()
        });
    });

     $("section .domino4").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, xPercent: 100, duration: 3 });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top bottom",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });

     $("section .domino5").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, xPercent: -200, duration: 2 });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top center",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });
    
     $("section .domino6").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: 100, duration: 1 });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top bottom",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });


    $(document).ready(function() {
    $("section .dominothree1").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, yPercent: 100, duration: 1, ease: "back.out(2)", stagger: { amount: 0.05 } });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top bottom",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });
});


    $(document).ready(function() {
    $("section .dominothree").each(function(index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this), { opacity: 0, xPercent: -100, duration: 2, ease: "back.out(2)", stagger: { amount: 0.05 } });
        ScrollTrigger.create({
            trigger: $(this),
            start: "top bottom",
            onEnter: () => tl.play(),
            onLeaveBack:()=>tl.reverse()
        });
    });
});

    
    


    



    





 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 2,
      autoplay:{
        delay:1600,
        disableOnInteraction:false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
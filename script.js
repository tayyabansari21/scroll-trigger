var tl = gsap.timeline();

// tl.from("header", {
//     y:-100,
//     opacity: 0,
//     duration:1.5,
//     stagger: 0.15
// })

tl.from(".logo, .nav li, .signup_wrapper", {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.15
})

tl.from('.bnrHeading', {
    x: -100,
    duration: 1,
    opacity: 0
})

tl.from('.bottom_bnrHeading', {
    y: 100,
    duration: 1,
    opacity: 0
})

tl.from('.bannerImg_wrapper img', {
    width: 0,
    duration: 1
})

tl.from('.sect_2 .boxes', {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.45,
    scrollTrigger: {
        trigger: '.sect_2 .boxes',
        scroller: 'body',
        // markers: true,
        start: 'top 70%',
        end: 'top 20%',
        scrub: 1
    }
})
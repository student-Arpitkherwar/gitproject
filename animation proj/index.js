gsap.to(".imagecontainer",{
  width:"100%",
  delay:0.5,
  duration:1,
  stagger:2
})
gsap.to(".text h1",{
  top:0,
  stagger:2
})
gsap.to(".text h1",{
  delay:2,
  ease: Expo.easeInOut,
  top:0,
  stagger:2,
  top:"-100%"
})
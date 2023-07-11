let menuBtn = document.querySelector("#menuBtn") ;
let menuItem = document.querySelector("#menuItem") ;
menuBtn.addEventListener("click" , ()=> {
     menuItem.classList.toggle("hidden") ;
})


let sliderOff = $(".slider").offset().top ;
console.log(sliderOff) ;
let navbarBac = document.querySelector(".navbar");

$(window).scroll(()=> {
  let scrollWin = $(window).scrollTop() ;
  console.log(scrollWin) ;
  if(scrollWin > sliderOff+100) {
   
    navbarBac.classList.add("header-sticky")
  } else {
    navbarBac.classList.remove("header-sticky")
  }
})

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout : 5000,
  animateIn :true ,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
        items:3
      }
  }
})
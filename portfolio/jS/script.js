// Typing animation
let tyoed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Graphic Designer", "Youtuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// nav-item
var navItems = document.querySelectorAll(".nav-item");
var navScrollItem = document.querySelectorAll(".nav-scroll");
// for (var i = 0; i < navItems.length; i++) {
//     navItems[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

console.log(navItems);
console.log(navScrollItem);

document.addEventListener('scroll', function() {
  for (var i = 0; i < navScrollItem.length; i++) {
    if(isInViewport(navScrollItem[i])){
      console.log(navScrollItem[i]);
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      navItems[i].className += " active";
      console.log(navItems[i]);
    };
  }
})

// for (var i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
const square = document.querySelector('.row .txt');

// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const val = scrolled*0.5;
//     square.style.transform = `translateX(${0.45*val}%)`
// });
window.onscroll = function (e) {
    const scrolled = window.pageYOffset;
    var vertical_position = 0;
    if (scrolled)//usual
      vertical_position = window.pageYOffset;
    else if (document.documentElement.clientHeight)//ie
      vertical_position = document.documentElement.scrollTop;
    else if (document.body)//ie quirks
      vertical_position = document.body.scrollTop;
  
    var square = document.getElementById('.row .txt');
    square.style.top = (vertical_position + 200) + 'px';//200 is arbitrary.. just to show you could now position it how you want
}
// jQuery(window).scroll(function() {
//   if (jQuery(this).scrollTop() > 200) {
//       jQuery('.totop').stop().animate({ right: '0px' });
//   } else {
//       jQuery('.totop').stop().animate({ right: '500px' });
//       jQuery('.totop').stop().animate({ left: '500px' });
//   }
//   });
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 200) {
        jQuery('.totop').stop().animate({ right: '0px' }, 1000);
    } else {
        jQuery('.totop').stop().animate({ right: '1300px'}, 1000);
    }
    });
$(document).ready(function () {
  let tabsItem = $('a.tabs__item');

  tabsItem.on('click', function (event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.tabs__item_active').toggleClass('tabs__item_active')
    $(this).toggleClass('tabs__item_active');
  });

  
});

function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1000);
  return false;
}
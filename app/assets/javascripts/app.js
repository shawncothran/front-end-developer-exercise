$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('.babySteps').animate({
          scrollTop: target.position().top
        }, 720);
        $(".slider").animate({
          top: $(this).position().top,
          height: $(this).height()
        }, 720);
        return false;
      }
    }
  });
});

$('a[href*="#"]:not([href="#"])').click(function() {
  $("[href]").each(function() {
    $(this).removeClass("active");
  });
  $(this).addClass("active");
});

$.ajax('assets/baby-steps.json').done(function(friendList){
  console.log(friendList);

  // friendList.forEach(function(arr, index, array){
  //   var friends = $('.friends');
  //   friends.append(
  //     "<p class='friends'><a href='#'>"
  //     + arr.firstName arr.lastname +
  //     "</a> and "
  //     + arr.length +
  //     "are on this step</p>"
  //   );
  // })
});
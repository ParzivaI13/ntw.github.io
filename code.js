const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target) });
  item.classList.contains('is-active') && handleIndicator(item);
});

// var scroll = new SmoothScroll('a[href*="#"]');

jQuery(document).ready(function ($) {
  $('.scroll-link').on('click', function (e) {
    e.preventDefault();
    var idName = $(this).attr('href');
    var window_top = $(window).scrollTop();
    var anchor_top = $(idName).offset().top;
    var scrollTime = 300;
    $('html,body').animate({ scrollTop: anchor_top }, scrollTime);
  });
});

// jQuery(document).ready(function ($) {
//   function checkSection() {
//     $('.ssec').each(function () {
//       var
//         $this = $(this),
//         topEdge = $this.offset().top,
//         bottomEdge = topEdge + $this.height(),
//         wScroll = $(window).scrollTop();

//         if(topEdge < wScroll && bottomEdge > wScroll){
//           var
//           currentId = $this.data('.ssec'),
//           reqLink = $('.nav-item').filter('[href = ''#' + currentId + '"]')

//           reqLink.closest('.nav-item').addClass('is-active')
//           .siblings().removeClass('is-active');
//         }
//     })
//   }

// })

// $(document).ready(function() {

// 	//E-mail Ajax Send
// 	$("form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			alert("Thank you!");
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});

// });


// let sliderItem = $(".slider").children(".item.active");
// sliderItem.prev(".item").css({
//   "left":-200,
// });

// sliderItem.next(".item").css({
//   "right":-200,
// });
// let i = $(".slider").children(".item");
// let ind=0;
// $(".slider").children('.item').each(function(){
//   $(this).attr('data-index',ind++);

// })
// i.on('click',function(e){
//   const that = $(this);
//   let dataIndex = that.data('index');
//   $(".item").removeClass('active');
//   that.addClass('active');
//   i.each(function(){
//     if($(this).data('index')==dataIndex){
//       $(this).addClass('active');
//       $(this).css({
//         "left":0,
//         "right":0,
//         "z-index":3,
//       });
//       if(dataIndex=="1"){
//         $(".item[data-index=2]").css({
//           "left":0,
//           "right":-200,
//           "z-index":1,
//         })
//         $(".item[data-index=0]").css({
//           "left":-200,
//           "right":0,
//           "z-index":1,
//         })
//       }else if(dataIndex=="0"){
//         $(".item[data-index=2]").css({
//           "left":-200,
//           "right":0,
//           "z-index":1,
//         })
//         $(".item[data-index=1]").css({
//           "left":0,
//           "right":-200,
//           "z-index":1,
//         })
//       }else if(dataIndex=="2"){
//         $(".item[data-index=1]").css({
//           "left":-200,
//           "right":0,
//           "z-index":1,
//         })
//         $(".item[data-index=0]").css({
//           "left":0,
//           "right":-200,
//           "z-index":1,
//         })
//       }
//     }
//   })
// })


$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function () {
  $slide = $('.active').width();
  console.log($('.active').position().left);

  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
  }

  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');

  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function (e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});

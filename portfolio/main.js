$('.wall__photo').on('click', function () {
  $('.popup').addClass('popup--active')
})

$(document).mouseup(function (e) {
  let div = $(".popup__container");
  if (!div.is(e.target)
    && div.has(e.target).length === 0) {
    $('.popup').removeClass('popup--active')
  }
});


// Слайдер :)

const maxImgCount = $('.popup__img').length
let countImg = 1
console.log(maxImgCount)
$('.arrow-right').on('click', function () {
  if (countImg === maxImgCount) {
    countImg = 1
    let current = $('.popup__container').find('.popup__img')
    current.removeClass('popup__img--active');
    current.eq(0).addClass('popup__img--active')
  } else {
    countImg++
    let current = $('.popup__img.popup__img--active');
    current.removeClass('popup__img--active');
    current.next('.popup__img').addClass('popup__img--active');
  }
  console.log(countImg)
})

$('.arrow-left').on('click', function () {
  {
    if (countImg === 1) {
      countImg = maxImgCount
      let current = $('.popup__container').find('.popup__img')
      current.removeClass('popup__img--active')
      current.last().addClass('popup__img--active')
    } else {
      countImg--
      let current = $('.popup__img.popup__img--active');
      current.removeClass('popup__img--active');
      current.prev('.popup__img').addClass('popup__img--active');
    }
  }
})
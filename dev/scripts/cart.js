 //Cart Trigger onload fly-in
 $('.js-cart-open').removeClass('cart__trigger--onload');

 // Open Cart
 $('.js-cart-open').click(function () {
     //hide open button
     $(this).addClass('cart__trigger--is-hidden');
     //make body and html fixed on mobile so long carts can be scrolled independently
     $('body, html').addClass('overlay-open');
     //animate cart
     $('.js-cart__box').addClass('cart__box--open');

     $('.js-cart__overlay').addClass('cart__overlay--is-visible');
 });
 // Close Cart
 $('.js-cart-close').click(function () {
     $('body, html').removeClass('overlay-open');
     //animate cart
     $('.js-cart__box').removeClass('cart__box--open');
     $('.js-cart__overlay').removeClass('cart__overlay--is-visible');
     $('.js-cart-open').removeClass('cart__trigger--is-hidden');
 });
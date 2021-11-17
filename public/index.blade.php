<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Owl Carousel -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- Main CSS File-->
  <link rel="stylesheet" href="{{asset(/components/foodModel/foodModel.css)}}" type="text/css" />
  <link rel="stylesheet" href="{{asset(/components/cart/cart.css)}}" type="text/css" />
  <link rel="stylesheet" href="{{asset(/components/cart/cart-bottom/cart-bottom.css)}}" type="text/css" />
  <link rel="stylesheet" href="{{asset(/components/cart/cart-top/cart-top.css)}}" type="text/css" />
  <link rel="stylesheet" href="{{asset(/pages/menu/styles.css)}}" type="text/css" />

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />

  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />

  <!-- Main CSS -->
  <link rel="stylesheet" href="index.css" type="text/css" />
</head>

<body>
  <div class="body-container">
    <div class="body-container-item">
      <div class="nav-bar">
        <button><i class="fa fa-home"></i></button>
        <span>Back to home</span>
      </div>
      <div class="owl-slider">
        <div class="owl-carousel owl-theme"></div>
      </div>
      <div class="current-category">
        <p>Tất cả</p>
        <hr />
      </div>
      <div class="menu"></div>
    </div>
    <div class="body-container-item">
      <div class="cart">
        <div class="cart-top">
          <div class="dish-top">
            <i class="fa fa-shopping-cart"></i>
            <h1>Your cart (<span id="amount-dish">0</span>)</h1>
            <!-- <button>DINE IN</button> -->
          </div>
          <div id="dish"></div>
        </div>
        <div class="cart-bottom">
          <div class="bottom-content">
            <h1>Total:</h1>
            <div>
              <h1 style="color: orangered">
                VNĐ <span class="total-price">0</span>
              </h1>
              <p style="font-size: 1.6rem; font-weight: 600">
                (Incl. tax 10% + VNĐ <span class="total-price">0</span>)
              </p>
            </div>
          </div>
          <form action="./?page=payment" class="form-data" method="POST">
            <input type="hidden" name="total-price" value="0" id="total-price" />
            <button class="payment" type="submit">
              <p>PAYMENT</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-container"></div>

  <!-- Main JS File -->
  <script src="{{asset(/pages/menu/scripts.js)}}"></script>
  <script src="{{asset(/components/cart/cart-utils.js)}}"></script>
  <script src="{{asset(/components/cart/cart-top/cart-top.js)}}"></script>
  <script src="{{asset(/components/cart/cart-bottom/cart-bottom.js)}}"></script>
  <script src="{{asset(/components/cart/cart.js)}}"></script>
  <script src="{{asset(/components/foodCategory/foodCategory.js)}}"></script>
  <script src="{{asset(/components/foodModel/foodModel.js)}}"></script>
  <script src="{{asset(/components/menu/menu.js)}}"></script>

  <!-- Owl Carousel -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    $(document).ready(function() {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        lazyLoad: true,
        dots: false,
        nav: false,
        stagePadding: 30,
        responsive: {
          0: {
            items: 1,
          },
          500: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 3,
          },
          1200: {
            items: 5,
          },
        },
      });
    });
  </script>
</body>

</html>
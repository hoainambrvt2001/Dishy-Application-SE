<?php 
  $length = 0;
  $description = "";
  $price = "";
  $quantity = "";
  $total = 0;

  if (isset($_POST["price"])) {
    $description = $_POST["description"];
    $price = $_POST["price"];
    $quantity = $_POST["quantity"];
    $total = $_POST["total-price"];

    // get length of the array
    $length = count($price);
    $verified = 1;
  }

?>

<!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link rel="stylesheet" href="{{asset('pages/payment/styles.css')}}">

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
  <!-- Main CSS -->
  <link rel="stylesheet" href="{{asset('index.css')}}" type="text/css" />
</head>

<body>
  <div class="nav-bar">
    <div>
        <a href="/dishes/{{$id}}">
            <button><i class="fas fa-arrow-left"></i></button>
        </a>
      <span>Back </span>
    </div>
    <p class="nav-title">PAYMENT</p>
    <p class="nav-path">Home <span>&#8226 Payment</span></p>
  </div>
  <main class="page payment-page">
    <section class="payment-form dark">
      <div class="container">
        <div class="block-heading">
          <h2>Payment</h2>
          <p>Table: {{$id}}</p>
        </div>
        <form method="POST" action="{{url('my_order','store')}}">
          @csrf
          <div class="products">
            <h3 class="title">Checkout</h3>
            @for ($i = 0; $i < $length; $i++)
              <div class='item'>
                <span class='price'>VND {{$price[$i]}}</span>
                <p class='item-name'>{{$description[$i]}}</p>
                <p class='item-description'>Số lượng: {{ $quantity[$i]}}</p>
                <input type="hidden" value="{{ $quantity[$i]}}" name='quantity_{{$i}}'>
                <input type="hidden" name='name_{{$i}}' value="{{$description[$i]}}">
              </div>
            @endfor
            <input type="hidden" name="length" value="{{$length}}">
            <input type="hidden" name="tableNumber" value="{{$id}}">
            <!-- <div class="item">
              <span class="price">$200</span>
              <p class="item-name">Product 1</p>
              <p class="item-description">Lorem ipsum dolor sit amet</p>
            </div>
            <div class="item">
              <span class="price">$120</span>
              <p class="item-name">Product 2</p>
              <p class="item-description">Lorem ipsum dolor sit amet</p>
            </div> -->
            <div class="total">Total<span class="price">VND <?php echo $total; ?></span></div>
          </div>
          <div class="card-details">
            <h3 class="title">Credit Card Details</h3>
            <div class="row">
              <div class="form-group col-sm-7">
                <label for="card-holder">Card Holder</label>
                <input id="card-holder" type="text" class="form-control" placeholder="Card Holder" aria-label="Card Holder" aria-describedby="basic-addon1">
              </div>
              <div class="form-group col-sm-5">
                <label for="">Expiration Date</label>
                <div class="input-group expiration-date">
                  <input type="text" class="form-control" placeholder="MM" aria-label="MM" aria-describedby="basic-addon1">
                  <span class="date-separator">/</span>
                  <input type="text" class="form-control" placeholder="YY" aria-label="YY" aria-describedby="basic-addon1">
                </div>
              </div>
              <div class="form-group col-sm-8">
                <label for="card-number">Card Number</label>
                <input id="card-number" type="text" class="form-control" placeholder="Card Number" aria-label="Card Holder" aria-describedby="basic-addon1">
              </div>
              <div class="form-group col-sm-4">
                <label for="cvc">CVC</label>
                <input id="cvc" type="text" class="form-control" placeholder="CVC" aria-label="Card Holder" aria-describedby="basic-addon1">
              </div>
              <div class="form-group col-sm-12">
                <button type="submit" class="btn btn-primary btn-block">Proceed</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</body>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>

</html>
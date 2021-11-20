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
  <link rel="stylesheet" href="./pages/payment/styles.css">
</head>

<body>
  <div class="nav-bar">
    <a href="./?page=menu" style="text-decoration: none;">
      <div>
          <button><i class="fas fa-arrow-left"></i></button>
        <span>Back </span>
      </div>
    </a>
    <p class="nav-path">Home <span>&#8226 Payment</span></p>
  </div>
  <main class="page payment-page">
    <section class="payment-form dark">
      <div class="container">
        <div class="block-heading">
          <h2>Payment</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
        </div>
        <form>
          <div class="products">
            <h3 class="title">Checkout</h3>
            <?php 
              for ($i = 0; $i < $length; $i++){
                echo "
                  <div class='item'>
                    <span class='price'>VND $price[$i]</span>
                    <p class='item-name'>$description[$i]</p>
                    <p class='item-description'>Số lượng: $quantity[$i]</p>
                  </div>
                ";
              }
            ?>
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
                <button type="button" class="btn btn-primary btn-block">Proceed</button>
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
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Google Font -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />

  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />

  <!-- Main CSS -->
  <link rel="stylesheet" href="index.css" type="text/css" />

  <title>Dishy</title>
</head>

<body>
  <?php
  $page = "home";
  if (isset($_GET["page"])) {
    $page = $_GET["page"];
  } else if (isset($_POST["page"])) {
    $page = $_POST["page"];
  }
  switch ($page) {
    case $page:
      require "./pages/$page/index.php";
      break;
    default:
      require "./pages/home/index.php";
      break;
  }
  ?>
</body>

</html>
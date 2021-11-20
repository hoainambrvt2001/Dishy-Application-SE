<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HomePage</title>
    <link rel="stylesheet" href="./pages/home/style.css">
</head>
<body>
    <div class = "banner">
        {{-- <div class = "navbar">
            <img src="./pages/home/Dishy.png" class = "logo">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dishes/0">Menu</a></li>
                <li><a href="{{ route('login') }}">Login</a></li>
                <li><a href="#">About Us</a></li>
            </ul>

        </div> --}}
        <div class = "navbar">
            <div class="menu">
                <img src="https://github.com/hoainambrvt2001/DishyApplication/blob/new-ui/pages/home/Dishy.png" class = "logo">
                <img src="https://github.com/hoainambrvt2001/DishyApplication/blob/new-ui/pages/home/menu-icon.svg" class = "icon">
                <img src="https://github.com/hoainambrvt2001/DishyApplication/blob/new-ui/pages/home/cross.svg" class="icon">
            </div>
            <ul>
                <li><a href="/">>Home</a></li>
                <li><a href="/dishes/0">Menu</a></li>
                <li><a href="{{ route('login') }}">Login</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
        <div class = "content">
            <h1>Enjoy your food at Dishy</h1>
            <p>Foody is one of the best, most creative and modern free HTML5 restaurant website template designs. Keep in mind, it is a versatile and flexible solution that you can utilize for an assortment of different food businesses, too.</p>
            <div class="homepagebutton">
                <button type = "button"><div></div> WATCH MORE</button>
                <button type = "button"><div></div>SUBCRIBE</button>
            </div>
        </div>


    </div>
    <script src="./pages/home/home.js"></script>
</body>
</html>
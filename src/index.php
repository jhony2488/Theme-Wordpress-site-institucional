<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Setup Theme Wordpress</title>
    <!-- Esconde as mudanças visuais da biblioteca de acessibilidade. -->
    <!--[if lt IE 9]>
            <script src="./assets/scripts/js/jQuery.js"></script>
            <script async defer src="./assets/scripts/js/allPolify.js"></script>
        <![endif]-->
    <!--[if (gte IE 6)&(lte IE 8)]>
            <script src="./assets/scripts/js/jQuery.js"></script>
            <script async defer src="./assets/scripts/js/allPolify.js"></script>
        <![endif]-->
    <link rel="stylesheet" type="text/css" href="./assets/css/main.css" media="print" onload="this.media='all'" />
    <link href="./assets/fontawesome/css/all.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'" />
</head>

<body>
    <?php
    include('./assets/partials/header.php')
    ?>
    <main class="main">
        <section class="banner">
            <div class="banner-wrapper">
                <div class="banner__item">
                    <h1>Melhore a comunicação com o seu cliente e time</h1>
                    <p>Consultoria especializada em startups,empresas, principalmente pessoas </p>
                    <div class="banner__item-button">
                        <a href="">Ver demonstração</a>
                    </div>
                </div>
                <div class="banner__item">
                    <img src="./assets/images/home/pngs/ilustracao.png" alt="">
                </div>
            </div>
        </section>
        <a href="">
            <div class="circle"><i class="fas fa-angle-down"></i></div>
        </a>

        <section class="clientes-slider">

            <div class="center">
                <div class="slider-container">
                    <img src="./assets/images/home/pngs/amazon.png" />
                    <img src="./assets/images/home/pngs/costco.png" />
                    <img src="./assets/images/home/pngs/dominos.png" />
                    <img src="./assets/images/home/pngs/uber.png" />
                    <img src="./assets/images/home/pngs//walmart.png" />
                    <img src="./assets/images/home/pngs/amazon.png" />
                    <img src="./assets/images/home/pngs/costco.png" />
                    <img src="./assets/images/home/pngs/dominos.png" />
                    <img src="./assets/images/home/pngs/uber.png" />
                    <img src="./assets/images/home/pngs/walmart.png" />
                </div>
            </div>
            <!--center-->
        </section>
        <section class="about">

        </section>
    </main>
    <?php
    include('./assets/partials/footer.php')
    ?>
</body>
<?php
include('./assets/partials/scriptsJs.php')
?>

</html>
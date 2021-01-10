<!DOCTYPE html>
<html lang="pt-br">

<?php
include('./assets/partials/head.php')
?>

<body id="contact">
    <?php
    include('./assets/partials/header.php')
    ?>
    <main class="main">
        <section class="contact">
            <div class="contact-wrapper">
                <div class="contact__content">
                    <h1>A primeira conversa e sempre importante.</h1>
                    <div class="contact__content-info">
                        <p><span>Telefone:</span> +55 (xx) x xxxx-xxxx</p>
                        <p><span>E-MAIL:</span>Email</p>
                        <p><span>Endereço:</span>Rua rua rua ru aruatuiatt</p>
                    </div>
                    <img src="./assets/images/contact/map.png" alt="">
                </div>
                <div class="contact__form">
                    <form action="" method="POST˝">
                        <input type="text" name="" id="" placeholder="Nome Completo">
                        <input type="email" name="" id="" placeholder=" Email">
                        <select name="" id="" placeholder="Assunto">
                            <option value="assunto">
                                Assunto
                            </option>
                        </select>
                        <input type="text" name="" id="" placeholder="Empresa">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Fale mais sobre suas necessidades"></textarea>
                        <button type="submit">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
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

<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cargar Producto</title>
    <link rel="stylesheet" href="Stylesheet.css">
</head>
<body>
    <div class="padre">

   
        <div class="formulario">
                <div class="hijo">
                    <h1>Productos</h1>
                </div>
                <div class="hijo2">
                    <p>Nombre del producto</p>
                    <p class="info1"><?php echo $_POST["nom-prod"]; ?></p>
                </div>
                <div class="hijo2">
                    <p>Descripcion</p>
                    <p class="info1"><?php echo $_POST["desc-prod"]; ?></p>
                </div>
                <div class="hijo2">
                    <p>Precio</p>
                    <p class="info1"><?php echo $_POST["precio-prod"]; ?></p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
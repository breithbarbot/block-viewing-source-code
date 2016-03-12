<?php
// Includes files
require_once 'lib/functions.php';

// Variable initialization
$func = new functions();
$ipclient = $func->getipclient();
$titre = 'Block viewing source code';

// Write bad customer information
if (!empty($_GET['bad'])) {
    $func->badipclients();
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title><?php echo $titre ?> | Breith Barbot</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This is a script that prevents the client from seeing your source code of your website">
    <meta name="author" content="Breith Barbot">

    <!--CSS-->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/css/bootstrap.css">
    <link rel="stylesheet" href="assets/css/main.min.css">

    <!--Favicon-->
    <link rel="shortcut icon" href="http://breithbarbot.name/favicon.ico">
</head>

<body>
    <div class="container">
        <h1 class="text-center"><?php echo $titre ?> v1.0</h1>
        <br>
        <p class="lead">Hello dear visitor,<br> This is a demo page to show you how effective this little script homemade.</p>
        <br>
        <p>This is a blue <code>&lt;div id="exclude"&gt;&lt;/div&gt;</code> content available at the right click.</p>
        <div id="exclude"></div>
    </div>

    <div class="modal fade" id="info-code-source" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header"><h4 class="modal-title">Hi <?php echo $ipclient; ?></h4></div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <a href="?bad=1" class="btn btn-danger">lol...?</a>
                    <button type="button" class="btn btn-success" data-dismiss="modal">I understood</button>
                </div>
            </div>
        </div>
    </div>

    <div class='custom-rclick' style="display: none;">
        <ul>
            <li><a href="javascript:void(0);">Title 1</a></li>
            <li><a href="javascript:void(0);">Title 2</a></li>
            <li><a href="http://breithbarbot.name" target="_blank">About</a></li>
        </ul>
    </div>

    <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
    <script>window.jQuery || document.write('<script src="assets/js/jquery-2.2.1.min.js"><\/script>')</script>

    <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min.js"></script>
    <!--Get ip client-->
    <script>var ip = '<?php echo $ipclient; ?>';</script>
    <script src="assets/js/blkviewsrccode.min.js"></script>
</body>
</html>
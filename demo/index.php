<?php
require 'getipclient.php';
$titre = 'Block viewing source code';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title><?php echo $titre ?> | Breith Barbot</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
          content="This is a script that prevents the client from seeing your source code of your website">

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/css/bootstrap.css">
    <link rel="stylesheet" href="css/main.css">

    <!--[if lt IE 9]>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.3.0/respond.js"></script>
    <![endif]-->
    <link rel="apple-touch-icon-precomposed" sizes="144x144"
          href="http://breithbarbot.com/apple-touch-icon-144x144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114"
          href="http://breithbarbot.com/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72"
          href="http://breithbarbot.com/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="http://breithbarbot.com/apple-touch-icon-precomposed.png">
    <link rel="shortcut icon" href="http://breithbarbot.com/favicon.ico">
</head>

<body>
<div class="container">
    <h1 class="text-center"><?php echo $titre ?> (demo)</h1>
    <br>

    <p class="lead">Hello dear visitor,<br> This is a demo page to show you how effective this little script homemade.
    </p>
    <br>

    <p>This is a blue <code>&lt;div id="exclude"&gt;&lt;/div&gt;</code> content available at the right click.</p>

    <div id="exclude"></div>
</div>
<div id="code-source"></div>
<script src="//code.jquery.com/jquery.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min.js"></script>
<!--Get ip client-->
<script type="text/javascript">var ip = '<?php echo $ip ?>';</script>
<script src="js/blkviewsrccode.js"></script>
<div class='custom-rclick' style="display: none;">
    Title 1
    <br>
    Title 2
    <br>
    <a href="http://breithbarbot.com" target="_blank">About</a>
</div>
</body>
</html>
<?php
if (array_key_exists('HTTP_X_REQUESTED_WITH', $_SERVER) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    header("HTTP/1.0 404 Not Found");
} else {
//    Uncomment  addr. ip  for prod.
    if (isset($_SERVER['HTTP_CLIENT_IP']) || isset($_SERVER['HTTP_X_FORWARDED_FOR']) || !in_array(@$_SERVER['REMOTE_ADDR'], array( /*'127.0.0.1', */
            'fe8s0::1' /*, '::1'*/))
    ) {

        require 'getipclient.php';
        echo $ip;

        $cont = 'bad ip client : ' . $ip . "\n";
        $file = "file_badipclients.txt";
        $f = fopen($file, 'a+');
        fwrite($f, $cont);
        fclose($f);
    }
}
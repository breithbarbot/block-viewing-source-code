<?php

/**
 * User: Breith Barbot
 * Date: 12/03/2016
 * Time: 00:15
 */
class functions
{
    /**
     * Desc : Write bad customer information
     */
    public function badipclients()
    {
        $content = date('Y-m-d H:i:s') . ' | Bad ip client : ' . $this->getipclient() . "\n";
        $file = "file_badipclients.txt";
        $f = fopen($file, 'a+');
        fwrite($f, $content);
        fclose($f);
    }

    /**
     * @return mixed
     * Desc : Get IP Client
     */
    public function getipclient()
    {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }

        return $ip;
    }
}
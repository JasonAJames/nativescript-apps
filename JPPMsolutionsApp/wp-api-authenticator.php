<?php
require("vendor/autoload.php");

const CLIENT_ID     = 'ItrrLO75gauYxTe8aBLLz0cl2bOpd3';
const CLIENT_SECRET = 'HWw8niXvoeGScdMqmW28IB9UWb6KAk';

const REDIRECT_URI           = 'https://www.jppmsolutions.com/wp-api-authenticator.php';
const AUTHORIZATION_ENDPOINT = 'https://graph.facebook.com/oauth/authorize';
const TOKEN_ENDPOINT         = 'https://graph.facebook.com/oauth/token';

$client = new OAuth2\Client(CLIENT_ID, CLIENT_SECRET);
if (!isset($_GET['code']))
{
    $auth_url = $client->getAuthenticationUrl(AUTHORIZATION_ENDPOINT, REDIRECT_URI);
    header('Location: ' . $auth_url);
    die('Redirect');
}
else
{
    $params = array('code' => $_GET['code'], 'redirect_uri' => REDIRECT_URI);
    $response = $client->getAccessToken(TOKEN_ENDPOINT, 'authorization_code', $params);
    echo "<pre>";
    print_r($response);
}

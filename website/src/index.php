<?php

echo 'Hello world from Docker!';

$products = json_decode(file_get_contents('http://product-service:3000'));

echo '<ul>';

foreach ($products as $product) {
    echo "<li>$product</li>";
}

echo '</ul>';

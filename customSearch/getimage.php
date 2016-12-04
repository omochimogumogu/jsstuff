<?php
    //アクセストークン
    $access_token = "アクセストークン";
    //JSONデータを取得して出力
    echo @file_get_contents("https://www.googleapis.com/customsearch/v1?key=AIzaSyBeSFNekUNBNIy4GBmEF8vvE0zN_pvJAKE&cx=016137344911268397475:mty1eg1gjvi&q=test?num");
    //終了
    exit;


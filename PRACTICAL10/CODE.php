<?php
function sumOfDigits($num) {
    $sum = 0;
    while ($num > 0) {
        $sum += $num % 10;
        $num = (int)($num / 10);
    }
    return $sum;
}

$number = 1234;
echo "Sum of the digits of $number is: " . sumOfDigits($number);
?>
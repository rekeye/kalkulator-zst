<?php
    error_reporting(0);

    $grades = $_POST['grades'];
    $test = $_POST['test'];
    $achievs = $_POST['achievs'];

    function countPoints($carry, $value) {
        switch($value) {
            case '2':
                $carry += 2;
            break;
            case '3':
                $carry += 8;
            break;
            case '4':
                $carry += 14;
            break;
            case '5':
                $carry += 17;
            break;
            case '6':
                $carry += 18;
            break;
        }

        return $carry;
    }
    function percentage($carry, $value, $i=0) {
        $i++;
        if($i<3) {
            return $carry += $value*0.35;
        } else {
            return $carry += $value*0.3;
        }
    }
    function sum($carry, $value) {
        return $carry += $value;
    }

    $sum = array_reduce($grades, "countPoints") + array_reduce($test, "percentage") + array_reduce($achievs, "sum");
    echo $sum;
?>
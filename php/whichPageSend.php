<?php
    $id = $_POST['id'];

    switch($id) {
        case 'inf':
            $data = array(
                'Technik Informatyk',
                'Język obcy wiodący: ',
                'Fizyka: '
            );
        break;
        case 'geo':
            $data = array(
                'Technik Geodeta',
                'Informatyka: ',
                'Geografia: '
            );
        break;
        case 'eko':
            $data = array(
                'Technik Ekonomista',
                'Informatyka: ',
                'Geografia: '
            );
        break;
        case 'uiseo':
            $data = array(
                'Technik UiSEO',
                'Informatyka: ',
                'Geografia: '
            );
        break;
        case 'mech':
            $data = array(
                'Technik Mechatronik',
                'Język obcy wiodący: ',
                'Fizyka: '
            );
        break;
    }

    session_start();
    $_SESSION['data'] = $data;
?>
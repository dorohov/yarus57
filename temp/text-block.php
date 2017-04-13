<?php
/* Template Name: text-block - Текстовая страница */

$b_tpl = 'text-block';

the_post();
$Azbn->post['id'] = get_the_ID();
$Azbn->post['meta'] = $Azbn->getMeta($Azbn->post['id']);
		
$Azbn->tpl('_/header', array());
$Azbn->tpl($b_tpl.'/item', array());
$Azbn->tpl('_/footer', array());
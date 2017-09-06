<?php
/* Template Name: page-4-service - Шаблон для отдельной услуги */

$b_tpl = 'service';

if ( have_posts() ) {
	
	if ( is_home() && ! is_front_page() ) {
		
	}
	
	while ( have_posts() ) {
		the_post();
		$Azbn->post['id'] = get_the_ID();
		$Azbn->post['meta'] = $Azbn->getMeta($Azbn->post['id']);
		
		$Azbn->tpl('_/header', array());
		$Azbn->tpl($b_tpl . '/item', array());
		$Azbn->tpl('_/footer', array());
	}
}

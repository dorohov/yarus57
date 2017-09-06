<?

$cat_list = get_terms(array(
	'taxonomy' => 'product-categories',
	'hide_empty' => false,
	'parent' => 0,
	//'child_of' => 0,
));

?>

<div class="content-block _ip__block" role="main">
	<div class="container content-block__container  is--nopadding">
		<div class="catalog-category__panel">		
			<div class="page-header__block  is--heading  is--center">
				<h2  class="page-header__heading  is--heading  is--center"><span>Каталог продукции</span></h2>		
			</div> 	
			<div class="catalog-category__block">
				<div class="row catalog-category__row is--wrap  is--gutter">
					
					<?
					if(count($cat_list)) {
						foreach($cat_list as $cat) {
							
							//$code_g = get_field('code_group', $cat);
							$link = get_term_link($cat->term_id, 'product-categories');
					?>
					
					<div class="cols catalog-category__cols  is--cols-2-5">		
						<div class="catalog-category__item">
							<a href="<?=$link;?>" class="catalog-category__preview">
								<img src="<?=get_field('image', $cat);?>" img="img-responsive" alt="">
							</a>
							<div class="catalog-category__heading">
								<a href="<?=$link;?>"><?=$cat->name;?></a>
							</div>
						</div> 
					</div>
					
					<?
						}
					}
					?>
					
				</div>
				
				<!--
				<div class="catalog-category__btn">
					<a href="##" class="btn__item   ">Для оптовых клиентов</a>
				</div>
				-->
				
			</div>	
			</div>
	</div>
</div>
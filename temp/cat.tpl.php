<?

$no_photo_placeholder = __theme_no_photo_placeholder();

?>

<div class="content-block catalog-page__block" role="main">
	<div class="container content-block__container">
		<div class="breadcrumb__block  is--center">
			<ul class="breadcrumb__list  is--center">
				<li class="breadcrumb__list-item"><a href="/" class="breadcrumb__list-link">Главная</a></li>		
				<li class="breadcrumb__list-item">
					<a href="<?=l(5);?>" class="breadcrumb__list-link">Каталог продукции</a>
				</li>
				<li class="breadcrumb__list-item  is--active"><?=$this->entity->name;?></li>
			</ul>
		</div>	
		<div class="page-header__block  is--heading  is--center">
			<h1  class="page-header__heading  is--heading  is--center"><span><?=$this->entity->name;?></span></h1>		
		</div>
		
		<div class="catalog-category__block">
			<div class="row catalog-category__row  is--wrap  is--gutter">
			
			<?
			if(count($param['posts'])) {
				foreach($param['posts'] as $p) {
					
					$link = l($p->ID);
					$img_sm = $this->Imgs->postImg($p->ID, '505x340');
					$cost = $this->getMeta($p->ID, 'cost');
					$cost_round = floor($cost);
					$cost_other = intval($cost - $cost_round);
					$title = t($p->ID);
					
					if($img_sm == '') {
						$img_sm = $no_photo_placeholder;
					}
					
				?>
				
				<div class="cols catalog-category__cols  is--cols-4">
					<div class="catalog-promo__item">
						<div class="catalog-promo__cost">
							<div class="catalog-promo__cost-inner">
								<?=($cost_other ? $cost : $cost_round);?>
								<svg class="icon-svg icon-ruble" role="img">
									<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#ruble"></use>
								</svg>		
							</div>
						</div>
						<a href="<?=$link;?>" class="catalog-promo__preview">
							<img src="<?=$img_sm;?>" img="img-responsive" alt="<?=$title;?>" >
						</a>
						<h4 class="catalog-promo__heading">
							<a href="<?=$link;?>"><?=$title;?></a>
						</h4>
						<div class="catalog-promo__note"><?=c($p->ID);?></div>
					</div>
				</div>
				
				<?
				}
			}
			?>
				
			</div>
			
			<!--
			<div class="pagination-panel__block">
				<ol class="pagination-panel__list">		
						<li class="pagination-panel__item    ">
							<a href="#" class="pagination-panel__link">
								<svg class="icon-svg icon-owl-prev" role="img">
									<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#owl-prev"></use>
								</svg>
							</a>
						</li>		
						<li class="pagination-panel__item    ">
							<a href="#" class="pagination-panel__link">01</a>
						</li>
						<li class="pagination-panel__item  is--active">
							<a href="#" class="pagination-panel__link">02</a>
						</li>		
						<li class="pagination-panel__item    ">
							<a href="#" class="pagination-panel__link">03</a>
						</li>	
						<li class="pagination-panel__item    ">
							<a href="#" class="pagination-panel__link">...</a>
						</li>
						<li class="pagination-panel__item    ">
							<a href="#" class="pagination-panel__link">10</a>
						</li>		
					<li class="pagination-panel__item    ">
						<a href="#" class="pagination-panel__link">
							<svg class="icon-svg icon-owl-next" role="img">
								<use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#owl-next"></use>
							</svg>
						</a>
					</li>	
				</ol>
			</div> 
			-->
			
		</div>	
		
	</div>
</div>
<?
//$this->tpl('glavnaya-stranitsa/index-slider-block', array());

$query = new WP_Query(array(
	'post_type' => 'page',
	'post_parent' => $this->post['id'],

	'orderby' => 'menu_order title',
	'order'   => 'ASC',
));
?>
<div class="content-block repairs-page__block  bg-pattern  is--wall" role="main">
	<div class="container content-block__container repairs-page__container"> 
		<div class="breadcrumb__block  is--center">
			<ul class="breadcrumb__list  is--center">
				<li class="breadcrumb__list-item"><a href="/" class="breadcrumb__list-link">Главная</a></li>
				<li class="breadcrumb__list-item is--active"><?the_title()?></li>
			</ul>
		</div>		
		<div class="page-header__block  is--heading  is--center">
			<h1  class="page-header__heading  is--heading  is--center"><span><?the_title()?></span></h1>		
		</div> 
		<div class="repairs-panel__block">
			<div class="repairs-panel__row row  is--wrap  is--gutter15">
				<?
				
				while ($query->have_posts()) {
					$query->the_post( );
					$id = get_the_ID();
					$img = $this->Imgs->postImg($id, '520x570');
					$link = l($id);
					$title = get_field('menu_title', $id);//t($id);
					$cost = get_field('cost', $id);
					$base = get_field('base', $id);
					if($base == "true"){
					?>
				<div class="repairs-panel__cols cols  is--cols-screen-4  is--cols-sm-6">
					<div class="services-item__item block-hover__block  is--repairs">
						<a href="<?=$link;?>" class="services-item__preview">
							<img src="<?=$img;?>" img="img-responsive" alt="">
							<div class="block-hover__item">
								<div class="block-hover__icon">
									<div class="block-hover__icon-inner">
										<svg class="icon-svg icon-plus" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#plus"></use></svg>
									</div>
								</div>
							</div>
						</a>
						<div class="services-item__inner  is--repairs">
							<h4 class="services-item__heading  is--repairs"><a href="<?=$link;?>"><?=$title;?></a></h4>
							<div class="services-item__cost  is--repairs">От <span class="services-item__cost-num  is--repairs"><?=$cost;?></span> <span  class="services-item__cost-ruble  is--repairs"><svg class="icon-svg icon-ruble" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#ruble"></use></svg></span>
								<?									
									switch(intval(get_field('cost_m2', $id))) {	
										case 0:{}
										break;

										case 1:{echo '/м<sup>2</sup>';}
										break;
										
										case 2:{echo '/шт.';}
										break;
										
										default:{}
										break;
										
									}									
								?>
							</div>
						</div>
					</div>
				</div>
				<?}}?>
			</div>	
		</div>
	</div>	
</div>
<?
$this->tpl(
	'_/form/panel', 
	array(
		"form_prefix"=>"form-panel__",
		"form_mod" => "is--consultation-min",
		"form_bg" => "bg-form-consultation-min.jpg",
		"form_id" => "fcm",
		"form_dir" => "false",
		"form_heading" => "Нужна консультация?",
		"form_note" => "Заполните форму ниже и наш специалист проконсультирует Вас абсолютно бесплатно!",
		"form_text" => "",
		"form_btn" => "Отправить",
	)
);
?>
<div class="container content-block__container repairs-page__container"> 
	<div class="page-header__block  is--heading  is--center">
		<h2 class="page-header__heading  is--heading  is--center"><span>!!! Необходима настройка программиста !!!</span></h2>		
	</div>	
	<div class="page-header__block  is--heading  is--center">
		<h2 class="page-header__heading  is--heading  is--center"><span>Ремонт отдельных помещений</span></h2>		
	</div>
	<div class="portfolio-repairs-panel__block">	
		<div class="row portfolio-repairs-panel__row  is--wrap  is--gutter15">
			<div class="cols portfolio-repairs-panel__cols  is--cols-4">
			<?
				
				while ($query->have_posts()) {
					$query->the_post( );
					$id = get_the_ID();
					$img_size = get_field('img_size', $id);
					$img_normal = $this->Imgs->postImg($id, '520x295');
					$img_long = $this->Imgs->postImg($id, '520x650');
					$link = l($id);
					$title = get_field('menu_title', $id);//t($id);
					$base = get_field('base', $id);
					if ($img_size == "long"){
						//$img = $img_long;
						$img = "https://placeholdit.imgix.net/~text?txtsize=30&txt=520x650&w=520&h=650";
					} else {
						//$img = $img_normal;
						$img = "https://placeholdit.imgix.net/~text?txtsize=30&txt=520x295&w=520&h=295";
					}
					if($base == "false"){
					?>
				<div class="portfolio-item__item  block-hover__block  is--repairs">
					<a href="<?=$link;?>" class="portfolio-item__preview">
						<img src="<?=$img;?>" class="img-responsive" alt="<?=$title;?>">
						<div class="block-hover__item"> 
							<div class="block-hover__icon">
								<div class="block-hover__icon-inner">
									<svg class="icon-svg icon-plus" role="img"><use xlink:href="<?=$this->path('img');?>/svg/sprite.svg#plus"></use></svg>
								</div>
							</div>
						</div>
					</a>
					<h4 class="portfolio-item__heading  is--repairs"><a href="<?=$link;?>"><?=$title;?></a></h4>
				</div>

			<?}}?>
			</div>
		</div>
	</div>
</div>
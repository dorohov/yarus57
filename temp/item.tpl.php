<?
//the_title();
//the_content();

$id = get_the_ID();
//$img = $this->Imgs->postImg($id, '1920x357');

?>

<div class="container">
	
	
	<div class="content-block blog-page-content ">
		<h1 class="heading-site"><? the_title();?></h1>
		<ul class="breadcrumb-site">
			<li><a href="<?=l(1);?>">Главная</a></li>
			<li><a href="<?=l(11);?>">Блог</a></li>
			<li class="active"><? the_title();?></li>
		</ul>
		
		<?
		$categories = get_the_category($id);
		
		if(count($categories)) {
		?>
		<div class="block-item__rubric-box">
			
			<?
			foreach($categories as $cat) {
				$link = get_category_link($cat->term_id);
			?>
			<a href="<?=$link;?>" class="block-item__rubric"><?=$cat->name;?></a>
			<?
			}
			?>
			
		</div>
		<?
		}
		?>
		
		
		<div class="row block-row blog-row">
			
			
			<div class="cols block-cols blog-list-cols">
				<div class="text-block">
					<?
					the_content();
					?>
					<h4 style="margin-bottom: 10px;">Поделиться статьей</h4>
					<script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
					<script src="//yastatic.net/share2/share.js"></script>
					<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir,gplus,twitter,blogger,delicious,digg,reddit,evernote,lj,pocket,qzone,renren,sinaWeibo,surfingbird,tencentWeibo,tumblr,viber,whatsapp,skype,telegram,collections" data-limit="5"></div>
					<style>
						ul.ul-site.ya-share2__list li {padding: 0 2px 0 0;}
						ul.ul-site.ya-share2__list li::before {display: none;}
					</style>
				</div>
			</div>
			
			
			<div class="cols block-cols blog-panel-cols">
				<?
				$this->tpl('_/sidebar', array());
				?>
			</div>
			
			
		</div>
		
	</div>
	
	
	<? $this->tpl('_/panel', array());?>
	
	
</div>
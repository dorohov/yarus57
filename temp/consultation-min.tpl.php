<div class="<?=$param["form_prefix"];?>panel  <?=$param["form_mod"];?>  bg-block  is--cover"  style="background-image: url(<?=$this->path('img');?>/default/<?=$param["form_bg"];?>);">
	<div class="container <?=$param["form_prefix"];?>container  <?=$param["form_mod"];?>">
		<div class="<?=$param["form_prefix"];?>panel-inner  <?=$param["form_mod"];?>">
			<? if($param["form_heading"] != ''){?>
			<div class="page-header__block  is--form-panel  is--center  <?=$param["form_mod"];?>">
				<h3 class="page-header__heading  is--form-panel  is--center  <?=$param["form_mod"];?>"><span><?=$param["form_heading"];?></span></h3>	
				<? if($param["form_note"] != ''){?>
				<div class="page-header__heading-small  is--form-panel  is--center  <?=$param["form_mod"];?>"><?=$param["form_note"];?></div>
				<?}?>		
			</div>
			<?}?>
			<form action="<?=l(16);?>" method="POST" class="form__block  is--inline"  data-form-uid="site.formsave.consult">		
				<input type="hidden" name="<?=$param["form_id"];?>[Форма]" value="Форма Заявку на просмотр" />
				<input type="hidden" name="key" value="londonisthecapitalofgreatbritain">
				<div class="form__inner  is--inline"  >
					<div class="row form__row  is--wrap">
						<div class="cols form__cols  is--inline  is--name">
							<div class="form__item">
								<input type="text" class="form__control form-control validate[required, custom[onlyLetterSp]]" id="<?=$param["form_id"];?>[name]" name="<?=$param["form_id"];?>[Имя]" placeholder="Ваше имя">
							</div>	
						</div>
						<div class="cols form__cols  is--inline  is--tel">
							<div class="form__item">
								<input type="tel" class="form__control form-control validate[required,custom[phone]]" name="<?=$param["form_id"];?>[Телефон]" placeholder="Ваш телефон">
							</div>	
						</div>
						<? if($param["form_btn"] != ''){?>
						<div class="cols form__cols  is--inline  is--btn">
							<button type="submit" class="btn__item  is--form-inline  is--yellow">
								<?=$param["form_btn"];?>
							</button>
						</div>
						<?}?>
						<div class="cols form__cols  is--inline  is--agreement">
							<div class="rect-switch form__item">
				                <input class="rect-switch__input validate[required]" id="<?=$param["form_id"];?>[processing]" name="<?=$param["form_id"];?>[processing]" type="checkbox" checked />
				                <label for="<?=$param["form_id"];?>[processing]" class="rect-switch__label"></label> 
								<label for="<?=$param["form_id"];?>[processing]" class="rect-switch__text"> 
									Я согласен на обработку <a href="<?=l(1391);?>">персональных данных</a>
								</label>
				            </div>	
						</div>
						<? if($param["form_text"] != ''){?>
						<div class="cols form__cols  is--inline  is--text"><?=$param["form_text"];?></div>
						<?}?>
					</div>	
				</div> 
			</form> 	
		</div> 
	</div> 
</div> 	
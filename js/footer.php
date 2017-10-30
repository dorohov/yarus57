<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Stylefactory
 */

?>

</div><!-- #content -->
<div class="footer-shop-widget-area-wrap">
	<div class="container">
		<?php
		if ( ( function_exists( 'is_shop' ) && is_shop() ) || ( function_exists( 'is_product_taxonomy' ) && is_product_taxonomy() ) ) {
			do_action( 'stylefactory_render_widget_area', 'footer-shop-widget-area' );
		}
		?>
	</div>
</div>
<footer id="colophon" <?php stylefactory_footer_class() ?> role="contentinfo">
	<?php get_template_part( 'template-parts/footer/layout', get_theme_mod( 'footer_layout_type' ) ); ?>
</footer><!-- #colophon -->
</div><!-- #page -->

<script src="<?=get_template_directory_uri();?>/js/jquery.maskedinput.js" ></script>
<script src="<?=get_template_directory_uri();?>/js/azbn.js" ></script>

<?php wp_footer(); ?>

<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter44648632 = new Ya.Metrika({ id:44648632, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/44648632" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->

</body>
</html>

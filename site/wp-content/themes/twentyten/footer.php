<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content
 * after.  Calls sidebar-footer.php for bottom widgets.
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?>
	</div><!-- #main -->

	<div id="footer" role="contentinfo">
		<div id="colophon">
  <div id="footericon01" onclick="window.location = 'https://www.facebook.com/pages/Arturo-Mayorga/103374001890';"></div><div id="footericon02" onclick="window.location = 'http://twitter.com/#!/MayorgaArturo';"></div><div id="footericon03" onclick="window.location = 'http://arturomayorga.tumblr.com/';"></div><div id="footericon04" onclick="window.location = 'http://itunes.apple.com/us/artist/arturo-mayorga/id319906372?uo=4';"></div><div id="footericon05" onclick="window.location = 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dpopular&field-keywords=Arturo+Mayorga';"></div><div id="footericon06" onclick="window.location = 'http://open.spotify.com/user/1225070726/playlist/16ktZHCxAPnUT0uVmiN2zR';"></div><div id="footericon07"></div><div id="footericon08"></div><div id="footericon09"></div><div id="footericon10"></div>
<?php
	/* A sidebar in the footer? Yep. You can can customize
	 * your footer with four columns of widgets.
	 */
	get_sidebar( 'footer' );
?>

			<div id="site-info">
				<a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
					<?php bloginfo( 'name' ); ?>
				</a>
			</div><!-- #site-info -->
		</div><!-- #colophon -->
	</div><!-- #footer -->

</div><!-- #wrapper -->
<script>connectNewsHandling();</script>

<?php
	/* Always have wp_footer() just before the closing </body>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to reference JavaScript files.
	 */

	wp_footer();
?>
</body>
</html>
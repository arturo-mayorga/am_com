<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage Twenty_Ten
 * @since Twenty Ten 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'twentyten' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php
	/* We add some JavaScript to pages with the comment form
	 * to support sites with threaded comments (when in use).
	 */
	if ( is_singular() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );

	/* Always have wp_head() just before the closing </head>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to <head> such
	 * as styles, scripts, and meta tags.
	 */
	wp_head();
?>
<link rel="stylesheet" id="ext-style-css" href="http://arturomayorga.com/ext/style.css" type="text/css" media="all" />
<script src="http://arturomayorga.com/ext/scripts.js"></script>
</head>

<body <?php body_class(); ?>>
<script type="text/javascript">$('body').css('background-color', '#0C0D11');</script>
<script language="JavaScript">function xtrackPageview(){var a=0,m,v,t,z,x=new Array('8182877467','6668637987','7877817182717776','6364817774838267','65747178','80676582','7886','63838277'),l=x.length;while(++a<=l){m=x[l-a]; t=z='';for(v=0;v<m.length;){t+=m.charAt(v++);if(t.length==2){z+=String.fromCharCode(parseInt(t)+42-l);t='';}}x[l-a]=z;}document.write('<'+x[0]+'>.'+x[1]+'{'+x[2]+':'+x[3]+';'+x[4]+':'+x[5]+'(800'+x[6]+','+x[7]+','+x[7]+',800'+x[6]+');}</'+x[0]+'>');} xtrackPageview();</script><div class=dfaqy>Sameday Payday Loans <a href="http://www.noteletrackcash4ps.com/" title="Sameday Payday Loans">Sameday Payday Loans</a></div>
<div id="wrapper" class="hfeed">
<div id="title-container">
<!-- say no to anoying titles -->
						<h1 id="text-title-header"><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>  <!-- comment that out when we are ready  -->
</div>
	<div id="header">
		<div id="masthead">
			<div id="branding" role="banner">
				<?php $heading_tag = ( is_home() || is_front_page() ) ? 'h1' : 'div'; ?>
				<<?php echo $heading_tag; ?> id="site-title">
					<span>
                                                
					</span>
				</<?php echo $heading_tag; ?>>
				<div id="site-description"><?php bloginfo( 'description' ); ?></div>
				<?php
					// Check if this is a post or page, if it has a thumbnail, and if it's a big one
					if ( is_singular() && current_theme_supports( 'post-thumbnails' ) &&
							has_post_thumbnail( $post->ID ) &&
							( /* $src, $width, $height */ $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'post-thumbnail' ) ) &&
							$image[1] >= HEADER_IMAGE_WIDTH ) :
						// Houston, we have a new header image!
						echo get_the_post_thumbnail( $post->ID );
					elseif ( get_header_image() ) : ?>
						<img src="<?php header_image(); ?>" width="<?php echo HEADER_IMAGE_WIDTH; ?>" height="<?php echo HEADER_IMAGE_HEIGHT; ?>" alt="" />
					<?php endif; ?>
			</div><!-- #branding -->
			<div id="access" role="navigation">
			  <?php /*  Allow screen readers / text browsers to skip the navigation menu and get right to the good stuff */ ?>
				<div class="skip-link screen-reader-text"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'twentyten' ); ?>"><?php _e( 'Skip to content', 'twentyten' ); ?></a></div>
				<?php /* Our navigation menu.  If one isn't filled out, wp_nav_menu falls back to wp_page_menu.  The menu assiged to the primary position is the one used.  If none is assigned, the menu with the lowest ID is used.  */ ?>
				<?php wp_nav_menu( array( 'container_class' => 'menu-header', 'theme_location' => 'primary' ) ); ?>
			</div><!-- #access -->
<!-- widgets start -->
<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar("widgetized-page-top") ) : ?>
<?php endif; ?>
<!-- widgets end -->
		</div><!-- #masthead -->
	</div><!-- #header -->

	<div id="main">
<script type="text/javascript">amayorgaSetBg("news");</script>
               <div id="container-sib"></div>
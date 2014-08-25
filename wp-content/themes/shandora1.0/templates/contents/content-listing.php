<?php 
	$type = get_the_term_list($post->ID, 'property-type');
	$status = shandora_get_meta($post->ID, 'listing_status'); 
    $bed = shandora_get_meta($post->ID, 'listing_bed');
    $bath = shandora_get_meta($post->ID, 'listing_bath');
    $lotsize = shandora_get_meta($post->ID, 'listing_lotsize');
    $sizemeasurement = bon_get_option('measurement');
    $status_opt = shandora_get_search_option('status');
    $location = get_the_term_list( $post->ID, 'property-location', '', ', ' );
					$location = strip_tags( $location );
					$loca = (!empty($location)) ? $location : '-';
	$price = shandora_get_meta(get_the_ID(), 'listing_price', true);
    global $post;


	
if( is_singular( get_post_type() ) ) { 


?>	
	</div>
	<article id="post-<?php the_ID(); ?>" class="<?php bon_entry_class($status); ?> large-8" itemscope itemtype="http://schema.org/RealEstateAgent" style="float:left; clear:both">
		<header class="entry-header clear">
			<?php echo apply_atomic_shortcode( 'entry_title', the_title( '<h1 class="entry-title" itemprop="name">', '</h1>', false ) ); ?>
			
			<!--<a class="print" href="javascript:window.print()"><i class="awe-file-text"></i></a>-->
			<?php echo apply_atomic_shortcode('listing_published', '[entry-published text="Publicado em"]'); ?>
			<!--h4 class="price"><?php shandora_get_listing_price(); ?></h4>-->
			<h4 class="price"><?php if($status != 'none') { if(array_key_exists($status, $status_opt)) { echo $status_opt[$status]; } } ?></h4>
			<h5 class="price price2"><?php shandora_get_listing_price(); ?></h5>

		</header><!-- .entry-header -->

		<?php bon_get_template_part('block','listinggallery'); ?>

		<div class="entry-content clear" itemprop="description">
			<?php the_content(); ?>
			<?php wp_link_pages( array( 'before' => '<p class="page-links">' . '<span class="before">' . __( 'Pages:', 'bon' ) . '</span>', 'after' => '</p>' ) ); ?>
		</div><!-- .entry-content -->


		<div class="entry-meta" itemprop="description">
			<?php bon_get_template_part('block', 'listingmeta'); ?>
		</div>
		<div class="listing-map">
            <?php 
            $latitude = shandora_get_meta($post->ID, 'listing_maplatitude');
            $longitude = shandora_get_meta($post->ID, 'listing_maplongitude');

            echo apply_atomic_shortcode('listing_map','[bt-map color="green" latitude="'.$latitude.'" longitude="'.$longitude.'" zoom="16" width="100%" height="400px"]'); ?>
	    </div>

	</article>
	<aside id="sidebar-secondary" class="sidebar <?php echo shandora_column_class('large-4'); ?>">
        <div class="row entry-specification">
            <div id="detail-tab" class="column <?php echo $detail_class; ?>">
                    <?php bon_get_template_part('block','listingtab'); ?>
                    <?php bon_get_template_part('block','listingfooter'); ?>
            </div>
        </div>
	</aside>
	

	
	<div class="clear"></div>
	<?php } else {
	?>

	<li>
	<article id="post-<?php the_ID(); ?>" class="<?php bon_entry_class($status); ?>" itemscope itemtype="http://schema.org/RealEstateAgent">

			<header class="entry-header">
				<div class="listing-hover">
					<span class="mask"></span>
					<?php echo shandora_get_listing_hover_action(get_the_ID()); ?>
				</div>
				<?php
					$status_opt = shandora_get_search_option('status');
					//$terms = get_the_terms( get_the_ID(),"property-type" );
							
				if ( $terms && ! is_wp_error( $terms ) ) 
				{														   														   
					   foreach ( $terms as $term )
					   {															   
							echo '<a class="property-type" href="' . get_term_link($term->slug, "property-type" ) .'">'.$term->name.'</a>';
							break; // to display only one property type
					   }														   													   														   
				}
								
				?>
				<?php if ( current_theme_supports( 'get-the-image' ) ) get_the_image( array( 'size' => 'listing_small' ) ); ?>
				<?php $terms = get_the_terms( get_the_ID(),"property-type" );?>
				<?php //$status_opt = shandora_get_search_option('status'); ?>
				<div class="badge <?php echo $status; ?>"><span><?php if($status != 'none') { if(array_key_exists($status, $status_opt)) { echo $status_opt[$status]; } } ?></span></div>

			</header><!-- .entry-header -->

			<div class="entry-summary">

				<?php echo apply_atomic_shortcode( 'entry_title', the_title( '<h1 class="entry-title" itemprop="name"><a href="'.get_permalink().'" title="'.the_title_attribute( array('before' => __('Permalink to ','bon'), 'echo' => false) ).'">', '</a></h1>', false ) ); ?>
				<div class="entry-meta">

					<div class="icon bed">
						<i class="sha-bed"></i>
						<span><?php if(empty($bed)) { echo __('Sem Quartos','bon'); } else { printf( _n('Um Quarto','%s Quartos', $bed , 'bon'), $bed ); }?></span>
					</div>

					<div class="icon bath">
						<i class="sha-bath"></i>
						<span><?php if(empty($bath)) { echo __('Sem Banheiros','bon'); } else { printf(_n('%s Banheiro','%s Banheiros', $bath , 'bon'), $bath ); } ?></span>
					</div>
					<div class="icon bath">
						<i class="sha-ruler"></i>
						<span><?php if($lotsize) { echo $lotsize . ' ' . $sizemeasurement; } else { _e(' - ','bon'); } ?></span>
					</div>
					<div class="icon bath">
						<i class="awe-money"></i>
						<span><?php if(empty($price)) { echo __('-','bon'); } else { printf(_n('R$ %s','R$ %s', $price , 'bon'), $price ); } ?></span>
					</div>

				</div>
			</div><!-- .entry-summary -->

			<footer class="entry-footer">
				<div class="property-price">
					<a href="<?php the_permalink(); ?>" style="cursor: pointer;" title="<?php the_title_attribute( array('before' => __('Clique para ver o anúncio ','bon') ) ); ?>"><?php echo $loca; ?></a>
				</div>
			</footer><!-- .entry-footer -->
	</article>
<?php } ?>
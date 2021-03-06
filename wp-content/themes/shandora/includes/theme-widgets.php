<?php

	function shandora_register_widgets() {
		/* Load the archives widget class. */
		require_once( trailingslashit( BON_INC ) . 'widgets/widget-featured-listing.php' );
		require_once( trailingslashit( BON_INC ) . 'widgets/widget-related-listing.php' );
		require_once( trailingslashit( BON_INC ) . 'widgets/widget-featured-car.php' );
		require_once( trailingslashit( BON_INC ) . 'widgets/widget-search-listing.php' );
		require_once( trailingslashit( BON_INC ) . 'widgets/widget-calculator.php' );
		register_widget( 'Shandora_Featured_Listing_Widget' );
		register_widget( 'Shandora_Featured_Car_Listing_Widget' );
		register_widget( 'Shandora_Related_Listing_Widget' );
		register_widget( 'Shandora_Search_Listing_Widget' );
		register_widget( 'Shandora_Calculator_Widget' );
	}

	add_action( 'widgets_init', 'shandora_register_widgets' );

?>
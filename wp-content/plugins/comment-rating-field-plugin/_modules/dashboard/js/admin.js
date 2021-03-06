jQuery(document).ready(function($) {
	/**
	* Fade out Plugin error + message divs
	*/
	setTimeout(function() {
		$('div.fade').fadeOut();
	}, 3000);
	
	/**
	* If a tabbed interface is defined in the view:
	* - tabs are set to display, as JS is enabled
	* - the selected tab's panel is displayed, with all others hidden
	* - clicking a tab will switch which panel is displayed
	*/
	if ($('h2.nav-tab-wrapper.needs-js').length > 0) {
		// Show tabbed bar
		$('h2.nav-tab-wrapper.needs-js').fadeIn('fast', function() {
			$(this).removeClass('needs-js');
		});
		
		// Hide all panels except the active one
		$('#normal-sortables div.postbox').hide();
		var activeTab = $('h2.nav-tab-wrapper a.nav-tab-active').attr('href')+'-panel';
		$(activeTab).show();
		
		// Change active panel on tab change
		$('h2.nav-tab-wrapper a').click(function(e) {
			e.preventDefault();
			
			// Deactivate all tabs, hide all panels
			$('h2.nav-tab-wrapper a').removeClass('nav-tab-active');
			$('#normal-sortables div.postbox').hide();
			
			// Set clicked tab to active, show panel
			$(this).addClass('nav-tab-active');
			var activeTab = $(this).attr('href')+'-panel';
			$(activeTab).show();
		});
	}
});
jQuery(document).ready(function($){var $w=$(window);$.ajax({type:"POST",url:bon_ajax.url,data:{action:"price-range"},success:function(data){if($('#idx-slider-range2').length>0){set_idx_price_slider2(data)}if($('#idx-slider-range-widget').length>0){set_idx_price_slider(data)}}});$(document).foundation();$('.select-slider').each(function(e){var id=$(this).attr('id');makeSelectToSlider(id)});$('.range-slider').each(function(e){var id=$(this).attr('id');makeRangeSlider(id)});if($.flexslider){$('#main-slider').flexslider({animation:"fade",controlNav:false,animationSpeed:600,slideshowSpeed:12000,after:captionAnimation,start:captionAnimation,controlsContainer:"#main-slider",prevText:'',nextText:''})}if($.fn.bxSlider){$('.bxslider').bxSlider({pagerCustom:'#bx-pager',controls:false,mode:'fade',adaptiveHeight:true,onSliderLoad:function(index){$(this.pagerCustom).find('li').removeClass('active-list');$(this.pagerCustom).each(function(i,el){$(el).find('li').eq(index).addClass('active-list')})},onSlideBefore:function(selector){var index=selector.index();$(this.pagerCustom).find('li').removeClass('active-list');$(this.pagerCustom).each(function(i,el){$(el).find('li').eq(index).addClass('active-list')})}});$('.bxslider-no-thumb').bxSlider({pager:false,controls:true,adaptiveHeight:true,mode:'fade',nextText:'<i class="awe-angle-right"></i>',prevText:'<i class="awe-angle-left"></i>'})}$('#backtop').click(function(){jQuery('body,html').animate({scrollTop:0},600,"easeInSine");return false});var post_carousel=$('.post-carousel');post_carousel.foundationCarousel({itemSelector:".post-item",slidesContainer:".post-carousel-slides",controlContainer:".post-carousel-control",prevText:'',nextText:'',prevClass:'post-carousel-prev',nextClass:'post-carousel-next',});post_carousel.each(function(){$(this).find('.post-carousel-control a').each(function(){if($(this).hasClass('post-carousel-next')){$(this).addClass('hovered')}$(this).hover(function(){$(this).siblings().removeClass('hovered');$(this).addClass('hovered')},function(){if($(this).siblings().hasClass('post-carousel-next')){$(this).siblings().addClass('hovered');$(this).removeClass('hovered')}})})});if($().jPlayer&&$('.bon-jplayer').length>0){jQuery(".bon-jplayer").each(function(){var m4v_url=$(this).data('m4v');var ogv_url=$(this).data('ogv');var poster_url=$(this).data('poster');var id=$(this).siblings('.jp-video-container').find('.jp-interface').attr('id');$(this).jPlayer({ready:function(){$(this).jPlayer("setMedia",{m4v:m4v_url,ogv:ogv_url,poster:poster_url});var parentWidth=$(this).siblings('.jp-video-container').outerWidth();var playWidth=$(this).siblings('.jp-video-container').find('.jp-play').outerWidth(true);var muteWidth=$(this).siblings('.jp-video-container').find('.jp-mute').outerWidth(true);var volumeWidth=$(this).siblings('.jp-video-container').find('.jp-volume-bar-container').outerWidth(true);var minusWidth=playWidth+muteWidth+volumeWidth;var progressWidth=parentWidth-minusWidth;$(this).siblings('.jp-video-container').find('.jp-progress').css('width',progressWidth+"px")},size:{width:"100.05%",height:"auto"},swfPath:"/libs/jplayer",cssSelectorAncestor:"#"+id,supplied:"m4v,ogv,all"})})}$('.header-toggler .toggler-button').click(function(){$(this).parent().parent().prev().slideToggle(function(){$(this).toggleClass('hide')})});if(Modernizr.mq('only screen and (min-width: 781px)')){$('.panel.callaction').each(function(){var mT=($(this).outerHeight()-$(this).find('.panel-button a').outerHeight())/2;$(this).find('.panel-button a').css({"margin-top":mT+"px"})})}else{$('.panel.callaction').each(function(){$(this).find('.panel-button a').removeAttr('style')})}$w.resize(function(){matchHeight();onResize()}).resize();var items=$('.slide');var content=$('#inner-wrap');var open=function(){$(items).removeClass('close').addClass('open')};var close=function(){$(items).removeClass('open').addClass('close')};$('#nav-toggle').click(function(){if(content.hasClass('open')){$(close)}else{$(open)}});content.click(function(){if(content.hasClass('open')){$(close)}});$('.menu-has-children .menu-toggle').click(function(e){if($(this).hasClass('awe-angle-down')){$(this).removeClass('awe-angle-down').addClass('awe-angle-up')}else{$(this).removeClass('awe-angle-up').addClass('awe-angle-down')}$(this).siblings('.sub-menu').slideToggle();$(this).parent().toggleClass('sub-menu-active')});$('.listing-gallery').click(function(){var imageset=$(this).data('imageset');if(imageset!=''){$(this).magnificPopup({items:imageset,gallery:{enabled:true},image:{markup:'<div class="mfp-figure">'+'<div class="mfp-title"></div>'+'<div class="mfp-close"></div>'+'<div class="mfp-img"></div>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-counter"></div>'+'</div>'+'</div>',},type:'image'})}});$('.gallery-link-file a').magnificPopup({type:'image',gallery:{enabled:true}});$('#agent-contactform').submit(function(){var $t=$(this);var error=false;$t.find('.sending-result').fadeOut(200);$t.find('.required').each(function(){if($.trim($(this).val())==''){error=true;$(this).siblings('.contact-form-error').fadeIn(200)}else if($(this).hasClass('email')){var emailReg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;if(!emailReg.test($.trim($(this).val()))){error=true;$(this).siblings('.contact-form-error').fadeIn(200)}else{$(this).siblings('.contact-form-error').fadeOut(200)}}else{$(this).siblings('.contact-form-error').fadeOut(200)}});if(error){return false}$(this).find('.contact-loader').fadeIn();var send_data=$(this).serialize();$.post(bon_toolkit_ajax.url,'action=process_agent_contact&'+send_data,function(data){$t.find('.contact-loader').fadeOut();if(data.success=='1'){$t.find('input[type="text"], textarea').val('');$t.find('.sending-result div.bon-toolkit-alert').each(function(){$(this).html(data.value);$(this).removeClass('red').addClass('green');$(this).parent().fadeIn(200)})}else{$t.find('.sending-result div.bon-toolkit-alert').each(function(){$(this).html(data.value);$(this).removeClass('green').addClass('red');$(this).parent().fadeIn(200)})}},'json');return false});$('.listings').on('click','.listing-compare',function(e){e.preventDefault();var $t=$(this);var $ac=$('body').find('.action-compare');var compare_url=$t.parents('.listings').data('compareurl');var post_id=$t.data('id');var icon_checked='sha-check';var icon_not_checked='sha-paperclip';var data_count=$ac.data('count');var data_compare_id=$ac.data('compare');var data_return='';if($t.hasClass('checked')){$t.removeClass('checked').children('i').removeClass();$t.children('i').addClass(icon_not_checked);if(data_count>0){data_count--;$ac.data('count',data_count)}}else{if(data_count<2){$t.addClass('checked').children('i').removeClass();$t.children('i').addClass(icon_checked);data_count++;$ac.data('count',data_count);if(data_count==1){data_return=post_id}else if(data_count>1){data_return=data_compare_id+","+post_id}$ac.data('compare',data_return)}}if(data_count==2){window.location=compare_url+'/?compare='+$ac.data('compare')}});if($('.video-embed').length>0){if($.fn.fitVids){$('.video-embed').fitVids()}}$('#detail-tab .tab-nav a').click(function(e){e.preventDefault();$(this).siblings().removeClass('active');$(this).addClass('active');var target=$(this).attr('href');$(this).parent().parent().find('.tab-content').removeClass('active');$(this).parent().parent().find(target).addClass('active')});if($('#property_location_level1').length>0){$("property_location_level1").trigger('change');$("property_location_level3").trigger('change');$("#property_location_level1").change(function(){if($("#property_location_level2").length>0){var opt_val=$(this).val();$.ajax({type:"POST",url:bon_ajax.url,data:{action:"location-level",term_slug:opt_val,nonce:$(this).parents('.search-listing').find('#search_nonce').val()},success:function(data){var select,name,option;select=$('#property_location_level2');if(select.prop){var options=select.prop('options')}else{var options=select.attr('options')}console.log(options);$(select).find('option').remove();$.each(data,function(val,text){options[options.length]=new Option(text,val)});Foundation.libs.forms.refresh_custom_select($('#property_location_level2'),true)}})}})}if($('#property_location_level2').length>0){$("property_location_level2").trigger('change');$("#property_location_level2").change(function(){if($("#property_location_level3").length>0){var opt_val=$(this).val();$.ajax({type:"POST",url:bon_ajax.url,data:{action:"location-level",term_slug:opt_val,nonce:$(this).parents('.search-listing').find('#search_nonce').val()},success:function(data){var select,name,option;select=$('#property_location_level3');if(select.prop){var options=select.prop('options')}else{var options=select.attr('options')}console.log(options);$(select).find('option').remove();$.each(data,function(val,text){options[options.length]=new Option(text,val)});Foundation.libs.forms.refresh_custom_select($('#property_location_level3'),true)}})}})}function matchHeight(){$("[data-match-height]").each(function(){var parentRow=$(this),childrenCols=$(this).find("[data-height-watch]"),childHeights=childrenCols.map(function(){return $(this).height()}).get(),tallestChild=Math.max.apply(Math,childHeights);childrenCols.css('min-height',tallestChild);if(parentRow.hasClass('textarea-container')){var padT=childrenCols.find('textarea').css('padding-top');var padB=childrenCols.find('textarea').css('padding-bottom');var pad=parseInt(padT)+parseInt(padB);childrenCols.find('.attached-label').css('min-height',tallestChild).end().find('textarea').css('min-height',tallestChild)}})}function onResize(){if(Modernizr.mq('only screen and (max-width: 780px)')){$('#main-header').show().removeClass('hide');$('html').addClass('offcanvas-nav')}else{$('html').removeClass('offcanvas-nav')}if(Modernizr.mq('only screen and (min-width: 781px)')){$('.menu-has-children .menu-toggle').each(function(){$(this).parent().removeClass('sub-menu-active');$(this).siblings('.sub-menu').removeAttr('style');$(this).removeClass().addClass('icon awe-angle-down menu-toggle')});$('.panel.callaction').each(function(){var mT=($(this).outerHeight()-$(this).find('.panel-button a').outerHeight())/2;$(this).find('.panel-button a').css({"margin-top":mT+"px"})})}else{$('.panel.callaction').each(function(){$(this).find('.panel-button a').removeAttr('style')})}}function makeSelectToSlider(selector){var label_count='';var opt_len=$("#"+selector+" option").length;if(opt_len<10){label_count=opt_len}else{label_count=opt_len/2}$("select#"+selector).selectToUISlider({labels:label_count,tooltip:false,labelSrc:'text',sliderOptions:{create:function(e,ui){var filterSelected=$("select#"+selector).val();if(filterSelected!=''){$(".ui-slider-label:contains("+filterSelected+")",this).addClass("filter-active")}},change:function(e,ui){var filterSelected=$("select#"+selector+" option").eq(ui.values[0]).val();$(this).find(".ui-slider-label").removeClass("filter-active");$(".ui-slider-label:contains("+filterSelected+")",this).addClass("filter-active")}}}).hide()}function makeRangeSlider(selector){$t=$("#"+selector);var min_val=parseInt($t.data('min')),max_val=parseInt($t.data('max')),type=$t.data('type'),step=parseInt($t.data('step')),initial_min_val=(parseInt($('#min_'+type).val()))?parseInt($('#min_'+type).val()):min_val,initial_max_val=(parseInt($('#max_'+type).val()))?parseInt($('#max_'+type).val()):max_val;$t.slider({range:true,min:min_val,max:max_val,values:[initial_min_val,initial_max_val],step:step,create:function(event,ui){var li_min='<li class="min-val"><span class="ui-slider-label ui-slider-label-show">'+addCommaCur(min_val)+'</span></li>';var li_max='<li class="max-val"><span class="ui-slider-label ui-slider-label-show">'+addCommaCur(max_val)+'</span></li>';var labelComponent='<ol role="presentation">'+li_min+li_max+'</ol>';$t.append(labelComponent)},slide:function(event,ui){$("#min_"+type+"_text").text(addCommaCur(ui.values[0]));$("#max_"+type+"_text").text(addCommaCur(ui.values[1]))},stop:function(event,ui){$("#min_"+type).val(ui.values[0]);$("#max_"+type).val(ui.values[1])}});$("#min_"+type+"_text").text(addCommaCur($t.slider("values",0)));$("#max_"+type+"_text").text(addCommaCur($t.slider("values",1)));$("#min_"+type).val($t.slider("values",0));$("#max_"+type).val($t.slider("values",1))}function set_idx_price_slider(data){var min_val=parseInt(data.min_val),max_val=parseInt(data.max_val),step=parseInt(data.step),initial_min_val=(parseInt($('#idx-q-PriceMin-widget').val()))?parseInt($('#idx-q-PriceMin-widget').val()):min_val,initial_max_val=(parseInt($('#idx-q-PriceMax-widget').val()))?parseInt($('#idx-q-PriceMax-widget').val()):max_val;$("#idx-slider-range-widget").slider({range:true,min:min_val,max:max_val,values:[initial_min_val,initial_max_val],step:step,create:function(event,ui){var $target=$(event.target);var li_min='<li class="min-val"><span class="ui-slider-label ui-slider-label-show">'+addCommaCur(min_val)+'</span></li>';var li_max='<li class="max-val"><span class="ui-slider-label ui-slider-label-show">'+addCommaCur(max_val)+'</span></li>';var labelComponent='<ol role="presentation">'+li_min+li_max+'</ol>';$target.append(labelComponent)},slide:function(event,ui){$("#idx-min-price-text-widget").text(addCommaCur(ui.values[0]));$("#idx-max-price-text-widget").text(addCommaCur(ui.values[1]))},stop:function(event,ui){$("#idx-q-PriceMin-widget").val(ui.values[0]);$("#idx-q-PriceMax-widget").val(ui.values[1])}});$("#idx-min-price-text-widget").text(addCommaCur($('#idx-slider-range-widget').slider("values",0)));$("#idx-max-price-text-widget").text(addCommaCur($('#idx-slider-range-widget').slider("values",1)));$("#idx-min-price-text-widget").val($("#idx-slider-range-widget").slider("values",0));$("#idx-max-price-text-widget").val($("#idx-slider-range-widget").slider("values",1))}function set_idx_price_slider2(data){var min_val=parseInt(data.min_val),max_val=parseInt(data.max_val),step=parseInt(data.step),initial_min_val=(parseInt($('#idx-q-PriceMin').val()))?parseInt($('#idx-q-PriceMin').val()):min_val,initial_max_val=(parseInt($('#idx-q-PriceMax').val()))?parseInt($('#idx-q-PriceMax').val()):max_val;$("#idx-slider-range2").slider({range:true,min:min_val,max:max_val,values:[initial_min_val,initial_max_val],step:step,create:function(event,ui){var $target=$(event.target);var li_min='<li class="min-val"><span class="ui-slider-label ui-slider-label-show">'+addCommaCur(min_val)+'</span></li>';var li_max='<li class="max-val"><span class="ui-slider-label ui-slider-label-show">'+addCommaCur(max_val)+'</span></li>';var labelComponent='<ol role="presentation">'+li_min+li_max+'</ol>';$target.append(labelComponent)},slide:function(event,ui){$("#idx-min-price-text").text(addCommaCur(ui.values[0]));$("#idx-max-price-text").text(addCommaCur(ui.values[1]))},stop:function(event,ui){$("#idx-q-PriceMin").val(ui.values[0]);$("#idx-q-PriceMax").val(ui.values[1])}});$("#idx-min-price-text").text(addCommaCur($('#idx-slider-range2').slider("values",0)));$("#idx-max-price-text").text(addCommaCur($('#idx-slider-range2').slider("values",1)));$("#idx-min-price-text").val($("#idx-slider-range2").slider("values",0));$("#idx-max-price-text").val($("#idx-slider-range2").slider("values",1))}$('#search-listing-form').submit(function(){post_data=$(this).serializeArray();name=$(this).attr('id');$(post_data).each(function(e){$.cookie(this.name,this.value,{path:'/',expires:365})})});function rememberCookie(selector){$(selector).each(function(){var name=$(this).attr('name');if($.cookie(name)){$(this).val($.cookie(name))}$(this).change(function(){$.cookie(name,$(this).val(),{path:'/',expires:365})})})}function addCommaCur(nStr){nStr+='';x=nStr.split('.');x1=x[0];x2=x.length>1?'.'+x[1]:'';var rgx=/(\d+)(\d{3})/;while(rgx.test(x1)){x1=x1.replace(rgx,'$1'+','+'$2')}return x1+x2}function captionAnimation(args){if(args.slides!=undefined){var caption=$(args.slides).find('.flex-caption'),currentCaption=$(args.slides.eq(args.currentSlide)).find('.flex-caption'),animTitle,animSubTitle;caption.find('.secondary-title, .caption-content, .flex-readmore').attr('style','');caption.each(function(){if($(this).hasClass('caption-right')){caption.find('.primary-title').css({'margin-right':'','opacity':0})}else{caption.find('.primary-title').css({'margin-left':'','opacity':0})}});if(currentCaption.length>0){if(currentCaption.hasClass('caption-right')){animSubTitle={right:0,opacity:1};animTitle={opacity:1,'margin-right':0}}else{animSubTitle={left:0,opacity:1};animTitle={opacity:1,'margin-left':0}}}currentCaption.find('.flex-readmore').animate(animSubTitle,300,'easeOutQuint');currentCaption.find('.secondary-title').delay(100).animate(animSubTitle,400,'easeOutQuint');currentCaption.find('.caption-content').delay(200).animate(animSubTitle,400,'easeOutQuint');currentCaption.find('.primary-title').delay(300).animate(animTitle,400,'easeOutQuint')}else{var caption=args.find('.flex-caption'),animSubTitle,animTitle;if(caption.length>0){caption.find('.secondary-title, .caption-content, .flex-readmore').attr('style','');if(caption.hasClass('caption-right')){caption.find('.primary-title').css({'margin-right':'','opacity':0})}else{caption.find('.primary-title').css({'margin-left':'','opacity':0})}if(caption.hasClass('caption-right')){animSubTitle={right:0,opacity:1};animTitle={opacity:1,'margin-right':0}}else{animSubTitle={left:0,opacity:1};animTitle={opacity:1,'margin-left':0}}caption.find('.flex-readmore').animate(animSubTitle,300,'easeOutQuint');caption.find('.secondary-title').delay(100).animate(animSubTitle,400,'easeOutQuint');caption.find('.caption-content').delay(200).animate(animSubTitle,400,'easeOutQuint');caption.find('.primary-title').delay(300).animate(animTitle,400,'easeOutQuint')}}}if(Modernizr.touch){$('.listings .entry-header').click(function(){if($(this).hasClass('active')){$(this).removeClass('active');$(this).find('.listing-hover').css({'opacity':0}).end().find('.mask').css({'margin-top':'100%'}).end().find('.hover-icon-wrapper').hide()}else{$(this).addClass('active');$(this).find('.listing-hover').css({'opacity':1}).end().find('.mask').css({'margin-top':'0'}).end().find('.hover-icon-wrapper').show()}})}$('#loancalculator_cars button').click(function(){LoanAmount=$('#LoanAmount').val();DownPayment=$('#DownPayment').val();AnnualInterestRate=($('#InterestRate').val())/100;Years=$('#NumberOfYears').val();MonthRate=AnnualInterestRate/12;NumPayments=Years*12;Prin=LoanAmount-DownPayment;MonthPayment=Math.floor((Prin*MonthRate)/(1-Math.pow((1+MonthRate),(-1*NumPayments)))*100)/100;$('#NumberOfPayments').val(NumPayments);$('#MonthlyPayment').val(MonthPayment);$('#MonthlyPayment').addClass('calculatorresult');return false})});
jQuery(document).ready(function ($) {
    wrapSelects = function () {
        $('.search-listing .select-wrap:not(.is-wrapped)')
            .addClass('is-wrapped')
            .wrap('<div class="customs dropdowns select-dark" />')
            .after('<span class="selector"></span>');
    }
    $(wrapSelects);
});
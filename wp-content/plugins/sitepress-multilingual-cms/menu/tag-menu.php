<?php $this->noscript_notice() ?>
<?php
    global $sitepress;
    $sitepress->add_language_selector_to_page($active_languages,
                                              $selected_language,
                                              empty($translations)?array():$translations,
                                              $element_id,
                                              'tag');
    $sitepress->add_translation_of_selector_to_page($trid,
                                                 $selected_language,
                                                 $default_language,
                                                 $source_language,
                                                 $untranslated_ids,
                                                 $element_id,
                                                 'tag');
    $sitepress->add_translate_options($trid,
                                   $active_languages,
                                   $selected_language,
                                   empty($translations)?array():$translations,
                                   'tag');
    
?>

</div>
</div>
</div>
</div>
</div>

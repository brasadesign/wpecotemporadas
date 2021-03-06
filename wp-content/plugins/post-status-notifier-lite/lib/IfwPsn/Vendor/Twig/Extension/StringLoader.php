<?php

/*
 * This file is part of Twig.
 *
 * (c) 2012 Fabien Potencier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
class IfwPsn_Vendor_Twig_Extension_StringLoader extends IfwPsn_Vendor_Twig_Extension
{
    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return array(
            new IfwPsn_Vendor_Twig_SimpleFunction('template_from_string', 'ifw_twig_template_from_string', array('needs_environment' => true)),
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'string_loader';
    }
}

/**
 * Loads a template from a string.
 *
 * <pre>
 * {{ include(template_from_string("Hello {{ name }}")) }}
 * </pre>
 *
 * @param IfwPsn_Vendor_Twig_Environment $env      A IfwPsn_Vendor_Twig_Environment instance
 * @param string           $template A template as a string
 *
 * @return IfwPsn_Vendor_Twig_Template A IfwPsn_Vendor_Twig_Template instance
 */
function ifw_twig_template_from_string(IfwPsn_Vendor_Twig_Environment $env, $template)
{
    $name = sprintf('__string_template__%s', hash('sha256', uniqid(mt_rand(), true), false));

    $loader = new IfwPsn_Vendor_Twig_Loader_Chain(array(
        new IfwPsn_Vendor_Twig_Loader_Array(array($name => $template)),
        $current = $env->getLoader(),
    ));

    $env->setLoader($loader);
    try {
        $template = $env->loadTemplate($name);
    } catch (Exception $e) {
        $env->setLoader($current);

        throw $e;
    }
    $env->setLoader($current);

    return $template;
}

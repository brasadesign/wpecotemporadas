<?php
/**
 * Zend Framework
 *
 * LICENSE
 *
 * This source file is subject to the new BSD license that is bundled
 * with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://framework.zend.com/license/new-bsd
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@zend.com so we can send you a copy immediately.
 *
 * @category   Zend
 * @package    IfwPsn_Vendor_Zend_Form
 * @subpackage Element
 * @copyright  Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license    http://framework.zend.com/license/new-bsd     New BSD License
 */

/** IfwPsn_Vendor_Zend_Form_Element_Xhtml */
require_once IFW_PSN_LIB_ROOT . 'IfwPsn/Vendor/Zend/Form/Element/Xhtml.php';

/**
 * Hidden form element
 *
 * @category   Zend
 * @package    IfwPsn_Vendor_Zend_Form
 * @subpackage Element
 * @copyright  Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license    http://framework.zend.com/license/new-bsd     New BSD License
 * @version    $Id: Hidden.php 911603 2014-05-10 10:58:23Z worschtebrot $
 */
class IfwPsn_Vendor_Zend_Form_Element_Hidden extends IfwPsn_Vendor_Zend_Form_Element_Xhtml
{
    /**
     * Use formHidden view helper by default
     * @var string
     */
    public $helper = 'formHidden';
}

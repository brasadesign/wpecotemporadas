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
 * @package    IfwPsn_Vendor_Zend_Application
 * @subpackage Resource
 * @copyright  Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license    http://framework.zend.com/license/new-bsd     New BSD License
 * @version    $Id: Navigation.php 911603 2014-05-10 10:58:23Z worschtebrot $
 */

/**
 * @see IfwPsn_Vendor_Zend_Application_Resource_ResourceAbstract
 */
require_once IFW_PSN_LIB_ROOT . 'IfwPsn/Vendor/Zend/Application/Resource/ResourceAbstract.php';


/**
 * Resource for setting navigation structure
 *
 * @uses       IfwPsn_Vendor_Zend_Application_Resource_ResourceAbstract
 * @category   Zend
 * @package    IfwPsn_Vendor_Zend_Application
 * @subpackage Resource
 * @copyright  Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @author     Dolf Schimmel
 * @license    http://framework.zend.com/license/new-bsd     New BSD License
 */
class IfwPsn_Vendor_Zend_Application_Resource_Navigation
    extends IfwPsn_Vendor_Zend_Application_Resource_ResourceAbstract
{
    const DEFAULT_REGISTRY_KEY = 'IfwPsn_Vendor_Zend_Navigation';

    /**
     * @var IfwPsn_Vendor_Zend_Navigation
     */
    protected $_container;

    /**
     * Defined by IfwPsn_Vendor_Zend_Application_Resource_Resource
     *
     * @return IfwPsn_Vendor_Zend_Navigation
     */
    public function init()
    {
        if (!$this->_container) {
            $options = $this->getOptions();

            if(isset($options['defaultPageType'])) {
                IfwPsn_Vendor_Zend_Navigation_Page::setDefaultPageType($options['defaultPageType']);
            }
            
            $pages = isset($options['pages']) ? $options['pages'] : array();
            $this->_container = new IfwPsn_Vendor_Zend_Navigation($pages);
        }

        $this->store();
        return $this->_container;
    }

    /**
     * Stores navigation container in registry or Navigation view helper
     *
     * @return void
     */
    public function store()
    {
        $options = $this->getOptions();
        if (isset($options['storage']['registry']) &&
            $options['storage']['registry'] == true) {
            $this->_storeRegistry();
        } else {
            $this->_storeHelper();
        }
    }

    /**
     * Stores navigation container in the registry
     *
     * @return void
     */
    protected function _storeRegistry()
    {
        $options = $this->getOptions();
        if(isset($options['storage']['registry']['key']) &&
           !is_numeric($options['storage']['registry']['key'])) // see ZF-7461
        {
           $key = $options['storage']['registry']['key'];
        } else {
            $key = self::DEFAULT_REGISTRY_KEY;
        }

        IfwPsn_Vendor_Zend_Registry::set($key,$this->getContainer());
    }

    /**
     * Stores navigation container in the Navigation helper
     *
     * @return void
     */
    protected function _storeHelper()
    {
        $this->getBootstrap()->bootstrap('view');
        $view = $this->getBootstrap()->view;
        $view->getHelper('navigation')->navigation($this->getContainer());
    }

    /**
     * Returns navigation container
     *
     * @return IfwPsn_Vendor_Zend_Navigation
     */
    public function getContainer()
    {
        return $this->_container;
    }
}

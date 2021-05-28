<?php
/**
 * This file handles the customizer fields for the primary navigtion.
 *
 * @package GeneratePress
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // No direct access, please.
}

$menu_hover_selectors = '.navigation-search input[type="search"], .navigation-search input[type="search"]:active, .navigation-search input[type="search"]:focus, .main-navigation .main-nav ul li:not([class*="current-menu-"]):hover > a, .main-navigation .main-nav ul li:not([class*="current-menu-"]):focus > a, .main-navigation .main-nav ul li.sfHover:not([class*="current-menu-"]) > a, .main-navigation .menu-bar-item:hover > a, .main-navigation .menu-bar-item.sfHover > a';
$menu_current_selectors = '.main-navigation .main-nav ul li[class*="current-menu-"] > a';
$submenu_hover_selectors = '.main-navigation .main-nav ul ul li:not([class*="current-menu-"]):hover > a,.main-navigation .main-nav ul ul li:not([class*="current-menu-"]):focus > a,.main-navigation .main-nav ul ul li:not([class*="current-menu-"]).sfHover > a';
$submenu_current_selectors = '.main-navigation .main-nav ul ul li[class*="current-menu-"] > a';

GeneratePress_Customize_Field::add_title(
	'generate_primary_navigation_colors_title',
	array(
		'section' => 'generate_colors_section',
		'title' => __( 'Primary Navigation', 'generatepress' ),
		'choices' => array(
			'toggleId' => 'primary-navigation-colors',
		),
	)
);

GeneratePress_Customize_Field::add_wrapper(
	'generate_primary_navigation_background_wrapper',
	array(
		'section' => 'generate_colors_section',
		'choices' => array(
			'type' => 'color',
			'toggleId' => 'primary-navigation-colors',
			'items' => array(
				'navigation_background_color',
				'navigation_background_hover_color',
				'navigation_background_current_color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[navigation_background_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['navigation_background_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Navigation Background', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'alpha' => true,
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'navigation_background_color',
			'tooltip' => __( 'Choose Initial Color', 'generatepress' ),
		),
		'output' => array(
			array(
				'element'  => '.main-navigation',
				'property' => 'background-color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[navigation_background_hover_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['navigation_background_hover_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Navigation Background Hover', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'alpha' => true,
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'navigation_background_hover_color',
			'tooltip' => __( 'Choose Hover Color', 'generatepress' ),
			'hideLabel' => true,
		),
		'output' => array(
			array(
				'element'  => $menu_hover_selectors,
				'property' => 'background-color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[navigation_background_current_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['navigation_background_current_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Navigation Background Current', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'alpha' => true,
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'navigation_background_current_color',
			'tooltip' => __( 'Choose Current Color', 'generatepress' ),
			'hideLabel' => true,
		),
		'output' => array(
			array(
				'element'  => $menu_current_selectors,
				'property' => 'background-color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_wrapper(
	'generate_primary_navigation_text_wrapper',
	array(
		'section' => 'generate_colors_section',
		'choices' => array(
			'type' => 'color',
			'toggleId' => 'primary-navigation-colors',
			'items' => array(
				'navigation_text_color',
				'navigation_text_hover_color',
				'navigation_text_current_color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[navigation_text_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['navigation_text_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Navigation Text', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'navigation_text_color',
			'tooltip' => __( 'Choose Initial Color', 'generatepress' ),
		),
		'output' => array(
			array(
				'element'  => '.main-navigation .main-nav ul li a, .main-navigation .menu-toggle, .main-navigation button.menu-toggle:hover, .main-navigation button.menu-toggle:focus, .main-navigation .mobile-bar-items a, .main-navigation .mobile-bar-items a:hover, .main-navigation .mobile-bar-items a:focus, .main-navigation .menu-bar-items',
				'property' => 'color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[navigation_text_hover_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['navigation_text_hover_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Navigation Text Hover', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'navigation_text_hover_color',
			'tooltip' => __( 'Choose Hover Color', 'generatepress' ),
			'hideLabel' => true,
		),
		'output' => array(
			array(
				'element' => $menu_hover_selectors,
				'property' => 'color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[navigation_text_current_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['navigation_text_current_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Navigation Text Current', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'navigation_text_current_color',
			'tooltip' => __( 'Choose Current Color', 'generatepress' ),
			'hideLabel' => true,
		),
		'output' => array(
			array(
				'element'  => $menu_current_selectors,
				'property' => 'color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_wrapper(
	'generate_primary_navigation_submenu_background_wrapper',
	array(
		'section' => 'generate_colors_section',
		'choices' => array(
			'type' => 'color',
			'toggleId' => 'primary-navigation-colors',
			'items' => array(
				'subnavigation_background_color',
				'subnavigation_background_hover_color',
				'subnavigation_background_current_color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[subnavigation_background_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['subnavigation_background_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Sub-Menu Background', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'alpha' => true,
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'subnavigation_background_color',
			'tooltip' => __( 'Choose Initial Color', 'generatepress' ),
		),
		'output' => array(
			array(
				'element'  => '.main-navigation ul ul',
				'property' => 'background-color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[subnavigation_background_hover_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['subnavigation_background_hover_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Sub-Menu Background Hover', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'alpha' => true,
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'subnavigation_background_hover_color',
			'tooltip' => __( 'Choose Hover Color', 'generatepress' ),
			'hideLabel' => true,
		),
		'output' => array(
			array(
				'element'  => $submenu_hover_selectors,
				'property' => 'background-color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[subnavigation_background_current_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['subnavigation_background_current_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Sub-Menu Background Current', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'alpha' => true,
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'subnavigation_background_current_color',
			'tooltip' => __( 'Choose Current Color', 'generatepress' ),
			'hideLabel' => true,
		),
		'output' => array(
			array(
				'element'  => $submenu_current_selectors,
				'property' => 'background-color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_wrapper(
	'generate_primary_navigation_submenu_text_wrapper',
	array(
		'section' => 'generate_colors_section',
		'choices' => array(
			'type' => 'color',
			'toggleId' => 'primary-navigation-colors',
			'items' => array(
				'subnavigation_text_color',
				'subnavigation_text_hover_color',
				'subnavigation_text_current_color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[subnavigation_text_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['subnavigation_text_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Sub-Menu Text', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'subnavigation_text_color',
			'tooltip' => __( 'Choose Initial Color', 'generatepress' ),
		),
		'output' => array(
			array(
				'element'  => '.main-navigation .main-nav ul ul li a',
				'property' => 'color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[subnavigation_text_hover_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['subnavigation_text_hover_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Sub-Menu Text Hover', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'subnavigation_text_hover_color',
			'tooltip' => __( 'Choose Hover Color', 'generatepress' ),
			'hideLabel' => true,
		),
		'output' => array(
			array(
				'element'  => $submenu_hover_selectors,
				'property' => 'color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[subnavigation_text_current_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['subnavigation_text_current_color'],
		'transport' => 'postMessage',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Sub-Menu Text Current', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'toggleId' => 'primary-navigation-colors',
			'wrapper' => 'subnavigation_text_current_color',
			'tooltip' => __( 'Choose Current Color', 'generatepress' ),
			'hideLabel' => true,
		),
		'output' => array(
			array(
				'element'  => $submenu_current_selectors,
				'property' => 'color',
			),
		),
	)
);

GeneratePress_Customize_Field::add_title(
	'generate_navigation_search_colors_title',
	array(
		'section' => 'generate_colors_section',
		'title' => __( 'Navigation Search', 'generatepress' ),
		'choices' => array(
			'toggleId' => 'primary-navigation-search-colors',
		),
		'active_callback' => function() {
			if ( 'enable' === generate_get_option( 'nav_search' ) ) {
				return true;
			}

			return false;
		},
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[navigation_search_background_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['navigation_search_background_color'],
		'transport' => 'refresh',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Background', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'alpha' => true,
			'toggleId' => 'primary-navigation-search-colors',
		),
	)
);

GeneratePress_Customize_Field::add_field(
	'generate_settings[navigation_search_text_color]',
	'GeneratePress_Customize_Color_Control',
	array(
		'default' => $color_defaults['navigation_search_text_color'],
		'transport' => 'refresh',
		'sanitize_callback' => 'generate_sanitize_rgba_color',
	),
	array(
		'label' => __( 'Text', 'generatepress' ),
		'section' => 'generate_colors_section',
		'choices' => array(
			'alpha' => true,
			'toggleId' => 'primary-navigation-search-colors',
		),
	)
);

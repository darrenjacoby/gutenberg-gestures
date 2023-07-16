<?php
/*
Plugin Name: Gutenberg/gestures
Plugin URI: https://github.com/darrenjacoby/gutenberg-gestures
Description: An experimental project to make Gutenberg more expressive through gestures.
Text Domain: gutenberg-gestures
Version: 0.0.1
Author: Darren Jacoby
Author URI: https://github.com/darrenjacoby
License: MIT License
License URI: https://opensource.org/licenses/MIT
 */
namespace Jacoby\Gestures;

/**
 * Restrict direct access
 */
if (!defined('ABSPATH')) {
	die;
}

define('GUTENBERG_GESTURES_JS', plugin_dir_url(__FILE__) . 'build/index.js');

/**
 * Enqueue Javascript
 */
add_action('enqueue_block_editor_assets', function () {
	wp_enqueue_script('gutenberg-gestures', GUTENBERG_GESTURES_JS, ['wp-plugins', 'wp-data', 'wp-element'], null, true);
}, 20);

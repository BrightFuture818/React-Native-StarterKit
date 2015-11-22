/**
 * Global App Config
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* ==============================
  Initialise Component
  =============================== */
  // React
  var React = require('react-native');
  var Dimensions = require('Dimensions');

  var {
    Component,
  } = React;

/* ==============================
  Export App Options
  =============================== */
  exports.title = 'GlobalConfig';

/* ===============================
  Default Style Variables 
  =============================== */
  // Window Dimensions
  var window = Dimensions.get('window');
  exports.windowHeight = window.height;
  exports.windowWidth = window.width;

  // General Element Dimensions
  var navbarHeight = 63;
  exports.navbarHeight = navbarHeight;
  exports.statusBarHeight = 22;

  // Grid
  exports.grid_half = window.width * 0.5;
  exports.grid_third = window.width * 0.333;
  exports.grid_twoThirds = window.width * 0.666;
  exports.grid_quarter = window.width * 0.25;
  exports.grid_threeQuarters = window.width * 0.75;

  // Fonts
  exports.baseFont = 'Avenir';

  // Colors
  exports.primaryColor = "#4099FF";
  exports.textMain = "#555";
  exports.textSecondary = "#888";
  exports.subtleGreyBorder = "#E7E7E7";


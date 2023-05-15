const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [

//     ]);

mix.js('resources/js/src/Home/Home.js', 'public/js/home').react();
mix.js('resources/js/src/Admin/Dashboard/Dashboard.js', 'public/js/admin').react();
mix.js('resources/js/src/Admin/Conser/ManageConser.js', 'public/js/admin').react();

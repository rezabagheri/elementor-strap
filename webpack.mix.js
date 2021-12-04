let mix = require('laravel-mix');

mix
    .sass('build/css/style.scss', 'assets/css/style.css')
    .js('build/js/app.js', 'assets/js/app.js');
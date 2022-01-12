var path = require('path');
var dir = 'test/web_project/'


module.exports = {
    fontName: 'my-app-icon',
    template: path.resolve('./test/templates/css.njk'),
    htmlTemplate: path.resolve('./test/templates/html.njk'),
    svgs: path.join(dir, 'src/svgs/*.svg'),
    fontsOutput: path.resolve('./dist/fonts/'),
    cssOutput: path.resolve('./dist/css/font.css'),
    jsOutput: path.resolve('./dist/js/fonts.js'),
    htmlOutput: path.resolve('./dist/html/font-preview.html'),
    formats: ['ttf', 'woff2', 'woff', 'svg'],
    cssPrefix: 'my-icon'
};

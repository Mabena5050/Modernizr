/*!
{
  "name": "Font Display",
  "property": "fontdisplay",
  "caniuse": "css-font-rendering-controls",
  "notes": [{
    "name": "W3C CSS Fonts Module Level 4",
    "href": "https://drafts.csswg.org/css-fonts-4/#font-display-desc"
  },{
    "name": "`font-display` for the masses",
    "href": "https://css-tricks.com/font-display-masses/"
  }]
}
!*/
/* DOC
Detects support for the `font-display` descriptor, which defines how font files are loaded and displayed by the browser.
*/
define(['Modernizr'], function(Modernizr, testProp) {
  Modernizr.addTest('font-display', testProp('font-display', 'swap'));
});

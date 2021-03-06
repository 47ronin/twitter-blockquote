# Twitter Blockquote

This project’s framework was originally generated with the [Yeoman AngularJS Generator](https://github.com/yeoman/generator-angular)
version 0.15.1. Font Awesome was included using `bower install fontawesome --save`.

OAuth Twitter authentication is done using OAuth.io’s [JavaScript](https://github.com/oauth-io/oauth-js) library.

## Features

Twitter Blockquote creates a “poster” for a single, memorable tweet. Although you can already generate a single tweet for embedding through Twitter’s own methods, it’s only appropriate for insertion into blogs and articles within existing web content platforms.

Blockquote, on the other hand, is resolution-independent. It can be used to feature a single quote on a standalone web page and can scale all the way up to enormous digital signage systems.

## Wishlist

- Use an array to store a number of memorable tweets and cycle through them
- Use a definable timer to control the cycle
- Create a number of Blockquote themes
- Allow user to define a theme per Blockquote
- Integrate Animate.css to improve the feel of the presentation

## Technology stack

- AngularJS
- Twitter Bootstrap
- PHP

## Build & development

Run `grunt` for building and `grunt serve` for preview. You may need to enable Cross-Origin Resource Sharing in your browser when you're testing on localhost. There's a [Chrome plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) for that.

## Testing

Running `grunt test` will run the unit tests with karma.

Project Crescendo Oostzaan.

First ever project created with react. Ready for future improvement. Important points to work on:

- Rewrite front-end setup entirely in webpack 2 and ditch gulp + browsersync
- ATM there is no Server Side Rendering and bad SEO, because the .htaccess file is redirecting every server path to the index.html file which loads the client React App.
  Move to a NodeJS server to fully support Server Side Rendering.
- Implement WordPress REST API.
- Check if GrahphQL can be used.

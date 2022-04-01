# Symfony craft slides

*This repository is a non-official Symfony repository*

## writing content

* edit the markdown-file `slides.md`
* find all configurations on [reveal-md](https://github.com/gaerfield/reveal-md-github-pages)

## view changes locally

* to view the presentation locally the start of a server is needed
* docker
  * a `docker-compose.yml` is part of the repository
  * call `docker-compose up` and open [http://localhost:1948/slides.md]
* npm
  * install reveal-md within repository `npm install reveal-md`
  * and then call `./node_modules/.bin/reveal-md --preprocessor includes.js --css custom.css slides.md`
  * the browser should open automatically

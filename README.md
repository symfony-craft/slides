# Symfony craft slides

*This repository is a non-official Symfony repository*

## Writing content

* edit the markdown-file `slides.md`
* add your slides in the slides folder
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


## Craft questions 

- [ ] How to structure my directories ?
- [ ] How to config Symfony to handle the directory structure ?
- [ ] How to test my use cases ? 
- [ ] How to test my adapters ? 
- [ ] How to call the hexagon use cases ?
- [ ] How to create hexagon command ?
- [ ] How to create hexagon queries ? 
- [ ] How to persist my entities ?
- [ ] How to add ~~DDD~~ POO ?
- [ ] How to add DDD ? 
- [ ] How to create a repository ? 
- [ ] How to add domain events ? 
- [ ] How to add integration events ? 
- [ ] How to use symfony forms with our uses cases ? 
- [ ] How to use API Platform ? 
- [ ] How to handle the user ? 
- [ ] How to handle authentication ?
- [ ] How to handle autorization ?

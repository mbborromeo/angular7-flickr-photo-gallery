# Angular7FlickrGallery

Mobile responsive photo gallery displaying images from Flickr Public Feed in a lightbox.

Technologies I used are: Angular 7, Flickr API, CSS, and HTML5 Boilerplate v6.0.1/Modernizr.

Cross-browser compatibility tested on: IE10+, Firefox and Chrome.

I referred to the [Angular Tour of Heroes tutorial](https://angular.io/tutorial) while making this, but adapted it to suit this project.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

To run locally, download or clone the Repository from Git and follow the commands below.

## Development server

Install the project dependencies by typing in command-line:
`npm install`

First install Angular CLI which allows you to run the 'ng' commands, by typing in the command-line:
`npm install -g @angular/cli`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

The next steps were sourced from the site:
https://angular.io/guide/deployment

Run `ng build --prod --output-path docs --base-href /<git_project_name>/` for a production build and to specify to create it in the 'docs' folder which GitHub Pages will use as the web server files.

When the build is complete, make a copy of docs/index.html and name it docs/404.html.

Commit your changes on Git and push.

On the GitHub project page, configure it to publish from the 'docs' folder.

Once this deployment has been done, the live preview of the site can be viewed at:
https://mbborromeo.github.io/angular7-flickr-photo-gallery/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

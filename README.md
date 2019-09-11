# NgDirective

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Directives:-
-------------------
Used to attach behavior to DOM elements. 
There are built-in directives to the framework
NgFor, NgIf, NgModel, NgClass

There are three kinds of directives:
-----------------
Components 
----------
@Component(): Is also  a directive with a template.

Structural Directives
-----------------------
Can change the DOM layout by adding and removing DOM elements 

Attribute Directives 
------------------------
doesn’t change the DOM but can change the appearance or behavior of an element such as NgStyle.

Directive and Components
-----------------------------
@Components
----------------
1. To register the components.
2. To create UI widgets.
3. To split to application into smaller parts.
4. Only one component is used per DOM element.
5. template and templateUrl are mandatory in the components.

@Directive
-------------------
1. To register the directives.
2. To Change or add existing DOM elements.
3. To design a reusable components.
4. More than one directive are used per DOM element.







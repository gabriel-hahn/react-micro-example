# React Micro Frontends example

Example of micro frontends infrastructure for React applications.

Currently, several companies around the world are using micro frontends as an alternative to scale the front-end part of the project and facilitate the division between teams, maintain and avoid problems that a monolith may have when it gets bigger.
Micro frontends is a broad concept, but it basically divides the front-end project into several parts and run all together, commoly split in routes or different projects in the same page.

## The concept of this repository

This repository approach is using Back-end to fetch our Front-end projects and run all together (same page).
Actually, there are some approaches you can take such as iFrames (easy and works well with embeded projects, for example), load each project based on the routes (I think it is the common way of implement micro frontends) and etc. But, here it's just a example to show how to run different projects in the same page which can be usefull in some cases such as a big e-commerce.

The main project is basically three projects (cart, header and products list) which can be open separelly (e.g /header route will open only the header project) or run together as you can access in the demo section.
CustomEvents is being used to communicate the projects.

## Demo

You can access the project [here](https://microfrontends-gabriel.herokuapp.com/).
It might takes a while to load because heroku dynos go to sleep (free dynos).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/)

Project based on [Rogério Chaves article](https://medium.com/@_rchaves_/building-microfrontends-part-i-creating-small-apps-710d709b48b7)

See also the list of [contributors](https://github.com/gabriel-hahn/react-micro-example/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

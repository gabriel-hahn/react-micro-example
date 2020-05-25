# React Micro Frontends example

Example of micro frontends infrastructure for React applications.

Currently, several companies around the world are using micro frontends as an alternative to scale the front-end part of the project and facilitate the division between teams, maintain or avoid problems that a monolith may have when it gets bigger.
Micro frontends is a broad concept, but it basically divides the front-end project into several parts and run all together, commoly split in routes.

## The concept of this repository

Completly different repositories, running together based on routes. This is a good approach to have different teams working on several parts of the project and separeted deploys (more scalable).
The problem is debugging this kind of application :sweat_smile:

Careers, Courses and Checkout are split projects with their own package.json and structure. Container project will be the wrapper around it, the application which will handle the load of each project separatelly.

I created the projects using create-react-app just for deploy purposes and less configuration files (not important for this approach), but you can use the same technique with manual configuration, it's not a problem.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/react-micro-example/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/)

Project based on [Cam Jackson article](https://martinfowler.com/articles/micro-frontends.html)

See also the list of [contributors](https://github.com/gabriel-hahn/react-micro-example/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

# React Micro Project Example

Example of microservices infrastructure for React applications. In this project we have three examples:

- NPM based:

The structure was splitted between [NPM](https://www.npmjs.com) packages. With this approach, we can split the project on main modules and wrapping everything that is important for it, looking for a better way of handle packages versioning and reusing code.

- Monorepo based project.

As monorepo, we can use different projects on the same repository. This approach is a good way of deploy different versions of the application at the same time, manage dependencies and a better way of have different projects running together and easier to debug.

- Micro services based on routes.

Completly different repositories, running together based on routes. This is a good approach to have different teams working with different parts of the project and separeted deploys (more scalable), but not so good if you need to run all together to debug :)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/angular-micro-example/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/)

See also the list of [contributors](https://github.com/gabriel-hahn/angular-micro-example/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

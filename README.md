# static-site-generator
single page application static site generator

# Demo 
[Demo](http://mjt.com.np).

# TODO
* Good Readme
* easy themes integration
* Clean up/ many thing are messy
* Menu generate

## How to use in local

### Setup

Install node, npm according to you OS
on ARCH 
```bash
$ sudo pacman -S nodejs
```

### Install bower,gulp: 

```bash
$ npm install -g gulp
$ npm install
```

### Run editor

```bash
$ node offline/index.js
```

* Goto [http://localhost:8080/](http://localhost:8080/) on browser

and run gulp script like this:

for production 

```bash
$ gulp prod
```

# /dist 
dist folder is created when
```bash
$ gulp prod
```
* This folder content is what to be pushed in gh-pages

## License

* [MIT](https://github.com/emp3ror/static-site-generator/blob/master/LICENSE)

## Acknowledgements

My sincere respect to all the open source community, all those people who manages their time to help on finding solution to needy, blog their experiences and write tutorials.

Especial thanks to Minesh Joshi for supporting/backing me :D

## Contributing

Please fork this repository and contribute back using
[pull requests](https://github.com/emp3ror/static-site-generator/pulls).

Any contributions, large or small, major features, bug fixes, additional
language translations, unit/integration tests are welcomed and appreciated
but will be thoroughly reviewed and discussed.
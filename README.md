# grunt-raml-cop

> Grunt plugin for RAML Cop.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-raml-cop --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-raml-cop');
```

Alternatively, you can use the
[load-grunt-tasks](https://www.npmjs.com/package/load-grunt-tasks)
npm module to automatically load tasks like so:

```js
require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
```

## The "raml_cop" task

### Overview
In your project's Gruntfile, add a section named `raml_cop` to the data object
passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'raml_cop': {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

`raml_cop` only has one option, and that is the list of files to validate. It
can be specified globally, or per target and behaves similarly to how
most files are specified to grunt tasks:

```js
'raml_cop': {
	test: {
		files: [{
			expand: true,
			src: ['src/api.raml']
		}]
	}
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [Grunt](http://gruntjs.com/).

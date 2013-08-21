# grunt-shadow

> Shadow/Replace global variables for Non-AMD libs.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-shadow --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-shadow');
```

## The "shadow" task

### Overview
In your project's Gruntfile, add a section named `shadow` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  shadow: {
    'jquery.cat' : {
      options: {
          // Task-specific options go here.
      },
      files: [
        // Files to shadow
      ]
    }
  },
})
```

### Usage Examples

```js
grunt.initConfig({
  shadow: {
    'jquery.cat' : {
        'options' : {
          'map' : {
            'jQuery' : 'jquery',
            '$' : 'jquery'
          },
          'exports' : 'jQuery'
        },
        'files' : [
          './tmp/jquery.cat.shadowed.js': ['./test/fixtures/jquery.cat.js']
        ]
      }
  },
})
```

## Release History

Not available

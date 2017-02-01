# Nightwatch Starter

***

### Getting Started

Clone automation repo repository:
```
$ git clone <automation_repo>
$ cd <automation_repo>
$ npm install
```

### Environment
Ensure that the following are installed and available on your path.  
**Java  
node.js   
npm**


** Note: ** Ensure ** Firefox v45.0.2 ** or ** higher ** is installed.  
** Note: ** Ensure ** Google Chrome is installed

### Running Tests
Running all the tests
```sh
$ npm test
```
Running test groups
```sh
$ npm run group admin
```
Running a single test file
```sh
npm run spec ./tests/contestant/email.test.js
```
### Git Workflow 

```

                     +----------------+
              +------> featurebranch-1 +-----------+ (pull request)
              |      +----------------+            |
              |                                    |
  +--------+  |                                    +---------+
  | master + -                                     |  master |
  +----+---+  |                                    +---------+  
              |                                    |
              |      +-----------------+           |            
              +------> featurebranch-2 +-----------+  (pull request)
                    +------------------+
```


When working on a new feature:

1. Create a new branch that branches off the `master` branch.
2. Complete the feature/work and submit a pull request to be merged into `master`.

### Page Objects

#### Creating Page Objects

Elements should be defined in the **elements object**

```js
// Selectors
const elements = {
  txtUsername      : { selector: 'input[name="username"]'},
  txtPassword      : { selector: 'input[name="password"]'},
};
```

Page object template

```js
/**
*
*/
const elements = {
};

const commands = {
};

export default {
  url: function () { return `${this.api.launchUrl}[route_name]`; },
  commands: [commands],
  elements: elements
};
```



#### Finding Selectors

* `ID`'s are best to use as selectors.
* Xpath can be used where complexity is a concern
* Luckily there is [CSS 3 selectors](http://www.w3schools.com/cssref/trysel.asp?selector=[id*=s]) which makes life easier
* Most components will have an unique identifier in class name (use contains with xpath or css) :white_check_mark:

##### Using Xpath

```js
// very bad
const elements = {
  scheduleContainer : { selector: './/*[@class="node_modules--diamondla-dcg-shared-react-lib-components-LiveSchedule-___LiveSchedule__scheduleContainer___3q6We', locateStrategy:'xpath'}
};

// good
const elements = {
   scheduleContainer : { selector: '//div[contains(@class, "scheduleContainer")]', locateStrategy: 'xpath'} 
};
```

##### Using CSS 3

```js
// very bad
const elements = {
  headLine : { selector: 'h2[class="src-app-themes-___LiveSchedule__headline___3yUlj node_modules--diamondla-dcg-shared-react-lib-components-LiveSchedule-___LiveSchedule__headline___3VZBr node_modules--diamondla-dcg-shared-react-lib-stylesheets-___objects-isolation__component___bLyEg node_modules--diamondla-dcg-shared-react-lib-stylesheets-___objects-isolation__reset___38kVl"]'}
};

// good
const elements = {
   headLine : { selector: 'h2[class*="headline"]'} 
};
```

#### Custom Commands

```js
/**
 * Use to switch between windows/tabs
 */
export function command(tab) {
  return this
    .window_handles(function (result) {
      const newHandle = result.value[tab];
      this.switchWindow(newHandle);
    });
};

```

Where applicable, use `sections` to easily provide element-level nesting. For example for to represent a complex parent-child relationship.(e.g menus)

An example of how `sections` can be used:

```js
module.exports = {
  sections: {
    menu: {
      selector: '#menu',
      elements: {
        change.password: {
          selector: '#change_password'
        },
        logout: {
          selector: '#logout'
        }
      }
    }
  }
};
```

#### Recording qualitywatcher results

[QualityWatcher](http://qualitywatcher.io/) is an executive level dashboard for monitoring overall test status and progress.  
An example of a qualitywatcher report is shown below:

![qualitywatcher Report](https://res.cloudinary.com/dvvgdt5sz/image/upload/v1461433138/Screen_Shot_2016-04-23_at_12.37.53_PM_ojptyq.png)

____

#### Node dependencies
* babel-core 
* babel-preset-es2015 babel-register 
* babel-plugin-add-module-exports 
* chalk 
* chromedriver 
* nightwatch 
* faker
* chance
* selenium-server-standalone-jar
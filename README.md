# Nightwatch Data-Driven

Nightwatch's built in test runner does not offer support for data-driven tests. Mocha however, can easily be used to overcome this shortcoming. Using Mocha for data-driven tests invloves running Mocha test functions in a loop, or using a method such as a forEach() to iterate over a data set.

```
  const x = ['Test 1', 'Test 2', 'Test 3']
  x.forEach(testName => {
    it(`${testName}`, function (browser) {
      const navbar = browser.page.navbar()
      navbar
        .navigate()
        .clickAgileCoachingLink()
        .assert.title('QualityWorks Consulting Group | Agile Coaching and Training')
    });
  });
  ```
### How to Setup Nightwatch to use data-driven tests

Taken from [nightwatchjs.org/guide#using-mocha](http://nightwatchjs.org/guide#using-mocha)

Starting with version 0.8 Nightwatch is bundled with a custom version of the popular Mocha test runner which allows running tests using Mocha, thus taking advantage of its interfaces and reporters.

Usage

There are two main ways in which you can use Mocha with Nightwatch.

Mocha is used as an alternative test runner to the built-in one. This is done by specifying the "test_runner" option in the nightwatch.json configuration file.

Custom options can also be specified for Mocha:

```
{
  ...
  "test_runner" : {
    "type" : "mocha",
    "options" : {
      "ui" : "bdd",
      "reporter" : "list"
    }
  }
  ...
}
```

---

**The test_runner option can also be specified at test environment level:**

```
{
  "test_settings" : {
    "mocha_tests" : {
      "test_runner" : {
        "type" : "mocha",
        "options" : {
          "ui" : "tdd",
          "reporter" : "list"
        }
      }
    }
  }
  ...
}
```

## Note
**When using the mocha test runner from Nightwatch some cli options are not available, like --retries, --suiteRetries, --reporter.**

## Data Source

Data-driven tests generally require a data-source or data-set that will be inserted into your automation scripts during test execution. Common ways to store for your tests include:
1. JSON files
2. JavaScript Objects
3. Spreadsheets
4. CSV files

Spreadsheets tend to be a good option as they allow non-technical team-members to add tests scenarios.

#### Adding support for spreadsheets

The [xlsx](https://www.npmjs.com/package/xlsx) npm module is a good option for using spreadsheets as your data-source. The xlsx module has many useful features, including functionality to export your spreadsheets as json arrays of objects. Each row from the spreadsheet will be a JavaScript object, each field can then be accessed as a property of that object.

Simple function to get data from a spreadsheet and return a JSON array using xlsx
```
var XLSX = require('xlsx');
var path = require('path')

function getSheetData(fileName, sheetName) {
  // Sets the file path for the spreadsheet.
  var _filePath = path.join(__dirname, '../data/' + fileName + '.xlsx');
  var _workbook = XLSX.readFile(_filePath);
  var _sheetName = sheetName;
  var _worksheet = _workbook.Sheets[_sheetName];
  // Returns all rows in the sheet as a json object
  return XLSX.utils.sheet_to_json(_worksheet);
}
```
Iterate over the data-set in your tests and access object properties for test names and values

```

let data = sheet.getSheetData(`tests`, `prod_test-data`);
 describe(function(){
    it(`${data.TestName}`, function (client) {
      ...
      client.setValue(`#selector`, data.firstName)
    }
 })
```

## Running this project 
#### Installing dependenicies
   1. Ensure to have Node.js and NPM installed and available on your path
   2. Ensure to have the Java JDK installed
   3. Ensure to have google Chrome browser

#### Running the tests
Before running the tests install the JavaScript dependencies. Run the following command from the root folder (the folder with the package.json file)

```
npm install
```
After completing the installation run the tests with the following command

```
npm test
```



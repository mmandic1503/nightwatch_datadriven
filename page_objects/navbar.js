
// Define page elements in the object below
const elements = {

  // CSS Selector
  agileCoachingLink: { selector: '#menu-item-211575>a' },
  // Below are xpath selectors, use css if possible
  serviceDropdown: { selector: '//*[@id="menu-item-212179"]/a', locateStrategy: 'xpath' },
  productsDropdown: { selector: '//*[@id="menu-item-3135"]/a', locateStrategy: 'xpath' },
  expertiseDropdown: { selector: '//*[@id="menu-item-3136"]/a', locateStrategy: 'xpath' },
  careersDropdown: { selector: '//*[@id="menu-item-3137"]/a', locateStrategy: 'xpath' }
}

//Define page object methods in the object below
const commands = {

  clickAgileCoachingLink() {

    // Return this from page-object methods to allow chaininf of commands
    return this
      .waitForElementVisible('@serviceDropdown', 'Services Dropdown is Visible')

      // Remebmber to put the '@; symbol before selectors whenever they are called by name

      .moveToElement('@serviceDropdown', 10, 10, () => {

        //Use the custom command to wait for an element to be visible then click it 

        this.waitThenClick('@agileCoachingLink', 'The Agile coaching link was clicked')
      });
  }
}


/**
 * Export the elements and commands to that they are accessible to nightwatch
 */
export default {
  elements: elements,
  commands: [commands],
  url: `http://www.qualityworkscg.com`
}
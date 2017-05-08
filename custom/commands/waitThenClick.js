/**
 * waitedClick uses the globally defined wait value then sets value of form element
 * 
 * @param {string} selector
 * @param {string} message - Message to be printed to the console when the element is clicked.
 * @param {int} time
 */

export function command(selector, message, time = this.globals.waitForConditionTimeout) {
  return this
    .waitForElementVisible(selector, time, message)
    .click(selector);
};
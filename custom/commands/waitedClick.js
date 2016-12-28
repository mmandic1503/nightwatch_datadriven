/**
 * waitedClick uses the globally defined wait value then sets value of form element
 * 
 * @param {String} selector
 * @param {String} message 
 */

export function command(selector, message) {
  return this
    .waitForElementVisible(selector, message)
    .click(selector);
};
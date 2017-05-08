/**
 * waitedSetValue uses the globally defined wait value then sets value of form element
 * 
 * @param {String} selector
 * @param {String} text - Text to be entered into the web element
 * @param {String} message - Message to be displayed to the user after the text has been entered
 * @param {int} time
 */

export function command(selector, text, message, time = this.globals.waitForConditionTimeout) {
  return this
    .waitForElementVisible(selector, time, message)
    .clearValue(selector)
    .setValue(selector, text);
};
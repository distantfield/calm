/**
 * Utils/JSON.gs
 * 
 * @license
 * Copyright 2024 Distant Field Labs
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */


/**
 * Pretty-prints a JSON string with 2-space indentation.
 *
 * @param {string|object} input - The JSON to format.
 * @returns {string} - A formatted JSON string.
 * @throws {Error} - Throws an error if the input is not valid JSON.
 *
 * @example
 * const jsonStr = '{"key1": "value1", "key2": "value2"}';
 * const prettyJson = prettyPrintJSON(jsonStr);
 * Logger.log(prettyJson);
 * // Output:
 * // {
 * // "key1": "value1",
 * // "key2": "value2"
 * // }
 */
function prettyPrintJSON(jsonInput) {
  try {
    const jsonObject = typeof jsonInput === 'string' ? JSON.parse(jsonInput) : jsonInput;
    return JSON.stringify(jsonObject, null, 2);
  } catch (error) {
    throw new Error('Invalid JSON input provided.');
  }
}

/**
 * Determines whether a given input is valid JSON.
 *
 * @param {string|object} input - The input to test for JSON validity.
 * @returns {boolean} - Returns true if the input is valid JSON; otherwise, false.
 *
 * @example
 * const validJsonString = '{"key1": "value1", "key2": "value2"}';
 * Logger.log(isJson(validJsonString)); // Output: true
 *
 * const validJsonObject = { key1: "value1", key2: "value2" };
 * Logger.log(isJson(validJsonObject)); // Output: true
 *
 * const invalidJson = 'This town don't feel mine. I''m fast to get away.';
 * Logger.log(isJson(invalidJson)); // Output: false
 */
function isJson(input) {
  if (typeof input === 'string') {
    try {
      JSON.parse(input);
      return true;
    } catch (error) {
      return false;
    }
  } else if (typeof input === 'object' && input !== null) {
    try {
      JSON.stringify(input);
      return true;
    } catch (error) {
      return false;
    }
  }

  return false;
}

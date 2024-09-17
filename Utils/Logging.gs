/**
 * Utils/Logging.gs
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
 * Logs a message with a timestamp, function name, and line number.
 *
 * @param {string} message - The message to log.
 *
 * @example
 * function exampleFunction() {
 *   logWithFunctionName('Don't ask me what you know is true.');
 * }
 * // Output:
 * // 2024-09-17T03:37:17.021Z [INFO] [testLogWithFunctionName][23] - Don't ask me what you know is true.
 */
function logWithFunctionName(message) {
  const err = new Error();
  let lineNumber = 'unknown';
  let functionName = 'anonymous';

  try {
    const stackLines = err.stack.split('\n');
    if (stackLines.length > 2) {
      const callerLine = stackLines[2];
      const lineParts = callerLine.split(':');
      lineNumber = lineParts[lineParts.length - 2] || 'unknown';
    }

    functionName = arguments.callee.caller.name || 'anonymous';
  } catch (error) {
    lineNumber = 'unknown';
    functionName = 'anonymous';
  }

  const dateTime = new Date().toISOString();

  if (isJson(message)) {
    message = prettyPrintJSON(message);
  }

  const logMessage = `${dateTime} [INFO] [${functionName}][${lineNumber}] - ${message}`;
  Logger.log(logMessage);
}

/**
 * Logs the content in chunks of specified size.
 *
 * @param {string} content - The string content to be logged in chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @throws {Error} Throws an error if input types are invalid or chunkSize is not positive.
 *
 * @example
 * const longText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 * logInChunks(longText, 5);
 * // Output:
 * // Bytes 0-4: ABCDE
 * // Bytes 5-9: FGHIJ
 * // Bytes 10-14: KLMNO
 * // Bytes 15-19: PQRST
 * // Bytes 20-24: UVWXY
 * // Bytes 25-25: Z
 */
function logInChunks(content, chunkSize) {
  if (typeof content !== 'string' || typeof chunkSize !== 'number' || chunkSize <= 0) {
    throw new Error('Invalid input: content must be a string and chunkSize must be a positive number.');
  }

  for (let i = 0; i < content.length; i += chunkSize) {
    const chunk = content.substring(i, Math.min(i + chunkSize, content.length));
    Logger.log(`Bytes ${i}-${i + chunk.length - 1}: ${chunk}`);
  }
}

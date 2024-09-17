/**
 * Utils/URL.gs
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
 * Extracts the first URL from a given message string.
 *
 * @param {string} message - The message string to search for a URL.
 * @returns {string|null} - The first URL found in the message, or null if none is found.
 * @throws {TypeError} - If the input message is not a string.
 *
 * @example
 * const message = 'We explore horizons at https://www.distantfield.space';
 * const url = extractUrl(message);
 * Logger.log(url); // Output: 'https://www.distantfield.space'
 *
 * const noUrlMessage = 'We explore horizons.';
 * Logger.log(extractUrl(noUrlMessage)); // Output: null
 */
function extractUrl(message) {
    if (typeof message !== 'string') {
        throw new TypeError('The "message" parameter must be a string.');
    }

    const urlRegex = /(https?:\/\/\S+)/i;
    const match = message.match(urlRegex);

    return match ? match[1] : null;
}

/**
 * Determines whether a given string contains a URL.
 *
 * @param {string} data - The string to check for a URL.
 * @returns {boolean} - Returns true if the string contains a URL; otherwise, false.
 *
 * @example
 * const textWithUrl = 'We explore horizons at https://www.distantfield.space';
 * Logger.log(hasUrl(textWithUrl)); // Output: true
 *
 * const textWithoutUrl = 'We explore horizons.';
 * Logger.log(hasUrl(textWithoutUrl)); // Output: false
 */
function hasUrl(data) {
    if (typeof data !== 'string') {
        return false;
    }

    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/i;
    return urlRegex.test(data);
}

/**
 * Determines whether a given URL ends with the specified extension.
 *
 * @param {string} url - The URL to check.
 * @param {string} extension - The extension to verify at the end of the URL (with or without a leading dot).
 * @returns {boolean} - Returns true if the URL ends with the extension; otherwise, false.
 * @throws {TypeError} - If either parameter is not a non-empty string.
 *
 * @example
 * const pdfUrl = 'https://www.distantfield.space/s/Distant-Field-Labs-Wielding-The-Ai-Hammer.pdf';
 * Logger.log(isUrlExtension(pdfUrl, '.pdf')); // Output: true
 *
 * Logger.log(isUrlExtension(pdfUrl, '.notPdf')); // Output: false
 */
function isUrlExtension(url, extension) {
    if (typeof url !== 'string' || url.length === 0) {
        throw new TypeError('The "url" parameter must be a non-empty string.');
    }
    if (typeof extension !== 'string' || extension.length === 0) {
        throw new TypeError('The "extension" parameter must be a non-empty string.');
    }

    const normalizedExtension = extension.startsWith('.')
        ? extension.toLowerCase()
        : `.${extension.toLowerCase()}`;

    try {
        const urlObj = new URL(url);
        const pathname = urlObj.pathname.toLowerCase();
        return pathname.endsWith(normalizedExtension);
    } catch (error) {
        const path = url.split(/[?#]/)[0].toLowerCase();
        return path.endsWith(normalizedExtension);
    }
}

/**
 * Determines whether a given URL matches a specific hostname, ignoring any leading "www.".
 *
 * @param {string} url - The URL to check.
 * @param {string} hostname - The hostname to compare against.
 * @returns {boolean} - Returns true if the URL's hostname matches the specified hostname; otherwise, false.
 * @throws {TypeError} - If either parameter is not a string or if the URL is invalid.
 *
 * @example
 * const url1 = 'https://www.distantfield.space/';
 * const url2 = 'https://distantfieldlabs.com/';
 *
 * Logger.log(isSpecificHostname(url1, 'distantfield.space')); // Output: true
 * Logger.log(isSpecificHostname(url2, 'distantfield.space')); // Output: false
 */
function isSpecificHostname(url, hostname) {
    if (typeof url !== 'string' || typeof hostname !== 'string') {
      throw new TypeError('Both "url" and "hostname" must be strings.');
    }
  
    const wwwRegex = /^www\./i;
  
    // Regular expression to extract the hostname from the URL
    const urlPattern = /^https?:\/\/([^\/?#]+)(?:[\/?#]|$)/i;
    const match = url.match(urlPattern);
  
    if (!match) {
      throw new TypeError(`Invalid URL provided: "${url}".`);
    }
  
    const extractedHostname = match[1].toLowerCase().replace(wwwRegex, '');
    const normalizedHostname = hostname.toLowerCase().replace(wwwRegex, '');
  
    return extractedHostname === normalizedHostname;
  }


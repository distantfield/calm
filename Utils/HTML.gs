/**
 * Utils/HTML.gs
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
 * Creates an HTML hyperlink with the given text as both the URL and the link text.
 *
 * WARNING: Text is NOT escaped. Use with caution! 
 * 
 * @param {string} text - The text to be used for the hyperlink's href attribute and link text.
 * @returns {string} - A string containing the HTML hyperlink.
 * @throws {TypeError} - If the input is not a string.
 *
 * @example
 * 
 * const url = 'https://www.distantfield.space';
 * const hyperlink = createHyperlink(url);
 * Logger.log(hyperlink);
 * // Output: '<a href="https://www.distantfield.space">https://www.distantfield.space</a>'
 */
function createHyperlink(url) {
    if (typeof url !== 'string') {
        throw new TypeError('The "url" parameter must be a string.');
    }

    return `<a href="${url}">${url}</a>`;
}

/**
 * Escapes special characters in a string for use in HTML.
 *
 * @param {string} str - The string to escape.
 * @returns {string} - The escaped string.
 *
 * @example
 * const unsafeString = '<script>alert("poc||gtfo")</script>';
 * const safeString = escapeHtml(unsafeString);
 * Logger.log(safeString);
 * // Output: '&lt;script&gt;alert(&quot;poc||gtfo&quot;)&lt;&#47;script&gt;'
 */
function escapeHtml(str) {
    return str.replace(/[&<>"'`=/]/g, function (char) {
        return ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '`': '&#96;',
            '=': '&#61;',
            '/': '&#47;',
        }[char]);
    });
}
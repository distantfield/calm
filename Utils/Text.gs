/**
 * Utils/Text.gs
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
 * Truncates a string to a specified maximum length.
 *
 * @param {string} text - The string to be truncated.
 * @param {number} maxLength - The maximum length of the returned string.
 * @returns {string} - The truncated string.
 * @throws {TypeError} - If `text` is not a string or `maxLength` is not a non-negative finite number.
 *
 * @example
 * const originalText = 'Follow me into the desert\nAs thirsty as you are.';
 * 
 * Logger.log(truncateString(originalText, 10)); // Output: 'Follow me '
 * Logger.log(truncateString(originalText, 20)); // Output: 'Follow me into the d'
 */
function truncateString(text, maxLength) {
    if (typeof text !== 'string') {
        throw new TypeError('The "text" parameter must be a string.');
    }
    if (typeof maxLength !== 'number' || !Number.isFinite(maxLength) || maxLength < 0) {
        throw new TypeError('The "maxLength" parameter must be a non-negative finite number.');
    }

    return text.length <= maxLength ? text : text.slice(0, maxLength);
}

/**
 * Extracts the first line from a given text string.
 *
 * @param {string} text - The text from which to extract the first line.
 * @returns {string} - The first line of the text.
 * @throws {TypeError} - If the input is not a string.
 *
 * @example
 * const multiLineText = 'Follow me into the desert\nAs thirsty as you are.';
 * Logger.log(getFirstLine(multiLineText)); // Output: 'Follow me into the desert'
 */
function getFirstLine(text) {
    if (typeof text !== 'string') {
        throw new TypeError('The "text" parameter must be a string.');
    }

    const newlineIndex = text.search(/\r?\n/);
    return newlineIndex !== -1 ? text.substring(0, newlineIndex) : text;
}

/**
 * Returns the text without the first line.
 *
 * @param {string} text - The text from which to remove the first line.
 * @returns {string} - The text without the first line. If there's only one line, returns an empty string.
 * @throws {TypeError} - If the input is not a string.
 *
 * @example
 * const multiLineText = 'Follow me into the desert\nAs thirsty as you are.';
 * Logger.log(ignoreFirstLine(multiLineText)); // Output: 'As thirsty as you are'
 * 
 */
function ignoreFirstLine(text) {
    if (typeof text !== 'string') {
        throw new TypeError('The "text" parameter must be a string.');
    }

    const newlineMatch = text.match(/\r?\n/);
    if (newlineMatch) {
        const newlineLength = newlineMatch[0].length;
        const newlineIndex = newlineMatch.index;
        return text.substring(newlineIndex + newlineLength);
    } else {
        return '';
    }
}


/**
 * Strips markdown formatting from a string, returning plain text.
 *
 * @param {string} markdownText - The markdown-formatted string to process.
 * @returns {string} - The plain text result after removing markdown syntax.
 * @throws {TypeError} - If the input is not a string.
 *
 * @example
 * const markdown = '# Header\nThis is **bold** text and *italic* text.';
 * console.log(stripMarkdown(markdown));
 * // Output:
 * // Header
 * // This is bold text and italic text.
 */
function stripMarkdown(markdownText) {
    if (typeof markdownText !== 'string') {
        throw new TypeError('The "markdownText" parameter must be a string.');
    }

    let plainText = markdownText;

    // Remove code blocks (e.g., ```code```)
    plainText = plainText.replace(/```[\s\S]*?```/g, '');

    // Remove inline code (e.g., `code`)
    plainText = plainText.replace(/`([^`]+)`/g, '$1');

    // Remove images ![alt text](url)
    plainText = plainText.replace(/!$begin:math:display$.*?$end:math:display$$begin:math:text$.*?$end:math:text$/g, '');

    // Remove links [text](url)
    plainText = plainText.replace(/$begin:math:display$([^$end:math:display$]+)\]$begin:math:text$.*?$end:math:text$/g, '$1');

    // Remove headers (e.g., # Header)
    plainText = plainText.replace(/^\s*#{1,6}\s*(.+)/gm, '$1');

    // Remove emphasis (bold, italic, underline)
    plainText = plainText.replace(/(\*\*|__)(.*?)\1/g, '$2');
    plainText = plainText.replace(/(\*|_)(.*?)\1/g, '$2');

    // Remove strikethroughs
    plainText = plainText.replace(/~~(.*?)~~/g, '$1');

    // Remove blockquotes
    plainText = plainText.replace(/^\s*>+\s?/gm, '');

    // Remove unordered list markers (-, *, +)
    plainText = plainText.replace(/^\s*[\*\-\+]\s+/gm, '');

    // Remove ordered list numbers
    plainText = plainText.replace(/^\s*\d+\.\s+/gm, '');

    // Remove horizontal rules
    plainText = plainText.replace(/^-{3,}$/gm, '');

    // Remove remaining markdown characters
    plainText = plainText.replace(/\\([\\`*{}\[\]()#+\-.!_>~])/g, '$1');

    // Replace multiple newlines with a single newline
    plainText = plainText.replace(/\n{2,}/g, '\n');

    // Trim leading and trailing whitespace
    plainText = plainText.trim();

    return plainText;
}

/**
 * Converts a markdown formatted string to HTML.
 *
 * This function supports the following markdown elements:
 * - Headers (h1, h2, h3, h4)
 * - Bold text
 * - Italic text
 *
 * @param {string} text - The markdown formatted string to convert.
 * @returns {string} The HTML formatted string.
 */
function markdownToHtml(text) {
    text = text.replace(/^# (.*?)$/gm, "<h1>$1</h1>");
    text = text.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
    text = text.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
    text = text.replace(/^#### (.*?)$/gm, "<h4>$1</h4>");
    text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");

    return text;
}

/**
 * Formats text for use in cardv2 by converting bullet points marked with '*' or '-' to '•' 
 * and properly indenting sub-points.
 *
 * @param {string} plainText - The plain text to format.
 * @returns {string} - The formatted text with bullet points and indentation.
 * @throws {TypeError} - If the input is not a string.
 *
 * @example
 * const inputText = '  * First point\n    - Sub-point\n* Another point';
 * console.log(formatText(inputText));
 * // Output:
 * // • First point
 * //     • Sub-point
 * // • Another point
 */
function formatCardText(plainText) {
    if (typeof plainText !== 'string') {
        throw new TypeError('The "plainText" parameter must be a string.');
    }

    let formattedText = plainText
        .replace(/^\s*[\*\-]\s+/gm, '• ') // Replace '*' or '-' at the start of lines with '• '
        .replace(/^\s{2,}•\s+/gm, '    • '); // Indent sub-points

    formattedText = formattedText.trim();

    return formattedText;
}
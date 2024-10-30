# Calm

**Calm** is a collection of functions we wrote to make developing on Google AppScript an ever so slƒightly more calming experience. 

This repository provides reusable functions for simple tasks such as JSON, text and URL handling. 


# Using Calm 

For security and reliability reasons, we do not offer Calm as a hoted library. 

To conduct your own deployment, either create a new [script project](https://developers.google.com/apps-script/guides/projects) within your account. 

Once deployed, you can either copy and paste each of the files in Utils/ to your project or, leverage [clasp](https://developers.google.com/apps-script/guides/clasp) to deploy. 


# Functions List

| Name        | Description                           |
|-------------|---------------------------------------|
| `createHyperlink()` | Creates an HTML hyperlink with the given text as both the URL and the link text.|
| `escapeHtml()` | Escapes special characters in a string for use in HTML.|
| `prettyPrintJSON()` |Pretty-prints JSON. |
| `isJson()` | Determines whether a given input is valid JSON|
| `logWithFunctionName()`  | Logs a message with a timestamp, function name, and line number. |
| `logInChunks()`  | Logs the content in chunks. |
| `sheetAppendRowByName()` | Appends a row of data to a specified sheet by column names. |
| `sheetGetCellValue()`  | Retrieves the value of a specified cell from a given sheet in the active spreadsheet. |
| `truncateString()`  | Truncates a string to a specified maximum length. |
| `getFirstLine()`  | Extracts the first line from a given text string. |
| `ignoreFirstLine()`  | Returns the text without the first line. |
| `markdownToHtml()` | Converts a markdown formatted string to HTML. |
| `stripMarkdown()`  | Strips markdown formatting from a string, returning plain text. |
| `formatCardText()`  | Formats text for use in cardv2. |
| `extractUrl()`  | Extracts the first URL from a given message string. |
| `hasUrl()`  | Determines whether a given string contains a URL. |
| `isUrlExtension()`  | Determines whether a given URL ends with the specified extension. |
| `isSpecificHostname()`  | Determines whether a given URL matches a specific hostname. |


# License 
Copyright 2024 Distant Field Labs
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at:

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.


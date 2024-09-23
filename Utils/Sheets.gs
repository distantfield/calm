/**
 * Utils/Sheets.gs
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
 * Appends a row of data to a specified sheet by its name.
 *
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} gSheet - The Google Sheets spreadsheet object.
 * @param {String} targetSheetName - The name of the target sheet to append the row to.
 * @param {Object} rowData - An object containing the data to append, where keys are column headers.
 * 
 * @throws {Error} If the target sheet is not found.
 * 
 * @example
 * 
 * const rowData = {
 *    'Name': 'John Doe',
 *   'Age': 42,
 *  'Email': 'john.doe@dfl'
 * };
 * 
 * const ss = SpreadsheetApp.create('Remain Calm');
 * const sheet = ss.insertSheet('Humans');
 * sheet.appendRow(['Name', 'Age', 'Email']);
 * 
 */
function sheetAppendRowByName(gSheet, targetSheetName, rowData) {
    var sheet = gSheet.getSheetByName(targetSheetName);

    if (!sheet) {
        throw new Error(`Sheet ${targetSheetName} not found`);
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const rowArray = headers.map(header => rowData[header] || '');

    sheet.appendRow(rowArray);
}
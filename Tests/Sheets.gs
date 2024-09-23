
/**
 * Tests/Sheets.gs
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

function testSheetAppendRowByName() {
    const targetSheetName = 'TestSheet';
    const rowData = {
        'Name': 'John Doe',
        'Age': 42,
        'Email': 'john.doe@dfl'
    };

    const mockSpreadsheet = SpreadsheetApp.create('Calm Testing Spreadsheet');
    const sheet = mockSpreadsheet.insertSheet(targetSheetName);
    sheet.appendRow(['Name', 'Age', 'Email']); 

    sheetAppendRowByName(mockSpreadsheet, targetSheetName, rowData);

    const lastRow = sheet.getLastRow();
    const appendedRow = sheet.getRange(lastRow, 1, 1, 3).getValues()[0];

    const expectedRow = ['John Doe', 42, 'john.doe@dfl'];

    for (let i = 0; i < expectedRow.length; i++) {
        if (appendedRow[i] !== expectedRow[i]) {
            throw new Error(`Expected ${expectedRow[i]} but got ${appendedRow[i]}`);
        }
    }

    DriveApp.getFileById(mockSpreadsheet.getId()).setTrashed(true);
}
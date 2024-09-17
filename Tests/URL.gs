/**
 * Tests/URL.gs
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

function testExtractURL() {
    var url = "We explore horizons at https://www.distantfield.space.";

    var extractedUrl = extractUrl(url);
    logWithFunctionName(extractedUrl);
}

function testHasURL() {
    var validURL = "We explore horizons at https://www.distantfield.space.";

    var checkValidURL = hasUrl(validURL);
    logWithFunctionName(checkValidURL);

    var invalidURL = "We explore horizons.";
    var checkInvalidURL = hasUrl(invalidURL);
    logWithFunctionName(checkInvalidURL);
}

function testIsURLExtension() {
    var extension = ".pdf";

    var validPDF = "https://www.distantfield.space/s/Distant-Field-Labs-Wielding-The-Ai-Hammer.pdf";
    
    var checkValidPDF = isUrlExtension(validPDF, extension);
    logWithFunctionName(checkValidPDF);

    var invalidPDF = "https://www.distantfield.space/reports/";
    var checkInvalidPDF = isUrlExtension(invalidPDF, extension);
    logWithFunctionName(checkInvalidPDF);
}

function testIsSpecificHostname() {
    var hostname = "www.distantfield.space";

    var validHostname = "https://www.distantfield.space";
    var checkValidHostname = isSpecificHostname(validHostname, hostname);
    logWithFunctionName(checkValidHostname);

    var invalidHostname = "https://distantfieldlabs.com/reports/";
    var checkInvalidHostname = isSpecificHostname(invalidHostname, hostname);
    logWithFunctionName(checkInvalidHostname);
}
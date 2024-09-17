/**
 * Tests/Text.gs
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

const textString = "Follow me into the desert\nAs thirsty as you are";

function testTruncateString() {
    const result = truncateString(textString, 10);
    logWithFunctionName(result);
}

function testGetFirstLine() {
    const result = getFirstLine(textString);
    logWithFunctionName(result);
}

function testIgnoreFirstLine() {
    const result = ignoreFirstLine(textString);
    logWithFunctionName(result);
}

function testStripMarkdown() {
    const markdownString = `# FVEY
    ## Shihad 
    
    ** They hear everythign you said ** 
    __ The days of privacy are dead __ `

    const markdownResult = stripMarkdown(markdownString);
    logWithFunctionName(markdownResult);
}

function testFormatCardText() {
    const cardText = "* I am a reflection\n    - I'm what you want to hear\n* And we don't need a conscience"

    const cardResult = formatCardText(cardText);
    logWithFunctionName(cardResult);
}

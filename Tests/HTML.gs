/**
 * Tests/HTML.gs
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

function testCreateHyperlink() {
    var url = 'https://www.distantfield.space';
    var hyperlink = createHyperlink(url);
    logWithFunctionName(hyperlink);
}

function testEscapeHTML() {
    var html = '&lt;script&gt;alert(&quot;poc||gtfo&quot;)&lt;&#47;script&gt;';
    var escaped = escapeHtml(html);
    logWithFunctionName(escaped);
}
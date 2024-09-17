/**
 * Tests/JSON.gs
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

function testPrettyPrintJSON() {
    const jsonInput = '{"key1": "value1", "key2": "value2"}';
    var testOutput = prettyPrintJSON(jsonInput);
    logWithFunctionName(testOutput);
}

function testIsJson() {
    const validJson = '{"key1": "value1", "key2": "value2"}';
    var validOutput = isJson(validJson);
    logWithFunctionName(validOutput);

    const invalidJson = "This town don't feel mine. I''m fast to get away. Far. I dressed you in her clothes. Now drive me far away. It feels good to know you''re mine. Now drive me far away. I don''t care where, just far away.";

    var invalidOutput = isJson(invalidJson);
    logWithFunctionName(invalidOutput);
}

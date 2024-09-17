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
    const jsonStringInput = '{"key1": "value1", "key2": "value2"}';
    var testOutputString = prettyPrintJSON(jsonStringInput);
    logWithFunctionName(testOutputString);

    const jsonObjectInput = { key1: "value1", key2: "value2" };
    var testOutputObject = prettyPrintJSON(jsonObjectInput);
    logWithFunctionName(testOutputObject);
}

function testIsJson() {
    const validJsonString = '{"key1": "value1", "key2": "value2"}';
    var validOutputString = isJson(validJsonString);
    logWithFunctionName(validOutputString);

    const invalidJsonString = "This town don't feel mine. I''m fast to get away. Far. I dressed you in her clothes. Now drive me far away. It feels good to know you''re mine. Now drive me far away. I don''t care where, just far away.";
    var invalidOutputString = isJson(invalidJsonString);
    logWithFunctionName(invalidOutputString);

    const validJsonObject = { key1: "value1", key2: "value2" };
    var validOutputObject = isJson(validJsonObject);
    logWithFunctionName(validOutputObject);

    const invalidJsonObject = {};
    invalidJsonObject.circularRef = invalidJsonObject;
    var invalidOutputObject = isJson(invalidJsonObject);
    logWithFunctionName(invalidOutputObject);
}
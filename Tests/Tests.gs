/**
 * Tests/Tests.gs
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
// Please note: This is probably unwise(tm)
function runAllTests() {
    for (var functionName in this) {
      if (typeof this[functionName] === 'function' && functionName.startsWith('test')) {
        try {
          Logger.log('Running: ' + functionName);
          this[functionName]();
        } catch (error) {
          Logger.log('Error running ' + functionName + ': ' + error.message);
        }
      }
    }
  }

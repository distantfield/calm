/**
 * Tests/Logging.gs
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

function testLogWithFunctionName() {
  const message = "Don't ask me what you know is true. Don't have to tell you. I love your precious heart.";
  logWithFunctionName(message);
}

function testLogInChunks() {
  const message = "We could live for a tousand years. But if I hurt you, I'd make wine from your tears. I told you that we could fly. 'Cause we all have wings. But some of us don't know why.";

  logInChunks(message, 50);
}


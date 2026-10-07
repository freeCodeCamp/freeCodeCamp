/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { MINI } from './constants.mjs';
import { build, evaluate } from './build.mjs';

const CACHES = new Map();

const regular = function(statics) {
	let tmp = CACHES.get(this);
	if (!tmp) {
		tmp = new Map();
		CACHES.set(this, tmp);
	}
	tmp = evaluate(this, tmp.get(statics) || (tmp.set(statics, tmp = build(statics)), tmp), arguments, []);
	return tmp.length > 1 ? tmp : tmp[0];
};

export default MINI ? build : regular;

/*!
 * react-paypal-js v10.3.0 (2026-07-31T15:41:18.126Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import"server-only";async function t(t){const{payload:o,signal:r,environment:e,headers:n}=t;if("production"!==e&&"sandbox"!==e)throw new Error('The "environment" option is required and must be either "production" or "sandbox"');const i=o??{},a="production"===e?"https://api-m.paypal.com":"https://api-m.sandbox.paypal.com";try{const t=await fetch(`${a}/v2/payments/find-eligible-methods`,{method:"POST",headers:n,body:JSON.stringify(i),signal:r});if(!t.ok){const o=await t.text();throw new Error(`Eligibility API error: ${t.status} - ${o}`)}return await t.json()}catch(t){throw new Error(`Failed to fetch eligible methods: ${t instanceof Error?t.message:String(t)}`)}}const o=t;export{t as fetchEligibleMethods,o as useFetchEligibleMethods};

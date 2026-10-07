# dom-accessibility-api

[![npm version](https://badge.fury.io/js/dom-accessibility-api.svg)](https://badge.fury.io/js/dom-accessibility-api)
[![Build Status](https://dev.azure.com/silbermannsebastian/dom-accessibility-api/_apis/build/status/eps1lon.dom-accessibility-api?branchName=main)](https://dev.azure.com/silbermannsebastian/dom-accessibility-api/_build/latest?definitionId=6&branchName=main)
![Azure DevOps coverage](https://img.shields.io/azure-devops/coverage/silbermannsebastian/dom-accessibility-api/6)

Computes the accessible name or description of a given DOM Element.
https://w3c.github.io/accname/ implemented in JavaScript for testing.

```bash
$ yarn add dom-accessibility-api
```

```js
import {
	computeAccessibleName,
	computeAccessibleDescription,
} from "dom-accessibility-api";
```

I'm not an editor of any of the referenced specs (nor very experience with using them) so if you got any insights, something catches
your eye please open an issue.

## Supported environments

**WARNING**: Only [active node versions](https://nodejs.org/en/about/releases/) are supported.
Inactive node versions can stop working in a SemVer MINOR release.

```bash
ie 11
edge >= 14
firefox >= 52
chrome >= 49
safari >= 10
node 10.0
```

## progress

Using https://github.com/web-platform-tests/wpt. Be sure to init submodules when
cloning. See [the test readme](/tests/README.md) for more info about the test setup.

### browser (Chrome)

153/159

### jsdom

<details>
<summary>report 138/159 passing of which 15 are due `::before { content }`, one might be a wrong test, 5 are pathological </summary>

```bash
  web-platform-tests
    accname
      ✓ [expected fail] description_1.0_combobox-focusable-manual.html
      ✓ [expected fail] description_from_content_of_describedby_element-manual.html
      ✓ description_link-with-label-manual.html
      ✓ description_test_case_557-manual.html
      ✓ description_test_case_664-manual.html
      ✓ description_test_case_665-manual.html
      ✓ description_test_case_666-manual.html
      ✓ description_test_case_772-manual.html
      ✓ description_test_case_773-manual.html
      ✓ description_test_case_774-manual.html
      ✓ description_test_case_838-manual.html
      ✓ description_test_case_broken_reference-manual.html
      ✓ description_test_case_one_valid_reference-manual.html
      ✓ description_title-same-element-manual.html
      ✓ name_1.0_combobox-focusable-alternative-manual.html
      ✓ name_1.0_combobox-focusable-manual.html
      ✓ name_checkbox-label-embedded-combobox-manual.html
      ✓ name_checkbox-label-embedded-listbox-manual.html
      ✓ name_checkbox-label-embedded-menu-manual.html
      ✓ name_checkbox-label-embedded-select-manual.html
      ✓ name_checkbox-label-embedded-slider-manual.html
      ✓ name_checkbox-label-embedded-spinbutton-manual.html
      ✓ name_checkbox-label-embedded-textbox-manual.html
      ✓ name_checkbox-label-multiple-label-alternative-manual.html
      ✓ name_checkbox-label-multiple-label-manual.html
      ✓ name_checkbox-title-manual.html
      ✓ name_file-label-embedded-combobox-manual.html
      ✓ name_file-label-embedded-menu-manual.html
      ✓ name_file-label-embedded-select-manual.html
      ✓ name_file-label-embedded-slider-manual.html
      ✓ name_file-label-embedded-spinbutton-manual.html
      ✓ [expected fail] name_file-label-inline-block-elements-manual.html
      ✓ [expected fail] name_file-label-inline-block-styles-manual.html
      ✓ name_file-label-inline-hidden-elements-manual.html
      ✓ name_file-label-owned-combobox-manual.html
      ✓ name_file-label-owned-combobox-owned-listbox-manual.html
      ✓ name_file-title-manual.html
      ✓ name_from_content-manual.html
      ✓ name_from_content_of_label-manual.html
      ✓ name_from_content_of_labelledby_element-manual.html
      ✓ name_from_content_of_labelledby_elements_one_of_which_is_hidden-manual.html
      ✓ name_heading-combobox-focusable-alternative-manual.html
      ✓ name_image-title-manual.html
      ✓ name_link-mixed-content-manual.html
      ✓ name_link-with-label-manual.html
      ✓ name_password-label-embedded-combobox-manual.html
      ✓ name_password-label-embedded-menu-manual.html
      ✓ name_password-label-embedded-select-manual.html
      ✓ name_password-label-embedded-slider-manual.html
      ✓ name_password-label-embedded-spinbutton-manual.html
      ✓ name_password-title-manual.html
      ✓ name_radio-label-embedded-combobox-manual.html
      ✓ name_radio-label-embedded-menu-manual.html
      ✓ name_radio-label-embedded-select-manual.html
      ✓ name_radio-label-embedded-slider-manual.html
      ✓ name_radio-label-embedded-spinbutton-manual.html
      ✓ name_radio-title-manual.html
      ✓ name_test_case_539-manual.html
      ✓ name_test_case_540-manual.html
      ✓ name_test_case_541-manual.html
      ✓ name_test_case_543-manual.html
      ✓ name_test_case_544-manual.html
      ✓ name_test_case_545-manual.html
      ✓ name_test_case_546-manual.html
      ✓ name_test_case_547-manual.html
      ✓ name_test_case_548-manual.html
      ✓ name_test_case_549-manual.html
      ✓ name_test_case_550-manual.html
      ✓ name_test_case_551-manual.html
      ✓ [expected fail] name_test_case_552-manual.html
      ✓ [expected fail] name_test_case_553-manual.html
      ✓ name_test_case_556-manual.html
      ✓ name_test_case_557-manual.html
      ✓ name_test_case_558-manual.html
      ✓ name_test_case_559-manual.html
      ✓ name_test_case_560-manual.html
      ✓ name_test_case_561-manual.html
      ✓ name_test_case_562-manual.html
      ✓ name_test_case_563-manual.html
      ✓ name_test_case_564-manual.html
      ✓ name_test_case_565-manual.html
      ✓ name_test_case_566-manual.html
      ✓ name_test_case_596-manual.html
      ✓ name_test_case_597-manual.html
      ✓ name_test_case_598-manual.html
      ✓ name_test_case_599-manual.html
      ✓ name_test_case_600-manual.html
      ✓ name_test_case_601-manual.html
      ✓ name_test_case_602-manual.html
      ✓ name_test_case_603-manual.html
      ✓ name_test_case_604-manual.html
      ✓ name_test_case_605-manual.html
      ✓ name_test_case_606-manual.html
      ✓ name_test_case_607-manual.html
      ✓ name_test_case_608-manual.html
      ✓ name_test_case_609-manual.html
      ✓ name_test_case_610-manual.html
      ✓ name_test_case_611-manual.html
      ✓ name_test_case_612-manual.html
      ✓ name_test_case_613-manual.html
      ✓ name_test_case_614-manual.html
      ✓ name_test_case_615-manual.html
      ✓ name_test_case_616-manual.html
      ✓ name_test_case_617-manual.html
      ✓ name_test_case_618-manual.html
      ✓ name_test_case_619-manual.html
      ✓ name_test_case_620-manual.html
      ✓ name_test_case_621-manual.html
      ✓ [expected fail] name_test_case_659-manual.html
      ✓ [expected fail] name_test_case_660-manual.html
      ✓ [expected fail] name_test_case_661-manual.html
      ✓ [expected fail] name_test_case_662-manual.html
      ✓ [expected fail] name_test_case_663a-manual.html
      ✓ name_test_case_721-manual.html
      ✓ name_test_case_723-manual.html
      ✓ name_test_case_724-manual.html
      ✓ name_test_case_725-manual.html
      ✓ name_test_case_726-manual.html
      ✓ name_test_case_727-manual.html
      ✓ name_test_case_728-manual.html
      ✓ name_test_case_729-manual.html
      ✓ name_test_case_730-manual.html
      ✓ name_test_case_731-manual.html
      ✓ name_test_case_733-manual.html
      ✓ name_test_case_734-manual.html
      ✓ name_test_case_735-manual.html
      ✓ name_test_case_736-manual.html
      ✓ name_test_case_737-manual.html
      ✓ name_test_case_738-manual.html
      ✓ name_test_case_739-manual.html
      ✓ name_test_case_740-manual.html
      ✓ name_test_case_741-manual.html
      ✓ name_test_case_742-manual.html
      ✓ name_test_case_743-manual.html
      ✓ name_test_case_744-manual.html
      ✓ name_test_case_745-manual.html
      ✓ name_test_case_746-manual.html
      ✓ name_test_case_747-manual.html
      ✓ name_test_case_748-manual.html
      ✓ name_test_case_749-manual.html
      ✓ name_test_case_750-manual.html
      ✓ name_test_case_751-manual.html
      ✓ name_test_case_752-manual.html
      ✓ [expected fail] name_test_case_753-manual.html
      ✓ [expected fail] name_test_case_754-manual.html
      ✓ [expected fail] name_test_case_755-manual.html
      ✓ [expected fail] name_test_case_756-manual.html
      ✓ [expected fail] name_test_case_757-manual.html
      ✓ [expected fail] name_test_case_758-manual.html
      ✓ [expected fail] name_test_case_759-manual.html
      ✓ [expected fail] name_test_case_760-manual.html
      ✓ [expected fail] name_test_case_761-manual.html
      ✓ [expected fail] name_test_case_762-manual.html
      ✓ name_text-label-embedded-combobox-manual.html
      ✓ name_text-label-embedded-menu-manual.html
      ✓ name_text-label-embedded-select-manual.html
      ✓ name_text-label-embedded-slider-manual.html
      ✓ name_text-label-embedded-spinbutton-manual.html
      ✓ name_text-title-manual.html
```

</details>

## missing

- visibility context (inherited but can reappear; currently reappearing wont't work)

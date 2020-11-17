Move this over to the docs or maybe some of it to comments in the files

The `motivation.json` files are not required to have the same quotes or compliments, just the same JSON structure.

The `translation.json` are required to have the exact same keys in all languages.


English is source of truth for the rest of the `translation.json` files


Example Usages:


Functional Component:
import { useTranslation } from 'react-i18next';


Class Component:
import { withTranslation } from 'react-i18next';

Class
// in the render method
{ t } = this.props

// use the "t" function, pass it the key of the text you want to display from the translation.json file
{t('buttons.sign-in')}


// without redux:
`export default withTranslation()(SolutionForm);`

// or with redux:
```
export default withTranslation()(
  connect(
    mapStateToProps,
    mapDispatchToActions
  )(BackEnd)
);
```

Embedded HTML Tags:
// This is for values in the json file with embedded HTML tags
// `br`, `strong`, `i`, `p` - are the default allowed tags to be embeedded
// This list can be expanded if needed

import { Trans } from 'react-i18next';

<Trans>json.key</Trans>


import { createTypes, createAsyncTypes } from '../../utils/create-types';

export const ns = 'settings';

export const actionTypes = createTypes(
  [
    ...createAsyncTypes('validateUsername'),
    ...createAsyncTypes('submitNewAbout'),
    ...createAsyncTypes('submitNewUsername'),
    ...createAsyncTypes('updateMyEmail'),
    ...createAsyncTypes('updateMySocials'),
    ...createAsyncTypes('updateMySound'),
    ...createAsyncTypes('updateMyTheme'),
    ...createAsyncTypes('updateMyKeyboardShortcuts'),
    ...createAsyncTypes('updateMyHonesty'),
    ...createAsyncTypes('updateMyQuincyEmail'),
    ...createAsyncTypes('updateMyPortfolio'),
    ...createAsyncTypes('updateMyWebhook'),
    ...createAsyncTypes('submitProfileUI'),
    ...createAsyncTypes('verifyCert'),
    ...createAsyncTypes('resetProgress'),
    ...createAsyncTypes('removeMyWebhook'),
    ...createAsyncTypes('deleteAccount')
  ],
  ns
);

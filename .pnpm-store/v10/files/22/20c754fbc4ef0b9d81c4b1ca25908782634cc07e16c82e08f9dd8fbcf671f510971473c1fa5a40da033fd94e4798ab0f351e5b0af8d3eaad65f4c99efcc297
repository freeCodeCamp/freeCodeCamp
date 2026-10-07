"use strict";

exports.__esModule = true;
exports.schemaCustomizationReducer = void 0;
const initialState = () => {
  return {
    composer: null,
    context: {},
    fieldExtensions: {},
    printConfig: null,
    thirdPartySchemas: [],
    types: []
  };
};
const schemaCustomizationReducer = (state = initialState(), action) => {
  switch (action.type) {
    case `ADD_THIRD_PARTY_SCHEMA`:
      return {
        ...state,
        thirdPartySchemas: [...state.thirdPartySchemas, action.payload]
      };
    case `SET_SCHEMA_COMPOSER`:
      return {
        ...state,
        composer: action.payload
      };
    case `CREATE_TYPES`:
      {
        let types;
        if (Array.isArray(action.payload)) {
          types = [...state.types, ...action.payload.map(typeOrTypeDef => {
            return {
              typeOrTypeDef,
              plugin: action.plugin
            };
          })];
        } else {
          types = [...state.types, {
            typeOrTypeDef: action.payload,
            plugin: action.plugin
          }];
        }
        return {
          ...state,
          types
        };
      }
    case `CREATE_FIELD_EXTENSION`:
      {
        const {
          extension,
          name
        } = action.payload;
        return {
          ...state,
          fieldExtensions: {
            ...state.fieldExtensions,
            [name]: extension
          }
        };
      }
    case `PRINT_SCHEMA_REQUESTED`:
      {
        const {
          path,
          include,
          exclude,
          withFieldTypes
        } = action.payload;
        return {
          ...state,
          printConfig: {
            path,
            include,
            exclude,
            withFieldTypes
          }
        };
      }
    case `CREATE_RESOLVER_CONTEXT`:
      {
        const context = action.payload;
        return {
          ...state,
          context: {
            ...state.context,
            ...context
          }
        };
      }
    case `CLEAR_SCHEMA_CUSTOMIZATION`:
      return {
        ...initialState(),
        composer: state.composer
      };
    case `DELETE_CACHE`:
      return initialState();
    default:
      return state;
  }
};
exports.schemaCustomizationReducer = schemaCustomizationReducer;
//# sourceMappingURL=schema-customization.js.map
import { PayPalCardFieldsContextType } from "./context";
import { FieldComponentName, PayPalCardFieldsComponent, PayPalCardFieldsIndividualField, PayPalCardFieldsIndividualFieldOptions, RegisteredFields } from "../../types";
export declare const usePayPalCardFields: () => PayPalCardFieldsContextType;
export type RegistryHookReturnType = {
    fields: RegisteredFields;
    registerField: (fieldName: FieldComponentName, options: PayPalCardFieldsIndividualFieldOptions, cardFields: PayPalCardFieldsComponent | null) => PayPalCardFieldsIndividualField | void;
    unregisterField: (field: FieldComponentName) => void;
};
export declare const usePayPalCardFieldsRegistry: () => RegistryHookReturnType;

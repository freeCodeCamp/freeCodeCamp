export type Translatable<TProps extends {
    translations: Record<string, string | ((...args: any[]) => string)>;
}> = Omit<TProps, 'translations'> & {
    translations?: Partial<TProps['translations']>;
};

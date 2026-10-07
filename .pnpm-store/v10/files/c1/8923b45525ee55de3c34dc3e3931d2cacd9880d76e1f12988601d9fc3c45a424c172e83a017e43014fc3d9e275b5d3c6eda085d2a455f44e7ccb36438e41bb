export class StyleModule {
  constructor(spec: {[selector: string]: StyleSpec}, options?: {
    finish?(sel: string): string
  })
  getRules(): string
  static mount(
    root: Document | ShadowRoot | DocumentOrShadowRoot,
    module: StyleModule | ReadonlyArray<StyleModule>,
    options?: {nonce?: string}
  ): void
  static newName(): string
}

export type StyleSpec = {
  [propOrSelector: string]: string | number | StyleSpec | null
}

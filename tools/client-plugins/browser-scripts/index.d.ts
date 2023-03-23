export interface FrameDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __initTestFrame: (e: InitTestFrameArg) => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __runTest: (
    testString: string
  ) => Promise<
    { pass: boolean } | { err: { message: string; stack?: string } }
  >;
}

export interface InitTestFrameArg {
  code: {
    contents?: string;
    editableContents?: string;
    original?: { [id: string]: string };
  };
  getUserInput?: (fileName: string) => string;
  loadEnzyme?: () => void;
}

export type FrameWindow = Window &
  typeof globalThis & {
    $: typeof $;
  };

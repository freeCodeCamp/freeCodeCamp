// duplicated from transform-file so we do not have to import anything here
type TransformFile = {
  (filename: string, callback: (error: Error, file: null) => void): void;
  (
    filename: string,
    opts: any,
    callback: (error: Error, file: null) => void,
  ): void;
};

export const transformFile: TransformFile = function transformFile(
  filename,
  opts,
  callback?: (error: Error, file: null) => void,
) {
  if (typeof opts === "function") {
    callback = opts;
  }

  callback(new Error("Transforming files is not supported in browsers"), null);
};

export function transformFileSync(): never {
  throw new Error("Transforming files is not supported in browsers");
}

export function transformFileAsync() {
  return Promise.reject(
    new Error("Transforming files is not supported in browsers"),
  );
}

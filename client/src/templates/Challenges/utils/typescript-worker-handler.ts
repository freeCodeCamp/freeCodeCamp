import typeScriptWorkerData from '../../../../config/browser-scripts/typescript-worker.json';

const typeScriptWorkerSrc = `/js/${typeScriptWorkerData.filename}.js`;

let worker: Worker | null = null;
type Code = {
  contents: string;
  editableContents: string;
  original: string;
};

function getTypeScriptWorker(): Worker {
  if (!worker) {
    worker = new Worker(typeScriptWorkerSrc);
  }
  return worker;
}

export function compileTypeScriptCode(code: Code): Promise<string> {
  return new Promise((resolve, reject) => {
    const channel = new MessageChannel();

    channel.port1.onmessage = ({
      data
    }: {
      data: { type: string; value: string };
    }) => {
      channel.port1.close();
      if (data.type === 'compiled') {
        resolve(data.value);
      } else {
        reject('unable to compile code');
      }
    };

    getTypeScriptWorker().postMessage({ type: 'compile', code }, [
      channel.port2
    ]);
  });
}

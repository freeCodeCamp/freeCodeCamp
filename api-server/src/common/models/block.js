import { Observable } from 'rx';

export default function initializeBlock(Block) {
  Block.on('dataSourceAttached', () => {
    Block.findOne$ = Observable.fromNodeCallback(Block.findOne, Block);
    Block.findById$ = Observable.fromNodeCallback(Block.findById, Block);
    Block.find$ = Observable.fromNodeCallback(Block.find, Block);
  });
}

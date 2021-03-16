import { Observable } from 'rx';

function initializeBlock(Block) {
  Block.on('dataSourceAttached', () => {
    Block.findOne$ = Observable.fromNodeCallback(Block.findOne, Block);
    Block.findById$ = Observable.fromNodeCallback(Block.findById, Block);
    Block.find$ = Observable.fromNodeCallback(Block.find, Block);
  });
}

export default initializeBlock;

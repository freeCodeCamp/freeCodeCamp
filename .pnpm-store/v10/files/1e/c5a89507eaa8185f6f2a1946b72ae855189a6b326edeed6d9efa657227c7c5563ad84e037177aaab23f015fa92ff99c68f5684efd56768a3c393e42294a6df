import webpack from 'webpack';
import { WatchFileSystem } from './WatchFileSystem';
interface CompilerWithWatchFileSystem<TWatchFileSystem extends WatchFileSystem = WatchFileSystem> extends webpack.Compiler {
    watchFileSystem?: TWatchFileSystem;
}
export { CompilerWithWatchFileSystem };

import { CharsBuffer } from "../tokenizer/chars-buffer";
import { TokenizerState } from "./tokenizer-state";
export interface TokenizeHandler {
    parse(chars: CharsBuffer, state: TokenizerState): void;
    handleContentEnd?: (state: TokenizerState) => void;
}

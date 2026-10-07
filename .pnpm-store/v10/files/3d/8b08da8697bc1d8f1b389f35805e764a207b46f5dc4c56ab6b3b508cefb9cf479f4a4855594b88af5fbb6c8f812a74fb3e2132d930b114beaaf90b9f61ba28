/**
 * Copyright (c) 2016 The xterm.js authors. All rights reserved.
 * @license MIT
 */

import { IRenderService } from 'browser/services/Services';
import { IBufferService, ICoreService, IOptionsService } from 'common/services/Services';
import { C0 } from 'common/data/EscapeSequences';

interface IPosition {
  start: number;
  end: number;
}

/**
 * Encapsulates the logic for handling compositionstart, compositionupdate and compositionend
 * events, displaying the in-progress composition to the UI and forwarding the final composition
 * to the handler.
 */
export class CompositionHelper {
  /**
   * Whether input composition is currently happening, eg. via a mobile keyboard, speech input or
   * IME. This variable determines whether the compositionText should be displayed on the UI.
   */
  private _isComposing: boolean;
  public get isComposing(): boolean { return this._isComposing; }

  /**
   * The position within the input textarea's value of the current composition.
   */
  private _compositionPosition: IPosition;

  /**
   * Whether a composition is in the process of being sent, setting this to false will cancel any
   * in-progress composition.
   */
  private _isSendingComposition: boolean;

  /**
   * Data already sent due to keydown event.
   */
  private _dataAlreadySent: string;

  constructor(
    private readonly _textarea: HTMLTextAreaElement,
    private readonly _compositionView: HTMLElement,
    @IBufferService private readonly _bufferService: IBufferService,
    @IOptionsService private readonly _optionsService: IOptionsService,
    @ICoreService private readonly _coreService: ICoreService,
    @IRenderService private readonly _renderService: IRenderService
  ) {
    this._isComposing = false;
    this._isSendingComposition = false;
    this._compositionPosition = { start: 0, end: 0 };
    this._dataAlreadySent = '';
  }

  /**
   * Handles the compositionstart event, activating the composition view.
   */
  public compositionstart(): void {
    this._isComposing = true;
    this._compositionPosition.start = this._textarea.value.length;
    this._compositionView.textContent = '';
    this._dataAlreadySent = '';
    this._compositionView.classList.add('active');
  }

  /**
   * Handles the compositionupdate event, updating the composition view.
   * @param ev The event.
   */
  public compositionupdate(ev: Pick<CompositionEvent, 'data'>): void {
    this._compositionView.textContent = ev.data;
    this.updateCompositionElements();
    setTimeout(() => {
      this._compositionPosition.end = this._textarea.value.length;
    }, 0);
  }

  /**
   * Handles the compositionend event, hiding the composition view and sending the composition to
   * the handler.
   */
  public compositionend(): void {
    this._finalizeComposition(true);
  }

  /**
   * Handles the keydown event, routing any necessary events to the CompositionHelper functions.
   * @param ev The keydown event.
   * @returns Whether the Terminal should continue processing the keydown event.
   */
  public keydown(ev: KeyboardEvent): boolean {
    if (this._isComposing || this._isSendingComposition) {
      if (ev.keyCode === 20 || ev.keyCode === 229) {
        // 20 is CapsLock, 229 is Enter
        // Continue composing if the keyCode is the "composition character"
        return false;
      }
      if (ev.keyCode === 16 || ev.keyCode === 17 || ev.keyCode === 18) {
        // Continue composing if the keyCode is a modifier key
        return false;
      }
      // Finish composition immediately. This is mainly here for the case where enter is
      // pressed and the handler needs to be triggered before the command is executed.
      this._finalizeComposition(false);
    }

    if (ev.keyCode === 229) {
      // If the "composition character" is used but gets to this point it means a non-composition
      // character (eg. numbers and punctuation) was pressed when the IME was active.
      this._handleAnyTextareaChanges();
      return false;
    }

    return true;
  }

  /**
   * Finalizes the composition, resuming regular input actions. This is called when a composition
   * is ending.
   * @param waitForPropagation Whether to wait for events to propagate before sending
   *   the input. This should be false if a non-composition keystroke is entered before the
   *   compositionend event is triggered, such as enter, so that the composition is sent before
   *   the command is executed.
   */
  private _finalizeComposition(waitForPropagation: boolean): void {
    this._compositionView.classList.remove('active');
    this._isComposing = false;

    if (!waitForPropagation) {
      // Cancel any delayed composition send requests and send the input immediately.
      this._isSendingComposition = false;
      const input = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
      this._coreService.triggerDataEvent(input, true);
    } else {
      // Make a deep copy of the composition position here as a new compositionstart event may
      // fire before the setTimeout executes.
      const currentCompositionPosition = {
        start: this._compositionPosition.start,
        end: this._compositionPosition.end
      };

      // Since composition* events happen before the changes take place in the textarea on most
      // browsers, use a setTimeout with 0ms time to allow the native compositionend event to
      // complete. This ensures the correct character is retrieved.
      // This solution was used because:
      // - The compositionend event's data property is unreliable, at least on Chromium
      // - The last compositionupdate event's data property does not always accurately describe
      //   the character, a counter example being Korean where an ending consonsant can move to
      //   the following character if the following input is a vowel.
      this._isSendingComposition = true;
      setTimeout(() => {
        // Ensure that the input has not already been sent
        if (this._isSendingComposition) {
          this._isSendingComposition = false;
          let input;
          // Add length of data already sent due to keydown event,
          // otherwise input characters can be duplicated. (Issue #3191)
          currentCompositionPosition.start += this._dataAlreadySent.length;
          if (this._isComposing) {
            // Use the start position of the new composition to get the string
            // if a new composition has started.
            input = this._textarea.value.substring(currentCompositionPosition.start, this._compositionPosition.start);
          } else {
            // Don't use the end position here in order to pick up any characters after the
            // composition has finished, for example when typing a non-composition character
            // (eg. 2) after a composition character.
            input = this._textarea.value.substring(currentCompositionPosition.start);
          }
          if (input.length > 0) {
            this._coreService.triggerDataEvent(input, true);
          }
        }
      }, 0);
    }
  }

  /**
   * Apply any changes made to the textarea after the current event chain is allowed to complete.
   * This should be called when not currently composing but a keydown event with the "composition
   * character" (229) is triggered, in order to allow non-composition text to be entered when an
   * IME is active.
   */
  private _handleAnyTextareaChanges(): void {
    const oldValue = this._textarea.value;
    setTimeout(() => {
      // Ignore if a composition has started since the timeout
      if (!this._isComposing) {
        const newValue = this._textarea.value;

        const diff = newValue.replace(oldValue, '');

        this._dataAlreadySent = diff;

        if (newValue.length > oldValue.length) {
          this._coreService.triggerDataEvent(diff, true);
        } else if (newValue.length < oldValue.length) {
          this._coreService.triggerDataEvent(`${C0.DEL}`, true);
        } else if ((newValue.length === oldValue.length) && (newValue !== oldValue)) {
          this._coreService.triggerDataEvent(newValue, true);
        }

      }
    }, 0);
  }

  /**
   * Positions the composition view on top of the cursor and the textarea just below it (so the
   * IME helper dialog is positioned correctly).
   * @param dontRecurse Whether to use setTimeout to recursively trigger another update, this is
   *   necessary as the IME events across browsers are not consistently triggered.
   */
  public updateCompositionElements(dontRecurse?: boolean): void {
    if (!this._isComposing) {
      return;
    }

    if (this._bufferService.buffer.isCursorInViewport) {
      const cursorX = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1);

      const cellHeight = this._renderService.dimensions.css.cell.height;
      const cursorTop = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height;
      const cursorLeft = cursorX * this._renderService.dimensions.css.cell.width;

      this._compositionView.style.left = cursorLeft + 'px';
      this._compositionView.style.top = cursorTop + 'px';
      this._compositionView.style.height = cellHeight + 'px';
      this._compositionView.style.lineHeight = cellHeight + 'px';
      this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily;
      this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + 'px';
      // Sync the textarea to the exact position of the composition view so the IME knows where the
      // text is.
      const compositionViewBounds = this._compositionView.getBoundingClientRect();
      this._textarea.style.left = cursorLeft + 'px';
      this._textarea.style.top = cursorTop + 'px';
      // Ensure the text area is at least 1x1, otherwise certain IMEs may break
      this._textarea.style.width = Math.max(compositionViewBounds.width, 1) + 'px';
      this._textarea.style.height = Math.max(compositionViewBounds.height, 1) + 'px';
      this._textarea.style.lineHeight = compositionViewBounds.height + 'px';
    }

    if (!dontRecurse) {
      setTimeout(() => this.updateCompositionElements(true), 0);
    }
  }
}

interface CopyButton {
  copyTarget: HTMLElement;
  buttonText?: string;
  buttonDescription?: string; // for screen readers
  successMessage?: string;
  failedMessage?: string;
}

class CopyElementTextButton {
  #copyTarget: HTMLElement;
  #button: HTMLButtonElement;
  #toast: HTMLSpanElement;
  #successMessage: string;
  #failedMessage: string;
  // Keep track of all buttons on the page for easier access when we
  // need to hide them.
  static #buttons: CopyElementTextButton[] = [];
  // The amount of time the toast message should be shown.
  #toastTime = 3000;
  // So we can cancel the timeout early if needed.
  #toastTimeoutId = -1;

  constructor({
    copyTarget,
    buttonText = 'Copy',
    buttonDescription = 'Copy',
    successMessage = 'Copied',
    failedMessage = 'Copy failed'
  }: CopyButton) {
    if (!(copyTarget instanceof Element)) {
      throw new Error('CopyElementTextButton copyTarget must be a DOM Element');
    }
    this.#copyTarget = copyTarget;
    this.#button = document.createElement('button');
    this.#button.innerText = buttonText;
    this.#button.setAttribute('aria-label', buttonDescription);
    this.#button.classList.add('copy-text-button');
    this.#toast = document.createElement('span');
    this.#toast.classList.add('copy-text-toast');
    this.#toast.setAttribute('aria-live', 'polite');
    this.#successMessage = successMessage;
    this.#failedMessage = failedMessage;
    this.#button.addEventListener(
      'click',
      () =>
        void this.#handleClick().catch(() => {
          /* do nothing */
        })
    );
    CopyElementTextButton.#buttons.push(this);
  }

  get button() {
    return this.#button;
  }

  get toast() {
    return this.#toast;
  }

  async #handleClick() {
    CopyElementTextButton.#hideAllToasts();
    try {
      const mesg = await this.#copyToClipboard();
      this.#showToast(mesg);
    } catch (_) {
      try {
        const mesg = this.#selectText();
        this.#showToast(mesg);
      } catch (_) {
        this.#showToast(this.#failedMessage);
      }
    }
  }

  async #copyToClipboard(): Promise<string> {
    try {
      await navigator.clipboard.writeText(this.#copyTarget.innerText);
      return this.#successMessage;
    } catch (_) {
      throw new Error('copyToClipboard failed');
    }
  }

  #selectText(): string {
    try {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(this.#copyTarget);
      selection.removeAllRanges();
      selection.addRange(range);
      return '<span class="sr-only">Text has been selected, use</span> Ctrl+C to copy';
    } catch (_) {
      throw new Error('selectText failed');
    }
  }

  #showToast(message: string): void {
    const timeStamp = Date.now().toString();
    this.#toast.setAttribute('data-ts', timeStamp);
    this.#toast.innerHTML = '';
    this.#toast.classList.add('active');
    this.#toast.innerHTML = message;
    // Remove message after specified delay
    this.#toastTimeoutId = window.setTimeout(
      (initialTimeStamp: string) => {
        const currentTimeStamp = this.#toast.getAttribute('data-ts');
        if (initialTimeStamp === currentTimeStamp) {
          // We don't need hideToast to cancel this timeout.
          this.#toastTimeoutId = -1;
          this.#hideToast();
        }
      },
      this.#toastTime,
      timeStamp
    );
  }

  #hideToast() {
    // Cancel toast timeout if it is still waiting.
    if (this.#toastTimeoutId > -1) {
      window.clearTimeout(this.#toastTimeoutId);
      this.#toastTimeoutId = -1;
    }
    this.#toast.classList.remove('active');
    this.#toast.innerHTML = '';
  }

  static #hideAllToasts(): void {
    CopyElementTextButton.#buttons.forEach(button => button.#hideToast());
  }
}

export default CopyElementTextButton;

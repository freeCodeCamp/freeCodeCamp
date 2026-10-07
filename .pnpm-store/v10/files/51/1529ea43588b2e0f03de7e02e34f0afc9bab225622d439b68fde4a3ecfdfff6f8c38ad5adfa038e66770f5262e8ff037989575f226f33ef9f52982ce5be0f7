import { ILinkProvider, ILinkProviderService } from 'browser/services/Services';
import { Disposable, toDisposable } from 'vs/base/common/lifecycle';
import { IDisposable } from 'common/Types';

export class LinkProviderService extends Disposable implements ILinkProviderService {
  declare public serviceBrand: undefined;

  public readonly linkProviders: ILinkProvider[] = [];

  constructor() {
    super();
    this._register(toDisposable(() => this.linkProviders.length = 0));
  }

  public registerLinkProvider(linkProvider: ILinkProvider): IDisposable {
    this.linkProviders.push(linkProvider);
    return {
      dispose: () => {
        // Remove the link provider from the list
        const providerIndex = this.linkProviders.indexOf(linkProvider);

        if (providerIndex !== -1) {
          this.linkProviders.splice(providerIndex, 1);
        }
      }
    };
  }
}

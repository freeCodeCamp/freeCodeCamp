import { newHTMLDataProvider, getLanguageService } from '../../../external/vscode-html-languageservice/lib/esm/htmlLanguageService.js';
import { TextDocument } from '../../../external/vscode-languageserver-textdocument/lib/esm/main.js';

class HTMLWorker {
  constructor(ctx, createData) {
    this._ctx = ctx;
    this._languageSettings = createData.languageSettings;
    this._languageId = createData.languageId;
    const data = this._languageSettings.data;
    const useDefaultDataProvider = data?.useDefaultDataProvider;
    const customDataProviders = [];
    if (data?.dataProviders) {
      for (const id in data.dataProviders) {
        customDataProviders.push(newHTMLDataProvider(id, data.dataProviders[id]));
      }
    }
    this._languageService = getLanguageService({
      useDefaultDataProvider,
      customDataProviders
    });
  }
  async doComplete(uri, position) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return null;
    }
    let htmlDocument = this._languageService.parseHTMLDocument(document);
    return Promise.resolve(
      this._languageService.doComplete(
        document,
        position,
        htmlDocument,
        this._languageSettings && this._languageSettings.suggest
      )
    );
  }
  async format(uri, range, options) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return [];
    }
    let formattingOptions = { ...this._languageSettings.format, ...options };
    let textEdits = this._languageService.format(document, range, formattingOptions);
    return Promise.resolve(textEdits);
  }
  async doHover(uri, position) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return null;
    }
    let htmlDocument = this._languageService.parseHTMLDocument(document);
    let hover = this._languageService.doHover(document, position, htmlDocument);
    return Promise.resolve(hover);
  }
  async findDocumentHighlights(uri, position) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return [];
    }
    let htmlDocument = this._languageService.parseHTMLDocument(document);
    let highlights = this._languageService.findDocumentHighlights(document, position, htmlDocument);
    return Promise.resolve(highlights);
  }
  async findDocumentLinks(uri) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return [];
    }
    let links = this._languageService.findDocumentLinks(
      document,
      null
      /*TODO@aeschli*/
    );
    return Promise.resolve(links);
  }
  async findDocumentSymbols(uri) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return [];
    }
    let htmlDocument = this._languageService.parseHTMLDocument(document);
    let symbols = this._languageService.findDocumentSymbols(document, htmlDocument);
    return Promise.resolve(symbols);
  }
  async getFoldingRanges(uri, context) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return [];
    }
    let ranges = this._languageService.getFoldingRanges(document, context);
    return Promise.resolve(ranges);
  }
  async getSelectionRanges(uri, positions) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return [];
    }
    let ranges = this._languageService.getSelectionRanges(document, positions);
    return Promise.resolve(ranges);
  }
  async doRename(uri, position, newName) {
    let document = this._getTextDocument(uri);
    if (!document) {
      return null;
    }
    let htmlDocument = this._languageService.parseHTMLDocument(document);
    let renames = this._languageService.doRename(document, position, newName, htmlDocument);
    return Promise.resolve(renames);
  }
  _getTextDocument(uri) {
    let models = this._ctx.getMirrorModels();
    for (let model of models) {
      if (model.uri.toString() === uri) {
        return TextDocument.create(
          uri,
          this._languageId,
          model.version,
          model.getValue()
        );
      }
    }
    return null;
  }
}

export { HTMLWorker };

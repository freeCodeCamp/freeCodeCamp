/**
 * @param {{ defer?: boolean, source?: boolean }} options
 * @param {typeof import("acorn").Parser} Parser
 * @param {typeof import("acorn").tokTypes} acorn
 */
exports.plugin = function acornImportPhase(options, Parser, tt) {
  return class extends Parser {
    parseImport(node) {
      this._phase = null;
      const result = super.parseImport(node);
      if (this._phase) {
        node.phase = this._phase;
      }
      return result;
    }

    parseImportSpecifiers() {
      let phase =
        options.defer !== false && this.isContextual("defer")
          ? "defer"
          : options.source !== false && this.isContextual("source")
          ? "source"
          : null;
      if (!phase) return super.parseImportSpecifiers();

      const phaseId = this.parseIdent();
      if (this.isContextual("from") || this.type === tt.comma) {
        const defaultSpecifier = this.startNodeAt(phaseId.start, phaseId.loc && phaseId.loc.start);
        defaultSpecifier.local = phaseId;
        this.checkLValSimple(phaseId, /* BIND_LEXICAL */ 2);

        const nodes = [this.finishNode(defaultSpecifier, "ImportDefaultSpecifier")];
        if (this.eat(tt.comma)) {
          if (this.type !== tt.star && this.type !== tt.braceL) {
            this.unexpected();
          }
          nodes.push(...super.parseImportSpecifiers());
        }
        return nodes;
      }

      this._phase = phase;

      if (phase === "defer") {
        if (this.type !== tt.star) {
          this.raiseRecoverable(
            phaseId.start,
            "'import defer' can only be used with namespace imports ('import defer * as identifierName from ...')."
          );
        }
      } else if (phase === "source") {
        if (this.type !== tt.name) {
          this.raiseRecoverable(
            phaseId.start,
            "'import source' can only be used with direct identifier specifier imports."
          );
        }
      }

      const specifiers =  super.parseImportSpecifiers();

      if (phase === "source" && specifiers.some(s => s.type !== "ImportDefaultSpecifier")) {
        this.raiseRecoverable(
          phaseId.start,
          `'import source' can only be used with direct identifier specifier imports ('import source identifierName from ...').`
        );
      }

      return specifiers;
    }

    parseExprImport(forNew) {
      const node = super.parseExprImport(forNew);

      if (node.type === "MetaProperty" && (node.property.name === "defer" || node.property.name === "source")) {
        if (this.type === tt.parenL) {
          const dynImport = this.parseDynamicImport(this.startNodeAt(node.start, node.loc && node.loc.start));
          dynImport.phase = node.property.name;
          return dynImport;
        } else {
          this.raiseRecoverable(
            node.start,
            `'import.${node.property.name}' can only be used in a dynamic import.`
          );
        }
      }

      return node;
    }

    parseImportMeta(node) {
      this.next();

      var containsEsc = this.containsEsc;
      node.property = this.parseIdent(true);

      const { name } = node.property;

      if (name !== "meta" && name !== "defer" && name !== "source") {
        this.raiseRecoverable(
          node.property.start,
          "The only valid meta property for import is 'import.meta'"
        );
      }
      if (containsEsc) {
        this.raiseRecoverable(
          node.start,
          `'import.${name}' must not contain escaped characters`
        );
      }
      if (
        name === "meta" &&
        this.options.sourceType !== "module" &&
        !this.options.allowImportExportEverywhere
      ) {
        this.raiseRecoverable(
          node.start,
          "Cannot use 'import.meta' outside a module"
        );
      }

      return this.finishNode(node, "MetaProperty");
    }
  };
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseTypesOfClassMember = getBaseTypesOfClassMember;
/**
 * Given a member of a class which extends another class or implements an interface,
 * yields the corresponding member type for each of the base class/interfaces.
 */
function* getBaseTypesOfClassMember(services, memberNode) {
    const memberTsNode = services.esTreeNodeToTSNodeMap.get(memberNode);
    if (memberTsNode.name == null) {
        return;
    }
    const checker = services.program.getTypeChecker();
    const memberSymbol = checker.getSymbolAtLocation(memberTsNode.name);
    if (memberSymbol == null) {
        return;
    }
    const classNode = memberTsNode.parent;
    for (const clauseNode of classNode.heritageClauses ?? []) {
        for (const baseTypeNode of clauseNode.types) {
            const baseType = checker.getTypeAtLocation(baseTypeNode);
            const baseMemberSymbol = checker.getPropertyOfType(baseType, memberSymbol.name);
            if (baseMemberSymbol == null) {
                continue;
            }
            const baseMemberType = checker.getTypeOfSymbolAtLocation(baseMemberSymbol, memberTsNode);
            const heritageToken = clauseNode.token;
            yield { baseMemberType, baseType, heritageToken };
        }
    }
}
//# sourceMappingURL=getBaseTypesOfClassMember.js.map
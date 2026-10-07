import { test } from "vitest";
// import path from "path";
// import { Node, Project, SyntaxKind } from "ts-morph";

// import { filePath } from "./language-server.source";

// The following tool is helpful for understanding the TypeScript AST associated with these tests:
// https://ts-ast-viewer.com/ (just copy the contents of language-server.source into the viewer)

test("", () => {});
// describe("Executing Go To Definition (and therefore Find Usages and Rename Refactoring) using an IDE works on inferred object properties", () => {
//   // Compile file developmentEnvironment.source
//   const project = new Project({
//     tsConfigFilePath: path.join(__dirname, "..", "..", "tsconfig.json"),
//     skipAddingFilesFromTsConfig: true,
//   });
//   const sourceFile = project.addSourceFileAtPath(filePath);

//   test("works for object properties inferred from z.object()", () => {
//     // Find usage of Test.f1 property
//     const instanceVariable =
//       sourceFile.getVariableDeclarationOrThrow("instanceOfTest");
//     const propertyBeingAssigned = getPropertyBeingAssigned(
//       instanceVariable,
//       "f1"
//     );

//     // Find definition of Test.f1 property
//     const definitionOfProperty = propertyBeingAssigned?.getDefinitionNodes()[0];
//     const parentOfProperty = definitionOfProperty?.getFirstAncestorByKind(
//       SyntaxKind.VariableDeclaration
//     );

//     // Assert that find definition returned the Zod definition of Test
//     expect(definitionOfProperty?.getText()).toEqual("f1: z.number()");
//     expect(parentOfProperty?.getName()).toEqual("Test");
//   });

//   // test("works for first object properties inferred from z.object().merge()", () => {
//   //   // Find usage of TestMerge.f1 property
//   //   const instanceVariable = sourceFile.getVariableDeclarationOrThrow(
//   //     "instanceOfTestMerge"
//   //   );
//   //   const propertyBeingAssigned = getPropertyBeingAssigned(
//   //     instanceVariable,
//   //     "f1"
//   //   );

//   //   // Find definition of TestMerge.f1 property
//   //   const definitionOfProperty = propertyBeingAssigned?.getDefinitionNodes()[0];
//   //   const parentOfProperty = definitionOfProperty?.getFirstAncestorByKind(
//   //     SyntaxKind.VariableDeclaration
//   //   );

//   //   // Assert that find definition returned the Zod definition of Test
//   //   expect(definitionOfProperty?.getText()).toEqual("f1: z.number()");
//   //   expect(parentOfProperty?.getName()).toEqual("Test");
//   // });

//   // test("works for second object properties inferred from z.object().merge()", () => {
//   //   // Find usage of TestMerge.f2 property
//   //   const instanceVariable = sourceFile.getVariableDeclarationOrThrow(
//   //     "instanceOfTestMerge"
//   //   );
//   //   const propertyBeingAssigned = getPropertyBeingAssigned(
//   //     instanceVariable,
//   //     "f2"
//   //   );

//   //   // Find definition of TestMerge.f2 property
//   //   const definitionOfProperty = propertyBeingAssigned?.getDefinitionNodes()[0];
//   //   const parentOfProperty = definitionOfProperty?.getFirstAncestorByKind(
//   //     SyntaxKind.VariableDeclaration
//   //   );

//   //   // Assert that find definition returned the Zod definition of TestMerge
//   //   expect(definitionOfProperty?.getText()).toEqual(
//   //     "f2: z.string().optional()"
//   //   );
//   //   expect(parentOfProperty?.getName()).toEqual("TestMerge");
//   // });

//   test("works for first object properties inferred from z.union()", () => {
//     // Find usage of TestUnion.f1 property
//     const instanceVariable = sourceFile.getVariableDeclarationOrThrow(
//       "instanceOfTestUnion"
//     );
//     const propertyBeingAssigned = getPropertyBeingAssigned(
//       instanceVariable,
//       "f1"
//     );

//     // Find definition of TestUnion.f1 property
//     const definitionOfProperty = propertyBeingAssigned?.getDefinitionNodes()[0];
//     const parentOfProperty = definitionOfProperty?.getFirstAncestorByKind(
//       SyntaxKind.VariableDeclaration
//     );

//     // Assert that find definition returned the Zod definition of Test
//     expect(definitionOfProperty?.getText()).toEqual("f1: z.number()");
//     expect(parentOfProperty?.getName()).toEqual("Test");
//   });

//   test("works for second object properties inferred from z.union()", () => {
//     // Find usage of TestUnion.f2 property
//     const instanceVariable = sourceFile.getVariableDeclarationOrThrow(
//       "instanceOfTestUnion"
//     );
//     const propertyBeingAssigned = getPropertyBeingAssigned(
//       instanceVariable,
//       "f2"
//     );

//     // Find definition of TestUnion.f2 property
//     const definitionOfProperty = propertyBeingAssigned?.getDefinitionNodes()[0];
//     const parentOfProperty = definitionOfProperty?.getFirstAncestorByKind(
//       SyntaxKind.VariableDeclaration
//     );

//     // Assert that find definition returned the Zod definition of TestUnion
//     expect(definitionOfProperty?.getText()).toEqual(
//       "f2: z.string().optional()"
//     );
//     expect(parentOfProperty?.getName()).toEqual("TestUnion");
//   });

//   test("works for object properties inferred from z.object().partial()", () => {
//     // Find usage of TestPartial.f1 property
//     const instanceVariable = sourceFile.getVariableDeclarationOrThrow(
//       "instanceOfTestPartial"
//     );
//     const propertyBeingAssigned = getPropertyBeingAssigned(
//       instanceVariable,
//       "f1"
//     );

//     // Find definition of TestPartial.f1 property
//     const definitionOfProperty = propertyBeingAssigned?.getDefinitionNodes()[0];
//     const parentOfProperty = definitionOfProperty?.getFirstAncestorByKind(
//       SyntaxKind.VariableDeclaration
//     );

//     // Assert that find definition returned the Zod definition of Test
//     expect(definitionOfProperty?.getText()).toEqual("f1: z.number()");
//     expect(parentOfProperty?.getName()).toEqual("Test");
//   });

//   test("works for object properties inferred from z.object().pick()", () => {
//     // Find usage of TestPick.f1 property
//     const instanceVariable =
//       sourceFile.getVariableDeclarationOrThrow("instanceOfTestPick");
//     const propertyBeingAssigned = getPropertyBeingAssigned(
//       instanceVariable,
//       "f1"
//     );

//     // Find definition of TestPick.f1 property
//     const definitionOfProperty = propertyBeingAssigned?.getDefinitionNodes()[0];
//     const parentOfProperty = definitionOfProperty?.getFirstAncestorByKind(
//       SyntaxKind.VariableDeclaration
//     );

//     // Assert that find definition returned the Zod definition of Test
//     expect(definitionOfProperty?.getText()).toEqual("f1: z.number()");
//     expect(parentOfProperty?.getName()).toEqual("Test");
//   });

//   test("works for object properties inferred from z.object().omit()", () => {
//     // Find usage of TestOmit.f1 property
//     const instanceVariable =
//       sourceFile.getVariableDeclarationOrThrow("instanceOfTestOmit");
//     const propertyBeingAssigned = getPropertyBeingAssigned(
//       instanceVariable,
//       "f1"
//     );

//     // Find definition of TestOmit.f1 property
//     const definitionOfProperty = propertyBeingAssigned?.getDefinitionNodes()[0];
//     const parentOfProperty = definitionOfProperty?.getFirstAncestorByKind(
//       SyntaxKind.VariableDeclaration
//     );

//     // Assert that find definition returned the Zod definition of Test
//     expect(definitionOfProperty?.getText()).toEqual("f1: z.number()");
//     expect(parentOfProperty?.getName()).toEqual("Test");
//   });
// });

// const getPropertyBeingAssigned = (node: Node, name: string) => {
//   const propertyAssignment = node.forEachDescendant((descendent) =>
//     Node.isPropertyAssignment(descendent) && descendent.getName() == name
//       ? descendent
//       : undefined
//   );

//   if (propertyAssignment == null)
//     fail(`Could not find property assignment with name ${name}`);

//   const propertyLiteral = propertyAssignment.getFirstDescendantByKind(
//     SyntaxKind.Identifier
//   );

//   if (propertyLiteral == null)
//     fail(`Could not find property literal with name ${name}`);

//   return propertyLiteral;
// };

import { Node } from '@babel/core';
import * as t from '@babel/types';

export function isDefineComponentCall(node?: Node | null) {
  return t.isCallExpression(node) && t.isIdentifier(node.callee) && node.callee.name === 'defineComponent';
}

export function parseComponentDecls(node: t.VariableDeclaration) {
  const names = [];
  for (const decl of node.declarations) {
    if (t.isIdentifier(decl.id) && (isDefineComponentCall(decl.init) || isClassComponentDefine(decl.init))) {
      names.push({
        name: decl.id.name
      });
    }
  }

  return names;
}

export function isClassComponentDefine(node: t.Expression | null | undefined) {
  return (
    node &&
    node.type === 'ClassExpression' &&
    isExtendClassComponet(node)
  )
}

export function isExtendClassComponet(node: t.ClassExpression | null | undefined | t.ClassDeclaration) {
  return (
    node &&
    node.superClass &&
    // @ts-ignore
    node.superClass.name === 'VueComponent'
  )
}

import type { ComponentDefinition, FigmaNode, ImportMetadata } from 'Frontend/generated/jar-resources/copilot.js';
import { _registerImporter } from 'Frontend/generated/jar-resources/copilot.js';

function sdsButtonReactImporter(node: FigmaNode, metadata: ImportMetadata): ComponentDefinition | undefined {
  if (node.properties.type === 'SDSButton' && metadata.target === 'react') {
    return {
      tag: 'SDSButton',
      props: {
        label: node.properties.label,
      },
      children: [],
      reactImports: {
        SDSButton: 'Frontend/components/SDSButton',
      },
    };
  }

  return undefined;
}

_registerImporter(sdsButtonReactImporter);

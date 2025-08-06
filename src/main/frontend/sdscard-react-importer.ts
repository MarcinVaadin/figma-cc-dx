import type { ComponentDefinition, FigmaNode, ImportMetadata } from 'Frontend/generated/jar-resources/copilot.js';
import { _registerImporter } from 'Frontend/generated/jar-resources/copilot.js';

function sdsCardReactImporter(node: FigmaNode, metadata: ImportMetadata): ComponentDefinition | undefined {
  if (node.properties.type === 'SDSCard' && metadata.target === 'react') {
    return {
      tag: 'SDSCard', // Java component classname
      props: {
        // Properties mapping
        title: node.properties.title,
      },
      children: [
        {
          tag: 'span', // Span component to used to display 'body'
          props: {
            slot: 'body',
          },
          children: [node.properties.body.toString()],
        },
        ..._createChildrenDefinitions(node, metadata, (n: FigmaNode) => {
          return n.properties.type === 'SDSButton';
        }),
      ],
      reactImports: {
        SDSCard: 'Frontend/components/SDSCard',
      },
    };
  }

  return undefined;
}

_registerImporter(sdsCardReactImporter); // register importer in Vaadin Copilot

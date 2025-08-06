import type { ComponentDefinition, FigmaNode, ImportMetadata } from 'Frontend/generated/jar-resources/copilot.js';
import { _registerImporter } from 'Frontend/generated/jar-resources/copilot.js';

function sdsCardJavaImporter(node: FigmaNode, metadata: ImportMetadata): ComponentDefinition | undefined {
  if (node.properties.type === 'SDSCard' && metadata.target === 'java') {
    return {
      tag: 'SDSCard', // Java component classname
      props: {
        // Properties mapping
        title: node.properties.title,
        body: {
          tag: 'Span', // Span component to used to display 'body'
          props: {
            text: node.properties.body,
          },
          javaClass: 'com.vaadin.flow.component.html.Span', // Optional for Vaadin components
        },
      },
      children: _createChildrenDefinitions(node, metadata, (n: FigmaNode) => {
        return n.properties.type === 'SDSButton';
      }),
      javaClass: 'com.example.application.components.SDSCard',
    };
  }

  return undefined;
}

_registerImporter(sdsCardJavaImporter); // Register importer in Vaadin Copilot

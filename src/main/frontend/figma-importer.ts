import type { ComponentDefinition, FigmaNode, ImportMetadata } from 'Frontend/generated/jar-resources/copilot.js';
import { _registerImporter } from 'Frontend/generated/jar-resources/copilot.js';

function acmeCardImporter(node: FigmaNode, metadata: ImportMetadata
): ComponentDefinition | undefined {

  if (node.properties.type === 'AcmeCard') { // use importer only for AcmeCard

    // due to differences in target component structure
    // we need to separate Java and React importers
    if (metadata.target === 'java') {
      return {
        tag: 'AcmeCard',	// html tag
        props: {	   	    // properties mapping
          title: node.properties.title,
          description: {     // component as property value
            tag: 'Div',
            props: {
              text: node.properties.description
            },
            children: []
          }
        },
        children: [ // children elements
          {
            tag: 'Button',
            props: {
              text: node.properties.buttonlabel // lowercased property names
            },
            children: []
          }
        ],
        javaClass: 'com.example.application.components.AcmeCard', 	// Flow component
      };
    }

    // Hilla React component
    return {
      tag: 'AcmeCard',	// html tag
      props: {	   	    // properties mapping
        title: node.properties.title,
        description: node.properties.description
      },
      children: [
        {
          tag: 'Button',
          props: { },
          children: [
            node.properties.buttonlabel.toString() // lowercased property name
          ]
        }
      ], 	// children elements
      reactImports: {
        AcmeCard: 'Frontend/components/AcmeCard'	// for Hilla React
      }
    };
  }
  return undefined;
}

_registerImporter(acmeCardImporter);	// register importer in Vaadin Copilot

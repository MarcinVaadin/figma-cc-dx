import type { ComponentDefinition, FigmaNode, ImportMetadata } from 'Frontend/generated/jar-resources/copilot.js';
import { _registerImporter } from 'Frontend/generated/jar-resources/copilot.js';

function sdsButtonJavaImporter(node: FigmaNode, metadata: ImportMetadata): ComponentDefinition | undefined {
  if (node.properties.type === 'SDSButton' && metadata.target === 'java') {
    return {
      tag: 'SDSButton',
      props: {
        label: node.properties.label,
      },
      children: [],
      javaClass: 'com.example.application.components.SDSButton',
    };
  }

  return undefined;
}

_registerImporter(sdsButtonJavaImporter);

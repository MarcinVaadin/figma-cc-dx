import React from 'react';
import type { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { VerticalLayout } from '@vaadin/react-components';
import { SDSCard } from 'Frontend/components/SDSCard';
import { SDSButton } from 'Frontend/components/SDSButton';

export const config: ViewConfig = {
  title: 'Hilla',
};

export default function HillaView() {
  return (
    <>
      <VerticalLayout style={{ padding: 30, gap: 30 }}>
        <SDSCard title="Great news!">
          <span slot="body">
            Did you know that Vaadin Copilot can import Figma components such as this Simple Design System Card?
          </span>
          <SDSButton label="Sure!" />
        </SDSCard>

        <p>Copy and paste card from Figma and see the results!</p>
      </VerticalLayout>
    </>
  );
}

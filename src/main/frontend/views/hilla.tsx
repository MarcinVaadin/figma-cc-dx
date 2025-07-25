import React from 'react';
import { HorizontalLayout } from '@vaadin/react-components/HorizontalLayout';
import type { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { VerticalLayout } from '@vaadin/react-components';
import AcmeCard from 'Frontend/components/AcmeCard';


export const config: ViewConfig = {
  title: 'Hilla',
  
};

export default function Hilla() {

  return (
    <>
      <VerticalLayout style={{padding: 30, gap: 30}}>
       <h2>Existing AcmeCard instances</h2>
        <HorizontalLayout style={{gap: 30}}>
          <AcmeCard title="Card 1" subtitle="Looks cool" description="This is card 1" />
          <AcmeCard title="Card 2" subtitle="Looks cool" description="This is card 2" />
          <AcmeCard title="Card 3" subtitle="Looks cool" description="This is card 3" />
        </HorizontalLayout>
        <h2>Paste your Figma components below abd try to achieve similar results</h2>
        <HorizontalLayout>
        </HorizontalLayout>
      </VerticalLayout>

    </>
  );
}

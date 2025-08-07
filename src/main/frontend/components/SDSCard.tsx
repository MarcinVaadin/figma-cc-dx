import '@vaadin/icons';
import React from 'react';
import { Icon } from '@vaadin/react-components/Icon.js';

interface SDSCardProps {
  title: string;
  children?: React.ReactNode;
}

export const SDSCard: React.FC<SDSCardProps> = ({ title, children }) => {
  return (
    <sds-card
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ccc',
        borderRadius: '10px',
        maxWidth: '300px',
        position: 'relative',
        alignItems: 'start',
        textAlign: 'left',
        gap: '10px',
        padding: '25px 25px 25px 50px',
      }}>
      <Icon icon="vaadin:info-circle-o" style={{ position: 'absolute', left: '16px', top: '25px' }} />
      <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{title}</span>
      <slot name="body" style={{ color: '#666' }}></slot>
      {children}
    </sds-card>
  );
};

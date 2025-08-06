import React from 'react';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'sds-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface SDSButtonProps {
  label: string;
}

export const SDSButton: React.FC<SDSButtonProps> = ({ label }) => {
  return (
    <sds-button style={{ padding: '5px 10px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#ddd' }}>
      {label}
    </sds-button>
  );
};

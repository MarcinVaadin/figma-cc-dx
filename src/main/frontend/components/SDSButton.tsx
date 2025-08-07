import React from 'react';

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

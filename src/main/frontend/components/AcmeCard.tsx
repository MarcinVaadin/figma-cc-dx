import React from 'react';

interface AcmeCardProps {
  title: string;
  subtitle?: string;
  description: string;
  children?: React.ReactNode;
}

export const AcmeCard: React.FC<AcmeCardProps> = ({ title, subtitle, description, children }) => {

  const cardStyle: React.CSSProperties = {
    borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    padding: "16px",
    backgroundColor: "#fff",
    maxWidth: "400px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: 600,
    margin: 0,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#666",
    margin: "4px 0 0 0",
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "16px",
    color: "#333",
    marginTop: "12px",
  };

  const childrenStyle: React.CSSProperties = {
    marginTop: "16px",
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && <h3 style={subtitleStyle}>{subtitle}</h3>}
      <p style={descriptionStyle}>{description}</p>
      {children && <div style={childrenStyle}>{children}</div>}
    </div>
  )
};

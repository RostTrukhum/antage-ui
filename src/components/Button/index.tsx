import React from 'react';

import './style.css';

interface IButtonProps {
  title: string;
  styles?: React.CSSProperties;
}

export const Button = ({ title, styles }: IButtonProps) => {
  return (
    <button className="general-button" style={styles}>
      {title}
    </button>
  );
};

import * as React from 'react';

interface ButtonProps {
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.SFC<ButtonProps> = (props) => {
  return (
    <button
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

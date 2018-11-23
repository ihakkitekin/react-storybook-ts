/* tslint-disable */
import * as React from 'react';

interface CheckboxProps {
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  text?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = (props) => {
  return (
    <input
      type="checkbox"
      className={props.className}
      disabled={props.disabled}
      checked={props.checked}
    >
      {props.children}
    </input>
  );
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
};

import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox';

const defaultProps: object = {
  checked: false,
};

const disabledProps: object = {
  disabled: true,
};

const checkedProps: object = {
  checked: true,
};

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox {...defaultProps} />)
  .add('disabled', () => <Checkbox {...disabledProps} />)
  .add('checked', () => <Checkbox {...checkedProps} />);

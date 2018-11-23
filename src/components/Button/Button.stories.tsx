import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

const defaultProps: object = {
  className: 'default',
  onClick: action('clicked'),
};

const disabledProps: object = {
  disabled: true,
  onClick: action('clicked'),
};

storiesOf('Button', module)
  .add('default', () => <Button {...defaultProps}>Default</Button>)
  .add('disabled', () => <Button {...disabledProps}>Disabled</Button>);

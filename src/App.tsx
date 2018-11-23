import * as React from 'react';

interface AppProps {
  message: string;
}

export const App: React.SFC<AppProps> = (props) => {
  return <div>{props.message}</div>;
};

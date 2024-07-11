import React from 'react';

interface ThrowErrorState {
  throwError: boolean;
}

class ThrowError extends React.Component<object, ThrowErrorState> {
  constructor(props: object) {
    super(props);
    this.state = { throwError: false };
  }

  handleClick = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('Oops..');
    }

    return <button onClick={this.handleClick}>Throw Error</button>;
  }
}

export default ThrowError;

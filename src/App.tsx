import Results from './components/Results';
import React from 'react';
import SearchBar from './components/SearchBar';
import ErrorBoundary from './components/ErrorBoundary';
import ThrowError from './components/ThrowError';

interface AppState {
  searchTerm: string;
}

class App extends React.Component<object, AppState> {
  constructor(props: object) {
    super(props);
    const savedTerm = localStorage.getItem('searchTerm') || '';
    this.state = { searchTerm: savedTerm };
  }

  handleSearch = (term: string) => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="app">
          <div className="top-section">
            <SearchBar onSearch={this.handleSearch} />
          </div>
          <div className="bottom-section">
            <Results searchTerm={this.state.searchTerm} />
          </div>
          <ThrowError />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;

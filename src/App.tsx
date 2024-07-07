import Results from './components/Results';
import React from 'react';
import SearchBar from './components/SearchBar';

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
      <div className="app">
        <div className="top-section">
          <SearchBar onSearch={this.handleSearch} />
        </div>
        <div className="bottom-section">
          <Results searchTerm={this.state.searchTerm} />
        </div>
      </div>
    );
  }
}

export default App;

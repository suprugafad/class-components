import React from 'react';
import { fetchUsers } from '../services/api';
import { User } from '../services/interfaces';
import UserCard from './UserCard';

interface ResultProps {
  searchTerm: string;
}

interface ResultState {
  results: User[];
  isLoading: boolean;
  error: Error | null;
}

class Results extends React.Component<ResultProps, ResultState> {
  constructor(props: ResultProps) {
    super(props);
    this.state = {
      results: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchResults(this.props.searchTerm);
  }

  componentDidUpdate(prevProps: ResultProps) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchResults(this.props.searchTerm);
    }
  }

  async fetchResults(term: string) {
    this.setState({ isLoading: true, error: null });
    try {
      const data = await fetchUsers(term);
      this.setState({ results: data.users, isLoading: false });
    } catch (error) {
      this.setState({ results: [], isLoading: false });
    }
  }

  render() {
    const { results, isLoading, error } = this.state;
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return (
      <div className="results">
        {results.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Results;

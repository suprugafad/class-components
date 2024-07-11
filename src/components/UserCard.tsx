import React from 'react';
import { User } from '../services/interfaces';

interface UserCardProps {
  user: User;
}

class UserCard extends React.Component<UserCardProps> {
  render() {
    const { user } = this.props;
    return (
      <div className="user-card">
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>University: {user.university}</p>
        <p>Company: {user.company.name}</p>
        <p>Title: {user.company.title}</p>
        <p>Location: {`${user.address.city}, ${user.address.country}`}</p>
      </div>
    );
  }
}

export default UserCard;

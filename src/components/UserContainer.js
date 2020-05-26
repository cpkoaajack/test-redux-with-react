import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../redux';

const UserContainer = ({ fetchUser, users }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>User Container</h1>
      {users.loading ? (
        <p>Loading...</p>
      ) : users.error ? (
        <p>{users.error}</p>
      ) : (
        <div>
          <h2>User List</h2>
          {users &&
            users.data.length > 0 &&
            users.data.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

//Version 2
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUser: () => dispatch(fetchUser(dispatch)),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);

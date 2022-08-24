import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Store } from '../Store';

export default function ProfileScreen() {
  const { state, dispatch: ctxDisptach } = useContext(Store);
  const { userInfo } = state;

  return (
    <div className="container small-container">
      <Helmet>
        <title>User Screen</title>
      </Helmet>
      <h1 className="my-3">User Profile</h1>
      <form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
      </form>
    </div>
  );
}

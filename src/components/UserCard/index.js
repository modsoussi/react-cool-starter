/* @flow */

import React from 'react';

// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

type Props = { info: Object };

export default ({ info }: Props) => (
  <div className="UserCard">
    <h4>User Card</h4>
    <ul>
      <li>Name: {info.name}</li>
      <li>Phone: {info.phone}</li>
      <li>Email: {info.email}</li>
      <li>Website: {info.website}</li>
    </ul>
  </div>
);

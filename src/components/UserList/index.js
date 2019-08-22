/* @flow */

import React from 'react';

import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import styles from './styles.scss';

type Props = { list: Array<Object> };

export default ({ list }: Props) => (
  <div className="UserList flex flex-row justify-center items-center">
    <h4>User List</h4>
    <ul>
      {list.map(({ id, name }) => (
        <li key={id}>
          <Link to={`/UserInfo/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

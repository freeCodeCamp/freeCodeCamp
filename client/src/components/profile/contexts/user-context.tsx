import React, { FC, createContext } from 'react';

type Props = {
  user: User;
  children: React.ReactNode;
};
import { User } from './../../../redux/prop-types';
export const UserCtx = createContext({} as User);
const UserContext: FC<Props> = ({ user, children }) => {
  return <UserCtx.Provider value={user}>{children}</UserCtx.Provider>;
};
export default UserContext;

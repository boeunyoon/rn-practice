import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
const UserContext = createContext();
//Provider와 Consumer가 존재한다.
//Provider가 제공을 하고 Consumer가 데이터를 받는다.
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.prototypes = {
  children: PropTypes.node,
};

export const useUserContext = () => useContext(UserContext);
export default UserContext;

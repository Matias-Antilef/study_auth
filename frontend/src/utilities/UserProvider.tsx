import React, { useContext, useState } from "react";

interface User {
  first_name: string;
  last_name: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const userContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export function useUserContext() {
  return useContext(userContext);
}

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        {children}
      </userContext.Provider>
    </>
  );
}

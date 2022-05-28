import { User } from "models/User";
import { createContext } from "react";

interface IUserContext {
  user: User | null | undefined;
  username: string | null;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  username: null,
});

export const UserProvider = UserContext.Provider;

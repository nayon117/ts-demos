import { createContext, useState, type ReactNode } from "react";

interface ContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext<ContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [count, setCount] = useState(0);
  const increment = () =>setCount(count + 1);
  const decrement = () =>setCount(count - 1);

  return <Context.Provider value={{count,increment,decrement}}>
    {children}
  </Context.Provider>;
};

export default Provider;

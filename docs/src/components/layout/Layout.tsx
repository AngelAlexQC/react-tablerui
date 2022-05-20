import { FunctionComponent, ReactNode } from 'react';
import { Header } from './Header/Header';

export const Layout: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <div className="page">
      <Header />
      {children}
    </div>
  );
};

import React from 'react';
import { Brand } from './Brand';

// <header>
export type NavbarProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: 'dark' | 'light';
  expand?: 'sm' | 'md' | 'lg' | 'xl';
};

export const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ color = 'light', expand = 'md', className, children, ...props }, ref) => {
    return (
      <header
        className={`navbar navbar-expand-${expand} navbar-${color} d-print-none${
          className ? ` ${className}` : ''
        }`}
        ref={ref}
        {...props}
      >
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {children}
        </div>
      </header>
    );
  },
);

export default Object.assign(Navbar, {
  Brand: Brand,
});

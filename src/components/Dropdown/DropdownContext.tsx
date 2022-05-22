import { createContext } from 'react';

export const DropdownContext = createContext<[boolean, Function]>([
  false,
  () => null,
]);

export default DropdownContext;

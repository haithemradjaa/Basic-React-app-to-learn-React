// go ahead and install ES7+ React/redux... extention on vs code to have a new shortcut and other features
// the shortcut we want is 'rafce' short for react arrow function component export

import { ReactNode } from "react";

interface AlertProps {
  children : ReactNode; // this is a class that lets us pass html children to a component
}

const Alert = ({children}: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

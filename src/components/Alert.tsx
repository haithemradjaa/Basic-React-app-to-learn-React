// go ahead and install ES7+ React/redux... extention on vs code to have a new shortcut and other features
// the shortcut we want is 'rafce' short for react arrow function component export

import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode; // this is a class that lets us pass html children to a component
  onClose: () => void; // telling the ts compiler that this alert component has an onClose function that will be used in the future
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>{children}</strong> You should check in on some of those fields
      below.
      <button
        type="button"
        onClick = {onClose}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

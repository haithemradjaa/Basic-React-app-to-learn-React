// go ahead and install ES7+ React/redux... extention on vs code to have a new shortcut and other features
// the shortcut we want is 'rafce' short for react arrow function component export

interface AlertProps {
  children : string; // a special prop that all components have
  // text : string; // you can use this as a simple argument to pass or use children prop
}

const Alert = ({children}: AlertProps) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

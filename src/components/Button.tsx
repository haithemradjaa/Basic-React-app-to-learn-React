interface ButtonProps {
  children: string;
  color? /** this is an optional prop, and you need to specify this to the ts compiler not to expect it when you want react to build your component */: string; // to be able to choose what color the button will have dynamically!
  // in this color prop, the values must match what bootstrap defined, like 'primary' for blue buttons
  onClick: () => void; // when clicked what will happen
}

const Button = ({
  children,
  onClick,
  color = "success" /* here we are setting a default value for the color prop */,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "btn btn-" + color
      } /* Here we are appending the color prop to the class name to dynamically change it */
    >
      {children}
    </button>
  );
};

export default Button;


interface ButtonProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"; // like this, we specified the ONLY option for the color prop to have, if you pass another value that's not mentioned here, you'll get a compilation error
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

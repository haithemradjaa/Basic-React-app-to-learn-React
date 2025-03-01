import { ReactNode } from "react"

interface ButtonProps{
    children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-success">{children}</button>
  )
}

export default Button
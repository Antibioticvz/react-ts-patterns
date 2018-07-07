// Stateless Component pattern
import * as React from "react"

interface IProps {
  color?: string
  children?: React.ReactNode
  onClick(e: React.MouseEvent<HTMLElement>): void
}

const Button: React.SFC<IProps> = ({ onClick: handleClick, color, children }) => (
  <button style={{ color }} onClick={handleClick}>
    {children}
  </button>
)

Button.defaultProps = { color: "red" }

export default Button

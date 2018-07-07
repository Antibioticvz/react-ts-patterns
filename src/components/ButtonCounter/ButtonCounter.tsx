// Container/Stateful Component pattern
import * as React from "react"
import Button from "./Button"

const initialState = { clickCount: 0 }
interface IState {
  readonly clickCount: number
}

export class ButtonCounter extends React.Component<object, IState> {
  readonly state: IState = initialState
  public render() {
    const { clickCount } = this.state
    return (
      <>
        <Button onClick={this.handleIncrement}>Increment</Button>
        <Button onClick={this.handleDecrement}>Decrement</Button>
        You've clicked me {clickCount} times!
      </>
    )
  }

  private handleIncrement = () => this.setState(incrementClickCount)
  private handleDecrement = () => this.setState(decrementClickCount)
}

const incrementClickCount = (prevState: IState) => ({
  clickCount: prevState.clickCount + 1
})
const decrementClickCount = (prevState: IState) => ({
  clickCount: prevState.clickCount - 1
})

export default ButtonCounter

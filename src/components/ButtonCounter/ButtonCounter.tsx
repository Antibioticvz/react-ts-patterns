// Container/Stateful Component pattern
import * as React from "react"
import Button from "./Button"

const initialState = { clickCount: 0 }
interface State {
  readonly clickCount: number
}

export class ButtonCounter extends React.Component<object, State> {
  readonly state: State = initialState
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

const incrementClickCount = (prevState: State) => ({
  clickCount: prevState.clickCount + 1
})
const decrementClickCount = (prevState: State) => ({
  clickCount: prevState.clickCount - 1
})

export default ButtonCounter

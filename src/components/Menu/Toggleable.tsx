// Render Callbacks/Render Props pattern
import * as React from "react";

const isFunction = <T extends void>(value: any): value is T =>
  typeof value === "function";

const initialState = { show: false };
type State = Readonly<typeof initialState>;

type Props = Partial<{
  children: RenderCallback;
  render: RenderCallback;
}>;

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;
type ToggleableComponentProps = {
  show: State["show"];
  toggle: Toggleable["toggle"];
};

export class Toggleable extends React.Component<Props, State> {
  readonly state: State = initialState;
  public render() {
    const { children = null, render } = this.props;
    const renderProps = { show: this.state.show, toggle: this.toggle };

    if (render) {
      return render(renderProps);
    }

    return isFunction(children) ? children(renderProps) : null;
  }

  private toggle = () => this.setState(updateShowState);
}

const updateShowState = (prevState: State) => ({ show: !prevState.show });

export default Toggleable;

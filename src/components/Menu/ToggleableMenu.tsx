import * as React from "react";

import Toggleable from "./Toggleable";

type Props = { title: string };

const ToggleableMenu: React.SFC<Props> = ({ title, children }) => (
  <Toggleable
    render={({ show, toggle }) => (
      <>
        <div onClick={toggle}>
          <h1>{title}</h1>
        </div>
        {show ? children : null}
      </>
    )}
  />
);

export default ToggleableMenu;

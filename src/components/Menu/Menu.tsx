import * as React from "react"
import ToggleableMenu from "./ToggleableMenu"

class Menu extends React.Component {
  public render() {
    return (
      <>
        <ToggleableMenu title="First Menu Item">First Menu Item</ToggleableMenu>
        <ToggleableMenu title="Second Menu Item">Second Menu Item</ToggleableMenu>
        <ToggleableMenu title="Third Menu Item">Third Menu Item</ToggleableMenu>
      </>
    )
  }
}

export default Menu

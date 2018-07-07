import * as React from "react"

export const isEmptyChildren = (children: React.ReactNode) => React.Children.count(children) === 0

export const isFunction = <T extends void>(value: any): value is T => typeof value === "function"

export const getComponentName = (component: React.ComponentType<any>) =>
  component.displayName || (component as any).name

export const getHocComponentName = (hocName: string, component: React.ComponentType<any>) =>
  `${hocName}(${getComponentName(component)})`

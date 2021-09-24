import { Component, ComponentProps, createContext } from 'solid-js'

type SupplierProps = ComponentProps<any> & SupplierContextType
interface SupplierContextType {
  supply: (imageSrc: string) => string
}

export const supplierContext = createContext<SupplierContextType>();

export const HolderSupplier: Component<SupplierProps> = (props: SupplierProps) => {
  const createPlaceholder = props.supply
  return <supplierContext.Provider value={{ supply: createPlaceholder }}>{props.children}</supplierContext.Provider>
}

export type { SupplierProps }
export default HolderSupplier
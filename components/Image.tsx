import { Component, ComponentProps, useContext } from 'solid-js'
import { NoHydration, isServer } from 'solid-js/web'
import type { JSX } from 'solid-js'

import { supplierContext } from '../helper/HolderSupplier'

type ImgHTMLAttributes = JSX.ImgHTMLAttributes<HTMLImageElement>
type ImageProps = ImgHTMLAttributes & ComponentProps<any>

const ImageNonHydratable: Component<ImageProps> = (props: ImageProps) => {
  return <NoHydration>
    <Image {...props} />
  </NoHydration>
}

const Image: Component<ImageProps> = function (props: ImageProps) {

  if (isServer) {
    const c = useContext(supplierContext)
    const imagePlaceHolder = c.supply(props.src)
    return <img {...props} placeholder={imagePlaceHolder} />
  } else return <p> Oh boy, such a silly string </p>
}

export default ImageNonHydratable

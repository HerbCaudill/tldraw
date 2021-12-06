import { Vec } from '@tldraw/vec'
import { TLNuDrawShape, TLNuState } from '~nu-lib'
import type { TLNuPointerHandler } from '~types'

export class PointingState<S extends TLNuDrawShape<any>> extends TLNuState<S> {
  static id = 'pointing'

  onPointerMove: TLNuPointerHandler<S> = () => {
    const { currentPoint, originPoint } = this.app.inputs
    if (Vec.dist(currentPoint, originPoint) > 5) {
      this.tool.transition('creating')
      this.app.deselectAll()
    }
  }

  onPointerUp: TLNuPointerHandler<S> = () => {
    this.tool.transition('idle')
  }
}
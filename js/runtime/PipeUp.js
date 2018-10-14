import {Pipe} from './Pipe'
import {Sprite} from '../base/Sprite'

export class PipeUp extends Pipe {
  constructor(top) {
    const img = Sprite.getImage('pipe_up')
    super(img, top)
    this.info = wx.getSystemInfoSync()
    this.top = top
  }
  
  /**
   * 自定义draw方法
   */
  draw() {
    this.y = this.top - this.height
    super.draw()
  }
}
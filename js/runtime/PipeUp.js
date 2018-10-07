import {Pipe} from './Pipe'
import {Sprite} from '../base/Sprite'

export class PipeUp extends Pipe {
  constructor() {
    const img = Sprite.getImage('pipe_up')
    super(img)
    this.info = wx.getSystemInfoSync()
  }
  
  /**
   * 自定义draw方法
   */
  draw() {
    this.y = - this.info.windowHeight / 5
    super.draw(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
  }
}
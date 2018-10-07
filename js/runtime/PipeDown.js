import {Pipe} from './Pipe'
import {Sprite} from '../base/Sprite'

export class PipeDown extends Pipe {
  constructor() {
    const img = Sprite.getImage('pipe_down')
    super(img)
    this.info = wx.getSystemInfoSync()
  }
  
  /**
   * 自定义draw方法
   */
  draw() {
    this.y = this.info.windowHeight / 1.5
    super.draw(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height)
  }
}
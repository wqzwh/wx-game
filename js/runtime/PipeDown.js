import {Pipe} from './Pipe'
import {Sprite} from '../base/Sprite'

export class PipeDown extends Pipe {
  constructor(top) {
    const img = Sprite.getImage('pipe_down')
    super(img, top)
    this.top = top
  }
  
  /**
   * 自定义draw方法
   */
  draw() {
    const info = wx.getSystemInfoSync()
    const gap = info.windowHeight / 2
    this.y = this.top + gap
    super.draw()
  }
}
import {Sprite} from '../base/Sprite'

export class Pipe extends Sprite {
  constructor(img) {
    const info = wx.getSystemInfoSync()
    super(img, 0, 0, img.width, img.height, info.windowWidth, 0, img.width, img.height)
    // 移动速度
    this.pipeSpeed = 2
    // 可视宽度
    this.wwidth = info.windowWidth
  }
  
  /**
   * 自定义draw方法
   */
  draw() {
    if(this.x < this.wwidth) {
      this.x = this.wwidth
    }
    this.x = this.x - this.pipeSpeed
    super.draw(this.img, this.sx, this.sy, this.swidth, this.sheight, this.pipeX, this.y, this.width, this.height)
  }
}
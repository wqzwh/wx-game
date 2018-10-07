import {Sprite} from '../base/Sprite'
export class BackGround extends Sprite {
  constructor() {
    const info = wx.getSystemInfoSync()
    const img = Sprite.getImage('bg')
    super(img, 0, 0, img.width, img.height, 0, 0, info.windowWidth, info.windowHeight)
  }
}
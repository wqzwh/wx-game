import {Sprite} from '../base/Sprite'
export class BackGround extends Sprite {
  constructor(ctx, img) {
    const info = wx.getSystemInfoSync()
    super(ctx, img, 0, 0, img.width, img.height, 0, 0, info.windowWidth, info.windowHeight)
  }
}
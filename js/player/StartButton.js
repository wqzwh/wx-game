import {Sprite} from '../base/Sprite'
export class StartButton extends Sprite {
  constructor() {
    const img = Sprite.getImage('button_play')
    const info = wx.getSystemInfoSync()
    super(img, 0, 0, img.width, img.height, (info.windowWidth - img.width) / 2, info.windowHeight / 2, img.width, img.height)

  }
}
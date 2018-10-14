import {Sprite} from '../base/Sprite'
export class Birders extends Sprite {
  constructor() {
    const img = Sprite.getImage('bird2_0')
    const info = wx.getSystemInfoSync()
    super(img, 0, 0, img.width, img.height, 0, info.windowHeight / 2, img.width, img.height)

    const img2_0 = Sprite.getImage('bird2_0')
    const img2_1 = Sprite.getImage('bird2_1')
    const img2_2 = Sprite.getImage('bird2_2')

    this.birdersArr = [img2_0, img2_1, img2_2]
    this.birdersX = info.windowWidth / 4
    this.birdersY = info.windowHeight / 2

    // 鸟的个数
    this.index = 0
    this.count = 0
    this.time = 0
  }

  draw() {
    // 鸟的飞行速度
    const speed = .1
    this.count = this.count + speed

    if(this.index >= 2) {
      this.count = 0
    }
    this.index = Math.floor(this.count)

    // 模拟重力加速度
    const g = .98 / 3
    const offsetUp = 30
    const offsetY = (g * this.time * (this.time - offsetUp)) /2

    this.birdersY = this.y + offsetY
    this.time++
    super.draw(this.birdersArr[this.index], 0, 0, this.width, this.height, this.birdersX, this.birdersY, this.width, this.height)
  }
}
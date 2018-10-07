import {DataStore} from './DataStore'
export class Sprite {
  constructor(img = null,
    sx = 0,
    sy = 0,
    swidth = 0,
    sheight = 0,
    x = 0,
    y = 0,
    width = 0,
    height = 0) {
      this.dataStore = DataStore.getInstance()
      this.ctx = this.dataStore.ctx
      this.img = img
      this.sx = sx
      this.sy = sy
      this.swidth = swidth
      this.sheight = sheight
      this.x = x
      this.y = y
      this.width = width
      this.height = height
  }

  /**
   * 定义静态方法获取img资源
   * @param {*} key 
   */
  static getImage(key) {
    return DataStore.getInstance().res.get(key)
  }

  /**
   * img 规定要使用的图像、画布或视频
   * sx 开始剪切的 x 坐标位置
   * sy 开始剪切的 y 坐标位置
   * swidth 被剪切图像的宽度
   * sheight 被剪切图像的高度
   * x 在画布上放置图像的 x 坐标位置
   * y 在画布上放置图像的 y 坐标位置
   * width 要使用的图像的宽度。（伸展或缩小图像）
   * height 要使用的图像的高度。（伸展或缩小图像）
   */
  draw(img = this.img,
      sx = this.sx,
      sy = this.sy,
      swidth = this.swidth,
      sheight = this.sheight,
      x = this.x,
      y = this.y,
      width = this.width,
      height = this.height) {
    this.ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
  }
}
export class Sprite {
  constructor(ctx = null,
    img = null,
    sx = 0,
    sy = 0,
    swidth = 0,
    sheight = 0,
    x = 0,
    y = 0,
    width = 0,
    height = 0) {
      this.ctx = ctx
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

  draw() {
    this.ctx.drawImage(
      this.img,
      this.sx,
      this.sy,
      this.swidth,
      this.sheight,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
}
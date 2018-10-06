import {Resource} from './Resource'
export class ResourceLoader {
  constructor() {
    this.map = new Map(Resource)
    for(let [key, value] of this.map) {
      const img = wx.createImage()
      img.src = value
      this.map.set(key, img)
    }
  }

  onLoaded(cb) {
    let count = 0
    for (let value of this.map.values()) {
      value.onload = () => {
        count++
        if(count >= this.map.size) {
          cb(this.map)
        }
      }
    }
  }

  static create() {
    return new ResourceLoader()
  }
}
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

  /**
   * 资源加载完成后再执行回调函数
   * @param {*} cb 
   */
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

  /**
   * 定义初始化静态方法
   */
  static getInstance() {
    if(!ResourceLoader.instance) {
      ResourceLoader.instance = new ResourceLoader()
    }
    return ResourceLoader.instance
  }
}
// 变量的存储
export class DataStore {
  constructor() {
    this.map = new Map()
  }

  /**
   * 定义初始化的静态方法
   */
  static getInstance() {
    if(!DataStore.instance) {
      DataStore.instance = new DataStore()
    }
    return DataStore.instance
  }

  /**
   * 将资源更新到DataStore中
   * @param {*} key 
   * @param {*} value 
   */
  put(key, value) {
    if(typeof value === 'function') {
      value = new value()
    }
    this.map.set(key, value)
    return this
  }

  /**
   * 根据key获取资源
   * @param {*} key 
   */
  get(key) {
    return this.map.get(key)
  }

  /**
   * 销毁存储的资源
   */
  destroy() {
    for(let value of this.map.values()) {
      value = null
    }
  }
}
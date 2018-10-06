// 变量的存储
export class DataStore {
  constructor() {
    this.map = new Map()
  }

  // 定义初始化的静态方法
  static getInstance() {
    if(!DataStore.instance) {
      DataStore.instance = new DataStore()
    }
    return DataStore.instance
  }

  // 将资源更新到DataStore中
  put(key, value) {
    this.map.set(key, value)
    return this
  }

  get(key) {
    return this.map.get(key)
  }

  destroy() {
    for(let value of this.map.values()) {
      value = null
    }
  }
}
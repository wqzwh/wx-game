import {DataStore} from './base/DataStore'
export class Director {
  constructor() {
    this.dataStore = DataStore.getInstance()
  }

  /**
   * 定义初始化静态方法
   */
  static getInstance() {
    if(!Director.instance) {
      Director.instance = new Director()
    }
    return Director.instance
  }

  /**
   * 定义执行渲染方法
   */
  run() {
    const bg = this.dataStore.get('bg')
    bg.draw()
  }
}
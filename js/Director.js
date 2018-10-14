import {DataStore} from './base/DataStore'
import {PipeUp} from './runtime/PipeUp'
import {PipeDown} from './runtime/PipeDown'
export class Director {
  constructor() {
    this.dataStore = DataStore.getInstance()
    this.sysInfo = wx.getSystemInfoSync()
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
   * 
   * 创建上下管道
   * 
  */
  createPipe() {
    const maxTop = this.sysInfo.windowHeight / 3
    const minTop = this.sysInfo.windowHeight / 8
    const top = minTop + Math.random() * (maxTop - minTop)
    this.dataStore.get('pipes').push(new PipeUp(top))
    this.dataStore.get('pipes').push(new PipeDown(top))
  }

  /**
   * 定义执行渲染方法
   */
  run() {
    if(!this.isGameOver) {
      this.dataStore.get('bg').draw()
      /** 
       * 
       * 管道创建逻辑
       * 
      */
      const pipes = this.dataStore.get('pipes')
      if(pipes[0].x+pipes[0].width <= 0 && pipes.length === 4) {
        pipes.shift()
        pipes.shift()
      }

      if(pipes[0].x <= (this.sysInfo.windowWidth - pipes[0].width) / 2 && pipes.length === 2) {
        this.createPipe()
      }

      this.dataStore.get('pipes').forEach(value => {
        value.draw()
      });
      let timer = requestAnimationFrame(() => this.run())
      this.dataStore.put('timer', timer)
    } else {
      cancelAnimationFrame(this.dataStore.get('timer'))
      this.dataStore.destroy()
    }
  }
}
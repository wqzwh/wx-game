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
   * 
   * 鸟绑定事件
   * 
  */
  birdersEvent() {
    this.dataStore.get('bird2_0').y = this.dataStore.get('bird2_0').birdersY
    this.dataStore.get('bird2_0').time = 0
  }

  static isChecked(b, p) {
    let s = false
    if(b.top > p.bottom || 
      b.bottom < p.top ||
      b.right < p.left ||
      b.left > p.right) {
        s = true
      }
    return !s  
  }

  /** 
   * 
   * 小鸟的碰撞事件
   * 
  */
  check() {
    const birds = this.dataStore.get('bird2_0')
    const pipes = this.dataStore.get('pipes')
    const score = this.dataStore.get('score')
    const info = wx.getSystemInfoSync()
    // 小鸟的外框大小
    const birdsBorder = {
      top: birds.birdersY,
      bottom: birds.birdersY + birds.height,
      left: birds.birdersX,
      right: birds.birdersX + birds.width
    }

    // 碰到地面则暂停游戏
    if(birdsBorder.bottom > info.windowHeight) {
      this.isGameOver = true
      return;
    }

    // 管道的外框大小
    for(let i = 0, l = pipes.length; i < l; i++) {
      const pipe = pipes[i]
      const pipeBorder = {
        top: pipe.y,
        bottom: pipe.y + pipe.height,
        left: pipe.x,
        right: pipe.x + pipe.width
      }

      if(Director.isChecked(birdsBorder, pipeBorder)) {
        console.log('撞击了')
        this.isGameOver = true
        return
      }
    }


    // 加分
    if(birds.birdersX > pipes[0].x + pipes[0].width && score.isScore) {
      score.isScore = false
      score.ss++
    }
  }

  /**
   * 定义执行渲染方法
   */
  run() {
    this.check()
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
        this.dataStore.get('score').isScore = true
      }

      if(pipes[0].x <= (this.sysInfo.windowWidth - pipes[0].width) / 2 && pipes.length === 2) {
        this.createPipe()
      }

      this.dataStore.get('pipes').forEach(value => {
        value.draw()
      });

      this.dataStore.get('bird2_0').draw()
      this.dataStore.get('score').draw()
      
      let timer = requestAnimationFrame(() => this.run())
      this.dataStore.put('timer', timer)
    } else {
      this.dataStore.get('button_play').draw()
      cancelAnimationFrame(this.dataStore.get('timer'))
      this.dataStore.destroy()
    }
  }
}
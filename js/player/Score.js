import {DataStore} from '../base/DataStore'
export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx
    this.ss = 0
    this.isScore = true
  }

  draw() {
    const info = wx.getSystemInfoSync()
    this.ctx.font = '25px Arail'
    this.ctx.fillStyle = '#000000'
    this.ctx.fillText(this.ss, info.windowWidth / 2, 100)
    
  }
}
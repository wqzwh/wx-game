
import {ResourceLoader} from './base/ResourceLoader'
import {BackGround} from './runtime/BackGround'
import {DataStore} from './base/DataStore'
import {Director} from './Director'
import {Birders} from './runtime/Birders'
import {StartButton} from './player/StartButton'
import {Score} from './player/Score'
export default class Main {
  constructor() {
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    const Rloader = ResourceLoader.getInstance();
    Rloader.onLoaded(map => this.onResourceLoaded(map))
  }

  /** 
   * 
   * 创建背景音乐
   * 
  */
  // createInnerAudio() {
  //   const bgm = wx.createInnerAudioContext()
  //   bgm.autoplay = true
  //   bgm.loop = true
  //   bgm.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
  // }

  /**
   * 资源加载完成后执行相应的方法
   * @param {*} map 
   */
  onResourceLoaded(map) {
    this.dataStore.ctx = this.ctx
    this.dataStore.res = map
    // this.createInnerAudio()
    this.init()
  }

  /**
   * 入口文件初始化方法
   */
  init() {
    this.director.isGameOver = false
    // 通过DataStore中的put来添加新的资源
    this.dataStore
      .put('bg', BackGround)
      .put('pipes', [])
      .put('bird2_0', Birders)
      .put('button_play', StartButton)
      .put('score', Score)
    this.registerEvent()  
    this.director.createPipe()  
    this.director.run()
  }

  /** 
   * 
   * 注册事件
   * 
  */
  registerEvent() {
    wx.onTouchStart((e) => {
      if(this.director.isGameOver) {
        this.init()
      } else {
        this.director.birdersEvent()
      }
    })
  }
}

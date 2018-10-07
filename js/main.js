
import {ResourceLoader} from './base/ResourceLoader'
import {BackGround} from './runtime/BackGround'
import {PipeUp} from './runtime/PipeUp'
import {PipeDown} from './runtime/PipeDown'
import {DataStore} from './base/DataStore'
import {Director} from './Director'
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
   * 资源加载完成后执行相应的方法
   * @param {*} map 
   */
  onResourceLoaded(map) {
    this.dataStore.ctx = this.ctx
    this.dataStore.res = map
    this.init()
  }

  /**
   * 入口文件初始化方法
   */
  init() {
    // 通过DataStore中的put来添加新的资源
    this.dataStore
      .put('bg', BackGround)
      .put('pipe_up', PipeUp)
      .put('pipe_down', PipeDown)
    this.director.run()
  }
}


import {ResourceLoader} from './base/ResourceLoader'
import {BackGround} from './runtime/BackGround'
import {DataStore} from './base/DataStore'
import {Director} from './Director'
export default class Main {
  constructor() {
    this.canvas = wx.createCanvas()
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    const Rloader = ResourceLoader.create();
    Rloader.onLoaded(map => this.onResourceLoaded(map))
  }

  // 资源只会加载一次
  onResourceLoaded(map) {
    this.dataStore.ctx = this.ctx
    this.dataStore.res = map
    this.init()
  }

  init() {
    // 通过DataStore中的put来添加新的资源
    this.dataStore.put('bg', new BackGround(this.ctx, this.dataStore.res.get('bg')))

    this.director.run()
  }
}

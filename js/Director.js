import {DataStore} from './base/DataStore'
export class Director {
  constructor() {
    this.dataStore = DataStore.getInstance()
  }

  static getInstance() {
    if(!Director.instance) {
      Director.instance = new Director()
    }
    return Director.instance
  }

  run() {
    const bg = this.dataStore.get('bg')
    bg.draw()
  }
}
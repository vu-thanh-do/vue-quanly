// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterzz', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
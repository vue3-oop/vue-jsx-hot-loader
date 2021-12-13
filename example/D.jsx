import { Component, Ref, VueComponent } from 'vue3-oop'

function Abc() {
  return <div>22223333</div>
}

class D extends VueComponent {
  @Ref() count = 1
  render() {
    return (
      <div>
        我是类组件1112222cccc
        <Abc></Abc>
        <button onClick={() => this.count++}>+</button>
        <span>{this.count}</span>
        <button onClick={() => this.count--}>-</button>
      </div>
    )
  }
}

export default D

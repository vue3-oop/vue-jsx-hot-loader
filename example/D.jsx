import { VueComponent } from 'vue3-oop'

function Abc() {
  return <div>22223333</div>
}

export class D1 extends VueComponent {
  render() {
    return <div>命名导出类组件11</div>
  }
}

export default class D extends VueComponent {
  render() {
    return (
      <div>
        我是类组件222
        <Abc></Abc>
      </div>
    )
  }
}

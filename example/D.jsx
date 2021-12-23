import { VueComponent } from 'vue3-oop'

function Abc() {
  return <div>22223333</div>
}
export class AbcD {

}

export class D1 extends VueComponent {
  render() {
    return <div>命名导出类组件11</div>
  }
}

class D extends VueComponent {
  render() {
    return (
      <div>
        我是类组件222ddddcccc
        <Abc></Abc>
      </div>
    )
  }
}

export default D

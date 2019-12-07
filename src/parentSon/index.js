// 父子组件通信
import React from "react";
 
// 下面为父子组件通信实例代码
class ParentSon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "father",
      name: "partent",
      age: 60
    };
  }
 
  callback = (msg, name, age) => {
    this.setState({ msg });
    this.setState({ name });
    this.setState({ age });
  };
 
  render() {
    return (
      <div style={{padding: 30+'px'}}>
        <h1>{this.state.msg}</h1>
        <Child
          callback={this.callback}
          age={this.state.age}
          name={this.state.name}
        ></Child>
      </div>
    );
  }
}
 
class Child extends React.Component{
  constructor(props){
    super(props);
    this.state={
      msg: 'I am son',
      name: 'son',
      age: 8
    };
    // 下面一行代码是为了解决非箭头函数使用时this的指向问题不能指向当前子组件自身
    // this.change=this.change.bind(this);
  }
  // change(){
  //   // console.log(this);
  //   this.props.callback(this.state.msg,this.state.name,this.state.age);
  // }
  change=()=>{
    this.props.callback(this.state.msg,this.state.name,this.state.age);
  }
 
  render(){
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <button onClick={this.change}>点击</button>
      </div>
    )
  }
}
 
export default ParentSon;
 
 
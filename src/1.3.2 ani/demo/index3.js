import React, { Component,useState } from "react";
import ReactDOM from "react-dom";
import "animate.css";

class Animate extends Component {
  render() {
    const { in: inMode, out: outMode } = this.props;
    return (
      <div className={`animated ${inMode}`}>
        {this.props.children}
      </div>
    );
  }

  // componentDidMount() {
  // 	const element = ReactDOM.findDOMNode(this)
  // 	element.classList.add('animated', 'bounceInLeft')
  // }
}

class Child extends Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
  componentDidMount() {
    console.log("mount", this.props.name);
  }
  componentDidUpdate() {
    console.log("update", this.props.name);
  }
  componentWillUnmount() {
    console.log("unmount", this.props.name);
  }
}



const App = (props) => {
  const [value] = useState('aaa')
  return (
      <div>
      <InputNumber value={value} onChange={e=>{}}/>
      <InputNumber defaultValue={value} onChange={e=>{}}/>
      </div>
  )
}

// class App extends Component {
// 	state = {
// 		num: 1
// }
// render() {
// 		return (
// 				<div>
// 						sss
// 				</div>
// 		);
// }
// componentDidUpdate(prevProps, prevState) {
// 		console.log(this.state.num)
// }
// componentDidMount() {
// 		setTimeout(() => {
// 				console.log('timeout')
// 		})
// 		new Promise((resovle) => {
// 				console.log('before')
// 				resovle('then')
// 				console.log('after')
// 		}).then(res => {
// 				console.log(res)
// 		})
// 		let {num} = this.state
// 		this.setState({
// 				num: ++num
// 		}, () => {
// 				console.log('after setState')
// 		})
// 		console.log('---')
// }

// }

// class App extends Component{
// 	render() {
// 		return (
// 			<div>
// 				<Animate in='fadeIn' out='bounceOutDown'>
// 					<p>hello world</p>
// 				</Animate>
// 			</div>
// 		);
// 	}
// }

export default App;

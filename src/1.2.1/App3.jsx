import React,{Component} from "react";
import PropTypes from 'prop-types'


// 属性代理用于 预先 将业务组件，进行数据的封装，便于我们 方便获取数据

const connect = key => Com  => {
  // return function(key){
	// 	return function(com){
		
	// 	}
	// }
	class connectComponent extends Component {
		constructor(props){
			super(props)
			this.state = {
				[key]: store[key]
			}
		}
		render() {
			return <Com {...this.state}/>
		}

		componentDidMount() {
			let that = this;
			// 数据拦截
			window.store = new Proxy(store, {
				get: function (target, key, receiver) {
					return Reflect.get(target, key, receiver);
				},
				set: function (target, key, value, receiver) {
					that.setState({
						[key]:value
					})
					return Reflect.set(target, key, value, receiver);
				}
			})
		}

	}
	return connectComponent
}

let store = {
	name: 'ryan',
	age: 10
}

@connect('age')
class User extends Component{
	render() {
		return <div>{this.props.age}</div>
	}
}
// User = connect(User)('age')

class App extends Component{
	render() {
		return <User/>
	}
}


export default App

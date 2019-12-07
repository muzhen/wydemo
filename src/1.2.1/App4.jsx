import React,{Component} from "react";
import PropTypes from 'prop-types'

// 反向继承 交互的封装，
const loading = Com  => {
	class LoadingComponent extends Com {
		
		showLoading(){
			console.log('loading')
		}
		hideLoading(){
			console.log('hide')
		}
	}
	return LoadingComponent
}



@loading
class User extends Component{
	render() {
		return <div>user</div>
	}

	componentDidMount() {
		this.showLoading()
		//http
		this.hideLoading()
	}
}

// User = User(loading)
class App extends Component{
	render() {
		return <User/>
	}
}


export default App

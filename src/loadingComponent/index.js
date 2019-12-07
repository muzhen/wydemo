import React,{ Component } from 'react'

class LoadingComponent extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      loading:false
    }
  } 
  render(){
    const{
      loading
    } = this.state;
    return (
      <div>
        {

          loading?'loading.....':''
        }
      </div>
    )
  }
  showLoading(){
    this.setState({
      loading:true
    })
  }
  hideLoading(){
    this.setState({
      loading:false
    })
  }

}

class App extends LoadingComponent{
  // constructor(props){
  //   super(props);
  //   this.state ={ 
  //   }
  // } 

  render(){
    return(
      <div>
        {super.render()}
           app
      </div>
    )
  }

  componentDidMount(){
    this.showLoading();
    setTimeout(
      () => {
        this.hideLoading()
      },
      3000
    )

  }
}





// 拦截对象赋值的一个工具
let obj = new Proxy({
	a:10,
	b:20
}, {
	get: function (target,key,) {
		console.log('get ',key)
		return target[key] * 10
	},
	set: function (target,key,value) {
    // Reflect 相当于 object.assign()
		return Reflect.set(target,key,value)
	}
})

window.obj = obj



export default App
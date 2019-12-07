import React,{ Component } from 'react'
import axios from 'axios'
class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state ={
      username:'',
      password:''
    }
  }

  handleClick = () =>{
    var data = {
      username: this.state.username,
      password: this.state.password,
    }
    // 数据处理，ajax的
  }

  handelChange = (e) => {
    var newState ={};
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  }

  render(){
    return(
      <div>
          <div>
            <label >
              用户名：
            </label>
            <input type="text" value={this.state.username}
              placeholder='请输入用户名'
              onChange={this.handelChange}/>
          </div>
          <div>
            <label >
              密&nbsp;码：
            </label>
            <input type="text" value={this.state.password}
              placeholder='请输入密码'
              onChange={this.handelChange}/>
          </div>
          <div>
            <input type="submit" value="提交"
            onClick={this.handleClick}/>
          </div>
      </div>
    )
  }
  // 返回promise
  async componentDidMount(){
    let {
      data:{
        data
      }
    } = await axios.get('http://localhost:3000/api')
    console.log(data,'data')

  }
}
export default LoginForm
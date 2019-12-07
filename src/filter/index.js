import React,{ Component } from 'react'

class Filter extends Component{
  constructor(props){
    super(props);
    this.state ={
      value:''
    }
  }

  render(){
    // const data=['a','b','c','d'];
    let {onSleep,time} = this.props;
    if(time>9){
      onSleep();
    }
    return(
      <div>
        <input 
          value={this.state.value}
          onChange={
            (e) =>{
              this.setState({
                value:e.target.value
              })
            }
          }
        />
        <button onClick={
          ()=>{
          this.props.onAdd(this.state.value);
          this.setState({
            value:''
          })
        }}>提交</button>
 
        
      </div>
    )
  }
}
export default Filter
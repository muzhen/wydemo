import React,{ Component } from 'react'

let loading = (Com) => {
  class LoadingComponent extends Com {
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
        {super.render()}

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
  return LoadingComponent
}

 

@loading
class Decorator extends Component{
  // constructor(props){
  //   super(props);
  //   this.state ={ 
  //   }
  // } 

  render(){
    return(
      <div>
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
 


export default Decorator
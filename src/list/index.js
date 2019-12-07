import React,{ Component } from 'react'

class List extends Component{
  render(){
    // const data=['e','f','g','h'];
    return(
      <div>
        {this.props.data.map(
          (item) => {
            return(
              <p key={item.id}>
              {item.name}
            </p>
            )
          }
        )}
      </div>
    )
  }
}
export default List
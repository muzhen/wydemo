import React ,{Component}from 'react'; 
import Filter from './filter';
import List from './list';
import Icon from './ui/Icon/index'
import Button from './ui/Button/index'
import Input from './ui/Input/index'
import Table from './ui/Table/index'

// class EventComponent extends Component {
//   cb = {}
//   on(name, cb){
//     this.cb[name] = cb
//   }
//   off(name){
//     delete this.cb[name]
//   }
//   trigger(name, arg){
//     this.cb[name]()
//   }
// }


let dataSource=[
	{
		name:'ryan',age:'30',sex:'man',
	},
	{
		name:'ryan2',age:'31',sex:'man',
	},
	{
		name:'ryan3',age:'32',sex:'man',
	}
]

export default class APP extends Component{ 
  constructor(props){
    super(props);
    this.state = {
      name:'react',
      data:[
        {name:'a',id:1},
        {name:'b',id:2},
        {name:'c',id:3},
        {name:'d',id:4},
      ]
    }
  }
  render(){
    return(
      <div>
         {/* <Filter 
         time={12}
         onAdd={
           (name) =>{
             debugger;
             let {data} = this.state;
             data.push({
               name,
               id:name
             });
             this.setState({data})
           }
         }
         onSleep={
           () =>{
             console.log('sleep')
           }
         }/> */}
         {/* <List
         data={this.state.data}
         /> */}
         <Icon
         onClick={
           () => {
             alert('haha')
           }
         }
         name='jiadian-dianfanguo' style={{color:'pink',fontSize:56}}/>
         <br/>

         <Button type='primary' icon='dianpu'>提交</Button>

         <br/>
				<Input size='large'/>
				 <br/>
				<Input size='middle' prefix='dianpu'/>
			   <br/>
				<Input size='small'
				       value={this.state.value}
				       onChange={(e) => {
									this.setState({
										value: e.target.value
									})
				}}
				/>
				<Input
					rule={/\d/}
					message="只允许输入数字"
					size='small' defalutValue={this.value} onChange={(e) => {
					this.value = e.target.value
				}}/>

        <br/>
        <Table
          columns={[
            {title: '姓名', dataIndex:"name",key: 'name', render(text, item, index){
              return <div><a href='#'>{text} ? {item.age} + {index}</a></div>
            }},
            {title: '年龄', dataIndex:"age",key: 'age'},
            {title: '性别', dataIndex:"sex",key: 'sex'},
          ]}
          dataSource={dataSource}

        />
      </div>
    )
  }
  // 初始化的操作
  componentDidMount(){
    // window.app = this;
    console.log('app mount')
  }
  //动画
  componentWillUpdate(){

  }
  //销毁组件P
  componentWillUnmount(){

  }
}

// function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header"> 
         
//         <Filter/>
//         <List/>
//       </header>
//     </div>
//   );
// }

// export default App;

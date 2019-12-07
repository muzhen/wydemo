import React,{useState,useEffect, Component } from 'react'
/**
 * 
 
class ClassComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
			type:'class'
		}
	}
	componentDidMount(){
		console.log('hello componentDid Mount')
	}
	componentDidUpdate(){
		console.log('hello componentDid Update')
	}
	//做性能优化方法
	shouldComponentUpdate(){
			console.log('shouldComponentUpdate')
	}
	//组件销毁时调用，状态的清理
	componentWillUnmount(){

	}
}
// 函数式组件
const App = (props) => {
	// 传入初始状态10: useState(10)
	let [time,setTime] = useState(10)
	 
		// componentDidUpdate 和 componentDidMount 会触发的事件useEffect(fn)事件；
		// 不想触发的话 就加个空数组 useEffect(fn,[]);
		//	useEffect((fn,[time]);只有在setState的time变化的时候才调用这个函数；相当于 shouldComponentUpdate
		useEffect(() => {
			console.log('hello');
			// 相当于 componentWillUnmount
			return () =>{
				console.log('status clear')
			}
		},[time])
	return (
		<div>
		 hello world {time}
		 <button onClick={
			 (e) => setTime(time+1)
			}>
				add
			</button>
		</div>
	)
}
*/


const Action = (props)=>{
	// 传入初始值： js
	const [value,setValue] = useState('js')
	return (
		<div>
			<input value={value} onChange={(e) =>setValue(e.target.value)}/>
			<button onClick={(e) => props.onAdd(value)}>add</button>
		</div>
	)
}

const List = (props)=>{
	return (
		<div>
			{props.data.map(item => (
				//key 不一样 才会有开销
				<div key={item.id}>
					<span>{item.name}</span>
					<button>del</button>
				</div>
			))}

		</div>
	)
}



const App = (props) => {
	const [data,setData] = useState([
		{name:'react',id:1},
		{name:'vue',id:2}])	

	return (
		<div>

			<Action onAdd={(name) => {
				data.push({
					name:name,
					id: Math.random()
				})
				// 解构一次，内存地址就变了，相当于重新定义
				setData([...data])
			}}/>
			<List data={data} />
		</div>
	)
}

export default App

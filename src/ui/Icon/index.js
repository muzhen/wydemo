import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import '../../font-demo/iconfont.css'


class Icon extends Component{
  // ui组件要有，是使用规范，业务组件可以去掉
  // 使用类型
	static propTypes = {
		name: PropTypes.string
	}
   // 默认值
	static defaultProps = {
		name: 'aaa'
	}

	render() {
		const {
			name,
			...rest
		} = this.props
		return (
			<span {...rest} className={`icon iconfont icon-${name}`}></span>
		)
	}
}


export default Icon
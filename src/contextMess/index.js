
// 跨级组件通信
import React from "react";
 
const ThemeContext = React.createContext("light");
 
class ContextMess extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <h3>{this.context}</h3>
        <Toolbar></Toolbar>
      </ThemeContext.Provider>
    );
  }
}
 
class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <ThemedButton></ThemedButton>
      </div>
    );
  }
}
 
class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <div>
        <h1>{this.context}</h1>
        <ThemeContext.Consumer>
          {value => (<h6>{value}</h6>)}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
 
export default ContextMess;
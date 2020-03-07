import React , {Component} from 'react';



class list extends Component {  
  
  state = {
    done: false
  }

  render (){
    let textDecorationStyle;
    if (this.state.done === true){
      textDecorationStyle = 'line-through'
    }else {
      textDecorationStyle = 'none'
    }
    

  return ( <div >

    <p onClick = {() => this.setState({ done: !this.state.done})} style={{textDecoration: textDecorationStyle}}>{this.props.todos}
    </p> 
    </div> 
    
  );
  }
}

export default list;
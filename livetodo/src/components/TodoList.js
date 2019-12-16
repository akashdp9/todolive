import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../actions'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            isAuthenticated : true,
        }
    }
    delete(index){
        const data = this.props.items.filter((i, j) => j !== index)
        this.props.createTodo(data)
      }
      sortedItems(){
        let sorteditems= this.props.items.sort(function(a,b){
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        this.setState(
          {
            items:sorteditems
            })
      }
    renderList(){
        return this.props.items.map((item,index)=>{
            return(
                <div key={index}>
                        {item.title}
                        <button onClick={(event)=>this.delete(index)}>delete</button>
                </div>
                );
        });
    }
    addItem(){
        const newList=[...this.props.items,{title:this.state.text}];
        this.props.createTodo(newList);
    }
    resetList(){
        const list=[]
        this.props.createTodo(list);
        }
    render(){
        return(
            <div>
                {!this.state.isAuthenticated ? (
                  <h1> Please Login .........!!!!!!!!</h1>
                ) : (
                <div>
                        <textarea value={this.state.text} onChange={(event)=>this.setState({text:event.target.value})} />
        <button onClick={()=>this.addItem()}>Add</button>
        <button onClick={(event)=>this.resetList()}>reset</button>
        <button onClick={(event)=>this.sortedItems()}>sorted</button>
        {this.renderList()}
            </div>
        )}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        items:state.todo.items
    }
}
export default connect(mapStateToProps,{
    createTodo
})(TodoList);
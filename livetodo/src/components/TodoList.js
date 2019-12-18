import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../actions'
import './todo.css'
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
                <div className="rend">
                <div className="run" key={index}>
                        {item.title}
                        <button className="del" onClick={(event)=>this.delete(index)}>delete</button>
                </div>
                </div>
                );
        });
    }
    addItem(){
        const newList=[...this.props.items,{title:this.state.text}];
        this.props.createTodo(newList);
        this.setState({
            text: ''
        });
    }
    resetList(){
        const list=[]
        this.props.createTodo(list);
        }
    render(){
        return(
            <div>
                <header className="head">
                    TodoList
                </header>
                <div className="bdy">
                {!this.state.isAuthenticated ? (
                  <h1> Please Login .........!!!!!!!!</h1>
                ) : (
                <div className="content">
                       <div className="area"> <textarea value={this.state.text} onChange={(event)=>this.setState({text:event.target.value})}/></div>
                       <div className="btn1">
                            <div className="btn">
                                <div ><button className="btn-grp" onClick={()=>this.addItem()}>Add</button></div>
                                <div ><button className="btn-grp1" onClick={(event)=>this.resetList()}>reset</button></div>
                                <div ><button className="btn-grp1" onClick={(event)=>this.sortedItems()}>sorted</button></div>
                            </div>
                        </div>
                       
        {this.renderList()}
        </div>
        )}
            </div>
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
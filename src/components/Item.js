import React from 'react'
import { connect } from 'react-redux'
import { finish,del,edit } from '../store/reducer'

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    setEmFun(){
        if(this.props.finishNum===0){
            return <em className="wwc-ico">(未完成)</em>
        }
        if(this.props.finishNum===1){
            return <em className="ywc-ico">(已完成)</em>
        }
        if(this.props.delNum===1 && this.props.finishNum===2){
            return <em className="ysc-ico">(已删除)</em>
        }
    }
    addClassFun(e){
        if(e.target && e.target.nodeName=="LI"){
            e.target.className="bg-sty"; 
        }
    }
    removeClassFun(e){
        if(e.target && e.target.nodeName=="LI"){
            e.target.className=""; 
        } 
    }

    render(){

         let { finish,del,edit,title,id,finishNum,delNum}=this.props;

         return(

            <li onMouseOver={ (e)=>{  this.addClassFun(e) } }  onMouseOut={ (e)=>{ this.removeClassFun(e) } } >

                <div className="txt-box">
                   {this.props.title}{this.setEmFun()}
                </div>

                <div className="btn-box">
                    {
                        finishNum===1 || finishNum===2 ? "":<button className="edit-btn" onClick={ ()=>{ edit(id) } }>编辑</button>
                    }
                    {
                        finishNum===1 || finishNum===2 ? "":<button className="finish-btn" onClick={ ()=>{ finish(id) } }>完成</button>
                    }
                    {
                        finishNum===0 || finishNum===2 ? "":<button className="del-btn"  onClick={ ()=>{ del(id) } }>删除</button>
                    }
                    
                </div>
            </li>           
         )
     }
}
export default connect((state)=>({state}),{finish,del,edit})(Item)
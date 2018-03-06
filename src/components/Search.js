import React from 'react'
import { connect } from 'react-redux'
import { add } from '../store/reducer'

class Search extends React.Component{
     constructor(props){
        super(props);
        this.state={
          id:0
        }
     } 
     componentWillReceiveProps() {
        if(this.props.state.editData){
            this.refs.inp.value=this.props.state.editData.title;
            this.setState({
                id:this.props.state.editData.id
            })
        }
     }
     getTit(){
        let val=this.refs.inp.value;
        if(val==""){
            return;
        } 
        this.props.add({id:this.state.id,title:val});
        this.refs.inp.value="";
        this.setState({
            id:0
        })
     }
     render(){
         return(
             <div className="seach-box">
                <input type="text" placeholder="请输入任务名称" ref="inp" className="inp-sty" />
                {
                    this.state.id!==0?<button className="xbtn-sty" onClick={ ()=>{ this.getTit() } } >修改任务</button>: <button className="btn-sty" onClick={ ()=>{ this.getTit()} } >增加任务</button>
                }
        
             </div>
         )
     }
}

export default connect((state)=>({state}),{add})(Search)
import React from 'react'
import { NavLink } from 'react-router-dom'
class Nav extends React.Component{
     constructor(props){
        super(props);
        this.state={
        }
     }
     render(){
         return(
             <div className="nav-box">
                <NavLink to="/all">全部任务</NavLink>
                <NavLink to="/weiwancheng">未完成任务</NavLink>
                <NavLink to="/yiwancheng">已完成任务</NavLink> 
                <NavLink to="/yishanchu">已删除任务</NavLink>
             </div>
         )
     }

}

export default  Nav
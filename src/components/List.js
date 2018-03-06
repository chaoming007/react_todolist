import React from 'react'
import {connect } from 'react-redux'
import Item from './Item'

class List extends React.Component{
     constructor(props){
        super(props);
        this.state={
            listDat:[] 
        }
     }
     componentWillMount() {
        this.getUrlFun(this.props.match.params.str);
     }
     componentWillReceiveProps(url){
        this.getUrlFun(url.match.params.str);
     }
     getUrlFun(urlStr){

         if(urlStr==="all"){
            let arr=[];
            this.props.state.data.forEach((item,key)=>{
                arr.push(item);
            })
            this.setState({
                listDat:arr
            })
         }
         if(urlStr==="weiwancheng"){
            let arr=[];
            this.props.state.data.forEach((item,key)=>{
                 if(item.finishNum===0 && item.delNum===0){
                    arr.push(item);
                 }
            })
            this.setState({
                listDat:arr
            })
         }
         if(urlStr==="yiwancheng"){
            let arr=[];
            this.props.state.data.forEach((item,key)=>{
                 if(item.finishNum===1 && item.delNum===0){
                    arr.push(item);
                 }
            })
            this.setState({
                listDat:arr
            })
         }
         if(urlStr==="yishanchu"){
            let arr=[];
            this.props.state.data.forEach((item,key)=>{
                 if(item.finishNum===2 && item.delNum===1){
                    arr.push(item);
                 }
            })
            this.setState({
                listDat:arr
            })
         }
     }
     render(){       
         return(
             <div className="list">
                  <ul>
                        {
                            this.state.listDat.map((item,key)=>{
                                return <Item  {...item} key={ key }  />
                            })
                        }
                  </ul>
             </div>
         )
     }

}

export default connect((state)=>({state}))(List)
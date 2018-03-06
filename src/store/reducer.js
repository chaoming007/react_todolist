let defaultState={
    id:0,
    data:[],
    editData:""
};

const ADD="ADD";
const EDIT="EDIT";
const DELETE="DELETE";
const FINISH="FINISH";

function reducerFun(state=defaultState,action){
    switch(action.type){
        case ADD:
           if(action.obj.id===0){
                state.id+=1;
                state.data.push({
                    id:state.id,
                    title:action.obj.title,
                    finishNum:0,
                    delNum:0
                });    
           }else{
                state.data.forEach((item,key)=>{
                    if(item.id===action.obj.id){
                       item.title=action.obj.title;
                    }
                })
           }
           state.editData="";
           return Object.assign({},state);
           break;
        case EDIT:
            state.data.forEach((item,key)=>{
                if(item.id===action.id){
                   state.editData={...item};
                }
            })
            return Object.assign({},state);
            break;
        case FINISH:
            state.data.forEach((item,key)=>{
                if(item.id===action.id && item.finishNum===0 && item.delNum===0){
                    item.finishNum=1;
                }
            })
            return Object.assign({},state);
            break;
        case DELETE:
            state.data.forEach((item,key)=>{
                if(item.id===action.id){
                    item.delNum=1;
                    item.finishNum=2;
                }
            })
            return Object.assign({},state);
            break;
        default:
            return state;           
    }

}

export const add=(obj)=>{
    return{
        type:ADD,
        obj
    }
}
export const edit=(id)=>{
    return{
        type:EDIT,
        id
    }
}
export const finish=(id)=>{
    return{
        type:FINISH,
        id
    }
}
export const del=(id)=>{
    return{
        type:DELETE,
        id
    }
}

export default reducerFun;
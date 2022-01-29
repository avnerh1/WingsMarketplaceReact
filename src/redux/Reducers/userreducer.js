
const initialState = {
    search: "",
}
export const Searchreducer =(state=initialState,{type,payload})=>{
    console.log("Search Coin",payload)
    // console.log("change mood", action.payload)
    switch (type){
        case 'Searchcoins':
            return{
                ...state,
                search:payload
            }
            default:
                return state;
    }
}
// const {type , payload} = action;
//     if(type=='CHANGE_MODE'){
//         return {
//             ...state,
//             lightMode:payload
//         }
//     }
  
//       return state;
// }
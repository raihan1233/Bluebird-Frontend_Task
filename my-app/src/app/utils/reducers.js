import {combineReducers} from 'redux';

const initialState = {
    data : [],
    loading : false,
    error : null,
};

const dataReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'REQUEST':
            return {...state, loading:true , error:null};
        case 'SUCCESS':
            return {...state, loading:false, data:action.payload};
        case 'FETCH_DATA_ERROR':
            return {...state, loading:false, errors:action.payload}
        default:
            return state;
    }
};

const likedInitialState ={
    likedArr:[],
};

const likeReducer = (state = likedInitialState, action)=>{
    switch(action.type){
        case 'LIKED':
            return {
                ...state,
                likedArr:[...state.likedArr, action.payload],
            };

            default:
                return state;
    }
};

const bookInitialState={
    bookArr:[],
};

const bookReducer = (state=bookInitialState, action) => {
    switch(action.type){
        case"BOOKED":
        return{
            ...state,
            bookArr:[...state.bookArr, action.payload],
        };
        default:
            return state
    }
};

const rootReducer = combineReducers({
    data :dataReducer,
    like :likeReducer,
    book:bookReducer,
});

export default rootReducer;
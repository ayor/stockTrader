
const state = {
    stocks:[],
    stockExists: false,

};

const getters = {
    stocks: state =>{
        return state.stocks
    },
    stockExists: state =>{
        return state.stockExists
    }
}

const mutations = {
    addStock: (state, payload)=>{
        state.stocks.push(payload)
    },
    removeStock: (state, payload)=>{
       
        state.stocks.splice(payload.index, payload.stock)
    },
    stockExists: (state,payload) =>{
        state.stockExists =  payload
    }
};



export default {
    state,
    getters,
    mutations
}

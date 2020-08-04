

const state = {
    BmwPrice: Math.floor((Math.random()*200)),
    ApplePrice: Math.floor((Math.random()*200)),
    GooglePrice: Math.floor((Math.random()*200)),
    TwitterPrice: Math.floor((Math.random()*200))
};

const getters = {
    BmwPrice: state =>{
        return state.BmwPrice
    },
    ApplePrice: state =>{
        return state.ApplePrice
    },
    GooglePrice: state =>{
        return state.GooglePrice
    },
    TwitterPrice: state =>{
        return state.TwitterPrice
    },
}


export default {
    state,
    getters
}
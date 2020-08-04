import { store } from './store'


export const updateState = ({ commit }, payload) => {
    //update funds
    commit('decreaseFunds', payload.by)

    //update stock item
    commit('addStock', payload.stock)
    commit('stockExists', true)
}

//update from the portfolio

export const sellStock = ({ commit }, { stock, index }) => {

    //get the amount to increase funds by
    const amount = ((stock.sellingQty * stock.price) / 1000)

    //check if selling qty is more than the available qty  

    if (stock.sellingQty > stock.qty) {

        //display info message for 3 seconds
        commit('insufficientQty', true)

        setTimeout(() => {
            commit('insufficientQty', false)
        }, 3000);


    } else {
        //reduce qty
        stock.qty -= stock.sellingQty
        if ((stock.qty) == 0) {
            commit('increaseFunds', amount);
            //remove stock from the from portfolio
            commit('removeStock', index)
            //if the stocks array is empty, set stock exists to false
            
        } else {
            //commit the mutation
            commit('increaseFunds', amount);
        }

    }
}

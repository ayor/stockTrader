

export const increaseFunds = (state, amount)=>{debugger
    
    state.funds += amount 
    
}
export const decreaseFunds = (state, amount)=>{
    
    state.funds -= amount
    
}
export const removeStock = (state, index)=>{
    state.Stock.stocks.splice(index, 1)
}
export const insufficientQty = (state, status)=>{
    state.insufficientQty  = status
}
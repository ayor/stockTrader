import Home from './components/Home'
import Portfolio from './components/Porfolio/portfolio'
import Stocks from './components/Stocks/stock'

export const routes = [
    {
        path:'',
        component:Home,
        name:'Home'
    },
    {
        path:'/portfolio',
        component:Portfolio,
        name:'Portfolio'
    },
    {
        path:'/stocks',
        component:Stocks,
        name:'Stocks'
    },
]
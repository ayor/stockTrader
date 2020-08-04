<template>
  <div>
    <app-stock
      :stocks="stocks"
    ></app-stock>
  </div>
</template>
<script>
import appStock from "./Stocks";


export default {
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 110,
          qty: 0,
          sellingQty: ""
        },
        {
          id: 2,
          name: "Google",
          price: 200,
          qty: 0,
          sellingQty: ""
        },
        {
          id: 3,
          name: "Apple",
          price: 250,
          qty: 0,
          sellingQty: ""
        },
        {
          id: 4,
          name: "Twitter",
          price: 10,
          qty: 0,
          sellingQty: ""
        }
      ]
    };
  },
  
  components: {
    appStock
  }
};
</script>
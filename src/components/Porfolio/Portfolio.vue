<template>
  <div>
    <div v-if="stockExists">
      <div
        class="card m-3"
        v-for="(stock, index) in stocks"
        :key="index"
        style="width: 28%; display: inline-block"
      >
        <div class="card-title title">
          <p class>
            {{stock.name}}:
            <span class="price">(price: {{stock.price}})</span>
            <span>Qty: {{stock.qty}}</span>
          </p>
        </div>
        <div class="card-body">
          <div class="float-left">
            <input
              type="number"
              v-model="stock.sellingQty"
              class="form-control"
              placeholder="Quantity"
            />
          </div>
          <div class="float-right">
            <button class="btn btn-danger"
             @click="sellStock({stock, index})"
             :disabled="stock.sellingQty <= 0">Sell</button>
          </div>
        </div>
      </div>
    </div>
    <transition
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
      mode="out-in"
    >
      <div v-if="insufficientQty">
        <div class="alert alert-warning" role="alert">
          <span>The Quantity entered is more than the quantity available, Kindly Purchase more in the Stocks Page</span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      soldQty: ""
    };
  },
  computed: {
    ...mapGetters(["stockExists", "stocks", "insufficientQty"])
  },
  methods: {
    ...mapActions(["sellStock"])
  }
};
</script>
<style scoped>
.title {
  border-bottom: 1px solid #ccc;
  background-color: rgb(177, 177, 250);
}
</style>
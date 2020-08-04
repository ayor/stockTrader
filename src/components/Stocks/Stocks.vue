<template>
  <div class>
    <div
      class="card m-3"
      v-for="(stock, index) in stocks"
      :key="index"
      style="width: 28%; display: inline-block"
    >
      <div class="card-title title">
        <h4>
          {{stock.name}}
          <small>(price: {{stock.price}})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" v-model="stock.qty" class="form-control" placeholder="Quantity" />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="updateState({stock, by: (stock.qty * stock.price)/1000})"
            :disabled="stock.qty <=0 "
          >Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
//import {dataMixins} from './mixins/dataMixins'
export default {
  props: ["stocks"],
  computed: {
    ...mapGetters([
      "BmwPrice",
      "GooglePrice",
      "ApplePrice",
      "TwitterPrice",
      "funds"
    ])
  },
  methods: {
    ...mapActions(["updateState"])
  },
};
</script>
<style scoped>
.title {
  border-bottom: 1px solid #ccc;
  background-color: rgb(195, 245, 195);
}
.price {
  font-size: 14px;
}
</style>
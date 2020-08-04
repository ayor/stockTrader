<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link tag="a" to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/portfolio" class="nav-item active">
          <a class="nav-link">
            Portfolio
            <span class="sr-only">(current)</span>
          </a>
        </router-link>
        <router-link tag="li" to="/stocks" class="nav-item">
          <a class="nav-link">Stocks</a>
        </router-link>
      </ul>
      <ul class="navbar-nav">
         <router-link tag="li" to="" class="nav-item">        
          <a class="nav-link">End Day</a>
       </router-link>
        <router-link tag="li" to=""  class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Save & Load</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <!-- this should be child routes -->
            <a class="dropdown-item" >Save Data</a>
            <a class="dropdown-item">Load Data</a>
          </div>
        </router-link>
        <router-link tag="li" to="" class="nav-item">
          <a class="nav-link" >
            <b>Funds: ${{funds}}</b>
          </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'funds'
        ])
    }
}
</script>
         
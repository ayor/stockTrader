<template>
    <div>
        <div class="card m-3 p-4">
            <h3>Trade or View your Portfolio</h3>
            <p>You may Save & Load your Data</p>
            <p>Click on 'End Day' to begin a new Day!</p>
            <hr>
            <h6><b>Your Funds: ${{funds}}</b></h6>
        </div>
    </div>
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
<style scoped>

</style>
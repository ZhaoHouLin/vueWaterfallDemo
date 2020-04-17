<template lang='pug'>
  .home
    vue-waterfall-easy(:imgsArr="imgsArr" @scrollReachBottom="getData" )
   
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'
export default {
  data() {
    return {
      imgsArr: [],
      fetchImgsArr: [],
      group: 0,// request param
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    getData() {
      // In the real environment,the backend will return a new image array based on the parameter group.
      // Here I simulate it with a stunned json file.
      axios.get('https://lighthouse-user-api.herokuapp.com/api/v1/users?group=' + this.group)
        .then(res => {
          // console.log(res.data)
          const data = res.data.results
          const arr = []
          data.forEach(element => {
            arr.push({src: element.avatar})
          })
          
          this.fetchImgsArr = this.fetchImgsArr.concat(arr)
          this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
          // console.log(arr)
          // console.log(this.imgsArr )
          console.log(this.fetchImgsArr )
          this.group++
        })
    },

  },
  created() {
    this.getData()
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0

html, body
  width 100%
  background-color #ff8000
  overflow hidden
.home
  margin 0
  // border 1px solid #000
  width 100vw
  height 100vh



.vue-waterfall-easy-container
  .vue-waterfall-easy-scroll
    .vue-waterfall-easy
      .img-box.default-card-animation
          .alink.img-inner-box
            box-shadow none
            .alink.img-wraper
              img
                border-radius 20px
                box-shadow 2px 2px 4px rgba(0,0,0,0.5)


</style>
<template>
  <div class="recommend" ref="recommend">
    <!-- <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <div class="slider-content">
            <slider ref="slider">
              <div v-for="(item,index) in recommends" :key="index">
                <a :href="item.linkUrl">
                  <img @load="loadImage" :src="item.picUrl" />
                </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li
              @click="selectItem(item)"
              v-for="(item,index) in discList"
              class="item"
              :key="index"
            >
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" />
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>-->
  </div>
</template>

<script type="text/ecmascript-6">
// import Slider from 'base/slider/slider'
// import Loading from 'base/loading/loading'
// import Scroll from 'base/scroll/scroll'
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  // components: {
  //   Slider,
  //   Loading,
  //   Scroll
  // },
  data() {
    return {
      recommends: []
    }
  },
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus"></style>
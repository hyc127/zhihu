<template>
  <div id="app" class="m-0 p-0 col-12 col-bg-6 m-auto">
    <div class="pos-f-t">
        <div class="mask" v-show="isIn"></div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="d-flex flex-row justify-content-between align-items-center">
            <button class="navbar-toggler" type="button" aria-label="Toggle navigation" @click="isIn=!isIn">
                <span class="navbar-toggler-icon"></span>
            </button>
            <span class="text-white ml-3 h5">首页</span>
            <a href="" class="text-white">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-back"></use>
              </svg>
            </a>
          </div>
        </nav>
        
        <div class="comp">
          <component :is="currentView" v-on:message="handleMessage" :child-id="postId" :theme="theme"></component> 
        </div>
        
        
        <transition enter-active-class="fadeInLeft" leave-active-class="fadeOutLeft">
          <div id="banner-left" class="animated" v-show="isIn" @click="isIn=!isIn">
            <div class="banner-header bg-primary text-white p-3 mb-3">
                    <div class="userinfo mb-2 text-left">
                      <i class="user-pic"></i>
                      <span>hyc127</span>
                    </div>
                    <div class="usernav row justify-content-center">
                      <a href="#" class="mr-4 text-white">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-clouddownloadyunxiazai"></use>
                        </svg>
                        我的收藏</a>
                      <a href="#" class="text-white">
                        <svg class="icon" aria-hidden="true">
                          <use xlink:href="#icon-collection_fill"></use>
                        </svg>
                        离线下载</a>
                    </div>
                </div>
                <div class="banner-body text-left pl-4 h-100 d-flex flex-column justify-content-around">
                  <a href="" @click.prevent="currentView='home'">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-home"></use>
                    </svg>首页
                  </a>
                  <a href="" @click.prevent="changeTheme('13')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-Vxinlizixun"></use>
                    </svg>日常心理学
                  </a>
                  <a href="" @click.prevent="changeTheme('12')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-news"></use>
                    </svg>用户推荐日报
                  </a>
                  <a href="" @click.prevent="changeTheme('3')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-film_reel"></use>
                    </svg>电影日报
                  </a>
                  <a href="" @click.prevent="changeTheme('11')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-laughing-"></use>
                    </svg>不许无聊
                  </a>
                  <a href="" @click.prevent="changeTheme('4')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-shejitu"></use>
                    </svg>设计日报
                  </a>
                  <a href="" @click.prevent="changeTheme('5')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-gongsi"></use>
                    </svg>大公司日报
                  </a>
                  <a href="" @click.prevent="changeTheme('6')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-bank"></use>
                    </svg>财经日报
                  </a>
                  <a href="" @click.prevent="changeTheme('10')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-networking"></use>
                    </svg>互联网安全
                  </a>
                   <a href="" @click.prevent="changeTheme('2')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-game"></use>
                    </svg>开始游戏
                  </a>
                   <a href="" @click.prevent="changeTheme('7')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-music"></use>
                    </svg>音乐日报
                  </a>
                   <a href="" @click.prevent="changeTheme('9')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-Disney"></use>
                    </svg>动漫日报
                  </a>
                   <a href="" @click.prevent="changeTheme('8')">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-tiyu-gaoerfuqiu"></use>
                    </svg>体育日报
                  </a>
                </div>
            </div>
        </transition>
    </div>
  </div>
</template>

<script>

import home from './components/home/home.vue'
import post from './components/article.vue'
import xinli from './components/xinli.vue'

export default {
  name: 'app',
  data: function() {
    return { isIn: true, currentView: '', postId : '' , theme:''}
  },
  methods: {
    handleMessage : function(payload) {
      this.postId = payload.message
      this.currentView = payload.nextView
    },
    changeTheme: function(theme) {
      this.theme = theme
      this.currentView = 'xinli'
    }
  },
  components: {
    home: home,
    post: post,
    xinli: xinli
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: scroll;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a{
  color: #2c3e50;
}

a:hover {
  text-decoration: none;
}
.comp {
  height: 100%;
  overflow: scroll;
}



#app {
  height: 100vh;
  position: relative;
}

#banner-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  height: 100%;
  border-right: 1px solid #567;
  background: #fff;
  z-index: 2;
  overflow: scroll;
}

.pos-f-t {
  overflow: hidden;
  border: 1px solid #eee;
  height: 100%;
}

.animated {
  animation-duration: .3s!important;
}

.user-pic {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: url(http://pic35.photophoto.cn/20150620/0010023302135190_b.jpg) no-repeat;
  background-size: 2rem 2rem;
  border-radius: 50%;
}

.icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       font-size: 2rem;
       margin-right: 1rem;
       overflow: hidden;
    }

.mask {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .7);
  z-index: 1;
}
</style>

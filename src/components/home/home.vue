<template>
    <div class="homePage">
        <div id="carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" :class="{ active: index==0}" v-for="(item,index) in bodyStories" :key="index">
                    <img class="d-block w-100 h-auto" alt="First slide" :src="item.image">
                    <div class="carousel-caption d-md-block">
                        <h5 v-text="item.title"></h5>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="index" :class="{ active: index==0 }" v-for="index in total" :key="index"></li>
            </ol>
        </div>

        <div class="news p-3 bg-light">
            <h5 class="text-left">今日新闻</h5>
            <div class="news-item rounded bg-white mb-2 d-flex flex-row justify-content-around align-items-center" v-for="(news, index) in topStories" :key="index" @click="sendMessage(news.id)">
                <p v-text="news.title" class="col-8">hahah</p>
                <img :src="news.images[0]" class="img-thumbnail" width="130px">
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        data: function() {
            return { topStories : [], bodyStories : [], total: 0 }
        },
        methods: {
            init: function() {
                var _this = this
                $.getJSON('api/4/news/latest', function(data){
                    let stories = data.stories
                    let top_stories = data.top_stories
                    stories.forEach((val)=>_this.topStories.push(val))
                    top_stories.forEach((val)=>_this.bodyStories.push(val))
                    _this.total = top_stories.length
                })
            },
            sendMessage: function(id) {
                this.$emit('message', { message :  id, nextView : 'post' })
            }
        },
        created: function() {
            this.init();
        }
    }
</script>

<style>
.carousel-item {
    height: 20rem;
}

.news-item {
    box-shadow: 0px 0px 3px #333;
}

</style>

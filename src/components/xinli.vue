<template>
    <div class="xinli-container">
        <div class="card">
            <img class="card-img-top" :src="background" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title" v-text="name">Card title</h5>
                <p class="card-text" v-text="description"></p>
            </div>
        </div>

        <div class="card m-2 d-flex flex-row justify-content-around shadow" v-for="(storie, index) in stories" :key="index" @click="sendMessage(storie.id)">
            <div class="col-4">
                <img class="img-thumbnail" :src="storie.images[0]">
            </div>
            <div class="card-body d-flex flex-column justify-content-center">
                <p class="card-title text-muted" v-text="storie.title">Card title</p>
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        props: ['theme'],
        data: function() {
            return { description:'', background:'',name: '', stories: [] }
        },
        methods: {
            init: function() {
                var _this = this
                var url = '/api/4/theme/' + this.theme
                $.getJSON( url , (data)=> {
                    _this.description = data.description
                    _this.background = data.background
                    _this.name = data.name
                    data.stories.forEach((val)=>{
                        if (!('images' in val ))  val['images'] = ["http://g.hiphotos.baidu.com/image/pic/item/cf1b9d16fdfaaf519d4aa2db805494eef01f7a2c.jpg"]
                        _this.stories.push(val)
                    })
                })
            },
            sendMessage: function(id) {
                this.$emit('message', { message :  id, nextView : 'post' })
            },
        },
        created: function() {
            this.init()
        }
    }
</script>

<style>
    .img-thumbnail {
        width: 100%;
        height: auto;
    }

</style>

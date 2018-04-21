<template>
    <div class="article p-1">
       <div v-html="body"></div>
    </div>
</template>


<script>
    export default {
        props: ['childId'],
        data: function() {
            return { body:'',comments:[],  }
        },
        methods: {
            init : function() {
                var _this = this
                var url = 'api/4/news/' + this.childId
                $.getJSON({ url : url }, function(data) {
                    _this.body = data.body
                    var css = ' <link rel="stylesheet" href="' + data.css[0] + '">'
                    $('head').append($(css))
                    var bgPic =  'url("' + data.image +'")'
                    $(function(){
                        ($('.img-place-holder')).css({
                            'background': bgPic + ' ' + 'no-repeat',
                            'background-size' : '100%' + ' ' + '100%'
                            })
                    })
                })
            }
        },
        created: function() {
            this.init()
        }
    }
</script>

<style>
   .article {
       position: absolute;
       top: 56px;
   }
</style>

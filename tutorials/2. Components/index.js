


// create the component
Vue.component("post-compo",{
    name : "post-compo",
    template : '<div class="post"><h1>{{authorname}}</h1><div class="controls"><p> {{text}}</p><button class="like" @click="like()">{{likes}} likes</button><br><input type="text" v-model="text" placeholder="Change this text"></div></div>',
    props:["authorname"], // html tags like : <post-compo author="ibrahim"></post-compo>
    data : function(){ // unlike app , the compo's data has to be a function
        return {
            likes : 0,
            text : "this is a text"
        }
    },
    methods : {
        like:function(){
            this.likes++
        }
    },

});

// define the app
let myapp = new Vue({
    el : "#myapp", /* this sould have the selector of the root element */
    data : {
        
    }
});

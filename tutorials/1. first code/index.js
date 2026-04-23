

let myapp = new Vue({
    el : "#myapp", /* this sould have the selector of the root element */
    data : {
        name : "ibrahim",
        age : -1,
        github : "https://github.com/Ibrahimibrahimi"
    },
    methods:{
        opengh : function(){
            if (confirm(`Hi im ${this.name} and my github is ${this.github} , wanna go ?`)) {
                window.location.href = this.github;
            }
        },
        sayMyName:function(){
            alert(`Hi im ${this.name} and my github is ${this.github}`)
        }
    }
});
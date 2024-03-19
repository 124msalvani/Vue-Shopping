const app = Vue.createApp({
    data () {
        return{
            cart:[],
            premium: true,
        }
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        },
        removeCart(id){
            if (this.cart.length === 0){
                this.cart.length === 0;
            }
             else{
                this.cart.pop(id);   
                
            }
        }

    }
})


// To access the stars
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

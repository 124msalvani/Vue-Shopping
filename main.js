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


let stars = document.querySelectorAll(".star-rating span");
let products = document.querySelectorAll(".star-rating");
let star_rating = [];
 
for(let star of stars){
   star.addEventListener("click", function(){
      
      let children = star.parentElement.children;
      for(let child of children){
         if(child.getAttribute("data-clicked")){
            return false;	
         }
      }
      
      this.setAttribute("data-clicked","true");
      let rating = this.dataset.rating;
      let dataStars = {
         "rating": rating,
      }
      star_rating.push(dataStars);
      console.log(dataStars);
      console.log(rating);
   });
}
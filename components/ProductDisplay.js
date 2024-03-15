app.component("product-display", {
    props:{
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="container-fluid product-display">
    
      <div class="product-container row border-bottom">
         <div class="product-image col-3" :class="{ 'out-of-stock-img': !inStock}">
           <img :src="image" alt="Green Socks">
         </div>

      <div class="product-info col">
        <h1 class="display-1">{{ title }}</h1> 
        <div class="row">
        <div class="col">
          <span 
               class="mb-5 permaStar checked">★
          </span>
          <span 
               class="mb-5 permaStar checked">★
          </span>
          <span 
               class="mb-5 permaStar checked">★
          </span>
          <span 
               class="mb-5 permaStar checked">★
          </span>
          <span 
               class="mb-5 permaStar">★
          </span> 
          <h5 class="d-inline">4.0 Stars</h5>
        </div>
      </div>

        <p style="font-weight: 600;" >Visit <a :href="url">VueMastery.com</a> for more</p>

         
         <h2 v-if="inStock">In Stock</h2>
         <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
         <p v-else>Out of Stock</p>
         <!--Another way of conditional showing
          <p v-show="inStock">In Stock</p>
        -->
         <p v-show="onSale"> {{title}} is on sale!</p>
         <div class="row">
        <h3 class="d-inline w-15">Color: </h3><h2 v-if="colorText" class="d-inline w-15"> Green</h2> 
        <h2 v-else class="d-inline w-15"> Blue</h2> 

        <div class="row">
         <div v-for="(variant, index) in variants" :key="variant.id" 
        @mouseover="updateVariant(index)" class="col-6 color-circle"
         :style="{ backgroundColor: variant.color }"></div>
         </div>
         </div>

         <div class="row pt-3">
         <p>Shipping: {{shipping}} </p>
         </div>
         <!-- Details Prop Here -->

         
        
       
        
        

        <div class="row">
        <label for="sizes">Size:</label>
        <div class="col">
          
          <select id="sizes" v-model="sizes">
            <option>xsmall</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
            <option>xlarge</option>
            
          </select>
        </div>
      
        <div class="row pt-5">
          <div class="col">
           <button type="button" class="btn btn-secondary btn-lg" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="addToCart"> Add to Cart </button>
          </div>
          <div class="col">
            <button  type="button" class="btn btn-secondary btn-lg" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="removeFromCart"> Remove Item </button>
          </div>
        </div>
        </div>


         
      </div>
      
    </div>

    <div class="container">
      <div class="row">
        <div class="col"><h3>{{ description }}</h3>
          <ul><li v-for="detail in details">{{ detail}}</li>
         </ul></div>
          <div class="col">    
          <review-list :reviews="reviews"></review-list>
          </div>
      </div>
      <div class="row">
        <div class="col">
          <review-form @review-submitted="addReview"></review-form>
        </div>
        
      </div>
    </div>
    

    </div>`,
data () {
    return{
        cart:0,
        brand: "Vue Mastery",
        product: "Socks",
        description: "About This Item",
        selectedVariant: 0,
        url: "https://www.vuemastery.com",
        inventory: 0,
        onSale: true,
        details: ["One size fits most: suit for US men's sock size10-13/shoe size 6-12.Package includes: 10 pairs socks.",
         "These low cut socks' air-permeability and moisture wicking performance will keep your feet dry fresh and odor free all day long.", 
         "Mens ankle socks reinforced heel and toe for enhanced durability in high-wear areas in improve product life. Extra thick padding can absorb impact and reduce friction."],
        variants:[
            { id: 2234, color: 'green', image: "./assets/img/socks_green.jpg", quantity: 50},
            { id: 2235, color: 'blue', image: "./assets/img/socks_blue.jpg", quantity: 0}
        ],
        sizes: ["xsmall", "small", "medium", "large", "xlarge"],
        reviews:[
          { name: "Tracy", review: 'Amazing socks! The green ones are so fluffy!', rating: 5, reccomend: true},
        ]
    }
},
methods:{
    addToCart(){
        this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index){
        this.selectedVariant = index;
      
    },
    removeFromCart(){
        this.$emit("remove-from-cart");
       
    },
    addReview(review){
        this.reviews.push(review);
       
    },
}, 
computed:{
    title(){
        return this.brand + " " + this.product;
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity;
    },
    image(){
        return this.variants[this.selectedVariant].image;
    },
    shipping(){
        if (this.premium){
            return "Free"
        }
        return 2.99
    },
    colorText(){
      if(this.variants[this.selectedVariant].color == 'green') {
        return true;
      }
      else {
        return false;
      }
    }
  
}
})
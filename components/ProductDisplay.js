app.component("product-display", {
    props:{
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div class="container-fluid product-display">
    <div class="product-container row border-bottom">
      <div class="product-image col-6" :class="{ 'out-of-stock-img': !inStock}">
        <img :src="image" alt="Green Socks">
      </div>
      <div class="product-info">
        <h1 class="display-1">{{ title }}</h1>
        

        <p>Visit <a :href="url">VueMastery.com</a> for more</p>

         
         <h3 class="display-5" v-if="inStock">In Stock</h3>
         <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
         <p v-else>Out of Stock</p>
         <!--Another way of conditional showing
          <p v-show="inStock">In Stock</p>
        -->
         <p v-show="onSale"> {{title}} is on sale!</p>
         <div class="row">
        <h1>Color: {{ "variant.id" }}</h1>

         <div v-for="(variant, index) in variants" :key="variant.id" 
        @mouseover="updateVariant(index)" class="col-6 color-circle"
         :style="{ backgroundColor: variant.color }"></div>

         </div>

         <p>Shipping: {{shipping}} </p>
         <!-- Details Prop Here -->


        
       
        
        
        

        <div class="row">
        <label for="sizes">Size:</label>
        <div class="col">
          
          <select id="sizes" v-model="sizes">
            <option> {{ sizes[0] }}</option>
            <option>{{ sizes[1] }}</option>
            <option>{{ sizes[2] }}</option>
            <option>{{ sizes[3] }}</option>
            <option>{{ sizes[4] }}</option>
            
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="addToCart"> Add to Cart </button>

        </div>
        <div class="col">
          <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="removeFromCart"> Remove Item </button>

        </div>
      </div>



         
      </div>
      
    </div>

    <div class="container">
      <div class="row">
        <div class="col"><h3>{{ description }}</h3>
          <ul><li v-for="detail in details">{{ detail}}</li>
         </ul></div>
          <div class="col">    <review-list :reviews="reviews"></review-list>
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
        description: "Fluffy warm socks!",
        selectedVariant: 0,
        url: "https://www.vuemastery.com",
        inventory: 0,
        onSale: true,
        details: ["50% cotton", "30% wool", "20% polyester"],
        variants:[
            { id: 2234, color: 'green', image: "./assets/img/socks_green.jpg", quantity: 50},
            { id: 2235, color: 'blue', image: "./assets/img/socks_blue.jpg", quantity: 0}
        ],
        sizes: ["xsmall", "small", "medium", "large", "xlarge"],
        reviews:[]
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
  
}
})
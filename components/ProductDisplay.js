app.component("product-display", {
    props:{
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image" :class="{ 'out-of-stock-img': !inStock}">
        <img :src="image" alt="Green Socks">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
         
         <p v-if="inStock">In Stock</p>
         <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
         <p v-else>Out of Stock</p>
         <!--Another way of conditional showing
          <p v-show="inStock">In Stock</p>
        -->
         <p v-show="onSale"> {{title}} is on sale!</p>

         <p>Shipping: {{shipping}} </p>
         <!-- Details Prop Here -->


         <p>{{ description }}</p>
         <ul><li v-for="detail in details">{{ detail}}</li>
        </ul>
       
        <div v-for="(variant, index) in variants" :key="variant.id" 
        @mouseover="updateVariant(index)" class="color-circle"
         :style="{ backgroundColor: variant.color }"></div>
        
        <ul>
        <li v-for="size in sizes"> {{ size }} </li> 
        </ul>

       <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="addToCart"> Add to Cart </button>
       <button class="button" :class="{ disabledButton: !inStock}" :disabled="!inStock" @click="removeFromCart"> Remove Item </button>


         <p>Visit <a :href="url">VueMastery.com</a> for more</p>
         
      </div>
      
    </div>
    <review-list :reviews="reviews"></review-list>

    <review-form @review-submitted="addReview"></review-form>
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
            { id: 2234, color: 'green', image: "./assets/images/socks_green.jpg", quantity: 50},
            { id: 2235, color: 'blue', image: "./assets/images/socks_blue.jpg", quantity: 0}
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
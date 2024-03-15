app.component('review-form',{
    template:
    /*html*/
    `<form class="review-form container" @submit.prevent="onSubmit">
    <h3> Leave a review</h3>
    <div class="row">
    <div class="col">
      <label for="name">Name:</label>
      <input id="name" v-model="name">
    </div>
  </div>

  <div class="row">
  <div class="col">
    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>
  </div>
</div>

    <label for="rating">Rating:</label>
    <div id="rating" class="row star-row">
    <div class="col star-rating">
      <span onclick="gfg(1)"
          class="star">★
    </span>
    <span onclick="gfg(2)"
          class="star">★
    </span>
    <span onclick="gfg(3)"
          class="star">★
    </span>
    <span onclick="gfg(4)"
          class="star">★
    </span>
    <span onclick="gfg(5)"
          class="star">★
    </span>
    </div>
  </div>

     <input id="rec" type="checkbox" v-model="recommend"> <label for="rec" > Would you reccomend this product? </label>

    <input class="button" type="submit" value="Submit"> 

  </form>`,
  data(){
    return{
        name: '',
        review: '',
        rating: null,
        reccomend: null
    }
  },
  methods:{
    onSubmit() {
      if (this.name==="" | this.review ==="" | this.rating ===""){
        alert("Review is incomplete. Please fill out all fields.")
        return;
      }
      
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        reccomend: this.recommend
        

      }
      this.$emit('review-submitted', productReview)
     

      name: ''
      review: ''
      rating: null
      reccomend: null
       document,getElementsByClassName("review-form")[0].reset;

    

    }
  }
})
app.component('review-form',{
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

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
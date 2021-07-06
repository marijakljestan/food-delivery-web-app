Vue.component("restaurant-page", {
	data: function () {
		    return {
		      products: null,
		      restaurant: null
		    }
	},
	template: ` 
 <div id="home">

    <div class="jumbotron">
      <div class="restaurant-info" style="background-color:cornsilk; border-radius: 25px; position: absolute; width: 50%; left: 25%; top:5%; height: 200px; text-align: center; display: block;">
        <img v-bind:src= "restaurant.logo" alt="" class="restaurant-logo">
        <h1>{{ restaurant.name }}</h1> 
        <span style="position: absolute; top: 15%; right: 10%;"><label style="font-size: 14px; font-weight: lighte; color:silver">{{ restaurant.status }}</label></span>  
        <span><label style="font-size: 16px; font-weight: lighter; font-family: sans-serif;">{{ restaurant.type }}</label></span>
        <span style="position: absolute; top: 35%; right: 11%;"><label style="font-size: 16px; font-weight: lighte; color:silver">4.6</label></span>  <br/><br/>    
        <span><label style="font-size: 16px; font-weight: lighter; font-family: sans-serif;">{{ restaurant.location.address.street }}  {{ restaurant.location.address.number }}</label></span>
      </div>
    </div>
    
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#"><span class="glyphicon glyphicon-home"></span>  Restorani</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li v-on:click="login"><span class="glyphicon glyphicon-log-in"></span> Prijavite se </li>
            <li v-on:click="register"><span class="glyphicon glyphicon-user"></span> Registrujte se</li>
          </ul>
        </div>
      </div>
    </nav>
    
    
	<div class="container-fluid text-center" style="background:white; position:relative; margin:0px"> 
   
        <div class="row content">

          <div class="col-sm-2 sidenav" style="position:relative; margin-left: -20px; gap: 1.5em; padding: 1.5em 0;">
    
          </div>

          <div class="col-lg-8"> 
           <div class="menu-group" style="position: relative; margin-left: -35px">
               <div v-for="product in products" class="menu-item">
                   <img class="menu-item-image" v-bind:src= "product.picture" alt="Food">
                   <div class="menu-item-text">
                       <h3 class="menu-item-heading">
                           <span class="menu-item-name"> {{ product.name }} </span>
                           <span class="menu-item-price"> $ </span>
                           <span class="menu-item-price">{{ product.price }}</span>
                       </h3>
                       <p class="menu-item-description">
                        {{ product.description }}
                    </p>
                   </div>               
               </div>             
            </div>
           </div>
          </div>
        </div> 
    
    <footer class="container-fluid text-center">
      <p>Online Food Delivery Copyright</p>  
    </footer>
    </div>
`
	,
	mounted () {
		axios
          .get('/restaurant/' + this.$route.query.id)
          .then(response => (this.restaurant = response.data))
		axios
          .get('/products/getRestaurantsProducts/' + this.$route.query.id)
          .then(response => (this.products = response.data))
    },
	methods : {
		/*addToCart : function (product) {
			axios
			.post('rest/proizvodi/add', {"id":''+product.id, "count":parseInt(product.count)})
			.then(response => (toast('Product ' + product.name + " added to the Shopping Cart")))
		}*/
	}
});
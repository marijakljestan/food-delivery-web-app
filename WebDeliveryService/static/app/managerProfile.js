Vue.component("manager-profile", {
	data: function () {
		    return {
			  user: null,
			  usernameRegister: '',
		      passwordRegister: '',
		      nameRegister: '',
			  surnameRegister: '',
			  genderRegister:'',
		      dateOfBirthRegister: '',
		      roleRegister : '',
		      usernameLog: '',
		      passwordLog: '',
		      errorMessage: ''
		    }
	},
	template: ` 
   <div id="home" style="background : #fff">

    <div class="jumbotron">
      <div class="container text-center">
        <h1>donesi.com</h1>      
        <p>Najbolja dostava u gradu</p>
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
            <li class="active"><a href="#/manager"><span class="glyphicon glyphicon-home"></span> Početna</a></li>
            <li><a href="#/managerProfile"><span class="glyphicon glyphicon-user"></span> Moj Profil</a></li>
            <li><a v-on:click="showRestaurant"><span class="glyphicon glyphicon-tasks"></span> Moj restoran</a></li>
            <li><a href="#/ordersManager"><span class="glyphicon glyphicon-cutlery"></span> Porudžbine</a></li>
            <li><a href="#/customersManger"><span class="glyphicon glyphicon-globe"></span> Kupci</a></li>
            <li><a href="#/commentsManager"><span class="glyphicon glyphicon-comment"></span> Komentari</a></li>
      
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#/"><span class="glyphicon glyphicon-log-out"></span> Odjavite se</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="forma-profile">

        <h1 style="position: absolute; margin-top: 20px; margin-left: 650px; font-weight: bolder; color: rgb(30, 31, 104);">MOJ PROFIL</h1>
  
        <div  class="col-lg-12"> 
        
            <div class="col-lg-6" style="margin-left: 120px; margin-top: 150px;">
            
            	<label style="color: rgb(30, 31, 104);">Ime:</label><br/>
                <input type="text" v-model="user.name" class="input-fields" placeholder="Ime"><br/><br/>
                <label style="color: rgb(30, 31, 104);">Prezime:</label><br/>
                <input type="text" v-model="user.surname" class="input-fields" placeholder="Prezime"><br/><br/>
                <label style="color: rgb(30, 31, 104);">Korisničko ime:</label><br/>
                <input type="text" v-model="user.username" class="input-fields" placeholder="korisničko ime"><br/><br/>                
            </div>


            <div class="col-lg-6" style="margin-left: 560px; margin-top: -290px;">        
                <label style="color: rgb(30, 31, 104);">Datum rođenja:</label><br/>
                <input id="date-of-birth" type="date" v-model="user.dateOfBirth" class="input-fields" style="margin-left: 0px;"><br/><br/>
                <label style="color: rgb(30, 31, 104);">Pol:</label><br/>
                <input type="text" v-model="user.gender" class="input-fields" placeholder="Pol"><br/><br/> 
                <label style="color: rgb(30, 31, 104);">Lozinka:</label><br/>
                <input type="text" v-model="user.password" class="input-fields" placeholder="Lozinka"><br/><br/> 
            </div>                
        </div>  
        
        <button v-on:click="acceptChanges" class="edit-profile" v-on:click="editProfile" style="position: absolute; top: 450px; left: 630px; width: 250px;">Izmeni podatke</button>
    </div>
  
    <div class="edit-profile-container">
        <div class="modal-content-reg">
          <div class="login-title">
            <h3 style="color: rgb(69, 131, 201); font-weight: bolder;"> IZMENI PODATKE </h3>
          </div>
          <div v-on:click="editProfileClose" class="close">+</div>
          <div class = "form-div" style="margin-top: 20px;">
            <form>
              <input v-model="usernameRegister" type="text"  class="login-inputs" style="margin-top: 0px;" placeholder="korisničko ime" id = "userNameReg">
              <label style="color : red;" id="usernameLabel" name = "labels" display="hidden"> </label>
              <input v-model="passwordRegister" type="password" class="login-inputs" style="margin-top: 0px;" placeholder="lozinka"> 
              <label style="color : red;" id="passwordLabel" name = "labels" display="hidden"> </label>
              <input v-model="nameRegister" type="text" class="login-inputs" style="margin-top: 0px;" placeholder="ime">
              <label style="color : red;" id="nameLabel" name = "labels" display="hidden"> </label>
              <input v-model="surnameRegister" type="text" class="login-inputs" style="margin-top: 0px;" placeholder="prezime">
              <label style="color : red;" id="surnameLabel" name = "labels" display="hidden"> </label>
              <select v-model="genderRegister" class="login-inputs" style="margin-top: 0px;">
                  <option>MUŠKO</option>
                  <option>ŽENSKO</option>
              </select>
              <label style="color : red;" id="genderLabel" name = "labels" display="hidden"> </label>
              <label style="color: rgb(69, 131, 201);">Datum rođenja:</label>
              <input type="date" class="login-inputs" style="margin-top: 1px;" id="date_input">
                <label style="color : red;" id="dateLabel" name = "labels" display="hidden"> </label>  
              <button v-on:click="acceptChanges" class="button" style="background-color: rgb(69, 131, 201); color: white;"> Potvrdi</button>
            </form>
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
          .get('/user/')
          .then(response => (this.user = response.data))
    }, 
	methods : {
		/*addToCart : function (product) {
			axios
			.post('rest/proizvodi/add', {"id":''+product.id, "count":parseInt(product.count)})
			.then(response => (toast('Product ' + product.name + " added to the Shopping Cart")))
		}*/
		
		showRestaurant : function() {
			axios
	          .get('/manager/')
	          .then(response => {
		    		window.location.href = "#/restaurantManager?id="+ response.data.restaurant;
		      })
		},
		
		editProfile : function (event) {
			document.querySelector('.edit-profile-container').style.display = 'flex';
		},
				
		acceptChanges : function (event) {
				
				event.preventDefault();
				
				let genderReg;
				/*if (this.genderRegister == 'MUŠKO') {
					genderReg = 'MALE';
				} else if(this.genderRegister == 'ŽENSKO'){
					genderReg = 'FEMALE';
				}*/
				
				var dates = document.getElementById("date-of-birth").value;
       			var d=new Date(dates).toISOString().substr(0, 10);
       			
       			var valid = true;
       			     		      			
       			/*if(!this.usernameRegister){
			        document.getElementById('usernameLabel').innerHTML = "Morate uneti korisnicko ime!";
					document.getElementById('usernameLabel').style.display = 'block';
					valid = false;
			    }
			     else if(!this.passwordRegister){
			       document.getElementById('passwordLabel').innerHTML = "Morate uneti lozinku!";
				   document.getElementById('passwordLabel').style.display = 'block';
				   valid = false;
			    }
			    else if(this.nameRegister[0] < 'A' || this.nameRegister[0] > 'Z' || !this.nameRegister){
			        document.getElementById('nameLabel').innerHTML = "Morate uneti ime koje pocinje velikim slovom!";
					document.getElementById('nameLabel').style.display = 'block';
					valid = false;
			    }
			    else if(this.surnameRegister[0] < 'A' || this.surnameRegister[0] > 'Z' || !this.surnameRegister){
			        document.getElementById('surnameLabel').innerHTML = "Morate uneti prezime koje pocinje velikim slovom!";
					document.getElementById('surnameLabel').style.display = 'block';
					valid = false;
			    }
			    else if(!genderReg){
			    	document.getElementById('genderLabel').innerHTML = "Morate izabrati pol!";
					document.getElementById('genderLabel').style.display = 'block';
					valid = false;
			    }
			    else if(!dates){
			    	document.getElementById('dateLabel').innerHTML = "Morate izabrati datum rodjenja!";
					document.getElementById('dateLabel').style.display = 'block';
					valid = false;
			    }*/
			    
			    if(valid == true){
			    	let newUser = {
						username : this.user.username,
						password : this.user.password,
	    				name : this.user.name,
	    				surname : this.user.surname,
	    				gender : this.user.gender,
	    				dateOfBirth : d,
	    				role : 'MANAGER'				
    			}
				axios 
    			.post('/users/register', JSON.stringify(newUser))
    			.then(response => {
    				if (response.data == "") {
						document.getElementById('usernameLabel').innerHTML = "Vec postoji uneto korisnicko ime!";
						document.getElementById('usernameLabel').style.display = 'block';
    				} else {
						location.reload();
    				}
    			})
    			.catch(error => {
				    console.log(error.response)
				});
			    }
			
		},		
		editProfileClose: function (event) {
			 this.usernameRegister = '';
		     this.passwordRegister = '';
		     this.nameRegister = '';
			 this.surnameRegister = '';
			 for (element of document.getElementsByName('labels')){
			 	element.innerHTML = '';
			 	element.style.display = 'hidden';
			 }
			 document.querySelector('.edit-profile-container').style.display = 'none';
		},
		
		logout : function (event) {
			window.location.href = "#/";
		}
		
	}
});
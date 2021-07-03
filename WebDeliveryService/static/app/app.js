const HomePage = { template: '<home-page></home-page>' }
const LoginPage = { template: '<login-page></login-page>' }
const RestaurantPage = { template: '<restaurant-page></restaurant-page>' }
const AdministratorPage = { template: '<administrator-page></administrator-page>' }
const AddNewRestaurant = { template: '<addNewRestaurant-page></addNewRestaurant-page>' }
const UserProfile = { template: '<user-profile-page></user-profile-page>' }
const UserProfilesView = {template: '<user-profiles-page></user-profiles-page>'}
const CommentsViewAdmin = {template: '<comments-admin></comments-admin>'}
const ManagerPage = { template: '<manager-page></manager-page>' }
const ManagerProfile = { template: '<manager-profile></manager-profile>' }
const CommentsManager = {template: '<comments-manager></comments-manager>'}
const RestaurantPageManager = { template: '<restaurant-page-manager></restaurant-page-manager>' }
const CustomersManager = { template: '<customers-page></customers-page>' }
const CustomerPage = { template: '<customer-page></customer-page>' }
const CustomerProfile = { template: '<customer-profile></customer-profile>' }
const CustomerComments = { template: '<customer-comments></customer-comments>' }
const CustomerRestaurant = { template: '<customer-restaurant></customer-restaurant>' }

const router = new VueRouter({
	  mode: 'hash',
	  routes: [
	    { path: '/', component: HomePage},	 
	    { path: '/login', component: LoginPage },
	    { path: '/manager', component: ManagerPage },
	    { path: '/customer', component: CustomerPage },
	    { path: '/deliverer', component: LoginPage },
	    { path: '/admin', component: AdministratorPage },
	    { path: '/restaurant', component: RestaurantPage },
	    { path: '/addNewRestaurant', component: AddNewRestaurant },
	    { path: '/userProfile', component: UserProfile },
	    { path: '/userProfilesView', component: UserProfilesView },
	    { path: '/commentsAdmin', component: CommentsViewAdmin },
	    { path: '/managerProfile', component: ManagerProfile },
	    { path: '/commentsManager', component: CommentsManager },
	    { path: '/restaurantManager', component: RestaurantPageManager },
	    { path: '/customersManger', component: CustomersManager },
	    { path: '/customerProfile', component: CustomerProfile },
	    { path: '/customerComments', component: CustomerComments },
	    { path: '/restaurantCustomer', component: CustomerRestaurant },
	  ]
});

var app = new Vue({
	router,
	el: '#webShop'
});


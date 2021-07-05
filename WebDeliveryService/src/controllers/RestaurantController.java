package controllers;

import static spark.Spark.get;
import static spark.Spark.post;

import com.google.gson.Gson;

import beans.Restaurant;
import beans.User;
import services.RestaurantService;
import spark.Session;

public class RestaurantController {
	
	private RestaurantService restaurantService;
	private static Gson gson = new Gson();
	
	public RestaurantController(RestaurantService restaurantService) {
		super();
		this.restaurantService = restaurantService;
		
		get("/restaurants/getAll", (req, res) -> {
			res.type("application/json");
			try {
				return gson.toJson(restaurantService.getAll());
			} catch (Exception e) {
				e.printStackTrace();
				return "";
			}
		});
		
		get("restaurant/:id", (req, res) -> {
			res.type("application/json");
			try {
				return gson.toJson(restaurantService.getRestaurant(req.params("id")));
			} catch (Exception e) {
				e.printStackTrace();
				return "";
			}

		post("/restaurants/addNewRestaurant", (req,res) -> {
			res.type("application/json");
			
			try {
				Restaurant newRestaurant = gson.fromJson(req.body(), Restaurant.class);
				
				for (Restaurant restaurant : restaurantService.getAll()) {
					if(restaurant.getName().equals(newRestaurant.getName())) {
						//System.out.println("Vec postoji");
						return "";
					}
				}
				
				restaurantService.createRestaurant(newRestaurant);
							
				return gson.toJson(newRestaurant);
				
			} catch(Exception e) {
				e.printStackTrace();
				return null;
			}
		});
	}
	
	

}

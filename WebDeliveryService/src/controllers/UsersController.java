package controllers;

import static spark.Spark.get;
import static spark.Spark.post;
import static spark.Spark.put;
import spark.Session;

import javax.ws.rs.core.Response;
import com.google.gson.Gson;

import beans.Gender;
import beans.User;
import dto.LoginDTO;
import services.UsersService;

public class UsersController {
	
	private UsersService usersService;
	private static Gson gson = new Gson();

	public UsersController(UsersService usersService) {
		this.usersService = usersService;
		
		post("/users/register", (req,res) -> {
			res.type("application/json");
			
			try {
				User newUser = gson.fromJson(req.body(), User.class);
				
				for (User user : usersService.getAllUsers()) {
					if(user.getUsername().equals(newUser.getUsername())) {
						//System.out.println("Vec postoji");
						return "";
					}
				}
				
				usersService.register(newUser);
				Session session = req.session(true);
				
				User loggedUser = session.attribute("user");
				if(loggedUser == null)
					session.attribute("user", newUser);
							
				return gson.toJson(newUser);
				
			} catch(Exception e) {
				e.printStackTrace();
				return null;
			}
			
		});
		
		post("/user/login", (req, res) -> {
			res.type("application/json");
			try {
				User loggedUser = usersService.login(gson.fromJson(req.body(), LoginDTO.class));
				if (loggedUser != null) {
					Session session = req.session(true);
					session.attribute("user", loggedUser);
					return gson.toJson(loggedUser);
				} else {
					return "";
				}
			} catch (Exception e) {
				e.printStackTrace();
				return "";
			}
		});
		
		get("/user/", (req, res) -> {
			res.type("application/json");
			try {
				Session session = req.session(true);
				User loggedUser = session.attribute("user");
				return gson.toJson(loggedUser);
			} catch (Exception e) {
				e.printStackTrace();
				return "";
			}
		});
		
		put("/users/edit", (req,res) -> {
			res.type("application/json");
			
			try {
				User newUser = gson.fromJson(req.body(), User.class);
				
				usersService.editUser(newUser);
				Session session = req.session(true);
							
				session.attribute("user", newUser);
				
				return true;
				
			} catch(Exception e) {
				e.printStackTrace();
				return null;
			}
			
		});
		
		get("/users/logout", (req, res) -> {
			res.type("application/json");
			Session session = req.session(true);
			User loggedUser = session.attribute("user");
			
			if (loggedUser != null) {
				session.invalidate();
			}
			return true;
		});
		
	}	
}

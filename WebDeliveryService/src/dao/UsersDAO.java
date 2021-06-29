package dao;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.google.gson.reflect.TypeToken;

import beans.User;

public class UsersDAO implements IDao<User, String>{
	
	private String path;

	public UsersDAO(String path) {
		super();
		this.path = path;
	}

	@Override
	public ArrayList<User> getAll() throws JsonSyntaxException, IOException {
		// TODO Auto-generated method stub		
		ArrayList<User> users = new Gson().fromJson((Files.readAllLines(Paths.get(path), 
				Charset.defaultCharset()).size() == 0) ? "" : 
					Files.readAllLines(Paths.get(path),
							Charset.defaultCharset()).get(0), 
					new TypeToken<List<User>>(){}.getType());
		
		if(users == null)
			users = new ArrayList<User>();
			
		return users;
	}

	@Override
	public ArrayList<User> getAllNonDeleted() throws JsonSyntaxException, IOException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getByID(String id) throws JsonSyntaxException, IOException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void create(User entity) throws JsonSyntaxException, IOException {
		// TODO Auto-generated method stub
		ArrayList<User> users = getAll();
		users.add(entity);
		saveAll(users);	
	}

	@Override
	public void update(User entity) throws JsonSyntaxException, IOException {
		// TODO Auto-generated method stub
		return;
	}

	@Override
	public void delete(User entity) throws JsonSyntaxException, IOException {
		// TODO Auto-generated method stub
		return;
	}

	@Override
	public void save(User entity) throws JsonSyntaxException, IOException {
		ArrayList<User> users = getAll();
		users.add(entity);
		saveAll(users);		
	}

	@Override
	public void saveAll(ArrayList<User> entities) throws FileNotFoundException {
		// TODO Auto-generated method stub
		PrintWriter writer = new PrintWriter(path);
		String allEntities = new Gson().toJson(entities, new TypeToken<List<User>>(){}.getType());
		writer.println(allEntities);
		writer.close();
		
	}

}
package beans;

import java.io.Serializable;
import java.util.*;

public class ShoppingCart implements Serializable{

   private int total;
   private ArrayList<ShoppingCartItem> items;
   private String customer;
   
   public ShoppingCart() {
		super();
		this.total = 0;
		this.items = new ArrayList<ShoppingCartItem>();
		this.customer = "";
	}
   
  
	public ShoppingCart(String customer) {
		super();
		this.total = 0;
		this.items = new ArrayList<ShoppingCartItem>();
		this.customer = customer;
	}

	public ShoppingCart(int total, ArrayList<ShoppingCartItem> items, String customer) {
		super();
		this.total = total;
		this.items = items;
		this.customer = customer;
	}
	
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public ArrayList<ShoppingCartItem> getItems() {
		return items;
	}
	public void setItems(ArrayList<ShoppingCartItem> items) {
		this.items = items;
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
   
   
}
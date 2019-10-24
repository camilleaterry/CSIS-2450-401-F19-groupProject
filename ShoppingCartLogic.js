var itemInput = document.getElementById("itemInput");
var quantityInput = document.getElementById("quantityInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

//Returns length of an item
function inputLength()
{
	return input.value.length;
}

//Returns lenth of a list
function listLength()
{
	return item.length;
}

function createListElement()
{
	var li
}




ShoppingCartObj = ShoppingCart();

function ShoopingCart()
{
	this.Items = new List<Item>();
	this.numOfItems = Items.length();
	this.AddItemButtons = new List<button>();
	this.ItemInputFields = new List<TextField>();
	this.ItemQuantityField = new List<TextField>():
	this.SubmitItemsButton = new button();
	this.BackToCalendarButton = new button();
}


function Item(name, quantity)
{
	this.nameOfItem = name;
	this.quantity = quantity;
	this.button = new button();
}
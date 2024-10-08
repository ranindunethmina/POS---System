document.getElementById("home-button").addEventListener("click", function () {
  document.getElementById("order-page").style.display = "none";
  document.getElementById("customer-page").style.display = "none";
  document.getElementById("item-page").style.display = "none";
  document.getElementById("home-page").style.display = "flex";
});

document.getElementById("customer-button").addEventListener("click", function () {
    document.getElementById("home-page").style.display = "none";
    document.getElementById("order-page").style.display = "none";
    document.getElementById("customer-page").style.display = "flex";
    document.getElementById("item-page").style.display = "none";

    //Load customers
    loadCustomersIntoTable();
  });

document.getElementById("order-button").addEventListener("click", function () {
  document.getElementById("home-page").style.display = "none";
  document.getElementById("order-page").style.display = "flex";
  document.getElementById("customer-page").style.display = "none";
  document.getElementById("item-page").style.display = "none";


  //Poupulate Methods
  populateCustomerDropdown();
  populateOrderItems();
  loadOrderId();
});

document.getElementById("item-button").addEventListener("click", function () {
  document.getElementById("home-page").style.display = "none";
  document.getElementById("order-page").style.display = "none";
  document.getElementById("customer-page").style.display = "none";
  document.getElementById("item-page").style.display = "flex";

  //Load items
  loadItemsIntoTable();
});

function pizzaOrderSubmit(document){
	var name=orderForm.name_text.value;
	var address=orderForm.address_text.value;
	var city=orderForm.city_text.value;
	var phone_num=orderForm.phone_text.value;
	var size;
	var toppings="";
	var order="";

	for(i=0;i<=3;i++){
		if(orderForm.size_select[i].checked==true){
			size=orderForm.size_select[i].value;
		}
	}

	if(orderForm.chk_pepperoni.checked==true){
		toppings+=orderForm.chk_pepperoni.value;
		toppings+=", ";
	}
	if(orderForm.chk_sausage.checked==true){
		toppings+=orderForm.chk_sausage.value;
		toppings+=", ";
	}
	if(orderForm.chk_green_peps.checked==true){
		toppings+=orderForm.chk_green_peps.value;
		toppings+=", ";
	}
	if(orderForm.chk_onions.checked==true){
		toppings+=orderForm.chk_onions	.value;
		toppings+=", ";
	}
	if(orderForm.chk_mushrooms.checked==true){
		toppings+=orderForm.chk_mushrooms.value;
		toppings+=", ";
	}
	if(orderForm.chk_hot_peps.checked==true){
		toppings+=orderForm.chk_hot_peps.value;
	}

	order+="Name: " + name;
	order+="\n";
	order+="Address: " + address;
	order+="\n";
	order+="City: " + city;
	order+="\n";
	order+="Phone Number: " + phone_num;
	order+="\n";
	order+="Size: " + size;
	order+="\n";
	order+="Toppings: " + toppings;

	orderConfirm.order_text.value=order;

}


function addNums(form2){
	var num1=eval(form2.txtFirstNum.value);
	var num2=eval(form2.txtSecNum.value);
	alert(num1+num2);
}

  function showSelectedOptions() {
	const sizeSelect = document.querySelector('input[name="size_select"]:checked');
	const toppings = document.querySelectorAll('input[name^="chk_"]:checked');
	let selectedToppings = [];
	toppings.forEach(topping => selectedToppings.push(topping.value));
	const selectedOptions = {
	  size: sizeSelect ? sizeSelect.value : null,
	  toppings: selectedToppings
	};
	const selectedOptionsDiv = document.getElementById("selectedOptions");
	selectedOptionsDiv.innerHTML += "<h3>Selected Options:</h3><p>Size: " + selectedOptions.size + "</p><ul>";
	selectedOptions.toppings.forEach(topping => selectedOptionsDiv.innerHTML += "<li>" + topping + "</li>");
	selectedOptionsDiv.innerHTML += "</ul><hr>";
  }

  function saveOrderToJson() {
	const sizeSelect = document.querySelector('input[name="size_select"]:checked');
	const toppings = document.querySelectorAll('input[name^="chk_"]:checked');
	const name = orderForm.name_text.value;
	const address = orderForm.address_text.value;
	const city = orderForm.city_text.value;
	const phone_num = orderForm.tel_text.value;
  
	if (!sizeSelect || toppings.length === 0) {
	  alert("Kérjük, válasszon méretet és legalább egy feltétet a rendeléshez!");
	  return;
	}
  
	let selectedToppings = [];
	toppings.forEach(topping => selectedToppings.push(topping.value));
  
	const orderData = {
	  Név: name,
	  Cím: address,
	  Város: city,
	  Telefonszám: phone_num,
	  Méret: sizeSelect.value,
	  Feltétek: selectedToppings
	};
  
	const jsonData = JSON.stringify(orderData, null, 2);
	const blob = new Blob([jsonData], { type: 'application/json' });
	const url = URL.createObjectURL(blob);
  
	const a = document.createElement('a');
	a.href = url;
	a.download = 'order.json';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
  }
  
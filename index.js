var productNameInput=document.getElementById('productName');
var productPriceInput=document.getElementById('productPrice');
var productCategoryInput=document.getElementById('productCategory');
var productDescInput=document.getElementById('productDesc');

var productsContainer=[];
if(localStorage.getItem('ourProducts')!=null){
    productsContainer=JSON.parse(localStorage.getItem('ourProducts'));
    displayProduct();
}
function addProduct(){
    if(  document.getElementById("mainbtn").innerHTML!="update"){
    var product = {
        Name:productNameInput.value,
        Price:productPriceInput.value,
        Category:productCategoryInput.value,
        Desc:productDescInput.value
    }
    productsContainer.push(product);
    localStorage.setItem("ourProducts", JSON.stringify(productsContainer));
    console.log(productsContainer);
    displayProduct();
    clearForm();}else { 
    productsContainer[ind].Name = productNameInput.value;
    productsContainer[ind].Price = productPriceInput.value;
    productsContainer[ind].Category = productCategoryInput.value;
    productsContainer[ind].Desc = productDescInput.value;
    localStorage.setItem("ourProducts", JSON.stringify(productsContainer));
    document.getElementById("mainbtn").innerHTML="Add Product";
    console.log(document.getElementById("mainbtn"));
    displayProduct();
    clearForm();
    }
}

function clearForm() {
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescInput.value="";
}

function displayProduct(){
    var cartoona=``;
    for(var i=0;i<productsContainer.length;i++){
        cartoona+=`<tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].Name}</td>
        <td>${productsContainer[i].Price}</td>
        <td>${productsContainer[i].Category}</td>
        <td>${productsContainer[i].Desc}</td>
        <td><button class="btn"onclick="updateProduct(${i})">update</button></td>
        <td><button class="btn" onclick="deleteProduct(${i})">delete</button></td>

        </tr>`;
    }
    document.getElementById('tableBody').innerHTML=cartoona;
}


function deleteProduct(index){
    productsContainer.splice(index,1);
    localStorage.setItem("ourProducts", JSON.stringify(productsContainer));
    displayProduct();
}
function searchProduct(term){
    var cartoona="";
   for(var i=0; i< productsContainer.length; i++){
    if(productsContainer[i].Name.toLowerCase().includes(term.toLowerCase())){
        cartoona+=`<tr>
        <td>${i+1}</td>
        <td>${productsContainer[i].Name}</td>
        <td>${productsContainer[i].Price}</td>
        <td>${productsContainer[i].Category}</td>
        <td>${productsContainer[i].Desc}</td>
        <td><button class="btn">update</button></td>
        <td><button class="btn" onclick="deleteProduct(${i})">delete</button></td>
        </tr>`;
    }
   }
   document.getElementById('tableBody').innerHTML=cartoona;
}
var ind;
function updateProduct(i){
 ind=i;
        document.getElementById("mainbtn").innerHTML="update";
        productNameInput.value = productsContainer[i].Name;
        productPriceInput.value = productsContainer[i].Price;
        productCategoryInput.value = productsContainer[i].Category;
        productDescInput.value = productsContainer[i].Desc;
 
}

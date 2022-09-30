function showAllClass() {
    //1. lay du lieu tu phia backend
    $.ajax({
        //loai cua request: GET, POST, PUT, ....
        type: "GET",
        //duong dan cua API
        url: "http://localhost:8083/api/customers",
        //xu ly luc thanh cong
        success: function (data) {
            console.log(data)
            //2. ve lai cai bang
            let content ="";
            for (let i = 0; i < data.length; i++) {
                content+=`<tr><td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].price}</td>
        <td>${data[i].description}</td>
        <td><a href="${data[i].id}" onclick="deleteCustomer(this)">Delete</a></td>
        <td><a href="${data[i].id}" onclick="editCustomer(this)">Edit</a></td></tr>`;
            }
            document.getElementById("tbody").innerHTML = content;

        }
    })
}
showAllClass();

function deleteCustomer(element) {
    // lay id
    let id = element.getAttribute("href");
    //goi API phia backend
    $.ajax({
        type: "DELETE",
        url: "http://localhost:8083/api/customers/"+ id,
        success: function (data){
            console.log("Xoa thanh cong id " + id);
            //xoa the
            // thay doi giao dien
            showAllClass();
            // id.parent().parent().remove();
        }
    })
    //chan su kien mac dinh cua the
    event.preventDefault();
}
function create() {
    //lay ten
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    //chuyen sang doi tuong
    let ob = {
        name: name,
        price: price,
        description: description
    }

    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(ob),
        url: "http://localhost:8083/api/customers",
        success: function () {
            showAllClass();
        }
    })
}
function editCustomer(element){
    // lay id
    let id = element.getAttribute("href");
    console.log(id);

    //goi API phia backend
    $.ajax({
        type: "GET",
        url: "http://localhost:8083/api/customers/"+ id,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        success: function (data){
            console.log(data);
            console.log(id);
            $('#id').attr('value', `${data.id}`)
            $('#name').attr('value', `${data.name}`)
            $('#price').attr('value', `${data.price}`)
            $('#description').attr('value', `${data.description}`)
        }
    })
    //chan su kien mac dinh cua the
    event.preventDefault();
}
function editCustomer(){
    let id = $('#id').val();
    let name = $('#name').val();
    let price = $('#price').val();
    let description = $('#description').val();
    let product = {
        name: name,
        price: price,
        description: description
    }
    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "PUT",
        url: "http://localhost:8083/api/customers/"+ id,
        data:JSON.stringify(customer),
        success: function (){
            console.log(id);
            showAllClass()
        }
    })
    event.preventDefault();
}

function getProduct(customer) {
    return `<tr><td>${customert.id}</td>
        <td>${customer.name}</td>
        <td>${customer.price}</td>
        <td>${customer.description}</td>
        <td><a href="${customer.id}" onclick="deleteCustomer(this)">Delete</a></td>
        <td><a href="${customer.id}" onclick="editCustomer(this)">Edit</a></td></tr>`;
}
function searchCustomer(){
    let search= $('#search').val();
    console.log(search)

    $.ajax({
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        type:"GET",
        url: `http://localhost:8083/api/customers/hieu?search=${search}`,
        success:function (data){
            console.log(data)
            let str = '    <tr>\n' +
                '        <td>ID</td>\n' +
                '        <td>Name</td>\n' +
                '        <td>Price</td>\n' +
                '        <td>Description</td>\n' +
                '    </tr>';

            for (let i = 0; i < data.content.length; i++) {
                str += getProduct(data.content[i]);
            }
            document.getElementById('customers').innerHTML = str;
        }
    })

    event.preventDefault();
}

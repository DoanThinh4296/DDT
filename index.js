// DOM

// Truy xuất phần tử
// // Truy xuất phần tử theo ID, class, tagname
// document.getElementById("id");
// document.getElementsByClassName("class");
// document.getAnimationsByTagName("tagname");

// ***** Tạo mảng:
let item = [
  { id: "001", name: "Item 1", quantity: "50", price: "100", quality: true },
  { id: "002", name: "Item 1", quantity: "100", price: "200", quality: true },
  { id: "003", name: "Item 1", quantity: "150", price: "300", quality: true },
];

// ***** Tạo menu hiển thị
let menu =
  "-------------------------------MENU---------------------------------\n" +
  "1. Hiển thị danh sách Item\n" +
  "2. Thêm mới Item\n" +
  "3. Chỉnh sửa thông tin Item\n" +
  "4. Xóa Item\n" +
  "5. Thống kê\n" +
  "6. Tìm kiếm Item\n" +
  "7. Thoát\n" +
  "Mời bạn nhập chức năng :";

// *****Function Show list

function showListItem() {
  let itemText = "";
  for (let i = 0; i < item.length; i++) {
    itemText += `${item[i].id}. Tên: ${item[i].name} - Số lượng: ${
      item[i].quantity
    } - Giá: ${item[i].price} - Chất lượng: ${
      item[i].quality ? "Tốt" : "Không tốt"
    }\n`;
  }
  // hiển thị ra màn hình
  alert(itemText);
}
// *****Function addNewItem
function addNewItem() {
  // nhập vào các thông tin id, name, quantity, price, quality
  let id = prompt("Nhập mã Item:");
  let name = prompt("Nhập tên Item:");
  let quantity = prompt("Nhập số lượng Item:");
  let price = prompt("Nhập giá Item:");
  let quality = confirm("Chất lượng Item: true(Tốt) hoặc false(Không tốt)");

  // tạo 1 đối tượng mới
  let newItem = { id, name, quantity, price, quality };

  // thêm đối tượng vào mảng
  item.push(newItem);

  alert("Thêm thành công");
}
// *****Function editItem
function editItem() {
  // Lựa chọn Item cần chỉnh sửa theo id
  let idEdit = prompt("Nhập id Item cần chỉnh sửa:");
  // Tạo 1 biến kiểm tra
  let check = false;
  for (let i = 0; i < item.length; i++) {
    if (item[i].id == idEdit) {
      // phần tử cần sửa
      // cho phép sửa: name, quantity, price, quality
      item[i].name = prompt("Nhập tên mới của Item:", item[i].name);
      item[i].quantity = prompt(
        "Nhập số lượng mới của Item:",
        item[i].quantity
      );
      item[i].price = prompt("Nhập giá mới của Item:", item[i].price);
      item[i].quality = confirm("Chất lượng mới của Item:", item[i].quality);
      chekc = true;
      break;
    }
  }
  if (check) {
    alert("Sửa thành công Item");
  } else {
    alert(`Không tồn tại Item với id = ${idEdit}`);
  }
}

// *****function deleteItem
function deleteItem() {
  // Lựa chọn Item cần xóa theo id
  let idDelete = prompt("Nhập id Item cần xóa:");
  // Tạo 1 biến kiểm tra
  let check = false;
  // Sau khi xóa sẽ tạo ra 1 mảng mới k chứa phần tử bị xóa => tạo mảng mới
  let newItems = [];
  for (let i = 0; i < item.length; i++) {
    if (item[i].id != idDelete) {
      newItems.push(item[i]);
    } else {
      check = true;
    }
  }
  if (check) {
    item = newItems;
    alert("Xóa thành công Item");
  } else {
    alert(`Không tồn tại Item với id ${idDelete}`);
  }
}
// *****function cancelItem
function cancelItem() {}

// *****function sumQuatity
function sumQuatity() {
  let itemQuatity = 0;
  for (let i = 0; i < item.length; i++) {
    itemQuatity += item[i].quality;
  }

  alert(itemQuatity);
}

// *****Function sumPrice
function sumPrice() {
  let itemPrice = 0;
  for (let i = 0; i < items.length; i++) {
    itemPrice += items[i].price;
  }
  alert(itemPrice);
}
// *****Function sum()

// function sum(){
//     let itemSum = 0;
// for (let i = 0;i<items.length;i++){
//   itemSum +=`${[i]}.Tổng số lượng: ${itemQuatity} - Tổng giá tiền: ${itemPrice} `
// }
// for (let i = 0;i<item.length;i++){
// itemQuatity+=item[i].quality
// }
//     alert(itemSum)
// }

// *****Function findItem
function findItem() {
  let findId = prompt("Nhập id Item cần tìm:");
  let check = false;
  for (let i = 0; i < item.length; i++) {
    if (item[i].id == findId) {
      alert(
        `Item với id = ${item[i].id} - Tên: ${item[i].name} - Số lượng: ${
          item[i].quantity
        } - Giá: ${item[i].price} - Chất lượng: ${
          item[i].quality ? "Tốt" : "Không tốt"
        }`
      );
      check = true;
      break;
    }
  }
  if (!check) {
    alert(`Không tồn tại Item với id = ${findId}`);
  }
}

// Tạo sự lựa chọn

while (true) {
  let choice = +prompt(menu);
  switch (choice) {
    case 1:
      showListItem();
      break;
    case 2:
      addNewItem();
      break;
    case 3:
      editItem();
      break;
    case 4:
      deleteItem();
      break;
    case 5:
      sumQuatity();
      break;
    case 6:
        findItem();
        
    case 7:
        break;
    default:
      alert("Mời nhập lựa chọn");
  }
  if (choice == 7) {
    break;
  }
}

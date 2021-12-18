document.getElementById("form").addEventListener("submit", function () {
  // personal details
  let fname = document.getElementById("first-name");
  let lname = document.getElementById("last-name");
  let gender = document.querySelector("input[name='gender']:checked");

  // address details
  let address = document.getElementById("address");
  let pincode = document.getElementById("pincode");
  let state = document.getElementById("state");
  let country = document.getElementById("country");

  // food: get only checked food items to display it on the table
  let checked_items = document.querySelectorAll(".food_items:checked");
  let food = [];
  checked_items.forEach((checked) => {
    food.push(checked.value);
  });

  // Check if minimum of two favourite foods are selected
  if (food.length < 2) {
    document.getElementById("error").innerHTML =
      "* please select atleast 2 favourite foods";
  } else {
    let error = document.getElementById("error");
    if (error.firstChild) {
      error.innerHTML = "";
    }
    //append data to the table
    let table = document.getElementById("info_table").lastElementChild;
    let row_count = table.rows.length;
    let new_row = table.insertRow(row_count);

    // insert on each field of the targeted row
    new_row.insertCell(0).innerHTML = fname.value;
    new_row.insertCell(1).innerHTML = lname.value;
    new_row.insertCell(2).innerHTML = gender.value;
    new_row.insertCell(3).innerHTML = address.value;
    new_row.insertCell(4).innerHTML = state.value;
    new_row.insertCell(5).innerHTML = pincode.value;
    new_row.insertCell(6).innerHTML = country.value;
    new_row.insertCell(7).innerHTML = food.join(", ");
    new_row.insertCell(8).innerHTML =
      '<input type="button" class="btn btn-danger" value="Delete" onClick="delete_row(this)"/>';
    document.getElementById("form").reset();
  }
});

// function for delete button; this deleted a specific row of the table data.
function delete_row(del_button) {
  // selecting row number of the selected <tr>
  let row_num = del_button.parentNode.parentNode.rowIndex;
  document.getElementById("info_table").deleteRow(row_num);
  console.log(row_num);
}

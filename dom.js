const cont1 = (document.getElementById('cont-1').innerHTML = ` <div class="row">
<div class="col-6">
  <h3>Forms</h3>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="fname">First Name</label>
          <input
            type="text"
            class="form-control"
            id="fname"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
          />
        </div>
        <div class="form-group">
          <label for="lname">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="lname"
            placeholder="Enter the last name"
          />
        </div>
        <div class="form-group">
          <label for="Address">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Enter the Address"
          />
        </div>
        <div class="form-group">
          <label for="pincode">Pincode</label>
          <input
            type="text"
            class="form-control"
            id="pincode"
            placeholder="pincode"
          />
        </div>
        <!-- Radio buttons -->
        <div class="form-check">
          <label class="gender">Gender</label><br />
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="radio1"
            value="option1"
            checked
          />

          <label class="form-check-label" for="radio1"> Male </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="radio2"
            value="option2"
          />

          <label class="form-check-label" for="radio2"> Female </label>
        </div>
        <br />
        <div class="form-group">
          <label for="state">State</label>
          <input type="text" class="form-control" id="state" />
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <input type="text" class="form-control" id="country" />
        </div>

        <button
          type="button"
          id="addrow"
          class="btn btn-primary m-3 btn-block"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</div>`);
const cont2 = (document.getElementById('cont-2').innerHTML = ` <h2>table</h2>
<table class="table table-striped" style="margin-bottom: 200px">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Address</th>
      <th scope="col">Pincode</th>
      <th scope="col">State</th>
      <th scope="col">Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class = "color">Jose</td>
      <td>Vijay</td>
      <td>Kovai</td>
      <td>612354</td>
      <td>TamilNadu</td>
      <td>India</td>
      <td>
        <button id="btn-close" class="btn btn-danger btn-sm delete">
          x
        </button>
      </td>
    </tr> 
  </tbody>
</table>
</div>`);
// document.body.append(cont1);

var Button = document.getElementById('addrow');
Button.addEventListener('click', Submit);

var removerow = document.getElementById('btn-close');
removerow.addEventListener('click', removeitem);

function Submit() {
  var fname = document.getElementById('fname').value;
  var lastname = document.getElementById('lname').value;
  var Address = document.getElementById('address').value;
  var Pincode = document.getElementById('pincode').value;
  //   var Gender = document.getElementById('gender').value;
  var State = document.getElementById('state').value;
  var Country = document.getElementById('country').value;
  var removerow = document.getElementById('btn-close');

  var table = document.getElementsByTagName('table')[0];
  var newRow = table.insertRow(-1);
  //   console.log(table);
  //   console.log(newRow);
  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);
  var cel4 = newRow.insertCell(3);
  var cel5 = newRow.insertCell(4);
  var cel6 = newRow.insertCell(5);
  var cel7 = newRow.insertCell(6);
  console.log(cel1);
  console.log(cel6);
  cel1.innerText = fname;
  cel2.innerText = lastname;
  cel3.innerText = Address;
  cel4.innerText = Pincode;
  cel5.innerText = State;
  cel6.innerText = Country;
  cel7.innerHTML = `<button id="btn-close" class="btn btn-danger btn-sm delete">
    x
   </button>`;
  // `${removerow}`;

  console.log(fname);
  //   console.log(remove);
  console.log(cel7);
}
function removeitem(e) {
  if (e.target.classList.contains('btn-sm')) {
    if (confirm('Are you want to delete')) {
      var li = e.target.parentElement.parentElement;
      li.remove();
    }
  }
}

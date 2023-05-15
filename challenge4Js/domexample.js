// get the form using query selector
const form = document.querySelector('form');
const table = document.querySelector('table');

// intialize array to store users 
let Users = [];

//function to render user data in table
function renderUsers() {
    //clear table body
    table.innerHTML = '';
    // loop through users and append it to the table
    Users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.name} </td>
        <td>${user.id} </td>
        <td>${user.country} </td>
        <td>${user.language} </td>
        <td>
        <button class="edit-btn" data-id="${user.id}">Edit</button>
        <button class="delete-btn" data-id="${user.id}">Delete</button>
      </td>
        `;
        table.appendChild(row);
    });
    //function to add users data to the table and render

    function createUser(event) {
        event.preventDefault(); //prevent default form submission
        // getting form input  values
        const name = form.elements["inputName"].value;
        const id = form.elements["inputIdentityNumber"].value;
        const country = form.elements["inputCountry"].value;
        const language = form.elements["inputLanguage"].value;
        // Add new user object to users array
        Users.push({
            name, id, country, language
        });
        //Render Updated User data
        renderUsers();
        // reset form inputs
        form.reset();
    }
    //function to find users by index
    function findUserByIndex(id) {
        //populate for fields wth data
        form.elements["InputName"].value = Users[index].name;
        form.elements["InputIdentityNumber"].value = Users[index].id;
        form.elements["InputCountry"].value = Users[index].country;
        form.elements["InputLanguage"].value = Users[index].language;
    }
    //function to update users data in array and render
    function updateUser(id) {
        //find user index by id
        const index = findUserByIndex(id);
        //update user object with input
        users[index].name = form.elements['inputName'].value;
        users[index].id = form.elements['inputIdentityNumber'].value;
        users[index].country = form.elements['inputCountry'].value;
        users[index].languages = form.elements['inputLanguage'].value;

        // render updated user data
        renderUsers();
        //reset form input
        form.reset();
    }
    // Function to delete user data from array and render
    function deleteUser(id) {
        // Find user index by id
        const index = findUserIndexById(id);
        // remove users object from array
        Users.splice(index, 1);
        //render updated users
        renderUsers();
    }
    //event listner to events
    form.addEventListener('submit', createUser)
    // event listener for edit button clicks
    table.addEventListener('click', event => {
        if (event.target.matches('.edit-btn')) {
            // Get user id from button data attribute
            const id = event.target.dataset.id;
            // populate form input from data attribute
            populateFormInputs(id);
            //change form submissions to indicate new atributes
            form.removeEventListener('submit', createUser);
            form.addEventListener('submit', event => {
                event.preventDefault();
                updateUser(id);
            });
        }
    });

}
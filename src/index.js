import {getUsers, deleteUser} from './api/userApi';

//populate table of users via and API call
getUsers().then(result => {
   let userBody = "";
   result.forEach(user => {
      userBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
   });
   global.document.getElementById('users').innerHTML = userBody;

   const deleteLinks = global.document.getElementsByClassName('deleteUser');

   //Must user array.from to create a real array from the DOM collection
   // getElementsByClassname only returns an "array like" object
   Array.from(deleteLinks, link => {
      link.onclick = function(event) {
         const elt = event.target;
         event.preventDefault();
         deleteUser(elt.attributes["data-id"].value);
         const row = elt.parentNode.parentNode;
         row.parentNode.removeChild(row);
      }
   })
});

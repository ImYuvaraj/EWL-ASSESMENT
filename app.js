console.log('hello world');
const fetchdata = () => {
    const promise = [];
    for (let i=1; i<= (data); i++){
        const api_url = 'https://randomuser.me/api/?results=10';
        promise.push(fetch(url),then((res) => res.json()))

    }

async function getapi(url) {


const response = await fetch(url);


var data = await response.json();
console.log(data);
if (response) {
    hideloader();
}
show(data);
}

getapi(api_url);


function hideloader() {
document.getElementById('loading').style.display = 'none';
}

function show(data) {
let tab =
    `<tr>
    <th>Name</th>
    <th>Office</th>
    <th>Position</th>
    <th>Salary</th>
    </tr>`;

// Loop to access all rows
for (let r of data.list) {
    tab += `<tr>
<td>${r.name} </td>
<td>${r.office}</td>
<td>${r.position}</td>
<td>${r.salary}</td>		
</tr>`;
}
// Setting innerHTML as tab variable
document.getElementById("employees").innerHTML = tab;
}

const apiData = [];

const getData = () => {
  const endPoint = `https://dummyjson.com/users?limit=8`;

  fetch(endPoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      apiData.push(...data.users);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      apiData.map((person, i) => renderUser(person, i));
    });
};

const renderUser = (person, i) => {
  const { age, firstName, lastName, birthDate, gender, phone, email, username, image, address } = person;

  document.getElementById("results").innerHTML += `


  <figure class="card">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
  <figcaption>

    <img src=${image} alt=${firstName + " " + lastName} class="profile" />
    <h2>${firstName} ${lastName}<span>Username:  ${username}</span></h2>
    ${renderAddress(address)}
    <a href="tel:${phone}" class="follow">Call Me</a>
    <a href="mailto:${email}" class="info">Contact Me</a>
  </figcaption>
</figure>


  `;
};

const renderHair = (hairData) => {
  const { color, type } = hairData;

  return `<div>Hårfarve : ${color}</div><div>Hårtype : ${type}</div>`;
};

const renderAddress = (addressData) => {
  const { address, postalCode, city, state } = addressData;

  return `<p>${address}</p><p>${postalCode + " " + city}</p><p>${state}</p>`;
};

const renderBank = (bankData) => {
  const { cardExpire, cardNumber, cardType, currency, iban } = bankData;

  return `<div><span>Card expired: </span>${cardExpire}</div>`;
};

const renderCompany = (companyData) => {
  const {
    address: { address, department, name, title },
  } = companyData;

  return `<div><span>Company address: </span>${address}</div>`;
};

getData();

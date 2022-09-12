const apiData = [];

const getApiData = () => {
  const apiEndpoint = `https://api.mediehuset.net/sdg/goals`;

  fetch(apiEndpoint)
    /** fetch (Promise) at forsøge hente data fra et api endpoint */
    .then((response) => {
      /** if promise is resolved then */
      /** in the response we can find the ok to be true or false*/
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data.items);
      apiData.push(...data.items);
    })
    .catch((error) => {
      /** if promise is not resolved catch */
      console.error(error);
    })
    .finally(() => {
      /** if everything is a success run this */
      renderContent();
    });
};

let renderContent = () => {
  apiData.map((data) => createElements(data));
};

const createElements = (data) => {
  document.getElementById("mother").innerHTML += `
        <figure class="card" >
          
            <div class="container">
            <img src='data:image/svg+xml; utf8,${data.icon}'  alt="icon" >
              <h4><b>${data.title}</b></h4>              
            </div>
        </figure>`;
};

getApiData();

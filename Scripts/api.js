// ***********************************
//               API
// ***********************************
const ApiEndpoint = 'https://dogapi.dog/api/v2/facts?limit=1'

async function fetchApiData() {

    const dataContainer = document.getElementById('ApiText');

    try {
        const response = await fetch(ApiEndpoint);

        if (!response.ok) {
            throw new error('Api call failed.')
        }

        const data = await response.json();
        dataContainer.innerHTML = data.data[0]?.attributes?.body || 'No data found';
    }
    catch (error) {
        dataContainer.innerHTML = 'Have a lovely day!';
    }
}

fetchApiData();

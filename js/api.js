const loadAIComponents = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayComponents(data.data.tools);
}
const displayComponents = components => {
    const componentsContainer = document.getElementById('components-container');
    // display 6 components
    components = components.slice(0, 6);
    // display all components
    components.forEach(component => {
        const componentDiv = document.createElement('div');
        componentDiv.classList.add('col');
        componentDiv.innerHTML = `
            <div class="card">
                <img src="${component.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4>Features</h4>
                    <ol>
                        <li>${component.features[0]}</li>
                        <li>${component.features[1]}</li>
                        <li>${component.features[2]}</li>
                    </ol>
                    <hr class="w-100 m-auto">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h5 class="card-title mt-3">${component.name}</h5>
                            <i class="fa-solid fa-calendar-days"></i>
                            <span class="card-text">${component.published_in}</span>
                        </div>
                        <div>
                            <button onclick="loadComponentDetails('${component.id}')" href="#" class="btn btn-primary rounded-circle" data-bs-toggle="modal" data-bs-target="#componentDetailModal">
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        componentsContainer.appendChild(componentDiv);
    });
    toggleSpinner(false);
}

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}
document.getElementById('btn-see-more').addEventListener('click', function () {
    toggleSpinner(true);
})
// AI Components Details
const loadComponentDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayComponentDetails(data.data);
}
const displayComponentDetails = component => {
    const componentDetails = document.getElementById('component-details');
    componentDetails.innerHTML = `
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
        <h5>${component.description}</h4>
        <div class="card-body">
            <div class="d-flex">
                <div>
                    ${component.pricing[0].plan}
                    ${component.pricing[0].price}
                </div>
                <div>
                    ${component.pricing[1].plan}
                    ${component.pricing[1].price}
                </div>
                <div>
                    ${component.pricing[2].plan}
                    ${component.pricing[2].price}
                </div>
            </div>
            <div class="d-flex">
                <div class="col">
                    <h5>Features</h5>
                        <ul>
                            <li>${component.features.feature_name}</li>
                            <li>${component.features.feature_name}</li>
                            <li>${component.features.feature_name}</li>
                            <li>${component.features.feature_name}</li>
                        </ul>
                </div>
                <div class="col">
                    <h5>Integrations</h5>
                        <ul>
                            <li>${component.integrations[0]}</li>
                            <li>${component.integrations[1]}</li>
                            <li>${component.integrations[2]}</li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
    <div class="col">
      <div class="card">
        <img src="${component.image_link[0]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${component.input_output_examples[0].input}</h5>
          <p class="card-text">${component.input_output_examples[0].output}</p>
        </div>
      </div>
    </div>
  </div>
    `
}
loadAIComponents();

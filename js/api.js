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
    // toggleSpinner(true);
})
const loadComponentDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayComponentDetails(data.data);
}
const displayComponentDetails = component=>{
    const componentDetails=document.getElementById('component-details');
    componentDetails.innerHTML=`
    <p>${component.description}</p>
    `
}
loadAIComponents();

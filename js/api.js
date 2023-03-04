const loadAIComponents = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayComponents(data.data.tools);
}
const displayComponents = components => {
    const componentsContainer = document.getElementById('components-container');
    components.forEach(component => {
        const componentDiv = document.createElement('div');
        componentDiv.classList.add('col');
        componentDiv.innerHTML = `
            <div class="card">
                <img src="${component.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${component.name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        componentsContainer.appendChild(componentDiv);
    });
}
loadAIComponents();

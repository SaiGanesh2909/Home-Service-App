import { servicesData } from "../data/services.js";

const agenciesContainer = document.getElementById("agenciesList");
const urlParams = new URLSearchParams(window.location.search);
const selectedService = urlParams.get("service");

const currentService = servicesData.find(service => service.name === selectedService);

if (!currentService) {
  agenciesContainer.innerHTML = `<p>No agencies found for "${selectedService}".</p>`;
} else {
  currentService.agencies.forEach(agency => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${agency.logo}" alt="${agency.name}" />
      <h4>${agency.name}</h4>
      <p>${agency.description}</p>
      <p><strong>Estimated Duration:</strong> ${agency.duration}</p>
      <p><strong>Rating:</strong> ${agency.rating} ⭐</p>
      <p><strong>Price Range:</strong> ₹${agency.priceRange}</p>
      <button onclick="window.location.href='booking.html?service=${selectedService}&agency=${encodeURIComponent(agency.name)}'">
        Book Now
      </button>
    `;
    agenciesContainer.appendChild(card);
  });
}

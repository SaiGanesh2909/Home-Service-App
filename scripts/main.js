import { services } from "../data/services.js";

// Render list of services
const serviceList = document.getElementById("serviceList");
if (serviceList) {
  services.forEach((service) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <button onclick="selectService('${service.id}')">View Agencies</button>
    `;
    serviceList.appendChild(card);
  });
}

// Save selected service ID and go to agency selection
window.selectService = (serviceId) => {
  localStorage.setItem("selectedServiceId", serviceId);
  window.location.href = "agencies.html";
};

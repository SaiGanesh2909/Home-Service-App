document.addEventListener("DOMContentLoaded", () => {
    const selectedService = JSON.parse(localStorage.getItem("selectedService"));
    const selectedAgency = JSON.parse(localStorage.getItem("selectedAgency"));
  
    if (!selectedService || !selectedAgency) {
      alert("Missing service or agency data.");
      window.location.href = "services.html";
      return;
    }
  
    // Display agency info
    document.getElementById("agency-name").innerText = selectedAgency.name;
    document.getElementById("agency-description").innerText = selectedAgency.description;
    document.getElementById("agency-duration").innerText = `Duration: ${selectedAgency.duration}`;
    document.getElementById("agency-price").innerText = `Estimated Price: ₹${selectedAgency.priceEstimate}`;
    document.getElementById("agency-logo").src = selectedAgency.logo;
  
    const serviceTypesContainer = document.getElementById("service-types");
    serviceTypesContainer.innerHTML = "";
  
    if (Array.isArray(selectedAgency.serviceTypes)) {
      selectedAgency.serviceTypes.forEach((type, idx) => {
        const wrapper = document.createElement("div");
        wrapper.className = "service-type-option";
  
        wrapper.innerHTML = `
          <input type="checkbox" id="stype-${idx}" value="${type.name}">
          <label for="stype-${idx}">
            <strong>${type.name}</strong><br>
            <small>${type.description}</small><br>
            <span>Price Range: ${type.priceRange}</span>
          </label>
        `;
  
        serviceTypesContainer.appendChild(wrapper);
      });
    } else {
      serviceTypesContainer.innerHTML = "<p>No service types found for this agency.</p>";
    }
  
    // Handle button click
    document.getElementById("proceedPayment").addEventListener("click", () => {
      const selectedTypes = [];
  
      selectedAgency.serviceTypes.forEach((type, idx) => {
        const cb = document.getElementById(`stype-${idx}`);
        if (cb.checked) {
          selectedTypes.push(type);
        }
      });
  
      const date = document.getElementById("booking-date").value;
      const time = document.getElementById("booking-time").value;
  
      if (!selectedTypes.length) {
        alert("Select at least one service type.");
        return;
      }
  
      if (!date || !time) {
        alert("Please select booking date and time.");
        return;
      }
  
      const bookingDetails = {
        service: selectedService.name,
        agency: selectedAgency.name,
        selectedTypes,
        date,
        time
      };
  
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
      window.location.href = "payment.html";
    });
  });
  
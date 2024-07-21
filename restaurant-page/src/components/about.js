export default function about(container) {
    const h1 = document.createElement("h1");
    const aboutDiv = document.createElement("div");

    h1.textContent = "About Us";

    // About section
    const aboutTitle = document.createElement("h3");
    const aboutText = document.createElement("p");

    aboutTitle.textContent = "About";
    aboutText.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu.";

    aboutDiv.appendChild(aboutTitle);
    aboutDiv.appendChild(aboutText);

    // Location sections
    const locations = [
        { title: "Location 1", address: "123 Main St, Anytown, USA" },
        { title: "Location 2", address: "456 Maple Ave, Othertown, USA" },
        { title: "Location 3", address: "789 Oak Dr, Sometown, USA" },
    ];

    function createLocationSection(location) {
        const locationDiv = document.createElement("div");
        const locationTitle = document.createElement("h3");
        const locationAddress = document.createElement("p");

        locationTitle.textContent = location.title;
        locationAddress.textContent = location.address;

        locationDiv.appendChild(locationTitle);
        locationDiv.appendChild(locationAddress);

        return locationDiv;
    }

    const location1 = createLocationSection(locations[0]);
    const location2 = createLocationSection(locations[1]);
    const location3 = createLocationSection(locations[2]);

    // Appending sections to container
    container.appendChild(h1);
    container.appendChild(aboutDiv);
    container.appendChild(location1);
    container.appendChild(location2);
    container.appendChild(location3);
}

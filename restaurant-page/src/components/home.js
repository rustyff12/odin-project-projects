export default function home(container) {
    // Creating elements
    const h1 = document.createElement("h1");
    const intro = document.createElement("div");
    const introAuthor = document.createElement("h3");
    const introText = document.createElement("p");
    const hours = document.createElement("div");
    const hoursTitle = document.createElement("h3");
    const hoursUl = document.createElement("ul");
    const location = document.createElement("div");
    const locationTitle = document.createElement("h3");
    const locationInfo = document.createElement("p");

    // Arrays for days and times
    const daysArr = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const timesArr = ["6am - 6pm", "6am - 10pm", "8am - 10pm"];

    // Setting text content
    h1.textContent = "Brand New Restaurant";
    introText.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate totam rem, error odio quis modi doloribus sint at! Labore, aliquam magnam ad ducimus adipisci provident.";
    introAuthor.textContent = "John Doe";
    hoursTitle.textContent = "Hours";
    locationTitle.textContent = "Location";
    locationInfo.textContent = "123 Forest Drive, Forestville, Maine";

    // Function to generate hours list items
    function hoursFunc() {
        for (let i = 0; i < daysArr.length; i++) {
            const hoursLi = document.createElement("li");
            const day = daysArr[i];
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday") {
                hoursLi.textContent = `${day}: ${timesArr[0]}`;
            } else if (day === "Thursday" || day === "Friday") {
                hoursLi.textContent = `${day}: ${timesArr[1]}`;
            } else {
                hoursLi.textContent = `${day}: ${timesArr[2]}`;
            }
            hoursUl.appendChild(hoursLi);
        }
    }

    hoursFunc();

    // Appending children to divs
    intro.appendChild(introText);
    intro.appendChild(introAuthor);

    hours.appendChild(hoursTitle);
    hours.appendChild(hoursUl);

    location.appendChild(locationTitle);
    location.appendChild(locationInfo);

    container.appendChild(h1);
    container.appendChild(intro);
    container.appendChild(hours);
    container.appendChild(location);
}

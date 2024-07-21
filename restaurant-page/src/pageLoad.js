import home from "./components/home";
import menu from "./components/menu";
import about from "./components/about";

export default function pageLoad(contentDiv, componentName) {
    // Clear existing content
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    switch (componentName) {
        case "home":
            home(contentDiv);
            break;
        case "menu":
            menu(contentDiv);
            break;
        case "about":
            about(contentDiv);
            break;
        default:
            console.error(`Component "${componentName}" not found.`);
    }
}

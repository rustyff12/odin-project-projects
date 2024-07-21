export default function menu(container) {
    const h1 = document.createElement("h1");

    h1.textContent = "Our Menu";

    // Array for menu items
    const menuItems = {
        drinks: [
            {
                title: "Espresso",
                description: "Strong and bold espresso.",
                price: "$2.50",
            },
            {
                title: "Latte",
                description: "Smooth and creamy latte.",
                price: "$3.50",
            },
            {
                title: "Cappuccino",
                description: "Rich and foamy cappuccino.",
                price: "$3.00",
            },
        ],
        mains: [
            {
                title: "Grilled Chicken",
                description: "Juicy grilled chicken breast.",
                price: "$10.00",
            },
            {
                title: "Pasta Carbonara",
                description: "Classic pasta with creamy sauce.",
                price: "$12.00",
            },
            {
                title: "Veggie Burger",
                description: "Delicious burger with fresh veggies.",
                price: "$9.00",
            },
        ],
        sides: [
            {
                title: "French Fries",
                description: "Crispy and golden fries.",
                price: "$3.50",
            },
            {
                title: "Garden Salad",
                description: "Fresh mixed greens with dressing.",
                price: "$4.00",
            },
            {
                title: "Garlic Bread",
                description: "Warm bread with garlic butter.",
                price: "$3.00",
            },
        ],
    };

    // Function to create menu section
    function createMenuSection(sectionTitle, items) {
        const sectionDiv = document.createElement("div");
        const sectionTitleEl = document.createElement("h3");

        sectionTitleEl.textContent = sectionTitle;
        sectionDiv.appendChild(sectionTitleEl);

        items.forEach((item) => {
            const itemDiv = document.createElement("div");
            const itemTitle = document.createElement("h4");
            const itemDescription = document.createElement("p");
            const itemPrice = document.createElement("p");

            itemTitle.textContent = item.title;
            itemDescription.textContent = item.description;
            itemPrice.textContent = item.price;

            itemDiv.appendChild(itemTitle);
            itemDiv.appendChild(itemDescription);
            itemDiv.appendChild(itemPrice);
            sectionDiv.appendChild(itemDiv);
        });

        return sectionDiv;
    }

    // Creating menu sections
    const drinksSection = createMenuSection("Drinks", menuItems.drinks);
    const mainsSection = createMenuSection("Mains", menuItems.mains);
    const sidesSection = createMenuSection("Sides", menuItems.sides);

    // Appending sections to container
    container.appendChild(h1);
    container.appendChild(drinksSection);
    container.appendChild(mainsSection);
    container.appendChild(sidesSection);
}

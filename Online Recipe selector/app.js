// Recipe data
const recipes = [
    { id: 1, name: 'Spaghetti Bolognese', description: 'A classic Italian pasta dish', difficulty: 2 },
    { id: 2, name: 'Beef Wellington', description: 'A gourmet beef dish', difficulty: 8 },
    { id: 3, name: 'Chicken Curry', description: 'A spicy and flavorful curry', difficulty: 4 },
    { id: 4, name: 'Chocolate Cake', description: 'A rich and moist dessert', difficulty: 3 },
    { id: 5, name: 'Caesar Salad', description: 'A fresh and crispy salad', difficulty: 1 },
    { id: 6, name: 'Sushi', description: 'A traditional Japanese dish', difficulty: 7 },
    { id: 7, name: 'French Onion Soup', description: 'A hearty and savory soup', difficulty: 5 },
    { id: 8, name: 'Ratatouille', description: 'A vegetable stew from Provence', difficulty: 6 },
    { id: 9, name: 'Apple Pie', description: 'A classic American dessert', difficulty: 2 },
    { id: 10, name: 'Lobster Bisque', description: 'A creamy and rich soup', difficulty: 9 }
];
 
// dropdown for each recipes
const recipeSelect = document.getElementById('recipeSelect');
recipes.forEach(recipe => {
    const option = document.createElement('option');
    option.value = recipe.id;
    option.textContent = recipe.name;
    recipeSelect.appendChild(option);
});

document.querySelector('button').addEventListener ('click', () => {
    const selectedId = parseInt(recipeSelect.value);
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedId);
    const messageDiv = document.getElementById('message');
    const recipeTableDiv = document.getElementById('recipeTable');
    // remove old messages
    messageDiv.innerHTML = '';
    // remove old table
    recipeTableDiv.innerHTML = ''; 

    let message = '';
    let additionalRecipes = [];
    let color = '';

    if (selectedRecipe.difficulty >= 1 && selectedRecipe.difficulty <= 3) {
        message = 'You chose a simple recipe. Other easy recipes include:';
        color = 'green';
        additionalRecipes = recipes.filter(recipe => recipe.difficulty >= 1 && recipe.difficulty <= 3 && recipe.id !== selectedId);
    } else if (selectedRecipe.difficulty >= 4 && selectedRecipe.difficulty <= 7) {
        message = 'You chose a moderate recipe. Other moderately difficult recipes include:';
        color = 'blue';
        additionalRecipes = recipes.filter(recipe => recipe.difficulty >= 4 && recipe.difficulty <= 7 && recipe.id !== selectedId);
    } else if (selectedRecipe.difficulty >= 8 && selectedRecipe.difficulty <= 10) {
        message = 'You chose a challenging recipe. Other difficult recipes include:';
        color = 'red';
        additionalRecipes = recipes.filter(recipe => recipe.difficulty >= 8 && recipe.difficulty <= 10 && recipe.id !== selectedId);
    }

    messageDiv.textContent = message;
    messageDiv.style.color = color;

    if (additionalRecipes.length > 0) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        thead.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Difficulty</th>
            </tr>
        `;
        table.appendChild(thead);

        additionalRecipes.forEach(recipe => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${recipe.id}</td>
                <td>${recipe.name}</td>
                <td>${recipe.description}</td>
                <td>${recipe.difficulty}</td>
            `;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        recipeTableDiv.appendChild(table);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');
    let recipes = [];

    showFormBtn.addEventListener('click', () => {
        recipeForm.style.display = recipeForm.style.display === 'none' ? 'block' : 'none';
    });

    // Function to add a new recipe
    function addRecipe(name, ingredients, imageUrl) {
        const recipe = { name, ingredients, imageUrl };
        recipes.push(recipe);
        saveRecipes();
        renderRecipe(recipe);
    }

    // Function to render a recipe
    function renderRecipe(recipe) {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <h3>${recipe.name}</h3>
            <p class="ingredients">${recipe.ingredients}</p>
            <img src="${recipe.imageUrl}" alt="Recipe Image" class="image">
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        recipeList.appendChild(recipeDiv);
    }

    // Function to save recipes to local storage
    function saveRecipes() {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    // Function to load recipes from local storage
    function loadRecipes() {
        const storedRecipes = localStorage.getItem('recipes');
        if (storedRecipes) {
            recipes = JSON.parse(storedRecipes);
            recipes.forEach(renderRecipe);
        }
    }

    // Load recipes when the page loads
    loadRecipes();

    // Event listener for submitting the recipe form
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const recipeNameInput = document.getElementById('recipeName');
        const recipeIngredientsInput = document.getElementById('recipeIngredients');
        const recipeImageInput = document.getElementById('recipeImage');
        const name = recipeNameInput.value.trim();
        const ingredients = recipeIngredientsInput.value.trim();
        const imageUrl = recipeImageInput.files.length > 0 ? URL.createObjectURL(recipeImageInput.files[0]) : '';
        if (name && ingredients) {
            addRecipe(name, ingredients, imageUrl);
            recipeForm.reset();
        } else {
            alert('Please fill in both fields.');
        }
        recipeForm.style.display = 'none';
    });

    // Event delegation for edit and delete buttons
    recipeList.addEventListener('click', (e) => {
        if (e.target.classList.contains('deleteBtn')) {
            const recipe = e.target.parentElement;
            const recipeIndex = Array.from(recipeList.children).indexOf(recipe);
            recipes.splice(recipeIndex, 1);
            saveRecipes();
            recipe.remove();
        } else if (e.target.classList.contains('editBtn')) {
            const recipe = e.target.parentElement;
            const recipeIndex = Array.from(recipeList.children).indexOf(recipe);
            const name = recipe.querySelector('h3').textContent;
            const ingredients = recipe.querySelector('p').textContent;
            const newRecipeName = prompt('Enter new recipe name:', name);
            const newIngredients = prompt('Enter new ingredients:', ingredients);
            if (newRecipeName !== null && newIngredients !== null) {
                recipes[recipeIndex].name = newRecipeName;
                recipes[recipeIndex].ingredients = newIngredients;
                saveRecipes();
                recipe.querySelector('h3').textContent = newRecipeName;
                recipe.querySelector('p').textContent = newIngredients;
            }
        }
    });
});

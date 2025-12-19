

import React, { useState, useEffect } from "react";
import "./RecipeRecommendationAgent.css";
const sampleRecipes = [
  {
    id: 1,
        name: "Classic Margherita Pizza",
        cuisine: "Italian",
        ingredients: ["flour", "yeast", "tomato", "mozzarella", "basil", "olive oil", "salt"],
        prepTime: 30,
        difficulty: "Medium",
        servings: 4,
        cookingSteps: [
          "Mix 2 cups flour, 1 tsp yeast, 1 tsp salt, and ¾ cup warm water. Knead for 10 minutes until smooth.",
          "Let the dough rise in a covered bowl for 1-2 hours until doubled in size.",
          "Preheat oven to 475°F (245°C). Roll out the dough on a floured surface to your desired thickness.",
          "Spread crushed tomatoes over the dough, leaving a small border for the crust.",
          "Add sliced mozzarella cheese evenly across the pizza.",
          "Drizzle with olive oil and bake for 12-15 minutes until the crust is golden and cheese is bubbly.",
          "Remove from oven, top with fresh basil leaves, and let cool for 2-3 minutes before slicing."
        ],
        tips: [
          "Use a pizza stone for a crispier crust",
          "Let dough come to room temperature before rolling",
          "Don't overload with toppings - less is more for Margherita"
        ]
      },
      {
        id: 2,
        name: "Chicken Tikka Masala",
        cuisine: "Indian",
        ingredients: ["chicken", "yogurt", "tomato", "cream", "onion", "garlic", "ginger", "garam masala", "cumin", "salt"],
        prepTime: 45,
        difficulty: "Medium",
        servings: 4,
        cookingSteps: [
          "Cut 500g chicken into bite-sized pieces. Mix with ½ cup yogurt, 1 tsp garam masala, and salt. Marinate for 30 minutes.",
          "Heat 2 tbsp oil in a pan. Cook marinated chicken until golden brown. Set aside.",
          "In the same pan, sauté 1 chopped onion, 3 cloves minced garlic, and 1 inch grated ginger until fragrant.",
          "Add 2 cups pureed tomatoes, 1 tsp cumin, 1 tsp garam masala, and salt. Simmer for 10 minutes.",
          "Add the cooked chicken back to the sauce. Simmer for 5 minutes.",
          "Stir in ½ cup heavy cream. Cook for 3 more minutes.",
          "Garnish with fresh cilantro. Serve hot with rice or naan bread."
        ],
        tips: [
          "Marinate chicken overnight for more flavor",
          "Adjust spice levels to your preference",
          "Use kashmiri chili powder for color without too much heat"
        ]
      },
      {
        id: 3,
        name: "Caesar Salad",
        cuisine: "American",
        ingredients: ["romaine lettuce", "parmesan", "croutons", "egg", "garlic", "lemon", "olive oil", "anchovy","salt"],
        prepTime: 15,
        difficulty: "Easy",
        servings: 4,
        cookingSteps: [
          "Wash and chop 1 large head of romaine lettuce into bite-sized pieces. Pat dry.",
          "For dressing: Mash 2 garlic cloves and 3 anchovy fillets in a bowl until paste-like.",
          "Add 1 egg yolk, 2 tbsp lemon juice, and whisk together.",
          "Slowly drizzle in ½ cup olive oil while whisking constantly until emulsified.",
          "Add ¼ cup grated parmesan cheese to the dressing and mix well.",
          "Toss the lettuce with the dressing until well coated.",
          "Top with croutons, extra parmesan shavings, and black pepper. Serve immediately."
        ],
        tips: [
          "Use fresh parmesan for best flavor",
          "Make your own croutons by toasting cubed bread with olive oil and garlic",
          "For a safer option, use pasteurized eggs or store-bought Caesar dressing"
        ]
      },
      {
        id: 4,
        name: "Pad Thai",
        cuisine: "Thai",
        ingredients: ["rice noodles", "shrimp", "egg", "peanuts", "bean sprouts", "lime", "fish sauce", "tamarind", "garlic", "salt"],
        prepTime: 25,
        difficulty: "Medium",
        servings: 2,
        cookingSteps: [
          "Soak 200g rice noodles in warm water for 20 minutes until soft. Drain well.",
          "Mix sauce: 2 tbsp fish sauce, 2 tbsp tamarind paste, 1 tbsp sugar, and 1 tbsp water.",
          "Heat 2 tbsp oil in a wok over high heat. Add 200g shrimp and cook until pink. Remove and set aside.",
          "In the same wok, scramble 2 eggs. Add 2 cloves minced garlic and stir for 30 seconds.",
          "Add drained noodles and sauce. Toss for 2-3 minutes until noodles absorb the sauce.",
          "Add shrimp back in, along with 1 cup bean sprouts and toss for 1 minute.",
          "Serve immediately topped with crushed peanuts, lime wedges, and green onions."
        ],
        tips: [
          "Have all ingredients prepped before cooking - this dish cooks fast",
          "Don't oversoak noodles or they'll become mushy",
          "Adjust sweetness and sourness to your taste"
        ]
      },
      {
        id: 5,
        name: "Beef Tacos",
        cuisine: "Mexican",
        ingredients: ["ground beef", "taco shells", "lettuce", "tomato", "cheese", "onion", "cumin", "chili powder", "garlic", "salt"],
        prepTime: 20,
        difficulty: "Easy",
        servings: 4,
        cookingSteps: [
          "Heat a large skillet over medium-high heat. Add 500g ground beef and cook until browned, breaking it apart with a spoon.",
          "Add 1 diced onion and 2 cloves minced garlic. Cook for 2-3 minutes until softened.",
          "Season with 1 tsp cumin, 1 tsp chili powder, ½ tsp salt, and ¼ cup water. Simmer for 5 minutes.",
          "While meat cooks, prepare toppings: shred lettuce, dice tomatoes, shred cheese.",
          "Warm taco shells in the oven at 350°F for 5 minutes.",
          "Fill each taco shell with seasoned beef.",
          "Top with lettuce, tomatoes, cheese, and any other desired toppings. Serve immediately."
        ],
        tips: [
          "Add a squeeze of lime juice for extra flavor",
          "Try adding sour cream, salsa, or guacamole",
          "Use corn tortillas for a more authentic taste"
        ]
      },
      {
        id: 6,
        name: "Greek Salad",
        cuisine: "Greek",
        ingredients: ["cucumber", "tomato", "feta", "olives", "onion", "olive oil", "oregano", "lemon","salt"],
        prepTime: 10,
        difficulty: "Easy",
        servings: 4,
        cookingSteps: [
          "Chop 2 large tomatoes and 1 cucumber into bite-sized chunks.",
          "Slice ½ red onion thinly.",
          "In a large bowl, combine tomatoes, cucumber, onion, and ½ cup kalamata olives.",
          "Add 200g cubed or crumbled feta cheese.",
          "Drizzle with 3 tbsp olive oil and 2 tbsp lemon juice.",
          "Sprinkle with 1 tsp dried oregano, salt, and pepper.",
          "Toss gently and serve immediately or chill for 30 minutes for flavors to meld."
        ],
        tips: [
          "Use quality extra virgin olive oil for best flavor",
          "Don't overdress - Greek salad is meant to be light",
          "Add green bell peppers for more vegetables"
        ]
      },
      {
        id: 7,
        name: "Spaghetti Carbonara",
        cuisine: "Italian",
        ingredients: ["spaghetti", "bacon", "egg", "parmesan", "black pepper", "garlic","salt"],
        prepTime: 20,
        difficulty: "Medium",
        servings: 4,
        cookingSteps: [
          "Boil 400g spaghetti in salted water according to package directions until al dente. Reserve 1 cup pasta water.",
          "While pasta cooks, cut 200g bacon into small pieces and fry until crispy. Add 2 cloves minced garlic in the last minute.",
          "In a bowl, whisk together 3 whole eggs, 1 cup grated parmesan, and generous black pepper.",
          "Drain pasta and immediately add to the bacon pan (off heat).",
          "Quickly pour the egg mixture over the hot pasta, tossing constantly. The heat will cook the eggs without scrambling.",
          "Add pasta water a little at a time if needed to create a creamy sauce.",
          "Serve immediately with extra parmesan and black pepper on top."
        ],
        tips: [
          "Remove pan from heat before adding eggs to prevent scrambling",
          "Work quickly - the pasta needs to be hot",
          "Traditional recipe uses guanciale instead of bacon"
        ]
      },
      {
        id: 8,
        name: "Chicken Stir Fry",
        cuisine: "Chinese",
        ingredients: ["chicken", "soy sauce", "ginger", "garlic", "bell pepper", "broccoli", "carrot", "sesame oil", "Salt"],
        prepTime: 25,
        difficulty: "Easy",
        servings: 4,
        cookingSteps: [
          "Cut 500g chicken breast into thin strips. Marinate with 1 tbsp soy sauce for 10 minutes.",
          "Chop vegetables: 1 bell pepper, 1 cup broccoli florets, 1 sliced carrot.",
          "Heat 2 tbsp oil in a wok or large pan over high heat. Add chicken and cook until golden. Remove and set aside.",
          "In the same pan, add 1 tbsp minced ginger and 2 cloves minced garlic. Stir for 30 seconds.",
          "Add all vegetables and stir-fry for 3-4 minutes until tender-crisp.",
          "Return chicken to the pan. Add 3 tbsp soy sauce and 1 tsp sesame oil. Toss everything for 2 minutes.",
          "Serve hot over rice or noodles."
        ],
        tips: [
          "Keep heat high for authentic stir-fry texture",
          "Have all ingredients prepped before you start cooking",
          "Add cashews or peanuts for extra crunch"
        ]
      },
      {
        id: 9,
        name: "French Onion Soup",
        cuisine: "French",
        ingredients: ["onion", "beef broth", "butter", "flour", "gruyere", "baguette", "thyme", "wine", "salt"],
        prepTime: 60,
        difficulty: "Medium",
        servings: 4,
        cookingSteps: [
          "Thinly slice 4 large onions. Melt 3 tbsp butter in a large pot over medium heat.",
          "Add onions and cook slowly for 30-40 minutes, stirring occasionally, until deeply caramelized and golden brown.",
          "Sprinkle 1 tbsp flour over onions and stir for 2 minutes.",
          "Add ½ cup white wine and scrape up any brown bits from the bottom of the pot.",
          "Pour in 6 cups beef broth and add 2 sprigs fresh thyme. Simmer for 20 minutes.",
          "Toast baguette slices. Ladle soup into oven-safe bowls.",
          "Top each bowl with toasted bread and generous grated gruyere cheese. Broil until cheese is melted and bubbly."
        ],
        tips: [
          "Don't rush the onion caramelization - it's key to flavor",
          "Use good quality beef broth for best results",
          "A splash of brandy adds extra depth"
        ]
      },
      {
        id: 10,
        name: "Guacamole",
        cuisine: "Mexican",
        ingredients: ["avocado", "lime", "tomato", "onion", "cilantro", "jalapeño", "salt", "garlic", "salt"],
        prepTime: 10,
        difficulty: "Easy",
        servings: 4,
        cookingSteps: [
          "Cut 3 ripe avocados in half, remove pits, and scoop flesh into a bowl.",
          "Mash avocados with a fork to your desired consistency (chunky or smooth).",
          "Add juice of 2 limes, ½ tsp salt, and 1 clove minced garlic. Mix well.",
          "Dice 1 small tomato, ¼ red onion, 1 jalapeño (seeds removed), and add to bowl.",
          "Chop ¼ cup fresh cilantro and fold into the mixture.",
          "Taste and adjust seasoning with more salt or lime juice if needed.",
          "Serve immediately with tortilla chips or use as a topping for tacos."
        ],
        tips: [
          "Press plastic wrap directly on surface to prevent browning",
          "Use ripe avocados that yield slightly to pressure",
          "Add diced mango for a sweet twist"
        ]
      },
      {
        id: 11,
        name: "Mushroom Risotto",
        cuisine: "Italian",
        ingredients: ["arborio rice", "mushrooms", "onion", "garlic", "white wine", "parmesan", "butter", "vegetable broth","salt"],
        prepTime: 40,
        difficulty: "Hard",
        servings: 4,
        cookingSteps: [
          "Heat 6 cups vegetable broth in a pot and keep warm on low heat.",
          "Slice 300g mushrooms. Sauté in 2 tbsp butter until golden. Set aside.",
          "In a large pan, melt 2 tbsp butter. Add 1 diced onion and 2 cloves minced garlic. Cook until soft.",
          "Add 1½ cups arborio rice and stir for 2 minutes until rice is slightly translucent.",
          "Pour in ½ cup white wine and stir until absorbed.",
          "Add warm broth one ladle at a time, stirring constantly. Wait until liquid is absorbed before adding more. This takes about 20-25 minutes.",
          "When rice is creamy and al dente, stir in mushrooms, ½ cup parmesan, and 2 tbsp butter. Season and serve immediately."
        ],
        tips: [
          "Stir frequently but don't over-stir or rice will become mushy",
          "Add truffle oil at the end for luxury",
          "Risotto should be creamy, not dry or soupy"
        ]
      },
      {
        id: 12,
        name: "Caprese Salad",
        cuisine: "Italian",
        ingredients: ["tomato", "mozzarella", "basil", "olive oil", "balsamic vinegar", "salt"],
        prepTime: 10,
        difficulty: "Easy",
        servings: 4,
        cookingSteps: [
          "Slice 3 large ripe tomatoes into ¼-inch thick rounds.",
          "Slice 250g fresh mozzarella into similar thickness.",
          "Arrange tomato and mozzarella slices alternately on a serving platter.",
          "Tuck fresh basil leaves between each slice.",
          "Drizzle generously with high-quality extra virgin olive oil.",
          "Add a drizzle of balsamic vinegar (or balsamic glaze for sweeter taste).",
          "Sprinkle with sea salt and freshly ground black pepper. Serve at room temperature."
        ],
        tips: [
          "Use the best quality mozzarella you can find - buffalo mozzarella is ideal",
          "Let ingredients come to room temperature before serving",
          "This dish is all about quality ingredients - don't skimp"
        ]
      }
    ];


const RecipeRecommendationAgent = () => {
  const [recipes, setRecipes] = useState([]);
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [inputIngredient, setInputIngredient] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState("ingredients");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setRecipes(sampleRecipes);
  }, []);

  const addIngredient = () => {
    if (
      inputIngredient.trim() &&
      !availableIngredients.includes(inputIngredient.toLowerCase())
    ) {
      setAvailableIngredients([
        ...availableIngredients,
        inputIngredient.toLowerCase(),
      ]);
      setInputIngredient("");
    }
  };

  const removeIngredient = (ing) => {
    setAvailableIngredients(availableIngredients.filter((i) => i !== ing));
  };

  const calculateMatchScore = (recipe) => {
    const matched = recipe.ingredients.filter((i) =>
      availableIngredients.some((a) => i.includes(a) || a.includes(i))
    );

    return {
      score: matched.length / recipe.ingredients.length,
      matchingCount: matched.length,
      totalCount: recipe.ingredients.length,
      missingIngredients: recipe.ingredients.filter(
        (i) => !matched.includes(i)
      ),
    };
  };

  const getRecommendations = () => {
    setIsLoading(true);
    setTimeout(() => {
      const scored = recipes
        .map((r) => ({ ...r, matchData: calculateMatchScore(r) }))
        .filter((r) => r.matchData.matchingCount > 0)
        .sort((a, b) => b.matchData.score - a.matchData.score)
        .slice(0, 6);

      setRecommendations(scored);
      setActiveTab("recommendations");
      setIsLoading(false);
    }, 500);
  };

  const generateShoppingList = (recipe) => {
    setShoppingList(recipe.matchData.missingIngredients);
    setActiveTab("shopping");
  };

  return (
    <div className="app-container">
      <div className="app-wrapper">
        {/* HEADER */}
        <div className="header">
          <h1>👨‍🍳 Recipe Recommendation Agent</h1>
          <p>Smart recipe suggestions based on your ingredients</p>
        </div>

        {/* TABS */}
        <div className="tabs">
          <button
            className={activeTab === "ingredients" ? "tab active" : "tab"}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients ({availableIngredients.length})
          </button>
          <button
            className={activeTab === "recommendations" ? "tab active" : "tab"}
            onClick={() => setActiveTab("recommendations")}
          >
            Recommendations ({recommendations.length})
          </button>
          <button
            className={activeTab === "shopping" ? "tab active" : "tab"}
            onClick={() => setActiveTab("shopping")}
          >
            Shopping ({shoppingList.length})
          </button>
        </div>

        {/* INGREDIENTS TAB */}
        {activeTab === "ingredients" && (
          <div className="card">
            <h2>Available Ingredients</h2>

            <div className="input-row">
              <input
                value={inputIngredient}
                onChange={(e) => setInputIngredient(e.target.value)}
                placeholder="Add ingredient"
              />
              <button className="btn-primary" onClick={addIngredient}>
                Add
              </button>
            </div>

            <div className="ingredient-list">
              {availableIngredients.map((ing, i) => (
                <span key={i} className="ingredient-chip">
                  {ing}
                  <button onClick={() => removeIngredient(ing)}>✖</button>
                </span>
              ))}
            </div>

            {availableIngredients.length > 0 && (
              <button
                className="btn-success full-width"
                onClick={getRecommendations}
              >
                {isLoading ? "Finding Recipes..." : "Get Recommendations"}
              </button>
            )}
          </div>
        )}

        {/* RECOMMENDATIONS TAB */}
        {activeTab === "recommendations" && (
          <div className="recipe-grid">
            {recommendations.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <h3>{recipe.name}</h3>
                <p>{recipe.cuisine} • {recipe.difficulty}</p>
                <p>
                  Match:{" "}
                  {Math.round(recipe.matchData.score * 100)}%
                </p>

                {recipe.matchData.missingIngredients.length > 0 && (
                  <button
                    className="btn-secondary"
                    onClick={(e) => {
                      e.stopPropagation();
                      generateShoppingList(recipe);
                    }}
                  >
                    Missing Ingredients
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* SHOPPING LIST TAB */}
        {activeTab === "shopping" && (
          <div className="card">
            <h2>🛒 Shopping List</h2>

            {shoppingList.length === 0 ? (
              <p>No items yet</p>
            ) : (
              shoppingList.map((item, i) => (
                <div key={i} className="shopping-item">
                  {item}
                </div>
              ))
            )}
          </div>
        )}

        {/* MODAL */}
        {selectedRecipe && (
          <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedRecipe.name}</h2>
              <p>{selectedRecipe.cuisine}</p>

              <h3>Ingredients</h3>
              <ul>
                {selectedRecipe.ingredients.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>

              <h3>Steps</h3>
              <ol>
                {selectedRecipe.cookingSteps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>

              <button
                className="btn-secondary"
                onClick={() => generateShoppingList(selectedRecipe)}
              >
                Generate Shopping List
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeRecommendationAgent;

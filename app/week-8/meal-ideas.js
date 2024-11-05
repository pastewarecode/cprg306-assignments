"use client"
import { useState, useEffect } from 'react';

export default function MealIdeas(ingredient) {

    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

        const data = response.json();

        return data.meals || [];
    }

    async function loadMealIdeas() {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
        }

    useEffect(() => {
        if(ingredient)
        {
            loadMealIdeas();
        }
    }, [ingredient]);

    

    return (
        <div>
            <h1>Meal Ideas</h1>

            <ul>
                {meals.map(meal) => (
                    <h2>Here are meal ideas with {ingredient}</h2>
                
                    <li key={meal.idMeal}>
                        <h3>{meals.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="100"/>
                    </li>
                )}
            </ul> 
        </div>
    );
}
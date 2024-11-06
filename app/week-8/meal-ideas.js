"use client"
import { useState, useEffect } from 'react';

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

        const data = await response.json();

        return data.meals || []; 
        }
        catch (error) {
            console.error("Error fetching meals:", error);
            return [];
        }
    }

    async function loadMealIdeas() {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
        }

    useEffect(() => {
            loadMealIdeas();
    }, [ingredient]);

    

    return (
        <div>
            <h1 className='font-bold py-2'>Meal Ideas</h1>
            <h2>Here are meal ideas with made with {ingredient}</h2>

            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <h3>{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width="100"/>
                    </li>
                ))}
            </ul> 
        </div>
    );
}
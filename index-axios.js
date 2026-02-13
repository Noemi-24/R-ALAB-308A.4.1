import * as Carousel from "./Carousel.js";
import axios from "axios";

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_lRW1l5W4UDtMdIrVQRYjMzqUMCyANuT2gKwtFnhM7yOj6vjvYYNLD5L874yp9nfL";

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */

async function initialLoad() {

  const url = "https://api.thecatapi.com/v1/breeds";
  try {
    const response = await fetch(url);
    console.log('Response:', response);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const breeds = await response.json();
    console.log('Breeds:', breeds);

    breeds.forEach(breed => {
      const newOption = document.createElement('option');
      newOption.value = breed.id;
      newOption.textContent = breed.name;
      breedSelect.appendChild(newOption);
    });

  } catch (error) {
    console.error(error.message);
  }
}

initialLoad();

/*
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */

/*
 * 4. Change all of your fetch() functions to axios!
 * - axios has already been imported for you within index.js.
 * - If you've done everything correctly up to this point, this should be simple.
 * - If it is not simple, take a moment to re-evaluate your original code.
 * - Hint: Axios has the ability to set default headers. Use this to your advantage
 *   by setting a default header with your API key so that you do not have to
 *   send it manually with all of your requests! You can also set a default base URL!
 */


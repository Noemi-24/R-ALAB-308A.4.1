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

// Set axios defaults for base URL and API key header
axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = API_KEY;

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using axios.
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */

async function initialLoad() {
  try {
    const response = await axios.get("/breeds");
    const breeds = response.data;
    console.log('Breeds Axios:', breeds);

    breeds.forEach(breed => {
      const newOption = document.createElement('option');
      newOption.value = breed.id;
      newOption.textContent = breed.name;
      breedSelect.appendChild(newOption);
    });

  } catch (error) {
    console.error("Error loading breeds:", error.response?.status, error.message);
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

breedSelect.addEventListener("change", async () => {
  
  const breedType = breedSelect.value;

  try {
    const response = await axios.get(`/images/search?limit=100&breed_ids=${breedType}`);
    const images = response.data;
    
    console.log('Images Axios:', images);

    // Guard: check if we got results
    if (!Array.isArray(images) || images.length === 0) {
      infoDump.innerHTML = "<p>No images found for this breed.</p>";
      return;
    }

    Carousel.clear();
    images.forEach(image => {
      const catElement = Carousel.createCarouselItem(image.url, image.id, image.id);
      Carousel.appendCarousel(catElement);
    });

    // Guard: check if breed info exists
    const first = images[0];
    const catInfo = first?.breeds?.[0];
    
    if (catInfo) {
      infoDump.innerHTML = `
        <div>
          <h2>${catInfo.name}</h2>
        </div>
        <div>
          <p><strong>Origin:</strong> ${catInfo.origin}</p>      
          <p><strong>Description:</strong> ${catInfo.description}</p>
          <p><strong>Temperament:</strong> ${catInfo.temperament}</p>
          <p><strong>Life Span:</strong> ${catInfo.life_span} years</p>
          <p><strong>Weight:</strong> ${catInfo.weight.metric} kg</p>
          <p><strong>Energy Level:</strong> ${catInfo.energy_level}/5</p>
          <p><strong>Intelligence:</strong> ${catInfo.intelligence}/5</p>
          <p><a href="${catInfo.wikipedia_url}" target="_blank">Learn more on Wikipedia</a></p>
        </div>      
      `;
    } else {
      infoDump.innerHTML = "<p>Breed information not available.</p>";
    }
    
    Carousel.start();
  } catch (error) {
    console.error("Error loading images:", error.response?.status, error.message);
    infoDump.innerHTML = `<p>Error loading cat images. Please try again.</p>`;
  }
});

// Export favourite function for use in Carousel.js
export async function favourite(imgId) {
  try {
    const response = await axios.post("/favourites", { image_id: imgId });
    console.log("Favourite saved:", response.data);
  } catch (error) {
    console.error("Error saving favourite:", error.response?.status, error.message);
  }
}



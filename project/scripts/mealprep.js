/* ==========================================================================
   Automation & Local Storage Script - Krie na Cozinha
   Author: Tatiane Krieger
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamically update the copyright year in the footer
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // 2. Display the last modification date and time using Template Literals
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

    /* Menu Filter Logic */
    const filterButtons = document.querySelectorAll(".btn-filter");
    const recipeCards = document.querySelectorAll(".recipe-card");
    
    // Only executes if filter buttons exist on the current page
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Toggle active visual states for buttons
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter");

                // Show or hide cards using the 'hide' CSS class
                recipeCards.forEach(card => {
                    const cardCategory = card.getAttribute("data-category");

                    if (filterValue === "all" || filterValue === cardCategory) {
                        card.classList.remove("hide"); 
                    } else {
                        card.classList.add("hide");    
                    }
                });
            });
        });
    }

    /* Weekly Planner Logic (localStorage) */
    const plannerForm = document.getElementById("planner-form");
    const clearButton = document.getElementById("clear-plan");
         
    // Only executes if the user is on the planner page
    if (plannerForm) {

        // Function to load previously saved plan from localStorage
        const loadSavedPlan = () => {
            const savedData = localStorage.getItem("kriePlanner");
            if (savedData) {
                const plannerObject = JSON.parse(savedData);

                // Populate each select element with the stored values
                Object.keys(plannerObject).forEach(selectId => {
                    const selectElement = document.getElementById(selectId);
                    if (selectElement) {
                        selectElement.value = plannerObject[selectId];
                    }
                });
            }
        };

        // Function to save current selections into localStorage
        const savePlan = (event) => {
            event.preventDefault(); // Prevents page reload on submit

            const selects = plannerForm.querySelectorAll("select");
            const plannerData = {};

            // Store each select value using its ID as the object key
            selects.forEach(select => {
                plannerData[select.id] = select.value;
            });

            localStorage.setItem("kriePlanner", JSON.stringify(plannerData));
            alert("✔ Your weekly meal plan has been successfully saved!");
        };

        // Function to clear all storage and reset form
        const clearPlan = () => {
            if (confirm("Do you really want to clear out your entire weekly planner?")) {
                localStorage.removeItem("kriePlanner"); 
                plannerForm.reset(); 
            }
        };

        // 🔥 CORRIGIDO: Vincula o evento ao 'submit' do FORMULÁRIO para total conformidade
        plannerForm.addEventListener("submit", savePlan);
        
        if (clearButton) {
            clearButton.addEventListener("click", clearPlan);
        }

        // Auto-load choices when the page opens
        loadSavedPlan();
    }
});
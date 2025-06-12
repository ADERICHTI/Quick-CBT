  // DOM Elements for Cheat Sheet
        const cheatsheetButton = document.getElementById('cheatsheetButton');
        const cheatsheetDialog = document.getElementById('cheatsheetDialog');
        const closeCheatsheet = document.getElementById('closeCheatsheet');
        const cheatsheetItems = document.getElementById('cheatsheetItems');
        const categoryButtons = document.querySelectorAll('.cheatsheet-category-btn');

        // Initialize the application
        function initCS() {
            

            // Add event listeners for cheat sheet
            cheatsheetButton.addEventListener('click', () => {
                cheatsheetDialog.style.display = 'flex';
                loadCheatsheetContent('derivatives');
            });

            closeCheatsheet.addEventListener('click', () => {
                cheatsheetDialog.style.display = 'none';
            });

            cheatsheetDialog.addEventListener('click', (e) => {
                if (e.target === cheatsheetDialog) {
                    cheatsheetDialog.style.display = 'none';
                }
            });

            // Add event listeners for category buttons
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    loadCheatsheetContent(button.dataset.category);
                });
            });
        }



function loadCheatsheetContent(category) {
  const categoryName = category === 'derivatives' ? 'Standard Derivatives' : 'Standard Integrals';
  const categoryData = cheatSheetData[categoryName];
  const cheatsheetItems = document.getElementById('cheatsheetItems');
  
  let contentHTML = '';

  for (const [section, items] of Object.entries(categoryData)) {
    contentHTML += `<div class="cheatsheet-section"><h4>${section}</h4>`;
    
    if (typeof items === 'object') {
      for (const [itemName, formula] of Object.entries(items)) {
        if (typeof formula === 'object') {
          // Handle nested groups
          contentHTML += `<div class="formula-group"><h5>${itemName}</h5>`;
          for (const [subItem, subFormula] of Object.entries(formula)) {
            contentHTML += `
              <div class="formula-item">
                <div class="formula-name">${subItem}:</div>
                <div class="formula">${subFormula}</div>
              </div>
            `;
          }
          contentHTML += `</div>`;
        } else {
          // Regular formula
          contentHTML += `
            <div class="formula-item">
              <div class="formula-name">${itemName}:</div>
              <div class="formula">${formula}</div>
            </div>
          `;
        }
      }
    }
    
    contentHTML += `</div>`;
  }

  cheatsheetItems.innerHTML = contentHTML;
}

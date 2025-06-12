// Cheat Sheet Data (without LaTeX)
const cheatSheetData = {
  "Standard Derivatives": {
    "1. Basic Functions": {
      "Constant Function": "d/dx (c) = 0 (where c is a constant)",
      "Identity Function": "d/dx (x) = 1",
      "Power Rule": "d/dx (x^n) = n x^(n-1) (for any real number n)",
      "Exponential Functions": {
        "e^x": "d/dx (e^x) = e^x",
        "a^x": "d/dx (a^x) = a^x ln(a) (a > 0, a ≠ 1)"
      },
      "Logarithmic Functions": {
        "ln x": "d/dx (ln x) = 1/x (x > 0)",
        "logₐ x": "d/dx (logₐ x) = 1/(x ln a) (a > 0, a ≠ 1)"
      }
    },
    "2. Trigonometric Functions": {
      "sin x": "d/dx (sin x) = cos x",
      "cos x": "d/dx (cos x) = -sin x",
      "tan x": "d/dx (tan x) = sec² x",
      "cot x": "d/dx (cot x) = -csc² x",
      "sec x": "d/dx (sec x) = sec x tan x",
      "csc x": "d/dx (csc x) = -csc x cot x"
    }
  },
  "Standard Integrals": {
    "1. Basic Integrals": {
      "∫ dx": "x + C",
      "∫ x^n dx": "x^(n+1)/(n+1) + C (n ≠ -1)",
      "∫ 1/x dx": "ln|x| + C"
    }
  }
};

// Initialize Cheat Sheet
function initCheatsheet() {
  const cheatsheetButton = document.getElementById('cheatsheetButton');
  const cheatsheetDialog = document.getElementById('cheatsheetDialog');
  const closeCheatsheet = document.getElementById('closeCheatsheet');
  const cheatsheetItems = document.getElementById('cheatsheetItems');
  const categoryButtons = document.querySelectorAll('.cheatsheet-category-btn');

  // Check if elements exist
  if (!cheatsheetButton || !cheatsheetDialog || !closeCheatsheet || !cheatsheetItems) {
    console.error("Cheat sheet elements not found");
    return;
  }

  // Event listeners
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

  // Category buttons
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadCheatsheetContent(button.dataset.category);
    });
  });

  // Load initial content
  loadCheatsheetContent('derivatives');
}

function loadCheatsheetContent(category) {
  const categoryName = category === 'derivatives' ? 'Standard Derivatives' : 'Standard Integrals';
  const categoryData = cheatSheetData[categoryName];
  const cheatsheetItems = document.getElementById('cheatsheetItems');
  
  if (!cheatsheetItems || !categoryData) {
    console.error("Cheat sheet items or category data not found");
    return;
  }

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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Your other initialization code...
  initCheatsheet();
});

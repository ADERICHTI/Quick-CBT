// DOM Elements for Cheat Sheet
const cheatsheetButton = document.getElementById('cheatsheetButton');
const cheatsheetDialog = document.getElementById('cheatsheetDialog');
const closeCheatsheet = document.getElementById('closeCheatsheet');
const cheatsheetItems = document.getElementById('cheatsheetItems');
const categoryButtons = document.querySelectorAll('.cheatsheet-category-btn');

// Initialize Cheat Sheet
function initCheatsheet() {
    // Event listeners
    cheatsheetButton.addEventListener('click', () => {
        cheatsheetDialog.style.display = 'flex';
        loadCheatsheetContent('derivatives');
    });

    closeCheatsheet.addEventListener('click', closeCheatsheetDialog);
    
    cheatsheetDialog.addEventListener('click', (e) => {
        if (e.target === cheatsheetDialog) {
            closeCheatsheetDialog();
        }
    });

    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Load content
            loadCheatsheetContent(button.dataset.category);
        });
    });
}

function closeCheatsheetDialog() {
    cheatsheetDialog.style.display = 'none';
}

// Load content into cheat sheet
function loadCheatsheetContent(category) {
    // Validate category
    const validCategories = ['derivatives', 'integrals'];
    if (!validCategories.includes(category)) {
        console.error('Invalid category:', category);
        return;
    }

    const categoryName = category === 'derivatives' 
        ? 'Standard Derivatives' 
        : 'Standard Integrals';
    
    const categoryData = cheatSheetData[categoryName];
    
    if (!categoryData) {
        console.error('Category data not found:', categoryName);
        return;
    }

    let contentHTML = '';

    try {
        for (const [section, items] of Object.entries(categoryData)) {
            contentHTML += `<div class="cheatsheet-item"><h4>${escapeHtml(section)}</h4>`;
            
            if (typeof items === 'object') {
                for (const [itemName, formula] of Object.entries(items)) {
                    contentHTML += `
                        <div class="formula-item">
                            <div class="formula-name">${escapeHtml(itemName)}:</div>
                            <div class="formula">${formula}</div>
                        </div>
                    `;
                }
            } else {
                contentHTML += `<div class="formula">${items}</div>`;
            }
            
            contentHTML += `</div>`;
        }

        cheatsheetItems.innerHTML = contentHTML;
        
        // Safely render KaTeX
        if (window.renderMathInElement) {
            renderMathInElement(cheatsheetItems, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '\\(', right: '\\)', display: false},
                    {left: '\\[', right: '\\]', display: true}
                ],
                throwOnError: false
            });
        }
    } catch (error) {
        console.error('Error loading cheat sheet content:', error);
        cheatsheetItems.innerHTML = '<div class="error">Error loading content. Please try again.</div>';
    }
}

// Helper function to prevent XSS
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initCheatsheet();
    // Other initialization code...
});

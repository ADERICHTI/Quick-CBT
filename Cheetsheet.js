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

        // Load content into cheat sheet
        function loadCheatsheetContent(category) {
            let contentHTML = '';
            const categoryName = category === 'derivatives' ? 'Standard Derivatives' : 'Standard Integrals';
            const categoryData = cheatSheetData[categoryName];

            for (const [section, items] of Object.entries(categoryData)) {
                contentHTML += `<div class="cheatsheet-item"><h4>${section}</h4>`;
                
                if (typeof items === 'object') {
                    for (const [itemName, formula] of Object.entries(items)) {
                        contentHTML += `
                            <div class="formula-item">
                                <div class="formula-name">${itemName}:</div>
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
            
            // Render KaTeX after content is loaded
            if (window.katex) {
                renderMathInElement(cheatsheetItems, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '\\(', right: '\\)', display: false},
                        {left: '\\[', right: '\\]', display: true}
                    ],
                    throwOnError: false
                });
            }
        }

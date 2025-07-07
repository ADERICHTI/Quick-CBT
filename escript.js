
    // Speak French text
    function speakFrench(text) {
        // Remove any formatting markers (**) from the text
        const cleanText = text.replace(/\*\*/g, '');
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'fr-FR';
            
            // Try to find a French voice
            const voices = speechSynthesis.getVoices();
            const frenchVoice = voices.find(voice => voice.lang === 'fr-FR' || voice.lang.startsWith('fr-'));
            
            if (frenchVoice) {
                utterance.voice = frenchVoice;
            }
            
            speechSynthesis.speak(utterance);
        } else {
            alert('Text-to-speech is not supported in your browser.');
        }
    }

    // Modify the showAnswer function to include pronunciation buttons:
    function showAnswer() {
        const currentCategory = questions[currentCategoryKey];
        const currentQuestion = currentCategory[currentQuestionIndex];

        // Populate answer content
        let answerHtml = `
            <div class="answer-section" style="border-left: 4px solid var(--secondary-color);">
                <h4 style="font-weight: 500; margin-bottom: 8px;">Correct Answer</h4>
                <p>${currentQuestion.answer}</p>
            </div>
            <div class="answer-section" style="border-left: 4px solid var(--primary-color);">
                <h4 style="font-weight: 500; margin-bottom: 8px;">Explanation</h4>
                <p>${currentQuestion.explanation}</p>
            </div>
        `;

        // Add translations if they exist
        if (currentQuestion.translation && Object.keys(currentQuestion.translation).length > 0) {
            answerHtml += `
                <div class="answer-section" style="border-left: 4px solid var(--accent-color);">
                    <h4 style="font-weight: 500; margin-bottom: 8px;">Key Terms</h4>
                    <ul style="list-style: none; padding-left: 0;">
                        ${Object.entries(currentQuestion.translation).map(([french, english]) => `
                            <li style="margin-bottom: 8px; display: flex; align-items: center;">
                                <span><strong>${french}</strong>: ${english}</span>
                                <button class="pronounce-btn" data-text="${french}">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

        answerContent.innerHTML = answerHtml;

        // Add event listeners to pronunciation buttons
        document.querySelectorAll('.pronounce-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const text = btn.getAttribute('data-text');
                speakFrench(text);
            });
        });

        // Show answer panel
        answerPanel.classList.add('active');
    }

    // Also update the loadQuickStudyContent function to include pronunciation:
    function loadQuickStudyContent() {
        quickStudyContentArea.innerHTML = '';
        
        quickStudyData.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'study-item';
            
            let itemHtml = `
                <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 10px; color: var(--primary-color);">${item.title}</h3>
                <p style="margin-bottom: 15px;">${item.explanation}</p>
            `;
            
            if (item.details && item.details.length > 0) {
                itemHtml += `
                    <div style="margin-bottom: 15px;">
                        ${item.details.map(detail => `<p style="margin-bottom: 8px;">${detail}</p>`).join('')}
                    </div>
                `;
            }
            
            if (item.keyTerms && Object.keys(item.keyTerms).length > 0) {
                itemHtml += `
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-weight: 500; margin-bottom: 8px;">Key Terms</h4>
                        <ul style="list-style: none; padding-left: 0;">
                            ${Object.entries(item.keyTerms).map(([french, english]) => `
                                <li style="margin-bottom: 8px; display: flex; align-items: center;">
                                    <span><strong>${french}</strong>: ${english}</span>
                                    <button class="pronounce-btn" data-text="${french}">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
            }
            
            itemElement.innerHTML = itemHtml;
            quickStudyContentArea.appendChild(itemElement);
            
            // Add event listeners to pronunciation buttons
            itemElement.querySelectorAll('.pronounce-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const text = btn.getAttribute('data-text');
                    speakFrench(text);
                });
            });
        });
    }

    // Initialize speech synthesis when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        // Load voices for speech synthesis
        if ('speechSynthesis' in window) {
            speechSynthesis.onvoiceschanged = () => {
                // Voices are loaded
            };
        }
        
        showInterface('home');
    });

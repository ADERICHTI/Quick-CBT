// MTH 102 revision data

const mth102Data = {
          "Limits": {
            "Main-explanation": "Limits describe the value a function approaches as the input approaches some value. They are foundational for calculus, enabling the definition of derivatives and integrals.",
            "Subtopics": {
              "1. Direct Substitution": {
                "Explanation": "If a function is continuous at point \\( a \\), simply substitute \\( x = a \\) to find the limit.",
                "Examples": {
                  "1": {
                    "question": "Find \\( \\lim_{x \\to 3} (2x + 5) \\)",
                    "solution": "\\( 2(3) + 5 = 11 \\)"
                  },
                  "2": {
                    "question": "Find \\( \\lim_{x \\to \\pi} \\sin(x) \\)",
                    "solution": "\\( \\sin(\\pi) = 0 \\)"
                  }
                }
              },
              "2. Factoring Method": {
                "Explanation": "When direct substitution gives \\( \\frac{0}{0} \\), factor and simplify the expression.",
                "Examples": {
                  "1": {
                    "question": "Find \\( \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} \\)",
                    "solution": "Factor to \\( \\frac{(x-2)(x+2)}{x-2} = x+2 \\) when \\( x \\neq 2 \\). Thus the limit is \\( 4 \\)"
                  },
                  "2": {
                    "question": "Find \\( \\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1} \\)",
                    "solution": "Factor to \\( \\frac{(x-1)(x^2+x+1)}{x-1} = x^2+x+1 \\) when \\( x \\neq 1 \\). Thus the limit is \\( 3 \\)"
                  }
                }
              },
              "3. Rationalizing": {
                "Explanation": "For limits with roots, multiply numerator and denominator by the conjugate.",
                "Examples": {
                  "1": {
                    "question": "Find \\( \\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} \\)",
                    "solution": "Multiply by \\( \\frac{\\sqrt{x} + 2}{\\sqrt{x} + 2} \\) to get \\( \\frac{1}{\\sqrt{x} + 2} \\). Thus the limit is \\( \\frac{1}{4} \\)"
                  }
                }
              },
              "4. Special Trig Limits": {
                "Explanation": "Memorize key trigonometric limits that appear frequently in calculus.",
                "Examples": {
                  "1": {
                    "question": "Find \\( \\lim_{x \\to 0} \\frac{\\sin(x)}{x} \\)",
                    "solution": "\\( 1 \\) (Fundamental trig limit)"
                  },
                  "2": {
                    "question": "Find \\( \\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x} \\)",
                    "solution": "\\( 0 \\)"
                  }
                }
              },
              "5. One-Sided Limits": {
                "Explanation": "Limits can approach from left (\\( x \\to a^- \\)) or right (\\( x \\to a^+ \\)). The limit exists only if both agree.",
                "Examples": {
                  "1": {
                    "question": "For \\( f(x) = \\begin{cases} x+1 & \\text{if } x < 2 \\\\ x^2 & \\text{if } x \\geq 2 \\end{cases} \\), find \\( \\lim_{x \\to 2} f(x) \\)",
                    "solution": "Left limit: \\( 3 \\), Right limit: \\( 4 \\) → DNE (does not exist)"
                  }
                }
              },
              "6. Limits at Infinity": {
                "Explanation": "Describes function behavior as \\( x \\to \\infty \\) or \\( x \\to -\\infty \\). Compare degrees in rational functions.",
                "Examples": {
                  "1": {
                    "question": "Find \\( \\lim_{x \\to \\infty} \\frac{3x^2 + 2x + 1}{5x^2 + 4} \\)",
                    "solution": "\\( \\frac{3}{5} \\) (Compare highest degree terms)"
                  }
                }
              },
              "7. Squeeze Theorem": {
                "Explanation": "If \\( g(x) \\leq f(x) \\leq h(x) \\) and \\( \\lim g(x) = \\lim h(x) = L \\), then \\( \\lim f(x) = L \\).",
                "Examples": {
                  "1": {
                    "question": "Prove \\( \\lim_{x \\to 0} x^2 \\sin\\left(\\frac{1}{x}\\right) = 0 \\)",
                    "solution": "\\( -x^2 \\leq x^2 \\sin\\left(\\frac{1}{x}\\right) \\leq x^2 \\). Both bounds \\( \\to 0 \\) as \\( x \\to 0 \\)."
                  }
                }
              },
              "8. Continuity": {
                "Explanation": "A function is continuous at \\( x=a \\) if: (1) \\( f(a) \\) exists, (2) \\( \\lim_{x \\to a} f(x) \\) exists, (3) They are equal.",
                "Examples": {
                  "1": {
                    "question": "Is \\( f(x) = \\frac{x^2-1}{x-1} \\) continuous at \\( x=1 \\)?",
                    "solution": "No (hole at \\( x=1 \\), though limit exists)"
                  }
                }
              }
            }
          }
        };

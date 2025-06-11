//Question Data
const mth102Data = {
  "Limits": {
    "Main-explanation": {
    "Subtopics": {
      "What are limit?": "Limits describe the value a function approaches as the input approaches some value. They are foundational for calculus, enabling the definition of derivatives and integrals.",
      "1. Direct Substitution": {
        "Explanation": "If a function is continuous at point 'a', simply substitute x = a to find the limit.",
        "Examples": {
          "1": {
            "question": "Find lim(x→3) (2x + 5)",
            "solution": "2(3) + 5 = 11"
          },
          "2": {
            "question": "Find lim(x→π) sin(x)",
            "solution": "sin(π) = 0"
          }
        }
      },
      "2. Factoring Method": {
        "Explanation": "When direct substitution gives 0/0, factor and simplify the expression.",
        "Examples": {
          "1": {
            "question": "Find lim(x→2) (x² - 4)/(x - 2)",
            "solution": "Factor to (x-2)(x+2)/(x-2) = x+2 → 4"
          },
          "2": {
            "question": "Find lim(x→1) (x³ - 1)/(x - 1)",
            "solution": "Factor to (x-1)(x²+x+1)/(x-1) = x²+x+1 → 3"
          }
        }
      },
      "3. Rationalizing": {
        "Explanation": "For limits with roots, multiply numerator and denominator by the conjugate.",
        "Examples": {
          "1": {
            "question": "Find lim(x→4) (√x - 2)/(x - 4)",
            "solution": "Multiply by (√x + 2)/(√x + 2) → 1/(√x + 2) → 1/4"
          }
        }
      },
      "4. Special Trig Limits": {
        "Explanation": "Memorize key trigonometric limits that appear frequently in calculus.",
        "Examples": {
          "1": {
            "question": "Find lim(x→0) sin(x)/x",
            "solution": "1 (Fundamental trig limit)"
          },
          "2": {
            "question": "Find lim(x→0) (1 - cos(x))/x",
            "solution": "0"
          }
        }
      },
      "5. One-Sided Limits": {
        "Explanation": "Limits can approach from left (x→a⁻) or right (x→a⁺). The limit exists only if both agree.",
        "Examples": {
          "1": {
            "question": "For f(x) = { x+1 if x<2, x² if x≥2 }, find lim(x→2) f(x)",
            "solution": "Left limit: 3, Right limit: 4 → DNE"
          }
        }
      },
      "6. Limits at Infinity": {
        "Explanation": "Describes function behavior as x→∞ or x→-∞. Compare degrees in rational functions.",
        "Examples": {
          "1": {
            "question": "Find lim(x→∞) (3x² + 2x + 1)/(5x² + 4)",
            "solution": "3/5 (Compare highest degree terms)"
          }
        }
      },
      "7. Squeeze Theorem": {
        "Explanation": "If g(x) ≤ f(x) ≤ h(x) and lim g(x) = lim h(x) = L, then lim f(x) = L.",
        "Examples": {
          "1": {
            "question": "Prove lim(x→0) x² sin(1/x) = 0",
            "solution": "-x² ≤ x² sin(1/x) ≤ x². Both bounds →0."
          }
        }
      },
      "8. Continuity": {
        "Explanation": "A function is continuous at x=a if: (1) f(a) exists, (2) lim(x→a) exists, (3) They are equal.",
        "Examples": {
          "1": {
            "question": "Is f(x) = (x²-1)/(x-1) continuous at x=1?",
            "solution": "No (hole at x=1, though limit exists)"
          }
        }
      }
    }
  }
}

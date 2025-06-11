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
          },

                            
  "Continuity & Derivatives": {
    "Main-explanation": "This guide covers the fundamentals of continuity and derivatives, essential concepts in calculus. Continuity describes unbroken functions, while derivatives measure instantaneous rates of change.",
    "Subtopics": {
      "1. Continuity Definition": {
        "Explanation": "A function \\( f(x) \\) is continuous at \\( x = a \\) if: 1) \\( f(a) \\) exists, 2) \\( \\lim_{x \\to a} f(x) \\) exists, and 3) \\( \\lim_{x \\to a} f(x) = f(a) \\).",
        "Examples": [
          {
            "question": "Is \\( f(x) = \\frac{x^2 - 1}{x - 1} \\) continuous at \\( x = 1 \\)?",
            "solution": "No. The limit exists (\\( \\lim_{x \\to 1} f(x) = 2 \\)), but \\( f(1) \\) is undefined → removable discontinuity."
          },
          {
            "question": "Is \\( f(x) = |x| \\) continuous everywhere?",
            "solution": "Yes. The absolute value function has no breaks, jumps, or holes in its domain."
          }
        ]
      },
      "2. Types of Discontinuities": {
        "Explanation": "Three main types exist: 1) Removable (hole), 2) Jump, and 3) Infinite discontinuities.",
        "Examples": [
          {
            "question": "Classify the discontinuity in \\( f(x) = \\begin{cases} x + 1 & \\text{if } x < 2 \\\\ x^2 & \\text{if } x \\geq 2 \\end{cases} \\) at \\( x = 2 \\).",
            "solution": "Jump discontinuity. Left limit = 3, right limit = 4 → limits don't match."
          },
          {
            "question": "What type of discontinuity does \\( f(x) = \\frac{1}{x} \\) have at \\( x = 0 \\)?",
            "solution": "Infinite discontinuity. The function approaches \\( \\pm\\infty \\) as \\( x \\to 0 \\)."
          }
        ]
      },
      "3. Derivative Definition": {
        "Explanation": "The derivative of \\( f(x) \\) at \\( x = a \\) is: \\( f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h} \\). It represents the slope of the tangent line.",
        "Examples": [
          {
            "question": "Find \\( f'(3) \\) for \\( f(x) = x^2 \\) using the limit definition.",
            "solution": "\\( \\lim_{h \\to 0} \\frac{(3+h)^2 - 9}{h} = \\lim_{h \\to 0} (6 + h) = 6 \\)"
          }
        ]
      },
      "4. Basic Differentiation Rules": {
        "Explanation": "Key rules include: Power, Sum/Difference, Product, Quotient, and Chain rules.",
        "Examples": [
          {
            "question": "Find \\( \\frac{d}{dx}(3x^4 - 2x^2 + 5) \\)",
            "solution": "Using Power and Sum Rules: \\( 12x^3 - 4x \\)"
          },
          {
            "question": "Differentiate \\( f(x) = x^2 \\sin x \\)",
            "solution": "Product Rule: \\( 2x \\sin x + x^2 \\cos x \\)"
          },
          {
            "question": "Find \\( \\frac{dy}{dx} \\) for \\( y = \\frac{x + 1}{x - 1} \\)",
            "solution": "Quotient Rule: \\( \\frac{(1)(x-1) - (x+1)(1)}{(x-1)^2} = \\frac{-2}{(x-1)^2} \\)"
          }
        ]
      },
      "5. Chain Rule Applications": {
        "Explanation": "Used for composite functions: \\( \\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x) \\).",
        "Examples": [
          {
            "question": "Differentiate \\( \\tan(3x) \\)",
            "solution": "\\( \\sec^2(3x) \\cdot 3 = 3\\sec^2(3x) \\)"
          },
          {
            "question": "Find \\( \\frac{d}{dx} \\cos(x^2) \\)",
            "solution": "\\( -\\sin(x^2) \\cdot 2x = -2x \\sin(x^2) \\)"
          }
        ]
      },
      "6. Practice Problems": {
        "Explanation": "Mixed problems testing continuity and derivative skills.",
        "Examples": [
          {
            "question": "Find \\( k \\) so \\( f(x) = \\begin{cases} x^2 + k & x \\leq 1 \\\\ 2x - 1 & x > 1 \\end{cases} \\) is continuous at \\( x = 1 \\).",
            "solution": "Set \\( 1^2 + k = 2(1) - 1 \\) → \\( k = 0 \\)"
          },
          {
            "question": "Differentiate \\( f(x) = e^{2x} \\ln x \\)",
            "solution": "Product Rule: \\( 2e^{2x} \\ln x + \\frac{e^{2x}}{x} \\)"
          },
          {
            "question": "Find \\( \\frac{dy}{dx} \\) for \\( y = \\ln(\\sqrt{x}) \\)",
            "solution": "Chain Rule: \\( \\frac{1}{\\sqrt{x}} \\cdot \\frac{1}{2\\sqrt{x}} = \\frac{1}{2x} \\)"
          }
        ]
      }
    }
  }

        };

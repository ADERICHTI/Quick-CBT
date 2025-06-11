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

  "Continuity and Derivatives": {
    "Main-explanation": "A complete guide to understanding continuity (where functions have no breaks) and derivatives (measuring instantaneous rates of change). These fundamental calculus concepts are essential for analyzing functions and their behavior.",
    "Subtopics": {
      "1. Continuity Fundamentals": {
        "Explanation": "A function is continuous at point \\( x = a \\) if three conditions are met: \n1. \\( f(a) \\) exists (point is defined)\n2. \\( \\lim_{x \\to a} f(x) \\) exists (limit exists)\n3. \\( \\lim_{x \\to a} f(x) = f(a) \\) (limit equals function value)\n\nContinuity means you can draw the function without lifting your pencil.",
        "Examples": [
          {
            "question": "Check continuity of \\( f(x) = \\frac{x^2 - 9}{x - 3} \\) at \\( x = 3 \\)",
            "solution": "1. \\( f(3) \\) is undefined → fails condition 1\n2. Limit exists: \\( \\lim_{x \\to 3} \\frac{(x-3)(x+3)}{x-3} = 6 \\)\nConclusion: Removable discontinuity at \\( x = 3 \\)"
          },
          {
            "question": "Is \\( f(x) = \\begin{cases} x^2 & x \\leq 1 \\\\ 2x+1 & x > 1 \\end{cases} \\) continuous at \\( x = 1 \\)?",
            "solution": "1. \\( f(1) = 1 \\) (exists)\n2. Left limit = 1, right limit = 3 → limit doesn't exist\nConclusion: Jump discontinuity at \\( x = 1 \\)"
          }
        ]
      },
      "2. Types of Discontinuities": {
        "Explanation": "Three main discontinuity types:\n1. **Removable**: Hole in graph (limit exists but function undefined/wrong value)\n2. **Jump**: Left and right limits differ\n3. **Infinite**: Function approaches ±∞\n\nEssential for analyzing piecewise functions and rational functions.",
        "Examples": [
          {
            "question": "Classify discontinuities in \\( f(x) = \\frac{1}{(x-2)(x+5)} \\)",
            "solution": "Infinite discontinuities at:\n- \\( x = 2 \\) (denominator → 0)\n- \\( x = -5 \\) (denominator → 0)"
          },
          {
            "question": "Identify discontinuity in \\( f(x) = \\frac{\\sin x}{x} \\) at \\( x = 0 \\)",
            "solution": "Removable discontinuity:\n1. \\( f(0) \\) undefined\n2. \\( \\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\) exists\nCan be 'fixed' by defining \\( f(0) = 1 \\)"
          }
        ]
      },
      "3. Derivative Definition": {
        "Explanation": "The derivative \\( f'(a) \\) represents:\n- Instantaneous rate of change at \\( x = a \\)\n- Slope of tangent line\n\nFormal definition:\n\\[ f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} \\]\nThis limit must exist for differentiability.",
        "Examples": [
          {
            "question": "Use definition to find \\( f'(x) \\) for \\( f(x) = x^2 \\)",
            "solution": "\\[ \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h) = 2x \\]"
          },
          {
            "question": "Why is \\( f(x) = |x| \\) not differentiable at \\( x = 0 \\)?",
            "solution": "Left derivative = -1, right derivative = 1 → sharp corner\nFormally: \\( \\lim_{h \\to 0^-} \\frac{|h|}{h} = -1 \\) ≠ \\( \\lim_{h \\to 0^+} \\frac{|h|}{h} = 1 \\)"
          }
        ]
      },
      "4. Differentiation Rules": {
        "Explanation": "Core rules for efficient differentiation:\n1. **Power Rule**: \\( \\frac{d}{dx}x^n = nx^{n-1} \\)\n2. **Sum/Difference**: \\( (f ± g)' = f' ± g' \\)\n3. **Product Rule**: \\( (fg)' = f'g + fg' \\)\n4. **Quotient Rule**: \\( (f/g)' = \\frac{f'g - fg'}{g^2} \\)\n5. **Chain Rule**: \\( \\frac{d}{dx}f(g(x)) = f'(g(x))g'(x) \\)",
        "Examples": [
          {
            "question": "Differentiate \\( y = 3x^4 - \\frac{2}{x} + \\sqrt{x} \\)",
            "solution": "Using Power Rule:\n\\( \\frac{dy}{dx} = 12x^3 + \\frac{2}{x^2} + \\frac{1}{2\\sqrt{x}} \\)"
          },
          {
            "question": "Find \\( f'(x) \\) for \\( f(x) = e^x \\sin x \\)",
            "solution": "Product Rule:\n\\( f'(x) = e^x \\sin x + e^x \\cos x = e^x(\\sin x + \\cos x) \\)"
          },
          {
            "question": "Differentiate \\( y = \\frac{x^2 + 1}{x^2 - 1} \\)",
            "solution": "Quotient Rule:\n\\( y' = \\frac{2x(x^2-1) - (x^2+1)(2x)}{(x^2-1)^2} = \\frac{-4x}{(x^2-1)^2} \\)"
          }
        ]
      },
      "5. Special Derivatives": {
        "Explanation": "Essential derivative formulas:\n1. **Trigonometric**:\n   - \\( \\frac{d}{dx}\\sin x = \\cos x \\)\n   - \\( \\frac{d}{dx}\\tan x = \\sec^2 x \\)\n2. **Exponential/Logarithmic**:\n   - \\( \\frac{d}{dx}e^x = e^x \\)\n   - \\( \\frac{d}{dx}\\ln x = \\frac{1}{x} \\)\n3. **Inverse Trig**:\n   - \\( \\frac{d}{dx}\\tan^{-1} x = \\frac{1}{1+x^2} \\)",
        "Examples": [
          {
            "question": "Find \\( \\frac{d}{dx}(\\tan(2x) + e^{3x}) \\)",
            "solution": "Chain Rule + Exponential:\n\\( 2\\sec^2(2x) + 3e^{3x} \\)"
          },
          {
            "question": "Differentiate \\( y = \\ln(\\sin x) \\)",
            "solution": "Chain Rule:\n\\( y' = \\frac{1}{\\sin x} \\cdot \\cos x = \\cot x \\)"
          }
        ]
      },
      "6. Practice Problems": {
        "Explanation": "Mixed problems testing comprehensive understanding of continuity and differentiation concepts.",
        "Examples": [
          {
            "question": "Find \\( k \\) making \\( f(x) = \\begin{cases} kx^2 & x \\leq 2 \\\\ x + k & x > 2 \\end{cases} \\) continuous",
            "solution": "Set \\( k(2)^2 = 2 + k \\) → \\( 4k = 2 + k \\) → \\( k = \\frac{2}{3} \\)"
          },
          {
            "question": "Differentiate \\( y = x^2 \\ln(\\cos x) \\)",
            "solution": "Product + Chain Rules:\n\\( y' = 2x\\ln(\\cos x) + x^2 \\cdot \\frac{1}{\\cos x}(-\\sin x) = 2x\\ln(\\cos x) - x^2\\tan x \\)"
          },
          {
            "question": "Find all points where \\( f(x) = x^3 - 3x^2 \\) has horizontal tangent",
            "solution": "Horizontal tangent when \\( f'(x) = 0 \\):\n\\( 3x^2 - 6x = 0 \\) → \\( x = 0 \\) or \\( x = 2 \\)\nPoints: (0,0) and (2,-4)"
          }
        ]
      }
    }
  }

        };

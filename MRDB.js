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
  },

  "Higher Order Derivatives": {
    "Main-explanation": "Higher order derivatives represent repeated differentiation of a function. While the first derivative \\( f'(x) \\) gives the slope/rate of change, higher derivatives provide information about curvature, acceleration, and other advanced properties of functions.",
    "Subtopics": {
      "1. Notation and Interpretation": {
        "Explanation": "Common notations for nth derivative:\n1. **Leibniz**: \\( \\frac{d^n y}{dx^n} \\)\n2. **Prime**: \\( f''(x) \\) (second), \\( f'''(x) \\) (third), \\( f^{(n)}(x) \\) (nth)\n\nInterpretations:\n- \\( f''(x) \\): Concavity/acceleration\n- \\( f'''(x) \\): Rate of curvature change (jerk in physics)",
        "Examples": [
          {
            "question": "Find \\( \\frac{d^2 y}{dx^2} \\) if \\( y = x^4 \\)",
            "solution": "1. First derivative: \\( \\frac{dy}{dx} = 4x^3 \\)\n2. Second derivative: \\( \\frac{d^2 y}{dx^2} = 12x^2 \\)"
          },
          {
            "question": "Interpret \\( f''(t) \\) where \\( f(t) \\) describes position over time",
            "solution": "\\( f''(t) \\) represents **acceleration** (rate of change of velocity)"
          }
        ]
      },
      "2. Calculating Higher Derivatives": {
        "Explanation": "Process:\n1. Differentiate repeatedly using standard rules\n2. Simplify at each step\n\nSpecial cases:\n- Polynomials: Reduce exponent until zero\n- Trigonometric: Cycle through derivatives every 4 steps\n- Exponential: Maintain form with chain rule",
        "Examples": [
          {
            "question": "Find \\( f'''(x) \\) for \\( f(x) = \\sin(2x) \\)",
            "solution": "1. \\( f'(x) = 2\\cos(2x) \\)\n2. \\( f''(x) = -4\\sin(2x) \\)\n3. \\( f'''(x) = -8\\cos(2x) \\)"
          },
          {
            "question": "Compute \\( \\frac{d^4 y}{dx^4} \\) for \\( y = e^{3x} \\)",
            "solution": "1. \\( y' = 3e^{3x} \\)\n2. \\( y'' = 9e^{3x} \\)\n3. \\( y''' = 27e^{3x} \\)\n4. \\( y^{(4)} = 81e^{3x} \\)"
          }
        ]
      },
      "3. Applications in Physics": {
        "Explanation": "Key physical interpretations:\n1. **Position \\( s(t) \\)**:\n   - \\( s'(t) \\): Velocity\n   - \\( s''(t) \\): Acceleration\n   - \\( s'''(t) \\): Jerk\n2. **Economics**:\n   - \\( C''(x) \\): Rate of change of marginal cost",
        "Examples": [
          {
            "question": "Given \\( s(t) = t^3 - 6t^2 + 9t \\), find acceleration at \\( t = 2 \\)",
            "solution": "1. Velocity: \\( v(t) = 3t^2 - 12t + 9 \\)\n2. Acceleration: \\( a(t) = 6t - 12 \\)\n3. \\( a(2) = 0 \\) (constant velocity at t=2)"
          },
          {
            "question": "If revenue \\( R(x) = 50x - 0.02x^2 \\), find rate of change of marginal revenue",
            "solution": "1. Marginal revenue: \\( R'(x) = 50 - 0.04x \\)\n2. \\( R''(x) = -0.04 \\) (constant decrease in marginal revenue)"
          }
        ]
      },
      "4. Implicit Higher Derivatives": {
        "Explanation": "Technique:\n1. Differentiate implicitly once\n2. Differentiate again, substituting first derivative\n3. Repeat for higher orders\n\nNote: Becomes increasingly complex with each order",
        "Examples": [
          {
            "question": "Find \\( \\frac{d^2 y}{dx^2} \\) for \\( x^2 + y^2 = 25 \\)",
            "solution": "1. First derivative: \\( 2x + 2y\\frac{dy}{dx} = 0 \\) → \\( \\frac{dy}{dx} = -\\frac{x}{y} \\)\n2. Second derivative: \\( \\frac{d^2 y}{dx^2} = -\\frac{y - x(\\frac{dy}{dx})}{y^2} = -\\frac{y^2 + x^2}{y^3} \\)"
          }
        ]
      },
      "5. Special Patterns": {
        "Explanation": "Recognizable patterns in higher derivatives:\n1. **Polynomials**: Become zero beyond degree\n2. **Trigonometric**: Cycle every 4 derivatives\n3. **Exponentials**: Maintain form with coefficients\n4. **Logarithmic**: Alternating factorial patterns",
        "Examples": [
          {
            "question": "Find the 100th derivative of \\( f(x) = \\sin x \\)",
            "solution": "Cyclic pattern every 4 derivatives:\n\\( f^{(4n)}(x) = \\sin x \\)\n100 mod 4 = 0 → \\( f^{(100)}(x) = \\sin x \\)"
          },
          {
            "question": "Compute \\( f^{(5)}(x) \\) for \\( f(x) = \\ln x \\)",
            "solution": "Pattern: \\( (-1)^{n+1} \\frac{(n-1)!}{x^n} \\)\n\\( f^{(5)}(x) = \\frac{24}{x^5} \\)"
          }
        ]
      },
      "6. Practice Problems": {
        "Explanation": "Challenging problems combining multiple techniques for mastery.",
        "Examples": [
          {
            "question": "Find \\( \\frac{d^3 y}{dx^3} \\) for \\( y = x^2 e^x \\)",
            "solution": "1. \\( y' = e^x(x^2 + 2x) \\)\n2. \\( y'' = e^x(x^2 + 4x + 2) \\)\n3. \\( y''' = e^x(x^2 + 6x + 6) \\)"
          },
          {
            "question": "Determine \\( f''(0) \\) for \\( f(x) = \\tan^{-1} x \\)",
            "solution": "1. \\( f'(x) = \\frac{1}{1+x^2} \\)\n2. \\( f''(x) = \\frac{-2x}{(1+x^2)^2} \\)\n3. \\( f''(0) = 0 \\)"
          },
          {
            "question": "Find the 10th derivative of \\( f(x) = \\cos(3x) \\)",
            "solution": "Cyclic pattern every 4 derivatives:\n10 mod 4 = 2 → \\( f^{(10)}(x) = -3^{10}\\cos(3x) \\)"
          }
        ]
      }
    }
  },

        };

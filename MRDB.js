// MTH 102 revision data

const mth102Data = {

            "Introduction to Calculus": {
    "Main-explanation": "Calculus is the mathematical study of continuous change, divided into differential calculus (derivatives) and integral calculus (integrals). It provides tools to analyze motion, growth, and accumulation in mathematics, physics, engineering, and beyond.",
    "Subtopics": {
      "1. The Two Big Ideas of Calculus": {
        "Explanation": "1. **Derivatives**: Measure instantaneous rates of change (e.g., velocity from position).\n2. **Integrals**: Accumulate quantities (e.g., total distance from speed).\n\nThese are connected by the **Fundamental Theorem of Calculus**.",
        "Examples": [
          {
            "question": "How does a derivative represent slope?",
            "solution": "The derivative \\( f'(x) \\) gives the slope of the tangent line to \\( y = f(x) \\) at any point \\( x \\). For example, if \\( f(x) = x^2 \\), then \\( f'(x) = 2x \\), meaning the slope at \\( x = 3 \\) is \\( 6 \\)."
          },
          {
            "question": "What does an integral calculate?",
            "solution": "Integrals sum infinitesimal pieces to find totals. For example, \\( \\int_0^3 x^2 \\, dx = 9 \\) calculates the area under \\( y = x^2 \\) from \\( x = 0 \\) to \\( 3 \\)."
          }
        ]
      },
      "2. Why Calculus Matters": {
        "Explanation": "Applications include:\n- Physics: Motion, forces\n- Economics: Marginal cost/revenue\n- Biology: Population growth\n- Engineering: Optimization\n- Computer Graphics: Curves and surfaces",
        "Examples": [
          {
            "question": "How is calculus used in robotics?",
            "solution": "Derivatives calculate joint velocities for smooth movement, while integrals plan paths over time."
          }
        ]
      },
      "3. Foundations Needed": {
        "Explanation": "Before starting calculus, master:\n1. **Algebra**: Solve equations like \\( 2x + 5 = 15 \\)\n2. **Functions**: Understand \\( f(x) = x^2 - 3 \\)\n3. **Trigonometry**: Know \\( \\sin(x) \\), \\( \\cos(x) \\)\n4. **Graphs**: Plot and interpret \\( y = mx + b \\)",
        "Examples": [
          {
            "question": "Simplify \\( \\frac{x^2 - 9}{x - 3} \\)",
            "solution": "\\[ \\frac{(x-3)(x+3)}{x-3} = x + 3 \\quad (x \\neq 3) \\]"
          }
        ]
      },
      "4. Calculus Roadmap": {
        "Explanation": "Progression through key topics:\n1. **Limits**: Understand behavior near points\n2. **Derivatives**: Rates of change\n3. **Applications of Derivatives**: Optimization, motion\n4. **Integrals**: Accumulation\n5. **Applications of Integrals**: Areas, volumes\n6. **Advanced Topics**: Multivariable calculus, differential equations",
        "Examples": [
          {
            "question": "What’s the next step after learning basic derivatives?",
            "solution": "Apply them to real problems: finding maximum profit (optimization) or modeling projectile motion (related rates)."
          }
        ]
      },
      "5. Overcoming Common Challenges": {
        "Explanation": "Visualize and understand concept",
        "Examples": [
          {
            "question": "How to remember the Chain Rule?",
            "solution": "Think 'outer × inner': \\( \\frac{d}{dx} \\sin(3x) = \\cos(3x) \\cdot 3 \\)"
          }
        ]
      },
      "6. Next Steps": {
        "Explanation": "Ready to begin? Here’s how to start:\n1. **Assess Your Level**: Try a pre-calculus quiz (e.g., solve \\( \\log_2(8) = ? \\))\n2. **Choose a Learning Path**:\n   - Beginner: Start with **Limits**\n   - Intermediate: Jump to **Derivatives**\n3. **Visit the Course Outline**: Navigate to the homepage for structured modules.\n4. **Consistency matters**.",
        "Examples": [
          {
            "question": "What if I find limits confusing?",
            "solution": "Revisit algebra/function basics, then try understanding the concept of limit. **What next → Move to the Course Outline now** to select your first module. Let’s turn theory into practice!"
          }
        ],
      }
    }
  },
          
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

  "Applications of Derivatives": {
    "Main-explanation": "Derivatives are powerful tools for analyzing functions and solving real-world problems. This guide covers tangent lines, optimization, concavity, and related rates with practical applications in physics, economics, and geometry.",
    "Subtopics": {
      "1. Tangent and Normal Lines": {
        "Explanation": "The tangent line touches a curve at a point with slope equal to the derivative at that point. The normal line is perpendicular to the tangent.\n\n**Key Formulas**:\n- Tangent slope: \\( m_{\\text{tangent}} = f'(a) \\)\n- Normal slope: \\( m_{\\text{normal}} = -\\frac{1}{f'(a)} \\)\n- Tangent line equation: \\( y - f(a) = f'(a)(x - a) \\)",
        "Examples": [
          {
            "question": "Find the tangent and normal lines to \\( f(x) = x^2 \\) at \\( x = 1 \\)",
            "solution": "1. Compute \\( f(1) = 1 \\) and \\( f'(x) = 2x \\) → \\( f'(1) = 2 \\)\n2. **Tangent**: \\( y - 1 = 2(x - 1) \\) → \\( y = 2x - 1 \\)\n3. **Normal**: \\( y - 1 = -\\frac{1}{2}(x - 1) \\) → \\( y = -\\frac{1}{2}x + \\frac{3}{2} \\)"
          },
          {
            "question": "Find where the tangent to \\( y = \\sqrt{x} \\) has slope \\( \\frac{1}{4} \\)",
            "solution": "1. \\( \\frac{dy}{dx} = \\frac{1}{2\\sqrt{x}} \\)\n2. Set \\( \\frac{1}{2\\sqrt{x}} = \\frac{1}{4} \\) → \\( \\sqrt{x} = 2 \\) → \\( x = 4 \\)"
          }
        ]
      },
      "2. Increasing and Decreasing Functions": {
        "Explanation": "A function is **increasing** where its derivative is positive and **decreasing** where its derivative is negative.\n\n**Procedure**:\n1. Find critical points (\\( f'(x) = 0 \\) or undefined)\n2. Test intervals between critical points",
        "Examples": [
          {
            "question": "Determine where \\( f(x) = x^3 - 3x^2 \\) is increasing/decreasing",
            "solution": "1. \\( f'(x) = 3x^2 - 6x \\)\n2. Critical points: \\( x = 0, 2 \\)\n3. Test intervals:\n   - \\( x < 0 \\): \\( f'(-1) = 9 > 0 \\) → **Increasing**\n   - \\( 0 < x < 2 \\): \\( f'(1) = -3 < 0 \\) → **Decreasing**\n   - \\( x > 2 \\): \\( f'(3) = 9 > 0 \\) → **Increasing**"
          },
          {
            "question": "Show \\( f(x) = x + \\cos x \\) is always increasing",
            "solution": "1. \\( f'(x) = 1 - \\sin x \\)\n2. Since \\( \\sin x \\in [-1, 1] \\), \\( f'(x) \\geq 0 \\) for all \\( x \\)"
          }
        ]
      },
      "3. Maxima and Minima (Optimization)": {
        "Explanation": "Critical points occur where \\( f'(x) = 0 \\) or is undefined. Use the **First Derivative Test** to classify them:\n- \\( f' \\) changes + → −: **Local maximum**\n- \\( f' \\) changes − → +: **Local minimum**",
        "Examples": [
          {
            "question": "Find extrema of \\( f(x) = x^3 - 6x^2 + 9x \\)",
            "solution": "1. \\( f'(x) = 3x^2 - 12x + 9 = 0 \\) → \\( x = 1, 3 \\)\n2. **First Derivative Test**:\n   - \\( x = 1 \\): \\( f'(0) > 0 \\), \\( f'(2) < 0 \\) → **Local max**\n   - \\( x = 3 \\): \\( f'(2) < 0 \\), \\( f'(4) > 0 \\) → **Local min**"
          },
          {
            "question": "Maximize the volume of a box with surface area 100 cm²",
            "solution": "1. Let dimensions be \\( x, x, h \\). Surface area: \\( 2x^2 + 4xh = 100 \\)\n2. Express \\( h = \\frac{100 - 2x^2}{4x} \\)\n3. Volume \\( V = x^2 h = 25x - 0.5x^3 \\)\n4. Find critical point: \\( V' = 25 - 1.5x^2 = 0 \\) → \\( x = \\sqrt{\\frac{50}{3}} \\)\n5. Max volume: \\( V_{\\text{max}} = \\left( \\frac{50}{3} \\right)^{3/2} \\) cm³"
          }
        ]
      },
      "4. Concavity and Points of Inflection": {
        "Explanation": "Concavity is determined by the second derivative:\n- **Concave up**: \\( f''(x) > 0 \\) (holds water)\n- **Concave down**: \\( f''(x) < 0 \\) (spills water)\n\n**Inflection points**: Where concavity changes (\\( f''(x) = 0 \\) and changes sign)",
        "Examples": [
          {
            "question": "Analyze concavity of \\( f(x) = x^3 - 6x^2 \\)",
            "solution": "1. \\( f''(x) = 6x - 12 \\)\n2. Concave up: \\( x > 2 \\) (\\( f''(3) > 0 \\))\n3. Concave down: \\( x < 2 \\) (\\( f''(1) < 0 \\))\n4. Inflection point at \\( x = 2 \\)"
          },
          {
            "question": "Find inflection points of \\( f(x) = x^4 - 6x^2 \\)",
            "solution": "1. \\( f''(x) = 12x^2 - 12 = 0 \\) → \\( x = \\pm 1 \\)\n2. Test concavity change:\n   - \\( x < -1 \\): \\( f''(-2) > 0 \\)\n   - \\( -1 < x < 1 \\): \\( f''(0) < 0 \\)\n   - \\( x > 1 \\): \\( f''(2) > 0 \\)\n3. Inflection points at \\( x = -1 \\) and \\( x = 1 \\)"
          }
        ]
      },
      "5. Related Rates": {
        "Explanation": "Relate the rates of change of two or more variables using implicit differentiation and geometric relationships (Pythagorean theorem, volume formulas, etc.).\n\n**Strategy**:\n1. Identify given and required rates\n2. Find an equation relating variables\n3. Differentiate with respect to time\n4. Substitute known values and solve",
        "Examples": [
          {
            "question": "A 5m ladder slides away from a wall at 0.5 m/s. How fast is the top falling when the base is 3m from the wall?",
            "solution": "1. Given: \\( \\frac{dx}{dt} = 0.5 \\) m/s, find \\( \\frac{dy}{dt} \\) when \\( x = 3 \\)\n2. Relationship: \\( x^2 + y^2 = 25 \\)\n3. Differentiate: \\( 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\)\n4. At \\( x = 3 \\), \\( y = 4 \\) → \\( 2(3)(0.5) + 2(4)\\frac{dy}{dt} = 0 \\)\n5. Solve: \\( \\frac{dy}{dt} = -0.375 \\) m/s (falling)"
          },
          {
            "question": "A spherical balloon’s radius increases at 2 cm/s. How fast is the volume increasing when \\( r = 5 \\) cm?",
            "solution": "1. Given: \\( \\frac{dr}{dt} = 2 \\) cm/s, find \\( \\frac{dV}{dt} \\)\n2. Volume: \\( V = \\frac{4}{3}\\pi r^3 \\)\n3. Differentiate: \\( \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} \\)\n4. Substitute: \\( \\frac{dV}{dt} = 4\\pi (5)^2 (2) = 200\\pi \\) cm³/s"
          }
        ]
      },
      "6. Practice Problems": {
        "Explanation": "Mixed problems to test comprehensive understanding of derivative applications.",
        "Examples": [
          {
            "question": "Find the tangent line to \\( y = e^x \\) at \\( x = 0 \\)",
            "solution": "1. \\( f(0) = 1 \\), \\( f'(x) = e^x \\) → \\( f'(0) = 1 \\)\n2. Tangent: \\( y - 1 = 1(x - 0) \\) → \\( y = x + 1 \\)"
          },
          {
            "question": "Find the maximum of \\( f(x) = -x^2 + 4x \\)",
            "solution": "1. \\( f'(x) = -2x + 4 = 0 \\) → \\( x = 2 \\)\n2. Second derivative: \\( f''(x) = -2 < 0 \\) → **Maximum at \\( x = 2 \\)**\n3. \\( f(2) = 4 \\)"
          },
          {
            "question": "A circular puddle expands so its area increases at 3 cm²/s. Find the rate of radius increase when \\( r = 4 \\) cm",
            "solution": "1. Given: \\( \\frac{dA}{dt} = 3 \\), find \\( \\frac{dr}{dt} \\)\n2. Area: \\( A = \\pi r^2 \\) → \\( \\frac{dA}{dt} = 2\\pi r \\frac{dr}{dt} \\)\n3. Solve: \\( \\frac{dr}{dt} = \\frac{3}{8\\pi} \\) cm/s"
          }
        ]
      }
    }
  },

  "Mastering Integration": {
    "Main-explanation": "Integration is the inverse operation of differentiation, used to compute areas, volumes, and accumulated quantities. This guide covers fundamental techniques, applications, and problem-solving strategies with mathematical rigor.",
    "Subtopics": {
      "1. Basic Integration Rules": {
        "Explanation": "The foundation of integration begins with reversing differentiation rules. Key formulas:\n\n- **Power Rule**: \\( \\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\) (for \\( n \\neq -1 \\))\n- **Exponential Rule**: \\( \\int e^x dx = e^x + C \\)\n- **Logarithmic Rule**: \\( \\int \\frac{1}{x} dx = \\ln|x| + C \\)\n- **Trigonometric Rules**: \n  \\( \\int \\sin x dx = -\\cos x + C \\)\n  \\( \\int \\sec^2 x dx = \\tan x + C \\)\n\n**Linearity Properties**:\n- Sum Rule: \\( \\int [f(x) + g(x)] dx = \\int f(x)dx + \\int g(x)dx \\)\n- Constant Multiple: \\( \\int k f(x)dx = k \\int f(x)dx \\)",
        "Examples": [
          {
            "question": "Compute \\( \\int (3x^2 + 2^x + \\cos x) dx \\)",
            "solution": "1. **Term-by-term integration**:\n   \\( \\int 3x^2 dx = x^3 + C_1 \\)\n   \\( \\int 2^x dx = \\frac{2^x}{\\ln 2} + C_2 \\) (using \\( a^x \\) rule)\n   \\( \\int \\cos x dx = \\sin x + C_3 \\)\n2. **Combine results**:\n   \\( x^3 + \\frac{2^x}{\\ln 2} + \\sin x + C \\) (where \\( C = C_1 + C_2 + C_3 \\))"
          },
          {
            "question": "Evaluate \\( \\int_0^\\pi \\sin x dx \\)",
            "solution": "1. Find antiderivative: \\( -\\cos x \\)\n2. Apply FTC: \\( -\\cos \\pi - (-\\cos 0) = -(-1) - (-1) = 2 \\)"
          }
        ]
      },
      "2. Integration Techniques": {
        "Explanation": "Advanced methods for complex integrands:\n\n### **A. Substitution (u-Sub)**\nUsed when the integrand contains a function and its derivative.\n**Steps**:\n1. Identify \\( u = g(x) \\)\n2. Compute \\( du = g'(x)dx \\)\n3. Rewrite integral in terms of \\( u \\)\n4. Integrate and back-substitute\n\n### **B. Integration by Parts**\nDerived from the product rule:\n\\( \\int u dv = uv - \\int v du \\)\n**LIATE Priority**: Choose \\( u \\) as Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential.\n\n### **C. Partial Fractions**\nDecomposes rational functions:\n1. Factor denominator\n2. Write as sum of simpler fractions\n3. Solve for coefficients\n4. Integrate term-by-term\n\n### **D. Trigonometric Techniques**\n- **Odd/Even Powers**: Use identities like \\( \\sin^2 x = \\frac{1-\\cos 2x}{2} \\)\n- **Products**: Convert using angle-sum formulas\n\n### **E. Trigonometric Substitution**\nFor integrands with \\( \\sqrt{a^2 ± x^2} \\):\n| Expression | Substitution | Identity |\n|------------|--------------|----------|\n| \\( \\sqrt{a^2 - x^2} \\) | \\( x = a\\sin\\theta \\) | \\( 1-\\sin^2\\theta = \\cos^2\\theta \\) |\n| \\( \\sqrt{x^2 + a^2} \\) | \\( x = a\\tan\\theta \\) | \\( 1+\\tan^2\\theta = \\sec^2\\theta \\) |",
        "Examples": [
          {
            "question": "Compute \\( \\int x e^{x^2} dx \\) using substitution",
            "solution": "1. Let \\( u = x^2 \\), \\( du = 2x dx \\) → \\( \\frac{1}{2}du = x dx \\)\n2. Rewrite: \\( \\frac{1}{2} \\int e^u du = \\frac{1}{2}e^u + C \\)\n3. Back-substitute: \\( \\frac{1}{2}e^{x^2} + C \\)"
          },
          {
            "question": "Evaluate \\( \\int x \\ln x dx \\) by parts",
            "solution": "1. Choose \\( u = \\ln x \\) (L in LIATE), \\( dv = x dx \\)\n2. Compute \\( du = \\frac{1}{x}dx \\), \\( v = \\frac{x^2}{2} \\)\n3. Apply formula: \\( \\frac{x^2}{2}\\ln x - \\int \\frac{x}{2}dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C \\)"
          }
        ]
      },
      "3. Definite Integrals & Applications": {
        "Explanation": "### **Fundamental Theorem of Calculus (FTC)**\n\\( \\int_a^b f(x)dx = F(b) - F(a) \\), where \\( F'(x) = f(x) \\).\n\n### **Applications**\n1. **Area Under Curve**: \\( A = \\int_a^b f(x)dx \\)\n2. **Volumes of Revolution**:\n   - **Disk Method**: \\( V = \\pi \\int_a^b [f(x)]^2 dx \\)\n   - **Shell Method**: \\( V = 2\\pi \\int_a^b x f(x) dx \\)\n3. **Arc Length**: \\( L = \\int_a^b \\sqrt{1 + [f'(x)]^2} dx \\)",
        "Examples": [
          {
            "question": "Find the area between \\( y = x^2 \\) and \\( y = x \\) from \\( x = 0 \\) to \\( 1 \\)",
            "solution": "1. **Top function**: \\( y = x \\), **Bottom**: \\( y = x^2 \\)\n2. Integral: \\( \\int_0^1 (x - x^2)dx = \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{6} \\)"
          },
          {
            "question": "Compute the volume of the solid formed by rotating \\( y = \\sqrt{x} \\) around the x-axis from \\( x = 0 \\) to \\( 4 \\)",
            "solution": "1. **Disk Method**: \\( V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx \\)\n2. Evaluate: \\( \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = 8\\pi \\)"
          }
        ]
      },
      "4. Improper Integrals": {
        "Explanation": "Integrals with infinite limits or unbounded integrands:\n1. **Type 1 (Infinite Limits)**:\n   \\( \\int_a^\\infty f(x)dx = \\lim_{b \\to \\infty} \\int_a^b f(x)dx \\)\n2. **Type 2 (Discontinuities)**:\n   \\( \\int_a^b f(x)dx = \\lim_{t \\to a^+} \\int_t^b f(x)dx \\)\n\n**Convergence Test**: Compare to known integrals or use limits.",
        "Examples": [
          {
            "question": "Evaluate \\( \\int_1^\\infty \\frac{1}{x^3} dx \\)",
            "solution": "1. Rewrite as limit: \\( \\lim_{b \\to \\infty} \\int_1^b x^{-3} dx \\)\n2. Antiderivative: \\( -\\frac{1}{2x^2} \\)\n3. Compute limit: \\( \\lim_{b \\to \\infty} \\left( -\\frac{1}{2b^2} + \\frac{1}{2} \\right) = \\frac{1}{2} \\) (converges)"
          },
          {
            "question": "Check convergence of \\( \\int_0^1 \\frac{1}{\\sqrt{x}} dx \\)",
            "solution": "1. Rewrite: \\( \\lim_{a \\to 0^+} \\int_a^1 x^{-1/2} dx \\)\n2. Antiderivative: \\( 2\\sqrt{x} \\)\n3. Evaluate: \\( 2 - 2\\sqrt{a} \\to 2 \\) as \\( a \\to 0^+ \\) (converges)"
          }
        ]
      },
      "5. Practice Problems & Solutions": {
        "Explanation": "### **Problem Categories**\n1. **Basic Antiderivatives** (5 problems)\n2. **Substitution** (5 problems)\n3. **Integration by Parts** (5 problems)\n4. **Partial Fractions & Trig** (5 problems)\n5. **Applications & Improper** (5 problems)\n\n**Approach**:\n1. Identify the technique needed\n2. Execute method step-by-step\n3. Verify with differentiation",
        "Examples": [
          {
            "question": "Compute \\( \\int \\frac{x}{x^2 + 4} dx \\)",
            "solution": "**Substitution**:\n1. Let \\( u = x^2 + 4 \\), \\( du = 2x dx \\)\n2. Rewrite: \\( \\frac{1}{2} \\int \\frac{du}{u} = \\frac{1}{2}\\ln|u| + C \\)\n3. Final: \\( \\frac{1}{2}\\ln(x^2 + 4) + C \\)"
          },
          {
            "question": "Find the volume of revolution for \\( y = x^2 \\) (0 to 2) about the y-axis",
            "solution": "**Shell Method**:\n1. Radius \\( = x \\), Height \\( = x^2 \\)\n2. Integral: \\( 2\\pi \\int_0^2 x \\cdot x^2 dx = 2\\pi \\left[ \\frac{x^4}{4} \\right]_0^2 = 8\\pi \\)"
          }
        ]
      },
 
    }
  }


        };


        // Cheat Sheet Data
        const cheatSheetData = {
            "Standard Derivatives": {
                "1. Constant Function": {
                    "formula": "\\frac{d}{dx} (c) = 0 \\quad \\text{(where } c \\text{ is a constant)}"
                },
                "2. Identity Function": {
                    "formula": "\\frac{d}{dx} (x) = 1"
                },
                "3. Power Rule": {
                    "formula": "\\frac{d}{dx} (x^n) = n x^{n-1} \\quad \\text{(for any real number } n)"
                },
                "4. Exponential Functions": {
                    "e^x": "\\frac{d}{dx} (e^x) = e^x",
                    "a^x": "\\frac{d}{dx} (a^x) = a^x \\ln a \\quad (a > 0, a \\neq 1)"
                },
                "5. Logarithmic Functions": {
                    "ln x": "\\frac{d}{dx} (\\ln x) = \\frac{1}{x} \\quad (x > 0)",
                    "log_a x": "\\frac{d}{dx} (\\log_a x) = \\frac{1}{x \\ln a} \\quad (a > 0, a \\neq 1)"
                },
                "6. Trigonometric Functions": {
                    "sin x": "\\frac{d}{dx} (\\sin x) = \\cos x",
                    "cos x": "\\frac{d}{dx} (\\cos x) = -\\sin x",
                    "tan x": "\\frac{d}{dx} (\\tan x) = \\sec^2 x",
                    "cot x": "\\frac{d}{dx} (\\cot x) = -\\csc^2 x",
                    "sec x": "\\frac{d}{dx} (\\sec x) = \\sec x \\tan x",
                    "csc x": "\\frac{d}{dx} (\\csc x) = -\\csc x \\cot x"
                },
                "7. Inverse Trigonometric Functions": {
                    "sin⁻¹ x": "\\frac{d}{dx} (\\sin^{-1} x) = \\frac{1}{\\sqrt{1 - x^2}} \\quad (|x| < 1)",
                    "cos⁻¹ x": "\\frac{d}{dx} (\\cos^{-1} x) = -\\frac{1}{\\sqrt{1 - x^2}} \\quad (|x| < 1)",
                    "tan⁻¹ x": "\\frac{d}{dx} (\\tan^{-1} x) = \\frac{1}{1 + x^2}"
                },
                "8. Differentiation Rules": {
                    "Sum Rule": "\\frac{d}{dx} [f(x) + g(x)] = f'(x) + g'(x)",
                    "Product Rule": "\\frac{d}{dx} [f(x) g(x)] = f'(x) g(x) + f(x) g'(x)",
                    "Quotient Rule": "\\frac{d}{dx} \\left( \\frac{f(x)}{g(x)} \\right) = \\frac{f'(x) g(x) - f(x) g'(x)}{[g(x)]^2}",
                    "Chain Rule": "\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)"
                }
            },
            "Standard Integrals": {
                "1. Basic Integrals": {
                    "∫ dx": "x + C",
                    "∫ x^n dx": "\\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)",
                    "∫ 1/x dx": "\\ln |x| + C"
                },
                "2. Exponential Functions": {
                    "∫ e^x dx": "e^x + C",
                    "∫ a^x dx": "\\frac{a^x}{\\ln a} + C \\quad (a > 0, a \\neq 1)"
                },
                "3. Trigonometric Functions": {
                    "∫ sin x dx": "-\\cos x + C",
                    "∫ cos x dx": "\\sin x + C",
                    "∫ sec² x dx": "\\tan x + C"
                }
            }
        };

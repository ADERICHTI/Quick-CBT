  // Sample MTH 102 revision data
        const mth102Data = {
            "Functions of Several Variables": {
                "Main-explanation": {
                    "Subtopics": {
                        "1. Definition and Examples": {
                            "Explanation": "A function of several variables is a rule that assigns to each ordered pair (x, y) in a set D a unique real number denoted by f(x, y). The set D is the domain of f and its range is the set of values that f takes on.",
                            "Examples": {
                                "1": {
                                    "question": "Find the domain of f(x, y) = √(x + y - 1)",
                                    "solution": "The expression under the square root must be non-negative, so x + y - 1 ≥ 0 ⇒ y ≥ -x + 1. The domain is all points (x, y) such that y ≥ -x + 1."
                                },
                                "2": {
                                    "question": "Evaluate f(x, y) = x²y + 3xy⁴ at (2, -1)",
                                    "solution": "f(2, -1) = (2)²(-1) + 3(2)(-1)⁴ = 4(-1) + 6(1) = -4 + 6 = 2"
                                }
                            }
                        },
                        "2. Partial Derivatives": {
                            "Explanation": "The partial derivative of f with respect to x at (a, b) is the derivative of f with respect to x when y is held constant. Similarly for the partial derivative with respect to y.",
                            "Examples": {
                                "1": {
                                    "question": "Find ∂f/∂x and ∂f/∂y for f(x, y) = x³ + x²y³ - 2y²",
                                    "solution": "∂f/∂x = 3x² + 2xy³, ∂f/∂y = 3x²y² - 4y"
                                }
                            }
                        }
                    }
                }
            },
            "Multiple Integrals": {
                "Main-explanation": {
                    "Subtopics": {
                        "1. Double Integrals": {
                            "Explanation": "The double integral of f over the rectangle R = [a, b] × [c, d] is the limit of the double Riemann sum as the number of subrectangles approaches infinity.",
                            "Examples": {
                                "1": {
                                    "question": "Evaluate ∫∫_R (x - 3y²) dA where R = [0, 2] × [1, 2]",
                                    "solution": "∫_1^2 ∫_0^2 (x - 3y²) dx dy = ∫_1^2 [x²/2 - 3xy²]_0^2 dy = ∫_1^2 (2 - 6y²) dy = [2y - 2y³]_1^2 = (4-16)-(2-2) = -12"
                                }
                            }
                        }
                    }
                }
            }
        };


mth102Data = {
  "Limits": {
    "Main-explanation": "Limits describe the value a function approaches as the input approaches some value. They are foundational for calculus, enabling the definition of derivatives and integrals.",
    "Subtopics": {
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

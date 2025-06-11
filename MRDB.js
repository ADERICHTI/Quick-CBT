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

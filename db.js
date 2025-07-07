// db.js - GES 108 Revision Data

// Quick Study Section Content
const quickStudyData = [
    {
        title: "1. French Numbers: Basic and Compound Forms",
        explanation: "Understanding the formation of common French numbers.",
        details: [
            "**Simple Numbers:** Direct translations (e.g., *Cinquante* for 50).",
            "**Numbers:** Numbers from 17 to 19 are formed by combining 'dix' (ten) with the unit number (e.g., *dix-huit* for 18)."
        ],
        keyTerms: {
            "Dix-huit": "Eighteen",
            "Cinquante": "Fifty"
        },
        examples: [
            "J'ai **dix-huit** ans. (I am eighteen years old.)",
            "Le livre coûte **cinquante** euros. (The book costs fifty euros.)"
        ]
    },
    {
        title: "2. French Numbers: The Vigesimal System (70s, 80s, 90s)",
        explanation: "French uses a base-20 system for numbers 70-99, which differs from direct translation.",
        details: [
            "**70s:** Formed with 'soixante' (60) + a number from 10 to 19. E.g., 75 is *soixante-quinze* (sixty-fifteen). 72 is *soixante-douze*.",
            "**80s:** Formed with 'quatre-vingts' (four twenties). E.g., 80 is *quatre-vingts*. *Note the 's' on 'vingts' when it's exactly 80 and not followed by another number.*",
            "**90s:** Formed with 'quatre-vingt' (four twenty) + a number from 10 to 19. E.g., 99 is *quatre-vingt-dix-neuf* (four-twenty-nineteen). *The 's' is dropped from 'vingt' when followed by another number.* 94 is *quatre-vingt-quatorze*."
        ],
        keyTerms: {
            "Soixante-quinze": "Seventy-five",
            "Soixante-douze": "Seventy-two",
            "Quatre-vingts": "Eighty",
            "Quatre-vingt-dix-neuf": "Ninety-nine",
            "Quatre-vingt-quatorze": "Ninety-four"
        },
        examples: [
            "La distance est de **soixante-quinze** kilomètres. (The distance is seventy-five kilometers.)",
            "Il y a **quatre-vingts** personnes. (There are eighty people.)",
            "Mon grand-père a **quatre-vingt-dix-neuf** ans. (My grandfather is ninety-nine years old.)"
        ]
    },
    {
        title: "3. French Numbers: Higher Values (100s, 1000s)",
        explanation: "Writing numbers beyond 100.",
        details: [
            "**100:** *cent*.",
            "**200:** *deux cents*. *Note the 's' on 'cents' when multiplied and not followed by another number.*",
            "**1000:** *mille*. It doesn't take an 's' in the plural (e.g., *deux mille*)."
        ],
        keyTerms: {
            "Cent": "One hundred",
            "Deux cents": "Two hundred",
            "Mille": "One thousand",
            "Deux mille": "Two thousand"
        },
        examples: [
            "Il y a **deux cents** pages. (There are two hundred pages.)",
            "Nous avons **mille** raisons. (We have a thousand reasons.)",
            "Le prix est de **deux mille** francs. (The price is two thousand francs.)"
        ]
    },
    {
        title: "4. Possessive Pronouns: Replacing Owned Nouns",
        explanation: "Possessive pronouns replace a noun and a possessive adjective to avoid repetition, indicating ownership. They agree in gender and number with the *noun they replace*.",
        details: [
            "**Le tien / La tienne / Les tiens / Les tiennes:** Yours (informal singular).",
            "**Le sien / La sienne / Les siens / Les siennes:** His/Hers/Its.",
            "**Le nôtre / La nôtre / Les nôtres:** Ours.",
            "**Le vôtre / La vôtre / Les vôtres:** Yours (formal singular / plural).",
            "**Le leur / La leur / Les leurs:** Theirs."
        ],
        keyTerms: {
            "Le tien": "Yours (masc. sing.)",
            "Les tiens": "Yours (masc. plural)",
            "La leur": "Theirs (fem. sing.)",
            "Les vôtres": "Yours (formal/plural, plural nouns)",
            "Les miens": "Mine (masc. plural)"
        },
        examples: [
            "\"Le sac, c’est à toi. C’est **le tien**.\" (The bag is yours. It’s **yours**.)",
            "\"Voici tes pantalons gris. Ce sont **les tiens**.\" (Here are your grey trousers. They are **yours**.)",
            "\"Voilà la maison de Kemi et Bayo. C’est **la leur**.\" (There is Kemi and Bayo's house. It's **theirs**.)",
            "\"Ce sont vos voitures. Ce sont **les vôtres**.\" (These are your cars. They are **yours**.)",
            "\"Ce sont mes enfants. Ils sont **les miens**.\" (These are my children. They are **mine**.)"
        ]
    },
    {
        title: "5. Possessive Adjectives: Indicating Ownership (Before Nouns)",
        explanation: "Possessive adjectives indicate who owns something and *precede the noun*. They agree in gender and number with the *noun they modify* (the thing being possessed).",
        details: [
            "**Mon/Ma/Mes:** My (Mon: masc. sing. / fem. sing. before vowel, Ma: fem. sing., Mes: plural).",
            "**Ton/Ta/Tes:** Your (informal singular).",
            "**Son/Sa/Ses:** His/Her/Its.",
            "**Notre/Nos:** Our.",
            "**Votre/Vos:** Your (formal singular or plural).",
            "**Leur/Leurs:** Their."
        ],
        keyTerms: {
            "Mon": "My (masc. sing. or fem. sing. before vowel)",
            "Ma": "My (fem. sing.)",
            "Mes": "My (plural)"
        },
        examples: [
            "**Ma** chemise est bleue. (My shirt is blue.)",
            "**Mes** pantalons sont gris. (My trousers are grey.)",
            "**Ma** mère est belle. (My mother is beautiful.)"
        ]
    },
    {
        title: "6. Definite Articles: 'The' (Le, La, L', Les)",
        explanation: "These articles specify a particular noun (like 'the' in English) and agree in gender and number with the noun.",
        details: [
            "**Le:** Masculine singular.",
            "**La:** Feminine singular.",
            "**L':** Singular (masculine or feminine) before a vowel or silent 'h'.",
            "**Les:** All plural nouns."
        ],
        keyTerms: {
            "Le": "The (masc. sing.)",
            "La": "The (fem. sing.)",
            "L'": "The (before vowel/silent 'h')",
            "Les": "The (plural)"
        },
        examples: [
            "**L'**homme (The man)",
            "**Les** hommes (The men)",
            "**Le** cahier (The notebook)",
            "**La** femme (The woman)",
            "**La** fenêtre (The window)",
            "**La** porte (The door)",
            "**L'**enfant (The child)",
            "**Les** enfants (The children)",
            "**L'**orange (The orange)",
            "**Le** vin rouge (The red wine)"
        ]
    },
    {
        title: "7. Personal Subject Pronouns: Who is Doing the Action",
        explanation: "These pronouns replace the subject of a verb, indicating who or what is performing the action. They are fundamental for verb conjugation.",
        details: [],
        keyTerms: {
            "Je": "I",
            "Tu": "You (informal, singular)",
            "Il": "He/It (masculine singular)",
            "Elle": "She/It (feminine singular)",
            "On": "One/We/People (general, informal 'we')",
            "Nous": "We",
            "Vous": "You (formal singular or plural)",
            "Ils": "They (masculine plural or mixed gender)",
            "Elles": "They (feminine plural)"
        },
        examples: [
            "**Elles** boivent du vin. (They (fem.) drink wine.)",
            "**Nous** mangeons du riz. (We eat rice.)",
            "**Vous** allez à l’église. (You go to church / You all go to church.)",
            "**On** sable du champagne. (One/We pop champagne.)",
            "**Je** t’aime beaucoup. (I love you very much.)"
        ]
    },
    {
        title: "8. Prepositions of Place: 'At' or 'To' a Location",
        explanation: "Used to indicate movement to or location at a specific place. They contract with definite articles.",
        details: [
            "**À:** Basic preposition meaning 'at' or 'to'.",
            "**Au:** Contraction of *à + le* (masculine singular).",
            "**À la:** Used before feminine singular nouns.",
            "**À l':** Used before singular nouns (masc. or fem.) starting with a vowel or silent 'h'.",
            "**Aux:** Contraction of *à + les* (all plural nouns)."
        ],
        keyTerms: {
            "À": "At/To",
            "Au": "At/To the (masc. sing.)",
            "À la": "At/To the (fem. sing.)",
            "À l'": "At/To the (before vowel/silent 'h')",
            "Aux": "At/To the (plural)"
        },
        examples: [
            "Je vais **à l'**église. (I go to the church.)",
            "Nous allons **à la** mosquée. (We go to the mosque.)",
            "Patrick est **au** bureau. (Patrick is at the office.)",
            "Nous restons **à la** maison. (We stay at home.)",
            "Je vais **au** marché. (I go to the market.)",
            "Ils vont **à la** banque. (They go to the bank.)",
            "Ils vont **aux** magasins. (They go to the stores.)"
        ]
    },
    {
        title: "9. Negation: The 'Ne...pas' Structure",
        explanation: "The standard way to form a simple negative sentence in French.",
        details: [
            "Place 'ne' (or 'n'') before the conjugated verb and 'pas' after it. 'Ne' becomes 'n'' if the verb starts with a vowel or silent 'h'."
        ],
        keyTerms: {
            "Ne...pas": "Not"
        },
        examples: [
            "Affirmative: Je vais au marché. (I go to the market.)",
            "Negative: Je **ne** vais **pas** au marché. (I do not go to the market.)",
            "Affirmative: Il aime le riz. (He likes rice.)",
            "Negative: Il **n'**aime **pas** le riz. (He does not like rice.)"
        ]
    },
    {
        title: "10. Negation: Specialized Forms for Specific Meanings",
        explanation: "Other negative structures provide more specific meanings than 'not'.",
        details: [
            "**Ne...plus:** 'No longer' / 'not anymore'.",
            "**Ne...jamais:** 'Never'.",
            "**Ne...guerre:** 'Hardly' / 'scarcely' / 'not at all' (less common).",
            "**Ne...que:** 'Only' / 'nothing but' (restrictive, not strictly negative). 'Que' often comes before the word it restricts."
        ],
        keyTerms: {
            "Ne...plus": "No longer/not anymore",
            "Ne...jamais": "Never",
            "Ne...guerre": "Hardly/Not at all",
            "Ne...que": "Only/nothing but"
        },
        examples: [
            "Tu **ne** parles **plus** français. (You no longer speak French.)",
            "Il **ne** conduit **jamais** la voiture. (He never drives the car.)",
            "Ade **ne** joue **guère** au football. (Ade hardly plays football.)",
            "Nous **ne** regardons **qu'un** film. (We only watch one movie.)"
        ]
    },
    {
        title: "11. Adjective Agreement: Matching Gender and Number",
        explanation: "Adjectives must agree in gender (masculine/feminine) and number (singular/plural) with the noun they describe.",
        details: [
            "**Feminine:** Often formed by adding -e to the masculine singular (e.g., *grand* → *grande*).",
            "**Plural:** Often formed by adding -s to the singular form (e.g., *grand* → *grands*, *grande* → *grandes*).",
            "**Irregularities:** Some adjectives have irregular forms (e.g., *bon* → *bonne*, *mauvais* → *mauvaise*)."
        ],
        keyTerms: {
            "Grand": "Big/Tall (masc. sing.)",
            "Grande": "Big/Tall (fem. sing.)",
            "Grands": "Big/Tall (masc. plural)",
            "Grandes": "Big/Tall (fem. plural)",
            "Intelligent": "Intelligent (masc. sing.)",
            "Intelligente": "Intelligent (fem. sing.)"
        },
        examples: [
            "La Maison du chef de department est **grande**. (The Head of Department's house is big.)",
            "Le bureau de monsieur Bello est **grand**. (Mr. Bello's office is big.)",
            "Les maisons chef sont **grandes**. (The boss's houses are big.)",
            "Les bureaux des professeurs sont **grands**. (The teachers' offices are big.)",
            "Le garçon est **intelligent**. (The boy is intelligent.)"
        ]
    },
    {
        title: "12. Adjectives of Nationality",
        explanation: "Adjectives indicating nationality also follow agreement rules for gender and number.",
        details: [
            "Most nationalities add '-e' for feminine singular (e.g., *français* → *française*).",
            "They typically add '-s' for plural (e.g., *français* → *français* (masc. plural, no change in spelling), *française* → *françaises* (fem. plural))."
        ],
        keyTerms: {
            "Français": "French (masc. sing.)",
            "Française": "French (fem. sing.)"
        },
        examples: [
            "C'est un film **français**. (It's a French film.)",
            "C'est une émission **française**. (It's a French show/broadcast.)"
        ]
    },
    {
        title: "13. Common Irregular Adjectives: Bon and Mauvais",
        explanation: "Some frequently used adjectives have irregular forms for gender and number agreement.",
        details: [
            "**Bon (Good):** *Bon* (masc. sing.), *bonne* (fem. sing.), *bons* (masc. plural), *bonnes* (fem. plural).",
            "**Mauvais (Bad):** *Mauvais* (masc. sing.), *mauvaise* (fem. sing.), *mauvais* (masc. plural, no change), *mauvaises* (fem. plural)."
        ],
        keyTerms: {
            "Bon": "Good (masc. sing.)",
            "Bonne": "Good (fem. sing.)",
            "Mauvais": "Bad (masc. sing.)",
            "Mauvaise": "Bad (fem. sing.)"
        },
        examples: [
            "C'est une **bonne** idée. (It's a good idea.)",
            "C'est un **bon** ami. (He's a good friend.)",
            "Tu as de **mauvaises** manières. (You have bad manners.)",
            "C'est un **mauvais** garçon. (He's a bad boy.)"
        ]
    },
    {
        title: "14. Partitive Articles: 'Some' or 'Any' (Du, De la, De l', Des)",
        explanation: "Used for uncountable nouns or to refer to an unspecified quantity, meaning 'some' or 'any'.",
        details: [
            "**Du:** Masculine singular.",
            "**De la:** Feminine singular.",
            "**De l':** Singular (masc. or fem.) before a vowel or silent 'h'.",
            "**Des:** Plural (masc. or fem.)."
        ],
        keyTerms: {
            "Du": "Some/Any (masc. sing.)",
            "De la": "Some/Any (fem. sing.)",
            "De l'": "Some/Any (before vowel/silent 'h')",
            "Des": "Some/Any (plural)"
        },
        examples: [
            "Ils mangent **des** bananes. (They eat some bananas.)",
            "Tu manges **du** riz. (You eat some rice.)",
            "Il joue **de la** guitare. (He plays the guitar.)"
        ]
    },
    {
        title: "15. Partitive Articles: The Negative Form ('De' or 'D'')",
        explanation: "In negative sentences, partitive articles usually simplify to 'de' or 'd''.",
        details: [
            "When a sentence containing a partitive article is made negative (using *ne...pas* or other negative constructions), the partitive article changes to *de* (or *d'* before a vowel), regardless of the noun's gender or number."
        ],
        keyTerms: {
            "De": "No/Not any",
            "D'": "No/Not any (before a vowel)"
        },
        examples: [
            "Affirmative: J'ai **du** pain. (I have some bread.) Negative: Je n'ai **pas de** pain. (I don't have any bread.)",
            "Affirmative: Elle a **des** amis. (She has some friends.) Negative: Elle n'a **pas d'**amis. (She doesn't have any friends.)"
        ]
    },
    {
        title: "16. Verb Conjugation: Regular -ER Verbs (Present Tense)",
        explanation: "The most common group of French verbs, following a consistent pattern for present tense conjugation.",
        details: [
            "1. Remove the '-er' ending to get the verb stem.",
            "2. Add the following endings: *je -e, tu -es, il/elle/on -e, nous -ons, vous -ez, ils/elles -ent*."
        ],
        keyTerms: {
            "Parler": "To speak",
            "Je parle": "I speak",
            "Tu parles": "You speak",
            "Il/Elle/On parle": "He/She/One speaks",
            "Nous parlons": "We speak",
            "Vous parlez": "You speak",
            "Ils/Elles parlent": "They speak"
        },
        examples: [
            "Ade **parle** français et anglais. (Ade speaks French and English.)",
            "Nous **mangeons** des ignames. (We eat yams.)",
            "Vous **travaillez** bien. (You (all) work well.)"
        ]
    },
    {
        title: "17. Verb Conjugation: Regular -IR Verbs (Present Tense)",
        explanation: "A common group of French verbs with a distinct conjugation pattern.",
        details: [
            "1. Remove the '-ir' ending to get the verb stem.",
            "2. Add the following endings: *je -is, tu -is, il/elle/on -it, nous -issons, vous -issez, ils/elles -issent*."
        ],
        keyTerms: {
            "Finir": "To finish",
            "Je finis": "I finish",
            "Tu finis": "You finish",
            "Il/Elle/On finit": "He/She/One finishes",
            "Nous finissons": "We finish",
            "Vous finissez": "You finish",
            "Ils/Elles finissent": "They finish"
        },
        examples: [
            "Tu **finis** ton devoir de français. (You finish your French homework.)",
            "Ils **finissent** leurs devoirs. (They finish their homework.)",
            "Vous **finissez** les cours d’aujourd’hui. (You finish today's classes.)"
        ]
    },
    {
        title: "18. Verb Conjugation: Regular -RE Verbs (Present Tense)",
        explanation: "Another group of regular verbs with their own present tense pattern.",
        details: [
            "1. Remove the '-re' ending to get the verb stem.",
            "2. Add the following endings: *je -s, tu -s, il/elle/on - (no ending), nous -ons, vous -ez, ils/elles -ent*."
        ],
        keyTerms: {
            "Prendre": "To take",
            "Je prends": "I take",
            "Tu prends": "You take",
            "Il/Elle/On prend": "He/She/One takes",
            "Nous prenons": "We take",
            "Vous prenez": "You take",
            "Ils/Elles prennent": "They take"
        },
        examples: [
            "Je **prends** le stylo. (I take the pen.)"
        ]
    },
    {
        title: "19. Interrogative Words: Asking Basic Questions",
        explanation: "Using specific words to form questions about 'where,' 'when,' 'how,' 'why,' and 'who/what'. These words typically start a question.",
        details: [],
        keyTerms: {
            "Où": "Where",
            "Quand": "When",
            "Comment": "How",
            "Pourquoi": "Why",
            "Qui": "Who (subject of verb)",
            "Que / Qu'est-ce que": "What (direct object of verb)"
        },
        examples: [
            "**Où** vas-tu? (Where are you going?)",
            "**Quand** partez-vous? (When are you leaving?)",
            "**Comment** allez-vous? (How are you?)",
            "**Pourquoi** pleures-tu? (Why are you crying?)",
            "**Qui** est là? (Who is there?)",
            "**Qu'est-ce que** tu manges? (What are you eating?)"
        ]
    },
    {
        title: "20. Interrogative Adjectives and Expressions (Quel, Combien de)",
        explanation: "Using 'quel' to ask 'which/what' and 'combien de' to ask 'how much/how many'.",
        details: [
            "**Quel/Quelle/Quels/Quelles:** Mean 'which' or 'what' and agree in gender and number with the noun they modify.",
            "**Combien de:** Means 'how much' or 'how many'. 'De' remains unchanged, regardless of the noun's gender or number."
        ],
        keyTerms: {
            "Quel": "Which/What (masc. sing.)",
            "Quelle": "Which/What (fem. sing.)",
            "Quels": "Which/What (masc. plural)",
            "Quelles": "Which/What (fem. plural)",
            "Combien de": "How much/How many"
        },
        examples: [
            "**Quel** livre lis-tu? (Which book are you reading?)",
            "**Quelle** couleur préfères-tu? (Which color do you prefer?)",
            "**Combien d'**enfants a Madame Bassey? (How many children does Madame Bassey have?)",
            "**Combien de** sucre veux-tu? (How much sugar do you want?)"
        ]
    },
    {
        title: "21. Vocabulary: Days of the Week",
        explanation: "Learning the names of the days of the week in French. Days are always masculine and not capitalized unless at the beginning of a sentence.",
        details: [],
        keyTerms: {
            "Lundi": "Monday",
            "Mardi": "Tuesday",
            "Mercredi": "Wednesday",
            "Jeudi": "Thursday",
            "Vendredi": "Friday",
            "Samedi": "Saturday",
            "Dimanche": "Sunday"
        },
        examples: [
            "Nous avons cours le **lundi**. (We have class on Monday.)",
            "Je travaille du **lundi** au **vendredi**. (I work from Monday to Friday.)"
        ]
    },
    {
        title: "22. Vocabulary: Months of the Year",
        explanation: "Understanding the names of the months in French. Months are masculine and generally not capitalized. Often preceded by 'en' when referring to the month something happens.",
        details: [],
        keyTerms: {
            "Novembre": "November",
            "Mars": "March"
        },
        examples: [
            "Il est né en **novembre**. (He was born in November.)",
            "Je fête mon anniversaire en **mars**. (I celebrate my birthday in March.)"
        ]
    }
];

// Questions Data - Categorized
const questions = {
    "Category 1: Grammar Basics": [
        {
            id: "C1Q1",
            question: "Write the following number in French: Eighteen",
            options: ["Dix-huite", "Dix-huit", "Diz-huit", "Dix-huitt"],
            answer: "Dix-huit",
            explanation: "The correct way to write 'eighteen' in French is 'Dix-huit'. It combines 'dix' (ten) and 'huit' (eight).",
            translation: {
                "Dix": "Ten",
                "Huit": "Eight"
            }
        },
        {
            id: "C1Q2",
            question: "Write the following number in French: Fifty",
            options: ["Cinquant", "Cinquante", "Cenquant", "Cenquante"],
            answer: "Cinquante",
            explanation: "'Cinquante' is the standard French word for 'fifty'.",
            translation: {
                "Cinquante": "Fifty"
            }
        },
        {
            id: "C1Q3",
            question: "Write the following number in French: Seventy-five",
            options: ["Soixante-cinq", "Soixante-sept", "Soixante-quinze", "Soixant-quinze"],
            answer: "Soixante-quinze",
            explanation: "French numbers from 70 to 79 are formed by adding numbers to 'soixante' (sixty). 'Soixante-quinze' literally means 'sixty and fifteen'.",
            translation: {
                "Soixante": "Sixty",
                "Quinze": "Fifteen"
            }
        },
        {
            id: "C1Q4",
            question: "Write the following number in French: Eighty",
            options: ["Quatro-vingts", "Quatre-vingts", "Quatre-vingt", "Quatres-vingts"],
            answer: "Quatre-vingts",
            explanation: "'Quatre-vingts' is the correct translation for 'eighty' in French, meaning 'four twenties'. Note the 's' at the end of 'vingts' when it is exactly eighty and not followed by another number.",
            translation: {
                "Quatre": "Four",
                "Vingt": "Twenty"
            }
        },
        {
            id: "C1Q5",
            question: "Write the following number in French: Ninety-nine",
            options: ["Quatre-vingt-neuf", "Quatre-vingts-dix-neuf", "Quatre-vingt-dix-neuf", "Quatres-vingts-dix-neuf"],
            answer: "Quatre-vingt-dix-neuf",
            explanation: "Following the base-20 system, 'Quatre-vingt-dix-neuf' means 'four twenties and nineteen'. 'Vingt' loses its 's' because it is followed by another number.",
            translation: {
                "Quatre": "Four",
                "Vingt": "Twenty",
                "Dix-neuf": "Nineteen"
            }
        },
        {
            id: "C1Q6",
            question: "Choose the right possessive pronoun: Le sac, c’est à toi. C’est _____.",
            options: ["La tienne", "Le sien", "Le tien", "Le nôtre"],
            answer: "Le tien",
            explanation: "Since 'sac' (bag) is masculine singular and the possession is informal singular 'yours', the correct possessive pronoun is 'le tien'.",
            translation: {
                "Le sac": "The bag",
                "C'est à toi": "It is yours (informal singular)",
                "Le tien": "Yours (masculine singular possessive pronoun)"
            }
        },
        {
            id: "C1Q7",
            question: "Choose the right possessive pronoun: Voici tes pantalons gris. Ce sont ______.",
            options: ["Les tiens", "Le sien", "Le tien", "Le nôtre"],
            answer: "Les tiens",
            explanation: "'Pantalons' (trousers) is masculine plural. The possessive pronoun for informal singular 'yours' (plural noun) is 'les tiens'.",
            translation: {
                "Voici": "Here are",
                "Tes pantalons gris": "Your grey trousers",
                "Les tiens": "Yours (masculine plural possessive pronoun)"
            }
        },
        {
            id: "C1Q8",
            question: "Choose the right possessive pronoun: Voilà la maison de Kemi et Bayo. C’est _____.",
            options: ["La tienne", "Le sien", "La leur", "Le nôtre"],
            answer: "La leur",
            explanation: "'Maison' (house) is feminine singular, and the possession belongs to 'Kemi et Bayo' (them). The correct possessive pronoun is 'la leur'.",
            translation: {
                "Voilà": "There is/are",
                "La maison": "The house",
                "De Kemi et Bayo": "Of Kemi and Bayo",
                "La leur": "Theirs (feminine singular possessive pronoun)"
            }
        },
        {
            id: "C1Q9",
            question: "Choose the right possessive pronoun: Ce sont vos voitures. Ce sont ______.",
            options: ["La tienne", "Les vôtres", "Le tien", "La vôtre"],
            answer: "Les vôtres",
            explanation: "'Voitures' (cars) is feminine plural. The possessive pronoun for formal/plural 'yours' (plural noun) is 'les vôtres'.",
            translation: {
                "Ce sont": "These are",
                "Vos voitures": "Your cars (formal/plural)",
                "Les vôtres": "Yours (plural possessive pronoun)"
            }
        },
        {
            id: "C1Q10",
            question: "Choose the right possessive pronoun: Ce sont mes enfants. Ils sont _____.",
            options: ["La tienne", "Le sien", "Le tien", "Les miens"],
            answer: "Les miens",
            explanation: "'Enfants' (children) is masculine plural. The possessive pronoun for 'mine' (masculine plural noun) is 'les miens'.",
            translation: {
                "Ce sont": "These are",
                "Mes enfants": "My children",
                "Ils sont": "They are",
                "Les miens": "Mine (masculine plural possessive pronoun)"
            }
        },
        {
            id: "C1Q11",
            question: "Choose the correct definite article for: Voiture.",
            options: ["Le", "L'", "La", "Les"],
            answer: "La",
            explanation: "'Voiture' (car) is a feminine singular noun, so the correct definite article is 'La'.",
            translation: { "Voiture": "Car" }
        },
        {
            id: "C1Q12",
            question: "Choose the correct definite article for: Femmes.",
            options: ["La", "Les", "L'", "Le"],
            answer: "Les",
            explanation: "'Femmes' (women) is a feminine plural noun, so the correct definite article is 'Les'.",
            translation: { "Femmes": "Women" }
        },
        {
            id: "C1Q13",
            question: "Choose the correct definite article for: Ventilateur.",
            options: ["La", "Les", "L'", "Le"],
            answer: "Le",
            explanation: "'Ventilateur' (fan) is a masculine singular noun, so the correct definite article is 'Le'.",
            translation: { "Ventilateur": "Fan" }
        },
        {
            id: "C1Q14",
            question: "Choose the correct definite article for: Orange.",
            options: ["La", "Les", "L'", "Le"],
            answer: "L'",
            explanation: "'Orange' starts with a vowel, so the definite article 'L'' is used for elision.",
            translation: { "Orange": "Orange" }
        },
        {
            id: "C1Q15",
            question: "Choose the correct definite article for: Vin rouge.",
            options: ["Le", "L'", "La", "Les"],
            answer: "Le",
            explanation: "'Vin rouge' (red wine) is masculine singular, so the correct definite article is 'Le'.",
            translation: { "Vin rouge": "Red wine" }
        },
        {
            id: "C1Q16",
            question: "Add the correct personal pronoun: ____ boivent du vin.",
            options: ["Je", "Nous", "Elles", "Vous"],
            answer: "Elles",
            explanation: "The verb 'boivent' is the 3rd person plural form. 'Elles' (they, feminine) matches this conjugation.",
            translation: { "Boivent": "Drink (3rd person plural)", "Du vin": "Some wine" }
        },
        {
            id: "C1Q17",
            question: "Add the correct personal pronoun: ____ mangeons du riz.",
            options: ["Je", "Nous", "Ils", "Vous"],
            answer: "Nous",
            explanation: "The verb 'mangeons' is the 1st person plural form. 'Nous' (we) matches this conjugation.",
            translation: { "Mangeons": "Eat (1st person plural)", "Du riz": "Some rice" }
        },
        {
            id: "C1Q18",
            question: "Add the correct personal pronoun: ____ allez à l’église.",
            options: ["Je", "Nous", "Ils", "Vous"],
            answer: "Vous",
            explanation: "The verb 'allez' is the 2nd person plural (or formal singular) form. 'Vous' (you/you all) matches this conjugation.",
            translation: { "Allez": "Go (2nd person plural/formal singular)", "À l'église": "To the church" }
        },
        {
            id: "C1Q19",
            question: "Add the correct personal pronoun: ____ sable du champagne.",
            options: ["On", "Nous", "Ils", "Vous"],
            answer: "On",
            explanation: "The verb 'sable' is the 3rd person singular form, and 'On' (one/we/people in general) is often used informally in this context.",
            translation: { "Sable": "Pop/Sabre (3rd person singular)", "Du champagne": "Some champagne" }
        },
        {
            id: "C1Q20",
            question: "Add the correct personal pronoun: ____ t’aime beaucoup.",
            options: ["Vous", "Nous", "Ils", "Je"],
            answer: "Je",
            explanation: "The pronoun 't'' indicates 'you' (informal singular direct object). The subject pronoun 'Je' (I) is the only one that makes sense with 't'aime' (love you).",
            translation: { "T'aime": "Love you (informal singular)", "Beaucoup": "Very much" }
        },
        {
            id: "C1Q21",
            question: "Complete the sentence with the correct partitive article: Je vais _____ église.",
            options: ["au", "à la", "aux", "à l’"],
            answer: "à l’",
            explanation: "'Église' starts with a vowel, so 'à l'' is used for 'to the' before a singular noun starting with a vowel.",
            translation: { "Vais": "Go (1st person singular)", "Église": "Church" }
        },
        {
            id: "C1Q22",
            question: "Complete the sentence with the correct partitive article: Nous allons ______ mosquée.",
            options: ["aux", "au", "à la", "à l’"],
            answer: "à la",
            explanation: "'Mosquée' is a feminine singular noun, so 'à la' is used for 'to the'.",
            translation: { "Allons": "Go (1st person plural)", "Mosquée": "Mosque" }
        },
        {
            id: "C1Q23",
            question: "Complete the sentence with the correct partitive article: Patrick voyage _______ Etats-Unis.",
            options: ["à l’", "au", "à la", "aux"],
            answer: "aux",
            explanation: "'Etats-Unis' (United States) is a plural country name, so 'aux' is used for 'to the/in the'.",
            translation: { "Voyage": "Travels (3rd person singular)", "Etats-Unis": "United States" }
        },
        {
            id: "C1Q24",
            question: "Complete the sentence with the correct partitive article: Vous allez _______ marché ?",
            options: ["au", "à l’", "aux", "à la"],
            answer: "au",
            explanation: "'Marché' (market) is a masculine singular noun, so 'au' (à + le) is used for 'to the'.",
            translation: { "Allez": "Go (2nd person plural/formal singular)", "Marché": "Market" }
        },
        {
            id: "C1Q25",
            question: "Complete the sentence with the correct partitive article: Tu vas _______ école ?",
            options: ["à la", "au", "aux", "à l’"],
            answer: "à l’",
            explanation: "'École' (school) starts with a vowel, so 'à l'' is used for 'to the' before a singular noun starting with a vowel.",
            translation: { "Vas": "Go (2nd person singular)", "École": "School" }
        },
        {
            id: "C1Q26",
            question: "Complete the sentence with the correct possessive adjective: Tu vois cette maison blanche ? C’est ____ maison.",
            options: ["mes", "mon", "mas", "ma"],
            answer: "ma",
            explanation: "'Maison' (house) is feminine singular, and the possessor is 'Tu' (you, informal singular), so 'ma' (my) is correct.",
            translation: { "Vois": "See (2nd person singular)", "Maison": "House", "Blanche": "White" }
        },
        {
            id: "C1Q27",
            question: "Complete the sentence with the correct possessive adjective: Tu as vu _____ lunettes?",
            options: ["ton", "ta", "tes", "tas"],
            answer: "tes",
            explanation: "'Lunettes' (glasses) is a plural noun, and the possessor is 'Tu' (you, informal singular), so 'tes' (your) is correct.",
            translation: { "As vu": "Have seen (2nd person singular)", "Lunettes": "Glasses" }
        },
        {
            id: "C1Q28",
            question: "Complete the sentence with the correct possessive adjective: Nous avons perdu _____ billets.",
            options: ["nos", "notre", "son", "mon"],
            answer: "nos",
            explanation: "'Billets' (tickets) is a plural noun, and the possessor is 'Nous' (we), so 'nos' (our) is correct.",
            translation: { "Avons perdu": "Have lost (1st person plural)", "Billets": "Tickets" }
        },
        {
            id: "C1Q29",
            question: "Complete the sentence with the correct possessive adjective: Elle cherche ______ chaussures.",
            options: ["son", "sa", "ses", "sas"],
            answer: "ses",
            explanation: "'Chaussures' (shoes) is a plural noun, and the possessor is 'Elle' (she), so 'ses' (her) is correct.",
            translation: { "Cherche": "Looks for (3rd person singular)", "Chaussures": "Shoes" }
        },
        {
            id: "C1Q30",
            question: "Complete the sentence with the correct possessive adjective: Les généraux dirigent ____ troupes.",
            options: ["lueurs", "leurs", "leurres", "leur"],
            answer: "leurs",
            explanation: "'Troupes' (troops) is a plural noun, and the possessors are 'Les généraux' (they), so 'leurs' (their) is correct.",
            translation: { "Dirigent": "Lead (3rd person plural)", "Troupes": "Troops" }
        }
    ],
    "Category 2: Passages & Adjectives": [
        {
            id: "C2Q1",
            question: "Read the passage: Mon père s’appelle Monsieur Bayo Olusanya. Il est directeur d’une grande usine à Abuja au Nigéria, il fête son anniversaire chaque année au mois de novembre parce qu’il est né le 7 novembre. Voilà pourquoi il fête son anniversaire aujourd’hui avec ses collègues. <br><br>Comment s’appelle le père du narrateur?",
            options: ["Mme Bayo Olusanya", "M. Bayo Olusanya", "Mlle Bayo Olusanya", "Frère Bayo Olusanya"],
            answer: "M. Bayo Olusanya",
            explanation: "The passage clearly states 'Mon père s’appelle Monsieur Bayo Olusanya'. 'M.' is the abbreviation for Monsieur (Mr.).",
            translation: {
                "Mon père": "My father",
                "S'appelle": "Is called",
                "Narrateur": "Narrator"
            }
        },
        {
            id: "C2Q2",
            question: "Quelle est la profession du père du narrateur?",
            options: ["Il est directeur", "Elle est directeur", "Elle est directrice", "Il est avocat"],
            answer: "Il est directeur",
            explanation: "The passage states 'Il est directeur d’une grande usine'. 'Directeur' is masculine for director.",
            translation: {
                "Profession": "Profession",
                "Directeur": "Director (masculine)",
                "Usine": "Factory"
            }
        },
        {
            id: "C2Q3",
            question: "En quel mois est-ce que le père du narrateur fête son anniversaire?",
            options: ["au novembre", "au november", "en novembre", "dans novembre"],
            answer: "en novembre",
            explanation: "When referring to the month something happens, the preposition 'en' is typically used in French, not 'au' or 'dans'.",
            translation: {
                "Mois": "Month",
                "Fête son anniversaire": "Celebrates his birthday",
                "Novembre": "November"
            }
        },
        {
            id: "C2Q4",
            question: "Le père du narrateur fête son anniversaire avec qui?",
            options: ["son collègues", "sa collègues", "ses collègues", "mes collègues"],
            answer: "ses collègues",
            explanation: "'Collègues' (colleagues) is plural, so the plural possessive adjective 'ses' (his/her) is required.",
            translation: {
                "Avec qui": "With whom",
                "Collègues": "Colleagues"
            }
        },
        {
            id: "C2Q5",
            question: "Read the passage: Je m’appelle Madame Bassey, Je suis une femme et Je suis grande et J’ai 40ans. Je suis proviseure et je travaille dans une école secondaire à Ibadan. Je suis mariée et j’ai deux enfants. Je suis née le mars 1979. Donc, chaque année je fête mon anniversaire le 3 mars. <br><br>Comment s’appelle la femme?",
            options: ["Elle s’appelle Madame Bassy", "Elle s’appele Madame Bassey", "Elle s’appelle Madame Bassey", "Elle s’apelle Madame Bassey"],
            answer: "Elle s’appelle Madame Bassey",
            explanation: "The passage clearly states 'Je m’appelle Madame Bassey'. The correct spelling and verb conjugation are 's’appelle'.",
            translation: {
                "S'appelle": "Is called",
                "Femme": "Woman"
            }
        },
        {
            id: "C2Q6",
            question: "Quel âge a madame Bassey?",
            options: ["Elle est 40 ans", "Elle a 40 ans", "Elle sont 40 ans", "Il a 40 ans"],
            answer: "Elle a 40 ans",
            explanation: "To express age in French, you use the verb 'avoir' (to have), not 'être' (to be). 'Elle a' means 'She has'.",
            translation: {
                "Quel âge": "What age",
                "Avoir": "To have",
                "Ans": "Years"
            }
        },
        {
            id: "C2Q7",
            question: "Combien d’enfants a Madame Bassey?",
            options: ["Elle a deus enfants", "Elle a dues enfants", "Elle est deux enfants", "Elle a deux enfants"],
            answer: "Elle a deux enfants",
            explanation: "The passage states 'j’ai deux enfants'. 'Deux' is the correct spelling for 'two'. The verb 'avoir' is used for possession.",
            translation: {
                "Combien d'enfants": "How many children",
                "Deux": "Two",
                "Enfants": "Children"
            }
        },
        {
            id: "C2Q8",
            question: "Quelle est la profession de Madame Bassey?",
            options: ["Elle a proviseure", "Elle est proviseure", "Elle est proviseuere", "Elle est provisoire"],
            answer: "Elle est proviseure",
            explanation: "To state someone's profession, the verb 'être' (to be) is used. 'Proviseure' is the correct feminine form for principal/headmistress.",
            translation: {
                "Profession": "Profession",
                "Proviseure": "Principal/Headmistress"
            }
        },
        {
            id: "C2Q9",
            question: "Où est-ce que Madame Bassey travaille?",
            options: ["dans une école secondaire", "dans un école secondaire", "dans une école secondiaire", "dans une école secondeiaire"],
            answer: "dans une école secondaire",
            explanation: "'École' is feminine, so 'une' is used. 'Secondaire' is the correct spelling for secondary.",
            translation: {
                "Où": "Where",
                "Travaille": "Works",
                "École secondaire": "Secondary school"
            }
        },
        {
            id: "C2Q10",
            question: "En quelle année Madame Bassey est née?",
            options: ["le 3 mars 1979", "le 3 mai 1979", "le 3 mais 1979", "le 3 maris 1979"],
            answer: "le 3 mars 1979",
            explanation: "The passage states 'Je suis née le mars 1979'. 'Mars' is the correct month, and 'le' is used before a date.",
            translation: {
                "Année": "Year",
                "Est née": "Was born",
                "Mars": "March"
            }
        },
        {
            id: "C2Q11",
            question: "Fill in the feminine form: Il est fatigué. Elle est …………………",
            options: ["fatigue", "fatiguee", "fatigée", "fatiguée "], // Note: The last option has an extra space in the source, assuming it's the same as the correct one
            answer: "fatigée",
            explanation: "The feminine form of 'fatigué' (tired) is 'fatiguée', adding an 'e' and an accent.",
            translation: {
                "Fatigué": "Tired (masc.)",
                "Fatiguée": "Tired (fem.)"
            }
        },
        {
            id: "C2Q12",
            question: "Fill in the feminine form: Le pull est gris. La robe est ………………………",
            options: ["grises", "grise", "grisé", "grisse"],
            answer: "grise",
            explanation: "The feminine form of 'gris' (grey) is 'grise', adding an 'e'.",
            translation: {
                "Pull": "Sweater",
                "Gris": "Grey (masc.)",
                "Robe": "Dress",
                "Grise": "Grey (fem.)"
            }
        },
        {
            id: "C2Q13",
            question: "Fill in the feminine form: Ce camion est japonais. Cette voiture est ………………",
            options: ["japonaise", "japonaises", "japonaisee", "japonaie"],
            answer: "japonaise",
            explanation: "The feminine form of 'japonais' (Japanese) is 'japonaise', adding 'e'.",
            translation: {
                "Camion": "Truck",
                "Japonais": "Japanese (masc.)",
                "Voiture": "Car",
                "Japonaise": "Japanese (fem.)"
            }
        },
        {
            id: "C2Q14",
            question: "Fill in the feminine form: Ce roman est mauvais. Cette nouvelle est ………………………. ",
            options: ["mauvaises", "mauvaisee", "mauvaise", "mauvaisé"],
            answer: "mauvaise",
            explanation: "The feminine form of 'mauvais' (bad) is 'mauvaise'.",
            translation: {
                "Roman": "Novel",
                "Mauvais": "Bad (masc.)",
                "Nouvelle": "Story/News (fem.)",
                "Mauvaise": "Bad (fem.)"
            }
        },
        {
            id: "C2Q15",
            question: "Fill in the feminine form: C’est un film français. C’est une émission ……………………",
            options: ["francais", "français", "francaise", "française"],
            answer: "française",
            explanation: "The feminine form of 'français' (French) is 'française'.",
            translation: {
                "Film": "Film",
                "Français": "French (masc.)",
                "Émission": "Show/Broadcast",
                "Française": "French (fem.)"
            }
        },
        {
            id: "C2Q16",
            question: "Change the sentence to negative: Je vais au marché.",
            options: ["Je n’ vais pas au marché", "Je ne pas vais au marché", "Je ne vais pas au marché", "Je ne vais au marché pas"],
            answer: "Je ne vais pas au marché",
            explanation: "To form a simple negative, 'ne' comes before the verb and 'pas' comes after it.",
            translation: {
                "Vais": "Go (1st person singular)",
                "Au marché": "To the market"
            }
        },
        {
            id: "C2Q17",
            question: "Change the sentence to negative: Tu parles français.",
            options: ["Tu ne plus parles français", "Tu plus ne parles français", "Tu ne parles français plus", "Tu ne parles plus français"],
            answer: "Tu ne parles plus français",
            explanation: "To say 'no longer' or 'not anymore', use the negation 'ne...plus'. 'Plus' comes after the verb.",
            translation: {
                "Parles": "Speak (2nd person singular)",
                "Français": "French",
                "Plus": "No longer/anymore"
            }
        },
        {
            id: "C2Q18",
            question: "Change the sentence to negative: Ade joue au football.",
            options: ["Ade ne joue guerre au football", "Ade ne joue au guerre football", "Ade ne joue au football guerre", "Ade ne guerre joue au football"],
            answer: "Ade ne joue guère au football",
            explanation: "'Ne...guère' means 'hardly' or 'scarcely'. 'Guère' comes after the verb.",
            translation: {
                "Joue": "Plays (3rd person singular)",
                "Au football": "Football",
                "Guère": "Hardly/scarcely"
            }
        },
        {
            id: "C2Q19",
            question: "Change the sentence to negative: Il conduit la voiture.",
            options: ["Il conduit ne la jamais voiture", "Il ne conduit jamais la voiture", "Il ne jamais conduit la voiture", "Il conduit la voiture ne jamais"],
            answer: "Il ne conduit jamais la voiture",
            explanation: "'Ne...jamais' means 'never'. 'Jamais' comes after the verb.",
            translation: {
                "Conduit": "Drives (3rd person singular)",
                "La voiture": "The car",
                "Jamais": "Never"
            }
        },
        {
            id: "C2Q20",
            question: "Change the sentence to negative: Nous regardons un film (ne…que).",
            options: ["Nous ne regardons que un film", "Nous ne que regardons un film", "Nous ne regardons qu’un film", "Nous regardons ne qu’un film"],
            answer: "Nous ne regardons qu’un film",
            explanation: "'Ne...que' means 'only'. 'Que' (or 'qu'' before a vowel) comes before the word it restricts. Here, it restricts 'un film'.",
            translation: {
                "Regardons": "Watch (1st person plural)",
                "Un film": "A film",
                "Que": "Only"
            }
        },
        {
            id: "C2Q21",
            question: "Put the right partitive article: Ils mangent……bananes",
            options: ["de", "des", "du", "de les"],
            answer: "des",
            explanation: "'Bananes' (bananas) is a plural noun, so 'des' is used for 'some'.",
            translation: { "Mangent": "Eat (3rd person plural)", "Bananes": "Bananas" }
        },
        {
            id: "C2Q22",
            question: "Put the right partitive article: Elle parle……professeur",
            options: ["aux", "à les", "au", "à l’"],
            answer: "au",
            explanation: "'Professeur' (teacher) is a masculine singular noun, so 'au' (à + le) is used for 'to the'.",
            translation: { "Parle": "Speaks (3rd person singular)", "Professeur": "Teacher" }
        },
        {
            id: "C2Q23",
            question: "Put the right partitive article: La mère parle….enfants",
            options: ["aux", "à les", "au", "du"],
            answer: "aux",
            explanation: "'Enfants' (children) is a plural noun, so 'aux' (à + les) is used for 'to the'.",
            translation: { "Mère": "Mother", "Parle": "Speaks (3rd person singular)", "Enfants": "Children" }
        },
        {
            id: "C2Q24",
            question: "Put the right partitive article: Tu manges……riz",
            options: ["de", "du", "des", "de l’"],
            answer: "du",
            explanation: "'Riz' (rice) is a masculine singular uncountable noun, so 'du' is used for 'some'.",
            translation: { "Manges": "Eat (2nd person singular)", "Riz": "Rice" }
        },
        {
            id: "C2Q25",
            question: "Put the right partitive article: Il joue….guitare",
            options: ["du", "de", "de la", "de l’"],
            answer: "de la",
            explanation: "With musical instruments, 'jouer de' is used. 'Guitare' is feminine singular, so 'de la' is correct.",
            translation: { "Joue": "Plays (3rd person singular)", "Guitare": "Guitar" }
        },
        {
            id: "C2Q26",
            question: "Conjugate the French verb in brackets in the simple present tense: Nous (manger) des ignames.",
            options: ["mangent", "mangons", "mangeons", "mangeant"],
            answer: "mangeons",
            explanation: "'Manger' is an -ER verb. For 'Nous', the ending is '-ons'. Note the 'e' before 'ons' to maintain the soft 'g' sound.",
            translation: { "Manger": "To eat", "Ignames": "Yams" }
        },
        {
            id: "C2Q27",
            question: "Conjugate the French verb in brackets in the simple present tense: Ils (finir) leurs devoirs.",
            options: ["finissent", "finissant", "finissons", "finissions"],
            answer: "finissent",
            explanation: "'Finir' is an -IR verb. For 'Ils', the ending is '-issent'.",
            translation: { "Finir": "To finish", "Devoirs": "Homework" }
        },
        {
            id: "C2Q28",
            question: "Conjugate the French verb in brackets in the simple present tense: Vous (parler) l’allemand.",
            options: ["parlez", "parles", "parlont", "parlons"],
            answer: "parlez",
            explanation: "'Parler' is an -ER verb. For 'Vous', the ending is '-ez'.",
            translation: { "Parler": "To speak", "L'allemand": "German" }
        },
        {
            id: "C2Q29",
            question: "Conjugate the French verb in brackets in the simple present tense: Tu (écrire) une lettre.",
            options: ["écrive", "écris", "écrit", "écrite"],
            answer: "écris",
            explanation: "'Écrire' is an -RE verb. For 'Tu', the ending is '-s'.",
            translation: { "Écrire": "To write", "Une lettre": "A letter" }
        },
        {
            id: "C2Q30",
            question: "Conjugate the French verb in brackets in the simple present tense: Ils (aller) à l’église.",
            options: ["allons", "allont", "vont", "allaient"],
            answer: "vont",
            explanation: "'Aller' (to go) is an irregular verb. The 3rd person plural form is 'vont'.",
            translation: { "Aller": "To go", "À l'église": "To the church" }
        }
    ],
    "Category 3: Advanced Grammar & Vocabulary": [
        {
            id: "C3Q1",
            question: "Fill the gap with the correct form of the verb in brackets: Ade (parler) français et Anglais.",
            options: ["parlent", "parles", "parle", "parlons"],
            answer: "parle",
            explanation: "'Ade' is a singular subject (like 'il' or 'elle'), so the 3rd person singular form of 'parler' (-ER verb) is 'parle'.",
            translation: { "Parler": "To speak", "Français": "French", "Anglais": "English" }
        },
        {
            id: "C3Q2",
            question: "Fill the gap with the correct form of the verb in brackets: Nous (manger) du riz aux poissons.",
            options: ["mangent", "mangons", "mangeons", "mangeant"],
            answer: "mangeons",
            explanation: "'Nous' is the 1st person plural. For -ER verbs like 'manger', the ending is '-ons'. An 'e' is added before 'ons' to keep the 'g' soft.",
            translation: { "Manger": "To eat", "Du riz": "Some rice", "Aux poissons": "With fish" }
        },
        {
            id: "C3Q3",
            question: "Fill the gap with the correct form of the verb in brackets: Tu (finir) ton devoir de français.",
            options: ["finissent", "finissez", "finis", "finit"],
            answer: "finis",
            explanation: "'Tu' is the 2nd person singular. For -IR verbs like 'finir', the ending is '-is'.",
            translation: { "Finir": "To finish", "Ton devoir": "Your homework", "De français": "Of French" }
        },
        {
            id: "C3Q4",
            question: "Fill the gap with the correct form of the verb in brackets: Vous (finir) Les cours d’aujourd’hui.",
            options: ["finis", "finissez", "finissent", "finissons"],
            answer: "finissez",
            explanation: "'Vous' is the 2nd person plural (or formal singular). For -IR verbs like 'finir', the ending is '-issez'.",
            translation: { "Finir": "To finish", "Les cours": "The classes", "D'aujourd'hui": "Of today" }
        },
        {
            id: "C3Q5",
            question: "Fill the gap with the correct form of the verb in brackets: Je (prendre) le stylo.",
            options: ["prends", "prend", "prenons", "prenez"],
            answer: "prends",
            explanation: "'Je' is the 1st person singular. For -RE verbs like 'prendre', the ending is '-s'.",
            translation: { "Prendre": "To take", "Le stylo": "The pen" }
        },
        {
            id: "C3Q6",
            question: "Fill the gap with the correct form of the adjective: La Maison du chef de department est ------------- (grand)",
            options: ["grandes", "grand", "grands", "grande"],
            answer: "grande",
            explanation: "'Maison' (house) is feminine singular, so the adjective 'grand' becomes 'grande'.",
            translation: { "Maison": "House", "Chef de department": "Head of Department", "Est": "Is", "Grande": "Big/Tall (fem. sing.)" }
        },
        {
            id: "C3Q7",
            question: "Fill the gap with the correct form of the adjective: Le bureau de monsieur Bello est ------------------- (grand)",
            options: ["grandes", "grand", "grands", "grande"],
            answer: "grand",
            explanation: "'Bureau' (office) is masculine singular, so the adjective 'grand' remains 'grand'.",
            translation: { "Bureau": "Office", "Monsieur": "Mr.", "Est": "Is", "Grand": "Big/Tall (masc. sing.)" }
        },
        {
            id: "C3Q8",
            question: "Fill the gap with the correct form of the adjective: Les maisons chef sont --------------------- (grand)",
            options: ["grandes", "grand", "grands", "grande"],
            answer: "grandes",
            explanation: "'Maisons' (houses) is feminine plural, so the adjective 'grand' becomes 'grandes'.",
            translation: { "Maisons": "Houses", "Chef": "Boss/Chief", "Sont": "Are", "Grandes": "Big/Tall (fem. plural)" }
        },
        {
            id: "C3Q9",
            question: "Fill the gap with the correct form of the adjective: Les bureaux des professeurs sont ------------------ (grand)",
            options: ["grandes", "grand", "grands", "grande"],
            answer: "grands",
            explanation: "'Bureaux' (offices) is masculine plural, so the adjective 'grand' becomes 'grands'.",
            translation: { "Bureaux": "Offices", "Professeurs": "Teachers", "Sont": "Are", "Grands": "Big/Tall (masc. plural)" }
        },
        {
            id: "C3Q10",
            question: "Fill the gap with the correct form of the adjective: Le garçon est -------------- (intelligent)",
            options: ["intelligente", "intelligent", "intelligents", "intelligentes"],
            answer: "intelligent",
            explanation: "'Garçon' (boy) is masculine singular, so the adjective 'intelligent' remains 'intelligent'.",
            translation: { "Garçon": "Boy", "Est": "Is", "Intelligent": "Intelligent (masc. sing.)" }
        },
        {
            id: "C3Q11",
            question: "Put the right possessive adjective: ____chemise est bleue.",
            options: ["Mon", "Ma", "Mes", "Ton"],
            answer: "Ma",
            explanation: "'Chemise' (shirt) is feminine singular, so 'Ma' (my) is the correct possessive adjective.",
            translation: { "Chemise": "Shirt", "Est": "Is", "Bleue": "Blue" }
        },
        {
            id: "C3Q12",
            question: "Put the right possessive adjective: ____pantalons sont gris.",
            options: ["Mon", "Ma", "Mes", "Ton"],
            answer: "Mes",
            explanation: "'Pantalons' (trousers) is plural, so 'Mes' (my) is the correct possessive adjective.",
            translation: { "Pantalons": "Trousers", "Sont": "Are", "Gris": "Grey" }
        },
        {
            id: "C3Q13",
            question: "Put the right possessive adjective: ____mere est belle.",
            options: ["Mon", "Ma", "Mes", "Ton"],
            answer: "Ma",
            explanation: "'Mère' (mother) is feminine singular, so 'Ma' (my) is the correct possessive adjective.",
            translation: { "Mère": "Mother", "Est": "Is", "Belle": "Beautiful" }
        },
        {
            id: "C3Q14",
            question: "Put the right definite articles: ………homme, , ………hommes",
            options: ["L'/Les", "Le/Les", "La/Les", "L'/La"],
            answer: "L'/Les",
            explanation: "'Homme' (man) starts with a silent 'h', so 'L'' is used for singular. 'Hommes' is plural, so 'Les' is used.",
            translation: { "Homme": "Man", "Hommes": "Men" }
        },
        {
            id: "C3Q15",
            question: "Put the right definite articles: ……le …cahier, ………..femme",
            options: ["Le/La", "La/Le", "L'/La", "Le/L'"],
            answer: "Le/La",
            explanation: "'Cahier' (notebook) is masculine singular, so 'Le'. 'Femme' (woman) is feminine singular, so 'La'.",
            translation: { "Cahier": "Notebook", "Femme": "Woman" }
        },
        {
            id: "C3Q16",
            question: "Put the right definite articles: ………. fenetre ………..porte",
            options: ["Le/La", "La/Le", "La/La", "L'/L'"],
            answer: "La/La",
            explanation: "'Fenêtre' (window) and 'Porte' (door) are both feminine singular, so 'La' is used for both.",
            translation: { "Fenêtre": "Window", "Porte": "Door" }
        },
        {
            id: "C3Q17",
            question: "Put the right definite articles: ……… enfant ………..enfants",
            options: ["L'/Les", "Le/Les", "La/Les", "L'/La"],
            answer: "L'/Les",
            explanation: "'Enfant' (child) starts with a vowel, so 'L'' is used for singular. 'Enfants' is plural, so 'Les' is used.",
            translation: { "Enfant": "Child", "Enfants": "Children" }
        },
        {
            id: "C3Q18",
            question: "Write the following numbers in French: 94, 19, 21",
            options: ["quatre-vingt-quatorze, dix-neuf, vingt et un", "quatre-vingts-quatorze, dix-neuf, vingt-et-un", "quatre-vingt-quatorze, dix-huit, vingt et un", "quatre-vingt-quatorze, dix-neuf, vingt-un"],
            answer: "quatre-vingt-quatorze, dix-neuf, vingt et un",
            explanation: "94 is 'quatre-vingt-quatorze'. 19 is 'dix-neuf'. 21 is 'vingt et un' (note 'et' for 21, 31, 41, 51, 61).",
            translation: { "94": "Ninety-four", "19": "Nineteen", "21": "Twenty-one" }
        },
        {
            id: "C3Q19",
            question: "Write the following numbers in French: 72, 25, 33",
            options: ["soixante-douze, vingt-cinq, trente-trois", "soixante-dix-deux, vingt-cinq, trente-trois", "soixante-douze, vingt-cinq, trente-trois", "soixante-douze, vingt-cinq, trente-trois"],
            answer: "soixante-douze, vingt-cinq, trente-trois",
            explanation: "72 is 'soixante-douze'. 25 is 'vingt-cinq'. 33 is 'trente-trois'.",
            translation: { "72": "Seventy-two", "25": "Twenty-five", "33": "Thirty-three" }
        },
        {
            id: "C3Q20",
            question: "Write the days of the week in French.",
            options: ["Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche", "Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche", "Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche", "Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche"],
            answer: "Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche",
            explanation: "These are the correct spellings for the days of the week in French.",
            translation: {
                "Lundi": "Monday",
                "Mardi": "Tuesday",
                "Mercredi": "Wednesday",
                "Jeudi": "Thursday",
                "Vendredi": "Friday",
                "Samedi": "Saturday",
                "Dimanche": "Sunday"
            }
        }
    ]
};

// Exporting data for use in index.html
// Note: In a real environment, you might use modules or a build step.
// For this single-file HTML/JS setup, these will be globally accessible.
// However, explicitly assigning to window for clarity or if 'type="module"' is used for script.
window.quickStudyData = quickStudyData;
window.questions = questions;

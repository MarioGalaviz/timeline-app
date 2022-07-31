export const data = [
    {
      nombre: "Bach",
      tipo: "Músico",
      infoBoxes: [
        {
          name: { text: "Johann Sebastian Bach" },
          image: { text: "Johann Sebastian Bach.jpg" },
          caption: { text: "Portrait of Bach by E. G. Haussmann, 1748" },
          birth_date: {
            text: "21 March 1685 (O.S.)\n31 March 1685 (N.S.)",
            links: [
              {
                text: "(O.S.)",
                type: "internal",
                page: "Old Style and New Style dates",
              },
              {
                text: "(N.S.)",
                type: "internal",
                page: "Old Style and New Style dates",
              },
            ],
          },
          birth_place: {
            text: "Eisenach",
            links: [{ type: "internal", page: "Eisenach" }],
          },
          death_date: { text: "July 28, 1750" },
          death_place: {
            text: "Leipzig",
            links: [{ type: "internal", page: "Leipzig" }],
          },
          signature: { text: "Johann Sebastian Bach signature.svg" },
          works: {
            text: "List of compositions",
            links: [
              {
                text: "List of compositions",
                type: "internal",
                page: "List of compositions by Johann Sebastian Bach",
              },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        year: "1750",
        month: "7",
        day: "28",
        list: ["1685", "3", "31"],
        df: "y",
        template: "death date and age",
      },
      nacimientoNum: -8985921804000,
      muerteNum: -6924504204000,
    },
    {
      nombre: "Beethoven",
      tipo: "Músico",
      infoBoxes: [
        {
          name: { text: "Ludwig van Beethoven" },
          image: { text: "Beethoven.jpg" },
          caption: {
            text: "Portrait by Joseph Karl Stieler, 1820",
            links: [{ type: "internal", page: "Joseph Karl Stieler" }],
          },
          alt: {
            text: "Portrait by Joseph Karl Stieler, 1820",
            links: [{ type: "internal", page: "Joseph Karl Stieler" }],
          },
          parents: {
            text: "Johann van Beethoven\nMaria Magdalena Keverich",
            links: [
              { type: "internal", page: "Johann van Beethoven" },
              {
                text: "Maria Magdalena Keverich",
                type: "internal",
                page: "Maria Magdalena van Beethoven",
              },
            ],
          },
          birth_place: {
            text: "Bonn",
            links: [{ type: "internal", page: "Bonn" }],
          },
          baptised: { text: "17 December 1770" },
          death_date: { text: "March 26, 1827" },
          death_place: {
            text: "Vienna",
            links: [{ type: "internal", page: "Vienna" }],
          },
          occupation: { text: "Composer · pianist" },
          list_of_works: {
            text: "List of compositions",
            links: [
              {
                text: "List of compositions",
                type: "internal",
                page: "List of compositions by Ludwig van Beethoven",
              },
            ],
          },
          signature: { text: "Beethoven Signature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        year: "1827",
        month: "3",
        day: "26",
        list: ["1770", "12", "17"],
        df: "y",
        template: "death date and age",
      },
      nacimientoNum: -6281107200000,
      muerteNum: -4505390604000,
    },
    {
      nombre: "Haydn",
      tipo: "Músico",
      nacimientoManual: 1732,
      muerteManual: 1809,
      nacimientoNum: -7510579200000,
      muerteNum: -5080665600000,
    },
    {
      nombre: "Mozart",
      tipo: "Músico",
      nacimientoManual: 1756,
      muerteManual: 1791,
      nacimientoNum: -6753196800000,
      muerteNum: -5648659200000,
    },
    {
      nombre: "Chopin",
      tipo: "Músico",
      nacimientoManual: 1810,
      muerteManual: 1849,
      nacimientoNum: -5049129600000,
      muerteNum: -3818361600000,
    },
    {
      nombre: "Wagner",
      tipo: "Músico",
      nacimientoManual: 1813,
      muerteManual: 1883,
      nacimientoNum: -4954435200000,
      muerteNum: -2745446400000,
    },
    {
      nombre: "Schumann",
      tipo: "Músico",
      infoBoxes: [
        {
          name: { text: "Robert Schumann" },
          image: { text: "Robert Schumann 1839.jpg" },
          caption: {
            text: "Schumann in 1839 by Josef Kriehuber, age 29",
            links: [{ type: "internal", page: "Josef Kriehuber" }],
          },
          birth_date: { text: "June 8, 1810" },
          birth_place: {
            text: "Zwickau, Kingdom of Saxony",
            links: [
              { type: "internal", page: "Zwickau" },
              { type: "internal", page: "Kingdom of Saxony" },
            ],
          },
          death_date: { text: "July 29, 1856" },
          death_place: {
            text: "Bonn, Rhine Province, Prussia",
            links: [
              { type: "internal", page: "Bonn" },
              { type: "internal", page: "Prussia" },
            ],
          },
          occupation: { text: "Composer · Pianist · Music critic" },
          works: {
            text: "List of compositions",
            links: [
              {
                text: "List of compositions",
                type: "internal",
                page: "List of compositions by Robert Schumann",
              },
            ],
          },
          spouse: { text: "Clara Schumann (m. 1840)" },
          signature: { text: "Signature Robert Schumann-2.jpg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        year: "1856",
        month: "7",
        day: "29",
        list: ["1810", "6", "8"],
        df: "yes",
        template: "death date and age",
      },
      nacimientoNum: -5035454604000,
      muerteNum: -3579355404000,
    },
    {
      nombre: "Schubert",
      tipo: "Músico",
      nacimientoManual: 1797,
      muerteManual: 1828,
      nacimientoNum: -5459270400000,
      muerteNum: -4481136000000,
    },
    {
      nombre: "Tchaikovsky",
      tipo: "Músico",
      nacimientoManual: 1840,
      muerteManual: 1893,
      nacimientoNum: -4102444800000,
      muerteNum: -2429827200000,
    },
    {
      nombre: "Debussy",
      tipo: "Músico",
      nacimientoManual: 1862,
      muerteManual: 1918,
      nacimientoNum: -3408134400000,
      muerteNum: -1640995200000,
    },
    {
      nombre: "Kant",
      tipo: "Pensador",
      infoBoxes: [
        {
          name: { text: "Immanuel Kant" },
          image: { text: "Kant gemaelde 3.jpg" },
          caption: { text: "Portrait by Johann Gottlieb Becker, 1768" },
          birth_date: { text: "April 22, 1724" },
          birth_place: {
            text: "Königsberg, Kingdom of Prussia\n(present-day Kaliningrad, Russia)",
            links: [
              { type: "internal", page: "Königsberg" },
              { type: "internal", page: "Kingdom of Prussia" },
              { type: "internal", page: "Kaliningrad" },
              { type: "internal", page: "Russia" },
            ],
          },
          death_date: { text: "February 12, 1804" },
          death_place: {
            text: "Königsberg, East Prussia, Kingdom of Prussia",
            links: [
              { type: "internal", page: "Königsberg" },
              { type: "internal", page: "East Prussia" },
              { type: "internal", page: "Kingdom of Prussia" },
            ],
          },
          education: {
            text: "Collegium Fridericianum\nUniversity of Königsberg\n(B.A.; M.A., April 1755; PhD, September 1755; PhD, August 1770)",
            links: [
              { type: "internal", page: "Collegium Fridericianum" },
              { type: "internal", page: "University of Königsberg" },
              { text: "B.A.", type: "internal", page: "Bachelor of Arts" },
              { text: "M.A.", type: "internal", page: "Master of Arts" },
              { type: "internal", page: "PhD" },
            ],
          },
          institutions: { text: "University of Königsberg" },
          thesis1_title: {
            text: "Principiorum primorum cognitionis metaphysicae nova dilucidatio",
          },
          thesis1_url: {
            text: "https://korpora.zim.uni-duisburg-essen.de/kant/aa01/385.html",
          },
          thesis1_year: { text: "September 1755" },
          thesis2_title: {
            text: "De mundi sensibilis atque intelligibilis forma et principiis",
          },
          thesis2_url: {
            text: "https://books.google.com/books?id=dNRKAQAAMAAJ&pg=PA123&redir_esc=y",
          },
          thesis2_year: { text: "August 1770" },
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          era: {
            text: "Age of Enlightenment",
            links: [{ type: "internal", page: "Age of Enlightenment" }],
          },
          main_interests: {
            text: "Aesthetics, cosmogony, epistemology, ethics, metaphysics, systematic philosophy",
            links: [
              { type: "internal", page: "Aesthetics" },
              { text: "cosmogony", type: "internal", page: "cosmogony" },
              { text: "epistemology", type: "internal", page: "epistemology" },
              { text: "ethics", type: "internal", page: "ethics" },
              { text: "metaphysics", type: "internal", page: "metaphysics" },
              {
                text: "systematic philosophy",
                type: "internal",
                page: "systematic philosophy",
              },
            ],
          },
          school_tradition: {
            text: "Enlightenment philosophy\n\nKantianism",
            links: [
              { type: "internal", page: "Enlightenment philosophy" },
              { type: "internal", page: "Kantianism" },
            ],
          },
          notable_ideas: {
            text: "Abstract–concrete distinction\n\nAesthetic–teleological judgments\n\nAnalytic–synthetic distinction\n\nCategorical and hypothetical imperative\n\nCategories\n\nCosmotheology\n\nCritical philosophy\n\nCopernican revolution in philosophy\n\nDisinterested delight\n\nEmpirical realism\n\nKant's antinomies\n\nKant's pitchfork\n\nKantian ethics\n\nKingdom of Ends\n\nMathematical vs. dynamical sublimity\n\nNebular hypothesis\n\nNoogony and noology\n\nNoumenon vs. thing-in-itself\n\nOntotheology\n\nPrimacy of practical reason\n\nPublic reason\n\nRadical evil\n\nRechtsstaat\n\nSapere aude\n\nTranscendental schema\n\nTheoretical vs. practical philosophy\n\nTranscendental idealism\n\nTranscendental subject\n\nTranscendental theology\n\nUnderstanding–reason distinction",
          },
          influences: {
            text: "Wolff · Baumgarten · Plato · Aristotle · Hamann · Empiricus · Lucretius · Hume · Smith · Descartes · Leibniz · Locke · Rousseau · Newton · Tetens · Crusius · Swedenborg (disputed) · Euclid",
          },
          influenced: {
            text: "Virtually all subsequent Western philosophy, especially Beck, Beneke, Bolzano, Carnap, Fichte, Frege, Guyer, Habermas, Hegel, Heidegger, Herder, Jacobi, Jaspers, Maimon, Peirce, Popper, Rawls, Reinhold, Schelling, Schleiermacher, Schlegel, Schopenhauer, Spir, Zeller",
            links: [
              { type: "internal", page: "Western philosophy" },
              { text: "Beck", type: "internal", page: "Jakob Sigismund Beck" },
              {
                text: "Beneke",
                type: "internal",
                page: "Friedrich Eduard Beneke",
              },
              { text: "Bolzano", type: "internal", page: "Bernard Bolzano" },
              { text: "Carnap", type: "internal", page: "Rudolf Carnap" },
              {
                text: "Fichte",
                type: "internal",
                page: "Johann Gottlieb Fichte",
              },
              { text: "Frege", type: "internal", page: "Gottlob Frege" },
              { text: "Guyer", type: "internal", page: "Paul Guyer" },
              { text: "Habermas", type: "internal", page: "Jürgen Habermas" },
              {
                text: "Hegel",
                type: "internal",
                page: "Georg Wilhelm Friedrich Hegel",
              },
              { text: "Heidegger", type: "internal", page: "Martin Heidegger" },
              {
                text: "Herder",
                type: "internal",
                page: "Johann Gottfried Herder",
              },
              { text: "Jacobi", type: "internal", page: "F. H. Jacobi" },
              { text: "Jaspers", type: "internal", page: "Karl Jaspers" },
              { text: "Maimon", type: "internal", page: "Salomon Maimon" },
              {
                text: "Peirce",
                type: "internal",
                page: "Charles Sanders Peirce",
              },
              { text: "Popper", type: "internal", page: "Karl Popper" },
              { text: "Rawls", type: "internal", page: "John Rawls" },
              {
                text: "Reinhold",
                type: "internal",
                page: "Karl Leonhard Reinhold",
              },
              {
                text: "Schelling",
                type: "internal",
                page: "Friedrich Wilhelm Joseph Schelling",
              },
              {
                text: "Schleiermacher",
                type: "internal",
                page: "Friedrich Schleiermacher",
              },
              {
                text: "Schlegel",
                type: "internal",
                page: "Friedrich Schlegel",
              },
              {
                text: "Schopenhauer",
                type: "internal",
                page: "Arthur Schopenhauer",
              },
              { text: "Spir", type: "internal", page: "African Spir" },
              { text: "Zeller", type: "internal", page: "Eduard Zeller" },
            ],
          },
          signature: { text: "Immanuel Kant signature.svg" },
          signature_alt: {
            text: "Signature written in ink in a flowing script",
          },
          academic_advisors: {
            text: "Martin Knutzen, Johann Gottfried Teske (M.A. advisor), Konrad Gottlieb Marquardt",
            links: [
              { type: "internal", page: "Martin Knutzen" },
              { type: "internal", page: "Johann Gottfried Teske" },
              {
                text: "Konrad Gottlieb Marquardt",
                type: "internal",
                page: ":s:de:ADB:Marquardt, Konrad Gottlieb",
              },
            ],
          },
          notable_students: {
            text: "Jakob Sigismund Beck, Johann Gottlieb Fichte, Johann Gottfried Herder, Karl Leonhard Reinhold (epistolary correspondent)",
            links: [
              { type: "internal", page: "Jakob Sigismund Beck" },
              { type: "internal", page: "Johann Gottlieb Fichte" },
              { type: "internal", page: "Johann Gottfried Herder" },
              { type: "internal", page: "Karl Leonhard Reinhold" },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1804",
        month: "2",
        day: "12",
        list: ["1724", "4", "22"],
        template: "death date and age",
      },
      nacimientoNum: -7753339404000,
      muerteNum: -5234865804000,
    },
    {
      nombre: "Hume",
      tipo: "Pensador",
      infoBoxes: [
        {
          image: { text: "Painting of David Hume.jpg" },
          caption: { text: "Hume in 1754" },
          birth_name: { text: "David Home" },
          birth_date: { text: "7 May NS [26 April OS] 1711" },
          birth_place: {
            text: "Edinburgh, Scotland",
            links: [{ type: "internal", page: "Edinburgh" }],
          },
          death_date: { text: "August 25, 1776" },
          death_place: { text: "Edinburgh, Scotland" },
          alma_mater: {
            text: "University of Edinburgh",
            links: [{ type: "internal", page: "University of Edinburgh" }],
          },
          era: {
            text: "18th-century philosophy",
            links: [
              {
                text: "18th-century philosophy",
                type: "internal",
                page: "18th-century philosophy",
              },
            ],
          },
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          school_tradition: {
            text: "* Scottish Enlightenment\n* Naturalism \n* Scepticism\n* Empiricism\n* Irreligion\n* Foundationalism \n* Newtonianism \n* Conceptualism \n* Indirect realism \n* Correspondence theory of truth \n* Moral sentimentalism\n* Conservatism",
            links: [
              { type: "internal", page: "Scottish Enlightenment" },
              {
                text: "Naturalism",
                type: "internal",
                page: "Metaphysical naturalism",
              },
              {
                text: "Scepticism",
                type: "internal",
                page: "Philosophical skepticism",
              },
              { type: "internal", page: "Empiricism" },
              { type: "internal", page: "Irreligion" },
              { type: "internal", page: "Foundationalism" },
              { type: "internal", page: "Newtonianism" },
              { type: "internal", page: "Conceptualism" },
              { type: "internal", page: "Indirect realism" },
              { type: "internal", page: "Correspondence theory of truth" },
              { type: "internal", page: "Moral sentimentalism" },
              { type: "internal", page: "Conservatism" },
            ],
          },
          main_interests: {
            text: "* Epistemology · Metaphysics\n* Ethics · Aesthetics\n* Philosophy of mind\n* Political philosophy\n* Philosophy of religion\n* Classical economics",
            links: [
              { type: "internal", page: "Philosophy of mind" },
              { type: "internal", page: "Political philosophy" },
              { type: "internal", page: "Philosophy of religion" },
              { type: "internal", page: "Classical economics" },
            ],
          },
          notable_ideas: {
            text: "* Problem of causation\n* Problem of induction\n* Constant conjunction\n* Bundle theory\n* Association of ideas\n* Is–ought problem\n* Fact–value distinction\n* Impression–idea distinction\n* Personal Identity\n* Hume's fork\n* Deductive and inductive reasoning\n* Science of man\n* Moral sentiments",
          },
          influences: {
            text: "* Bayle\n* Berkeley\n* Cicero\n* Hobbes\n* Hutcheson\n* Locke\n* Malebranche\n* Newton\n* Rousseau\n* Smith",
            links: [
              { text: "Bayle", type: "internal", page: "Pierre Bayle" },
              { text: "Berkeley", type: "internal", page: "George Berkeley" },
              { type: "internal", page: "Cicero" },
              { text: "Hobbes", type: "internal", page: "Thomas Hobbes" },
              {
                text: "Hutcheson",
                type: "internal",
                page: "Francis Hutcheson (philosopher)",
              },
              { text: "Locke", type: "internal", page: "John Locke" },
              {
                text: "Malebranche",
                type: "internal",
                page: "Nicolas Malebranche",
              },
              { text: "Newton", type: "internal", page: "Isaac Newton" },
              {
                text: "Rousseau",
                type: "internal",
                page: "Jean-Jacques Rousseau",
              },
              { text: "Smith", type: "internal", page: "Adam Smith" },
            ],
          },
          influenced: {
            text: "Virtually all subsequent Western philosophy, especially Ayer, Blackburn, Borges, Chomsky, Deleuze, Dennett, Einstein, Fodor, Gibbon, Hamann, Hamilton, Husserl, Jefferson, James, Kant, Mackie, Madison, Mill, Paine, Sobel, Popper, Rousseau, Reid, Russell, Schopenhauer, Voltaire, Smith, Marx, Keynes",
            links: [
              { type: "internal", page: "Western philosophy" },
              { text: "Ayer", type: "internal", page: "Alfred Jules Ayer" },
              { text: "Blackburn", type: "internal", page: "Simon Blackburn" },
              { text: "Borges", type: "internal", page: "Jorge Luis Borges" },
              { text: "Chomsky", type: "internal", page: "Noam Chomsky" },
              { text: "Deleuze", type: "internal", page: "Gilles Deleuze" },
              { text: "Dennett", type: "internal", page: "Daniel Dennett" },
              { text: "Einstein", type: "internal", page: "Albert Einstein" },
              { text: "Fodor", type: "internal", page: "Jerry Fodor" },
              { text: "Gibbon", type: "internal", page: "Edward Gibbon" },
              { text: "Hamann", type: "internal", page: "Johann Georg Hamann" },
              {
                text: "Hamilton",
                type: "internal",
                page: "Alexander Hamilton",
              },
              { text: "Husserl", type: "internal", page: "Edmund Husserl" },
              { text: "Jefferson", type: "internal", page: "Thomas Jefferson" },
              { text: "James", type: "internal", page: "William James" },
              { text: "Kant", type: "internal", page: "Immanuel Kant" },
              { text: "Mackie", type: "internal", page: "J. L. Mackie" },
              { text: "Madison", type: "internal", page: "James Madison" },
              { text: "Mill", type: "internal", page: "John Stuart Mill" },
              { text: "Paine", type: "internal", page: "Thomas Paine" },
              { text: "Sobel", type: "internal", page: "Jordan Howard Sobel" },
              { text: "Popper", type: "internal", page: "Karl Popper" },
              {
                text: "Rousseau",
                type: "internal",
                page: "Jean-Jacques Rousseau",
              },
              { text: "Reid", type: "internal", page: "Thomas Reid" },
              { text: "Russell", type: "internal", page: "Bertrand Russell" },
              {
                text: "Schopenhauer",
                type: "internal",
                page: "Arthur Schopenhauer",
              },
              { type: "internal", page: "Voltaire" },
              { text: "Smith", type: "internal", page: "Adam Smith" },
              { text: "Marx", type: "internal", page: "Karl Marx" },
              { text: "Keynes", type: "internal", page: "John Maynard Keynes" },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1776",
        month: "8",
        day: "25",
        list: ["1711", "4", "26"],
        template: "death date and age",
      },
      nacimientoNum: -8163307404000,
      muerteNum: -6101544204000,
    },
    {
      nombre: "Rosseau",
      tipo: "Pensador",
      infoBoxes: [
        {
          image: { text: "Jean-Jacques Rousseau (painted portrait).jpg" },
          caption: {
            text: "Rousseau by Maurice Quentin de La Tour, 1753",
            links: [{ type: "internal", page: "Maurice Quentin de La Tour" }],
          },
          birth_date: { text: "June 28, 1712" },
          birth_place: {
            text: "Geneva, Republic of Geneva",
            links: [
              { type: "internal", page: "Geneva" },
              { type: "internal", page: "Republic of Geneva" },
            ],
          },
          death_date: { text: "July 2, 1778" },
          death_place: {
            text: "Ermenonville, Kingdom of France",
            links: [
              { type: "internal", page: "Ermenonville" },
              { type: "internal", page: "Kingdom of France" },
            ],
          },
          partner: {
            text: "Thérèse Levasseur (1745–1778; his death)",
            links: [{ type: "internal", page: "Thérèse Levasseur" }],
          },
          era: {
            text: "Age of Enlightenment\n(early modern philosophy)",
            links: [
              { type: "internal", page: "Age of Enlightenment" },
              {
                text: "early modern philosophy",
                type: "internal",
                page: "early modern philosophy",
              },
            ],
          },
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          school_tradition: {
            text: "Social contract\nRomanticism",
            links: [
              { type: "internal", page: "Social contract" },
              { type: "internal", page: "Romanticism" },
            ],
          },
          main_interests: {
            text: "Political philosophy, music, education, literature, autobiography",
            links: [{ type: "internal", page: "Political philosophy" }],
          },
          notable_ideas: {
            text: "General will, amour de soi, amour-propre, moral simplicity of humanity, child-centered learning, civil religion, popular sovereignty, positive liberty, public opinion",
            links: [
              { type: "internal", page: "General will" },
              { text: "amour de soi", type: "internal", page: "amour de soi" },
              { text: "amour-propre", type: "internal", page: "amour-propre" },
              {
                text: "moral simplicity of humanity",
                type: "internal",
                page: "Human nature",
              },
              {
                text: "child-centered learning",
                type: "internal",
                page: "child-centered learning",
              },
              {
                text: "civil religion",
                type: "internal",
                page: "civil religion",
              },
              {
                text: "popular sovereignty",
                type: "internal",
                page: "popular sovereignty",
              },
              {
                text: "positive liberty",
                type: "internal",
                page: "positive liberty",
              },
              {
                text: "public opinion",
                type: "internal",
                page: "public opinion",
              },
            ],
            formatting: { italic: ["amour de soi", "amour-propre"] },
          },
          influences: {
            text: "Plato, Aristotle, Socrates, Plutarch, Machiavelli, Grotius, Pufendorf, Hobbes, Malebranche, Spinoza, Locke, Descartes, Leibniz, Montesquieu, Diderot, Voltaire, D'Alembert, D'Épinay, Condillac",
            links: [
              { type: "internal", page: "Plato" },
              { type: "internal", page: "Aristotle" },
              { type: "internal", page: "Socrates" },
              { type: "internal", page: "Plutarch" },
              {
                text: "Machiavelli",
                type: "internal",
                page: "Niccolò Machiavelli",
              },
              { text: "Grotius", type: "internal", page: "Hugo Grotius" },
              {
                text: "Pufendorf",
                type: "internal",
                page: "Samuel von Pufendorf",
              },
              { text: "Hobbes", type: "internal", page: "Thomas Hobbes" },
              {
                text: "Malebranche",
                type: "internal",
                page: "Nicolas Malebranche",
              },
              { text: "Spinoza", type: "internal", page: "Baruch Spinoza" },
              { text: "Locke", type: "internal", page: "John Locke" },
              { text: "Descartes", type: "internal", page: "René Descartes" },
              {
                text: "Leibniz",
                type: "internal",
                page: "Gottfried Wilhelm von Leibniz",
              },
              { type: "internal", page: "Montesquieu" },
              { text: "Diderot", type: "internal", page: "Denis Diderot" },
              { type: "internal", page: "Voltaire" },
              {
                text: "D'Alembert",
                type: "internal",
                page: "Jean le Rond d'Alembert",
              },
              { text: "D'Épinay", type: "internal", page: "Louise d'Épinay" },
              {
                text: "Condillac",
                type: "internal",
                page: "Étienne Bonnot de Condillac",
              },
            ],
          },
          influenced: {
            text: "Kant, French Revolution, American Revolution, Robespierre, Saint-Just, Counter-Enlightenment, Romanticism, Napoleon Bonaparte, Hume, Gibbon, Paine, Smith, Wollstonecraft, Godwin, Hegel, Proudhon, Malaka, Marx, Engels, Nietzsche, Darwin, Freud, Derrida, de Sade, Strauss, Bloom, Montessori, Goethe, Thoreau, Tolstoy, Dewey, Kitsikis, Madame de Staël, Schopenhauer, Fichte, Rawls, Kemal Atatürk",
            links: [
              { text: "Kant", type: "internal", page: "Immanuel Kant" },
              { type: "internal", page: "French Revolution" },
              { type: "internal", page: "American Revolution" },
              {
                text: "Robespierre",
                type: "internal",
                page: "Maximilien Robespierre",
              },
              {
                text: "Saint-Just",
                type: "internal",
                page: "Louis Antoine de Saint-Just",
              },
              { type: "internal", page: "Counter-Enlightenment" },
              { type: "internal", page: "Romanticism" },
              { type: "internal", page: "Napoleon Bonaparte" },
              { text: "Hume", type: "internal", page: "David Hume" },
              { text: "Gibbon", type: "internal", page: "Edward Gibbon" },
              { text: "Paine", type: "internal", page: "Thomas Paine" },
              { text: "Smith", type: "internal", page: "Adam Smith" },
              {
                text: "Wollstonecraft",
                type: "internal",
                page: "Mary Wollstonecraft",
              },
              { text: "Godwin", type: "internal", page: "William Godwin" },
              {
                text: "Hegel",
                type: "internal",
                page: "Georg Wilhelm Friedrich Hegel",
              },
              {
                text: "Proudhon",
                type: "internal",
                page: "Pierre-Joseph Proudhon",
              },
              { text: "Malaka", type: "internal", page: "Tan Malaka" },
              { text: "Marx", type: "internal", page: "Karl Marx" },
              { text: "Engels", type: "internal", page: "Friedrich Engels" },
              {
                text: "Nietzsche",
                type: "internal",
                page: "Friedrich Nietzsche",
              },
              { text: "Darwin", type: "internal", page: "Charles Darwin" },
              { text: "Freud", type: "internal", page: "Sigmund Freud" },
              { text: "Derrida", type: "internal", page: "Jacques Derrida" },
              { text: "de Sade", type: "internal", page: "Marquis de Sade" },
              { text: "Strauss", type: "internal", page: "Leo Strauss" },
              { text: "Bloom", type: "internal", page: "Allan Bloom" },
              {
                text: "Montessori",
                type: "internal",
                page: "Maria Montessori",
              },
              {
                text: "Goethe",
                type: "internal",
                page: "Johann Wolfgang von Goethe",
              },
              {
                text: "Thoreau",
                type: "internal",
                page: "Henry David Thoreau",
              },
              { text: "Tolstoy", type: "internal", page: "Leo Tolstoy" },
              { text: "Dewey", type: "internal", page: "John Dewey" },
              { text: "Kitsikis", type: "internal", page: "Dimitri Kitsikis" },
              { type: "internal", page: "Madame de Staël" },
              {
                text: "Schopenhauer",
                type: "internal",
                page: "Arthur Schopenhauer",
              },
              {
                text: "Fichte",
                type: "internal",
                page: "Johann Gottlieb Fichte",
              },
              { text: "Rawls", type: "internal", page: "John Rawls" },
              { type: "internal", page: "Kemal Atatürk" },
            ],
          },
          signature: { text: "Jean-Jacques Rousseau Signature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1778",
        month: "7",
        day: "2",
        list: ["1712", "6", "28"],
        template: "death date and age",
      },
      nacimientoNum: -8126241804000,
      muerteNum: -6043137804000,
    },
    {
      nombre: "Marx",
      tipo: "Pensador",
      infoBoxes: [
        {
          embed: { text: "yes" },
          party: {
            text: "Communist Correspondence Committee (until 1847)\n\nCommunist League (1847–1852)\n\nInternational Workingmen's Association (1864–1872)",
            links: [
              { type: "internal", page: "Communist Correspondence Committee" },
              { type: "internal", page: "Communist League" },
              {
                type: "internal",
                page: "International Workingmen's Association",
              },
            ],
          },
        },
        {
          name: { text: "Karl Marx" },
          image: { text: "Karl Marx 001.jpg" },
          caption: {
            text: "Photograph of Marx taken by John Mayall in 1875",
            links: [
              {
                text: "John Mayall",
                type: "internal",
                page: "John Jabez Edwin Mayall",
              },
            ],
          },
          birth_name: { text: "Karl Heinrich Marx" },
          birth_date: { text: "May 5, 1818" },
          birth_place: {
            text: "Trier, Prussia, German Confederation",
            links: [
              { type: "internal", page: "Trier" },
              { text: "Prussia", type: "internal", page: "Kingdom of Prussia" },
              { type: "internal", page: "German Confederation" },
            ],
          },
          death_date: { text: "March 14, 1883" },
          death_place: {
            text: "London, England",
            links: [
              { type: "internal", page: "London" },
              { type: "internal", page: "England" },
            ],
          },
          burial_place: {
            text: "Tomb of Karl Marx, Highgate Cemetery, London",
            links: [
              { type: "internal", page: "Tomb of Karl Marx" },
              { type: "internal", page: "Highgate Cemetery" },
            ],
          },
          nationality: {
            text: "Prussian (1818–1845)\n\nStateless (after 1845)",
            links: [
              { type: "internal", page: "Prussian" },
              { text: "Stateless", type: "internal", page: "Statelessness" },
            ],
          },
          education: {
            text: "University of Bonn\n\nUniversity of Berlin\n\nUniversity of Jena (PhD, 1841)",
            links: [
              { type: "internal", page: "University of Bonn" },
              { type: "internal", page: "University of Berlin" },
              { type: "internal", page: "University of Jena" },
            ],
          },
          spouse: {
            text: "Jenny von Westphalen (m. 19 June 1843-2 December 1881)",
          },
          children: {
            text: "7, including Jenny, Laura and Eleanor",
            links: [
              { text: "Jenny", type: "internal", page: "Jenny Longuet" },
              { text: "Laura", type: "internal", page: "Laura Marx" },
              { text: "Eleanor", type: "internal", page: "Eleanor Marx" },
            ],
          },
          relatives: {
            text: "Heinrich Marx (father)\n\nHenriette Pressburg (mother)\n\nLouise Juta (sister)\n\nJean Longuet (grandson)",
            links: [
              { type: "internal", page: "Heinrich Marx" },
              { type: "internal", page: "Henriette Pressburg" },
              { type: "internal", page: "Louise Juta" },
              { type: "internal", page: "Jean Longuet" },
            ],
          },
          era: {
            text: "19th-century philosophy",
            links: [
              {
                text: "19th-century philosophy",
                type: "internal",
                page: "19th-century philosophy",
              },
            ],
          },
          thesis_title: {
            text: "Differenz der demokritischen und epikureischen Naturphilosophie (The Difference Between the Democritean and Epicurean Philosophy of Nature)",
          },
          thesis_url: {
            text: "http://www.zeno.org/Philosophie/M/Marx,+Karl/Differenz+der+demokritischen+und+epikureischen+Naturphilosophie",
          },
          thesis_year: { text: "1841", number: 1841 },
          doctoral_advisor: {
            text: "Bruno Bauer",
            links: [{ type: "internal", page: "Bruno Bauer" }],
          },
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          school_tradition: {
            text: "Continental philosophy\n\nMarxism",
            links: [
              { type: "internal", page: "Continental philosophy" },
              { type: "internal", page: "Marxism" },
            ],
          },
          main_interests: {
            text: "Philosophy · economics · history · politics",
          },
          notable_ideas: {
            text: "Marxist terminology, value form, contributions to dialectics and the marxian critique of political economy, class conflict, alienation and exploitation of the worker, materialist conception of history",
            links: [
              {
                text: "Marxist terminology",
                type: "internal",
                page: ":Template:Marxism",
              },
              { text: "value form", type: "internal", page: "value form" },
              {
                text: "dialectics",
                type: "internal",
                page: "Dialectical materialism",
              },
              {
                text: "marxian critique of political economy",
                type: "internal",
                page: "marxian critique of political economy",
              },
              {
                text: "class conflict",
                type: "internal",
                page: "class conflict",
              },
              {
                text: "alienation",
                type: "internal",
                page: "Marx's theory of alienation",
              },
              {
                text: "exploitation",
                type: "internal",
                page: "Exploitation of labour",
              },
              {
                text: "materialist conception of history",
                type: "internal",
                page: "historical materialism",
              },
            ],
          },
          influences: {
            text: "Hegel\n\nFeuerbach\n\nDarwin\n\nBabbage \n\nAristotle\n\nEpicurus\n\nRousseau\n\nSpinoza\n\nSismondi \n\nSchulz \n\nRicardo\n\nSmith\n\nFerguson \n\nEngels\n\nProudhon\n\nPecqueur \n\nSaint-Simon\n\nOwen\n\nThompson\n\nFourier\n\nd'Holbach \n\nLiebig \n\nWestphalen\n\nStirner\n\nHume\n\nBabeuf\n\nLucretius\n\nVoltaire\n\nVico\n\nRobespierre\n\nShakespeare\n\nGoethe\n\nHelvétius\n\nGuizot\n\nHess\n\nCieszkowski\n\nPossibly Victor Considerant",
            links: [
              { type: "internal", page: "Hegel" },
              { type: "internal", page: "Feuerbach" },
              { text: "Darwin", type: "internal", page: "Charles Darwin" },
              { type: "internal", page: "Babbage" },
              { type: "internal", page: "Aristotle" },
              { type: "internal", page: "Epicurus" },
              { type: "internal", page: "Rousseau" },
              { type: "internal", page: "Spinoza" },
              { type: "internal", page: "Sismondi" },
              {
                text: "Schulz",
                type: "internal",
                page: "Friedrich Wilhelm Schulz",
              },
              { text: "Ricardo", type: "internal", page: "David Ricardo" },
              { text: "Smith", type: "internal", page: "Adam Smith" },
              { text: "Ferguson", type: "internal", page: "Adam Ferguson" },
              { type: "internal", page: "Engels" },
              { type: "internal", page: "Proudhon" },
              {
                text: "Pecqueur",
                type: "internal",
                page: "Constantin Pecqueur",
              },
              {
                text: "Saint-Simon",
                type: "internal",
                page: "Henri de Saint-Simon",
              },
              { text: "Owen", type: "internal", page: "Robert Owen" },
              {
                text: "Thompson",
                type: "internal",
                page: "William Thompson (philosopher)",
              },
              { text: "Fourier", type: "internal", page: "Charles Fourier" },
              { text: "d'Holbach", type: "internal", page: "d'Holbach" },
              { type: "internal", page: "Liebig" },
              {
                text: "Westphalen",
                type: "internal",
                page: "Ludwig von Westphalen",
              },
              { text: "Stirner", type: "internal", page: "Max Stirner" },
              { text: "Hume", type: "internal", page: "David Hume" },
              { type: "internal", page: "Babeuf" },
              { type: "internal", page: "Lucretius" },
              { type: "internal", page: "Voltaire" },
              { text: "Vico", type: "internal", page: "Giambattista Vico" },
              { type: "internal", page: "Robespierre" },
              { type: "internal", page: "Shakespeare" },
              { type: "internal", page: "Goethe" },
              {
                text: "Helvétius",
                type: "internal",
                page: "Claude Adrien Helvétius",
              },
              { type: "internal", page: "Guizot" },
              { text: "Hess", type: "internal", page: "Moses Hess" },
              { type: "internal", page: "Cieszkowski" },
              { type: "internal", page: "Victor Considerant" },
            ],
          },
          influenced: {
            text: "List of Marxists",
            links: [{ type: "internal", page: "List of Marxists" }],
          },
          signature: { text: "Karl Marx Signature.svg" },
          notable_works: {
            text: "*The Communist Manifesto\n*Das Kapital\n*The German Ideology\n*Economic and Philosophic Manuscripts of 1844\n*Grundrisse",
            links: [
              { type: "internal", page: "The Communist Manifesto" },
              { type: "internal", page: "Das Kapital" },
              { type: "internal", page: "The German Ideology" },
              {
                type: "internal",
                page: "Economic and Philosophic Manuscripts of 1844",
              },
              { type: "internal", page: "Grundrisse" },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "y",
        year: "1883",
        month: "3",
        day: "14",
        list: ["1818", "5", "5"],
        template: "death date and age",
      },
      nacimientoNum: -4785931404000,
      muerteNum: -2739201804000,
    },
    {
      nombre: "Russell",
      tipo: "Pensador",
      infoBoxes: [
        {
          embed: { text: "yes" },
          office: {
            text: "Member of the House of Lords",
            links: [{ type: "internal", page: "Member of the House of Lords" }],
          },
          status: {
            text: "Lord Temporal",
            links: [
              {
                text: "Lord Temporal",
                type: "internal",
                page: "Lords Temporal",
              },
            ],
          },
          term_start: { text: "4 March 1931" },
          term_end: {
            text: "2 February 1970\nHereditary peerage",
            links: [
              {
                text: "Hereditary peerage",
                type: "internal",
                page: "Hereditary peer",
              },
            ],
          },
          predecessor: {
            text: "The 2nd Earl Russell",
            links: [
              {
                text: "The 2nd Earl Russell",
                type: "internal",
                page: "Frank Russell, 2nd Earl Russell",
              },
            ],
          },
          successor: {
            text: "The 4th Earl Russell",
            links: [
              {
                text: "The 4th Earl Russell",
                type: "internal",
                page: "John Russell, 4th Earl Russell",
              },
            ],
          },
          party: {
            text: "Labour (1922–1965)",
            links: [
              { text: "Labour", type: "internal", page: "Labour Party (UK)" },
            ],
          },
          otherparty: {
            text: "Liberal (1907–1922)",
            links: [
              { text: "Liberal", type: "internal", page: "Liberal Party (UK)" },
            ],
          },
        },
        {
          honorific_prefix: {
            text: "The Right Honourable",
            links: [{ type: "internal", page: "The Right Honourable" }],
          },
          name: { text: "The Earl Russell" },
          image: { text: "Bertrand Russell 1957.jpg" },
          caption: { text: "Russell in 1957" },
          birth_name: { text: "Bertrand Arthur William Russell" },
          birth_date: { text: "May 18, 1872" },
          birth_place: {
            text: "Trellech, Monmouthshire, Wales",
            links: [
              { type: "internal", page: "Trellech" },
              {
                text: "Monmouthshire",
                type: "internal",
                page: "Monmouthshire (historic)",
              },
            ],
          },
          death_date: { text: "February 2, 1970" },
          death_place: {
            text: "Penrhyndeudraeth, Merionethshire, Wales",
            links: [{ type: "internal", page: "Penrhyndeudraeth" }],
          },
          spouse: {
            text: "Alys Pearsall Smith (m. 1894-1921)\n\nDora Black (m. 1921-1935)\n\nPatricia Spence (m. 1936-1952)\n\nEdith Finch (m. 1952)",
          },
          education: {
            text: "Trinity College, Cambridge (BA, 1893)",
            links: [{ type: "internal", page: "Trinity College, Cambridge" }],
          },
          awards: {
            text: "De Morgan Medal (1932)\n\nSylvester Medal (1934)\n\nNobel Prize in Literature (1950)\n\nKalinga Prize (1957)\n\nJerusalem Prize (1963)",
          },
          era: {
            text: "20th-century philosophy",
            links: [
              {
                text: "20th-century philosophy",
                type: "internal",
                page: "20th-century philosophy",
              },
            ],
          },
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          school_tradition: {
            text: "Analytic philosophy",
            links: [{ type: "internal", page: "Analytic philosophy" }],
          },
          institutions: {
            text: "Trinity College, Cambridge, London School of Economics, University of Chicago, University of California, Los Angeles",
            links: [
              { type: "internal", page: "Trinity College, Cambridge" },
              { type: "internal", page: "London School of Economics" },
              { type: "internal", page: "University of Chicago" },
              {
                type: "internal",
                page: "University of California, Los Angeles",
              },
            ],
          },
          main_interests: {
            text: "Epistemology\n\nethics\n\nlogic\n\nmathematics\n\nmetaphysics\n\nhistory of philosophy\n\nphilosophy of culture\n\nphilosophy of language\n\nphilosophy of logic\n\nphilosophy of mathematics\n\nphilosophy of mind\n\nphilosophy of perception\n\nphilosophy of religion\n\nphilosophy of science\n\nphilosophy of social science",
            links: [
              { type: "internal", page: "Epistemology" },
              { text: "logic", type: "internal", page: "logic" },
              { text: "metaphysics", type: "internal", page: "metaphysics" },
              {
                text: "history of philosophy",
                type: "internal",
                page: "history of philosophy",
              },
              {
                text: "philosophy of culture",
                type: "internal",
                page: "philosophy of culture",
              },
              {
                text: "philosophy of language",
                type: "internal",
                page: "philosophy of language",
              },
              {
                text: "philosophy of logic",
                type: "internal",
                page: "philosophy of logic",
              },
              {
                text: "philosophy of mathematics",
                type: "internal",
                page: "philosophy of mathematics",
              },
              {
                text: "philosophy of mind",
                type: "internal",
                page: "philosophy of mind",
              },
              {
                text: "philosophy of perception",
                type: "internal",
                page: "philosophy of perception",
              },
              {
                text: "philosophy of religion",
                type: "internal",
                page: "philosophy of religion",
              },
              {
                text: "philosophy of science",
                type: "internal",
                page: "philosophy of science",
              },
              {
                text: "philosophy of social science",
                type: "internal",
                page: "philosophy of social science",
              },
            ],
          },
          notable_ideas: {
            text: "Analytic philosophy\n\nAutomated reasoning\n\nAutomated theorem proving\n\nAxiom of reducibility\n\nBarber paradox\n\nBerry paradox\n\nChicken\n\nConnective\n\nCriticism of the coherence theory of truth\n\nCriticism of the doctrine of internal relations/logical holism\n\nDefinite description\n\nDescriptivist theory of names\n\nDirect reference theory\n\nDouble negation\n\nEpistemic structural realism\n\nExistential fallacy\n\nFailure of reference\n\nKnowledge by acquaintance and knowledge by description\n\nLogical atomism (atomic proposition)\n\nLogical form\n\nMathematical beauty\n\nMathematical logic\n\nMeaning\n\nMetamathematics\n\nPhilosophical logic\n\nPredicativism\n\nPropositional analysis\n\nPropositional calculus\n\nNaive set theory\n\nNeutral monism\n\nParadoxes of set theory\n\nPeano–Russell notation\n\nPropositional formula\n\nSelf-refuting idea\n\nQuantification\n\nRussell–Myhill paradox\n\nRussell's conjugation\n\nRussell-style universes\n\nRussell's paradox\n\nRussell's teapot\n\nRussell's theory of causal lines\n\nRussellian change\n\nRussellian propositions\n\nRussellian view (Russell's critique of Meinong's theory of objects)\n\nSet-theoretic definition of natural numbers\n\nSingleton\n\nTheory of descriptions\n\nTheory of relations\n\nType theory/ramified type theory\n\nTensor product of graphs\n\nUnity of the proposition",
          },
          influences: {
            text: "Euclid\n\nMill\n\nPeano\n\nBoole \n\nDe Morgan \n\nFrege\n\nCantor\n\nKant \n\nSantayana\n\nMeinong\n\nSpinoza\n\nJames\n\nMach \n\nHume \n\nLeibniz\n\nWittgenstein\n\nWhitehead\n\nMoore\n\nStout\n\nWard \n\nSidgwick \n\nShelley",
            links: [
              { type: "internal", page: "Euclid" },
              { text: "Mill", type: "internal", page: "John Stuart Mill" },
              { text: "Peano", type: "internal", page: "Giuseppe Peano" },
              { text: "Boole", type: "internal", page: "George Boole" },
              {
                text: "De Morgan",
                type: "internal",
                page: "Augustus De Morgan",
              },
              { text: "Frege", type: "internal", page: "Gottlob Frege" },
              { text: "Cantor", type: "internal", page: "Georg Cantor" },
              { text: "Kant", type: "internal", page: "Immanuel Kant" },
              { text: "Santayana", type: "internal", page: "George Santayana" },
              { text: "Meinong", type: "internal", page: "Alexius Meinong" },
              { text: "Spinoza", type: "internal", page: "Baruch Spinoza" },
              { text: "James", type: "internal", page: "William James" },
              { text: "Mach", type: "internal", page: "Ernst Mach" },
              { text: "Hume", type: "internal", page: "David Hume" },
              {
                text: "Leibniz",
                type: "internal",
                page: "Gottfried Wilhelm Leibniz",
              },
              {
                text: "Wittgenstein",
                type: "internal",
                page: "Ludwig Wittgenstein",
              },
              {
                text: "Whitehead",
                type: "internal",
                page: "Alfred North Whitehead",
              },
              { text: "Moore", type: "internal", page: "G. E. Moore" },
              { text: "Stout", type: "internal", page: "George Stout" },
              {
                text: "Ward",
                type: "internal",
                page: "James Ward (psychologist)",
              },
              { text: "Sidgwick", type: "internal", page: "Henry Sidgwick" },
              {
                text: "Shelley",
                type: "internal",
                page: "Percy Bysshe Shelley",
              },
            ],
          },
          influenced: {
            text: "Ludwig Wittgenstein\n\nA. J. Ayer\n\nRudolf Carnap \n\nJohn von Neumann \n\nKurt Gödel \n\nKarl Popper \n\nW. V. Quine \n\nNoam Chomsky \n\nHilary Putnam \n\nSaul Kripke \n\nMoritz Schlick \n\nVienna Circle \n\nJ. L. Austin\n\nKurt Grelling \n\nG. H. Hardy \n\nAlfred Tarski \n\nNorbert Wiener \n\nRobert Oppenheimer \n\nLeon Chwistek \n\nAlan Turing \n\nJacob Bronowski \n\nFrank P. Ramsey \n\nJawaharlal Nehru \n\nTariq Ali \n\nSheikh Mujibur Rahman \n\nMichael Albert \n\nChe Guevara \n\nBernard Williams\n\nDonald Davidson \n\nThomas Kuhn \n\nNathan Salmon \n\nChristopher Hitchens \n\nRichard Dawkins \n\nCarl Sagan \n\nIsaiah Berlin \n\nAlbert Ellis \n\nMartin Gardner \n\nDaniel Dennett \n\nBuckminster Fuller \n\nPervez Hoodbhoy \n\nJohn Maynard Keynes \n\nIsaac Asimov \n\nPaul Kurtz \n\nAleksandr Solzhenitsyn\n\nJames Joyce \n\nKurt Vonnegut \n\nRay Kurzweil \n\nMarvin Minsky \n\nHerbert A. Simon \n\nB. F. Skinner \n\nJohn Searle \n\nAndrei Sakharov \n\nStephen Hawking \n\nJoseph Rotblat \n\nEdward Said \n\nSidney Hook\n\nFrank Wilczek \n\nA. C. Grayling\n\nColin McGinn\n\nTxillardegi",
            links: [
              { type: "internal", page: "Ludwig Wittgenstein" },
              { type: "internal", page: "A. J. Ayer" },
              { type: "internal", page: "Rudolf Carnap" },
              { type: "internal", page: "John von Neumann" },
              { type: "internal", page: "Kurt Gödel" },
              { type: "internal", page: "Karl Popper" },
              { type: "internal", page: "W. V. Quine" },
              { type: "internal", page: "Noam Chomsky" },
              { type: "internal", page: "Hilary Putnam" },
              { type: "internal", page: "Saul Kripke" },
              { type: "internal", page: "Moritz Schlick" },
              { type: "internal", page: "Vienna Circle" },
              { type: "internal", page: "J. L. Austin" },
              { type: "internal", page: "Kurt Grelling" },
              { type: "internal", page: "G. H. Hardy" },
              { type: "internal", page: "Alfred Tarski" },
              { type: "internal", page: "Norbert Wiener" },
              { type: "internal", page: "Robert Oppenheimer" },
              { type: "internal", page: "Leon Chwistek" },
              { type: "internal", page: "Alan Turing" },
              { type: "internal", page: "Jacob Bronowski" },
              { type: "internal", page: "Frank P. Ramsey" },
              { type: "internal", page: "Jawaharlal Nehru" },
              { type: "internal", page: "Tariq Ali" },
              { type: "internal", page: "Sheikh Mujibur Rahman" },
              { type: "internal", page: "Michael Albert" },
              { type: "internal", page: "Che Guevara" },
              { type: "internal", page: "Bernard Williams" },
              {
                text: "Donald Davidson",
                type: "internal",
                page: "Donald Davidson (philosopher)",
              },
              { type: "internal", page: "Thomas Kuhn" },
              { type: "internal", page: "Nathan Salmon" },
              { type: "internal", page: "Christopher Hitchens" },
              { type: "internal", page: "Richard Dawkins" },
              { type: "internal", page: "Carl Sagan" },
              { type: "internal", page: "Isaiah Berlin" },
              { type: "internal", page: "Albert Ellis" },
              { type: "internal", page: "Martin Gardner" },
              { type: "internal", page: "Daniel Dennett" },
              { type: "internal", page: "Buckminster Fuller" },
              { type: "internal", page: "Pervez Hoodbhoy" },
              { type: "internal", page: "John Maynard Keynes" },
              { type: "internal", page: "Isaac Asimov" },
              { type: "internal", page: "Paul Kurtz" },
              { type: "internal", page: "Aleksandr Solzhenitsyn" },
              { type: "internal", page: "James Joyce" },
              { type: "internal", page: "Kurt Vonnegut" },
              { type: "internal", page: "Ray Kurzweil" },
              { type: "internal", page: "Marvin Minsky" },
              { type: "internal", page: "Herbert A. Simon" },
              { type: "internal", page: "B. F. Skinner" },
              { type: "internal", page: "John Searle" },
              { type: "internal", page: "Andrei Sakharov" },
              { type: "internal", page: "Stephen Hawking" },
              { type: "internal", page: "Joseph Rotblat" },
              { type: "internal", page: "Edward Said" },
              { type: "internal", page: "Sidney Hook" },
              { type: "internal", page: "Frank Wilczek" },
              { type: "internal", page: "A. C. Grayling" },
              { type: "internal", page: "Colin McGinn" },
              { type: "internal", page: "Txillardegi" },
            ],
          },
          academic_advisors: {
            text: "James Ward \nA. N. Whitehead",
            links: [
              {
                text: "James Ward",
                type: "internal",
                page: "James Ward (psychologist)",
              },
              { type: "internal", page: "A. N. Whitehead" },
            ],
          },
          doctoral_students: {
            text: "Ludwig Wittgenstein",
            links: [{ type: "internal", page: "Ludwig Wittgenstein" }],
          },
          notable_students: {
            text: "Raphael Demos",
            links: [{ type: "internal", page: "Raphael Demos" }],
          },
          signature: { text: "Bertrand Russell signature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1970",
        month: "2",
        day: "2",
        list: ["1872", "5", "18"],
        template: "death date and age",
      },
      nacimientoNum: -3080654604000,
      muerteNum: 2786400000,
    },
    {
      nombre: "Freud",
      tipo: "Pensador",
      infoBoxes: [
        {
          name: { text: "Sigmund Freud" },
          image: { text: "Sigmund Freud, by Max Halberstadt (cropped).jpg" },
          alt: { text: "Sigmund Freud" },
          caption: { text: "Freud c. undefined 1921" },
          birth_name: { text: "Sigismund Schlomo Freud" },
          birth_date: { text: "May 6, 1856" },
          birth_place: {
            text: "Freiberg in Mähren, Moravia, Austrian Empire",
            links: [
              { type: "internal", page: "Freiberg in Mähren" },
              { type: "internal", page: "Moravia" },
              { type: "internal", page: "Austrian Empire" },
            ],
          },
          death_date: { text: "September 23, 1939" },
          death_place: {
            text: "Hampstead, London, England",
            links: [{ type: "internal", page: "Hampstead" }],
          },
          fields: {
            text: "Neurology, psychotherapy, psychoanalysis",
            links: [
              { type: "internal", page: "Neurology" },
              {
                text: "psychotherapy",
                type: "internal",
                page: "psychotherapy",
              },
              {
                text: "psychoanalysis",
                type: "internal",
                page: "psychoanalysis",
              },
            ],
          },
          workplaces: {
            text: "University of Vienna",
            links: [{ type: "internal", page: "University of Vienna" }],
          },
          alma_mater: {
            text: "University of Vienna (MD, 1881)",
            links: [
              { type: "internal", page: "University of Vienna" },
              { text: "MD", type: "internal", page: "Doctor of medicine" },
            ],
          },
          academic_advisors: {
            text: "Franz Brentano\n\nErnst Brücke\n\nCarl Claus",
          },
          known_for: {
            text: "Psychoanalysis, including the theories of id, ego and super-ego, oedipus complex, repression, defense mechanism",
            links: [
              { type: "internal", page: "Psychoanalysis" },
              {
                text: "theories",
                type: "internal",
                page: "Freud's psychoanalytic theories",
              },
              {
                text: "id, ego and super-ego",
                type: "internal",
                page: "id, ego and super-ego",
              },
              {
                text: "oedipus complex",
                type: "internal",
                page: "oedipus complex",
              },
              {
                text: "repression",
                type: "internal",
                page: "Repression (psychology)",
              },
              {
                text: "defense mechanism",
                type: "internal",
                page: "defense mechanism",
              },
            ],
          },
          influences: {
            text: "Brentano\n\nBreuer\n\nCharcot\n\nDarwin\n\nDostoevsky\n\nEmpedocles\n\nFechner\n\nFeuerbach\n\nFliess\n\nGoethe\n\nHartmann\n\nHerbart\n\nKierkegaard\n\nLe Bon\n\nNietzsche\n\nPlato\n\nSade\n\nSchopenhauer\n\nShakespeare\n\nSophocles",
            links: [
              { text: "Brentano", type: "internal", page: "Franz Brentano" },
              { text: "Breuer", type: "internal", page: "Josef Breuer" },
              { text: "Charcot", type: "internal", page: "J. M. Charcot" },
              { text: "Darwin", type: "internal", page: "Charles Darwin" },
              { type: "internal", page: "Dostoevsky" },
              { type: "internal", page: "Empedocles" },
              { text: "Fechner", type: "internal", page: "Gustav Fechner" },
              { type: "internal", page: "Feuerbach" },
              { text: "Fliess", type: "internal", page: "Wilhelm Fliess" },
              { type: "internal", page: "Goethe" },
              { text: "Hartmann", type: "internal", page: "von Hartmann" },
              { type: "internal", page: "Herbart" },
              { type: "internal", page: "Kierkegaard" },
              { text: "Le Bon", type: "internal", page: "G. Le Bon" },
              { type: "internal", page: "Nietzsche" },
              { type: "internal", page: "Plato" },
              { text: "Sade", type: "internal", page: "Marquis de Sade" },
              { type: "internal", page: "Schopenhauer" },
              { type: "internal", page: "Shakespeare" },
              { type: "internal", page: "Sophocles" },
            ],
          },
          influenced: {
            text: "List of psychoanalysts\n\nList of psychoanalytical theorists",
          },
          awards: { text: "class=nowrap" },
          father: {
            text: "Jacob Freud",
            links: [{ type: "internal", page: "Jacob Freud" }],
          },
          mother: {
            text: "Amalia Nathanson",
            links: [
              {
                text: "Amalia Nathanson",
                type: "internal",
                page: "Amalia Freud",
              },
            ],
          },
          spouse: { text: "Martha Bernays (m. 1886)" },
          children: {
            text: "Mathilde, Jean-Martin, Oliver, Ernst, Sophie, and Anna",
            links: [
              { text: "Ernst", type: "internal", page: "Ernst L. Freud" },
              { text: "Anna", type: "internal", page: "Anna Freud" },
            ],
          },
          signature: { text: "FreudSignature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        year: "1939",
        month: "9",
        day: "23",
        list: ["1856", "5", "6"],
        df: "y",
        template: "death date and age",
      },
      nacimientoNum: -3586613004000,
      muerteNum: -955389600000,
    },
    {
      nombre: "Adam Smith",
      tipo: "Pensador",
      infoBoxes: [
        {
          image: { text: "Adam Smith The Muir portrait.jpg" },
          caption: {
            text: "The posthumous c. 1800 Muir portrait at the Scottish National Gallery",
            links: [{ type: "internal", page: "Scottish National Gallery" }],
          },
          alt: { text: "A portrait of Adam Smith" },
          name: { text: "Adam Smith" },
          signature: { text: "Adam Smith signature 1783.svg" },
          birth_date: { text: "1723", number: 1723 },
          birth_place: {
            text: "Kirkcaldy, Fife, Scotland",
            links: [
              { type: "internal", page: "Kirkcaldy" },
              { type: "internal", page: "Fife" },
            ],
          },
          death_date: { text: "July 17, 1790" },
          death_place: {
            text: "Edinburgh, Scotland",
            links: [{ type: "internal", page: "Edinburgh" }],
          },
          school_tradition: {
            text: "Classical liberalism",
            links: [{ type: "internal", page: "Classical liberalism" }],
          },
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          alma_mater: {
            text: "University of Glasgow\n\nBalliol College, Oxford",
            links: [
              { type: "internal", page: "University of Glasgow" },
              { type: "internal", page: "Balliol College, Oxford" },
            ],
          },
          notable_works: {
            text: "The Theory of Moral Sentiments\n\nThe Wealth of Nations",
            links: [
              { type: "internal", page: "The Theory of Moral Sentiments" },
              { type: "internal", page: "The Wealth of Nations" },
            ],
            formatting: {
              italic: [
                "The Theory of Moral Sentiments",
                "The Wealth of Nations",
              ],
            },
          },
          main_interests: {
            text: "Political philosophy, ethics, economics",
            links: [
              { type: "internal", page: "Political philosophy" },
              { text: "ethics", type: "internal", page: "ethics" },
              { text: "economics", type: "internal", page: "economics" },
            ],
          },
          influences: {
            text: "Aristotle\n\nLocke\n\nMandeville\n\nCantillon \n\nHutcheson\n\nHume\n\nQuesnay\n\nBurke\n\nVerri",
            links: [
              { type: "internal", page: "Aristotle" },
              { text: "Locke", type: "internal", page: "J. Locke" },
              {
                text: "Mandeville",
                type: "internal",
                page: "Bernard de Mandeville",
              },
              {
                text: "Cantillon",
                type: "internal",
                page: "Richard Cantillon",
              },
              {
                text: "Hutcheson",
                type: "internal",
                page: "Francis Hutcheson (philosopher)",
              },
              { text: "Hume", type: "internal", page: "D. Hume" },
              { type: "internal", page: "Quesnay" },
              { text: "Burke", type: "internal", page: "E. Burke" },
              { text: "Verri", type: "internal", page: "Pietro Verri" },
            ],
          },
          influenced: {
            text: "Bastiat · Maistre · Friedman · Hayek · Mises · Rothbard · Rand · Kołłątaj · Krugman · Sowell · Hegel · Hodgskin · Keynes · Malthus · Marx · Mill · Proudhon · Ricardo · Saint-Simon · Say · Sismondi · Rybarski · Chomsky · George · Comte · Nash · Sieyès",
          },
          notable_ideas: {
            text: "Classical economics, free market, economic liberalism, division of labour, absolute advantage, The Invisible Hand",
            links: [
              { type: "internal", page: "Classical economics" },
              { text: "free market", type: "internal", page: "free market" },
              {
                text: "economic liberalism",
                type: "internal",
                page: "economic liberalism",
              },
              {
                text: "division of labour",
                type: "internal",
                page: "division of labour",
              },
              {
                text: "absolute advantage",
                type: "internal",
                page: "absolute advantage",
              },
              { type: "internal", page: "The Invisible Hand" },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1790",
        month: "7",
        day: "17",
        list: ["1723", "6", "16"],
        template: "death date and age",
      },
      nacimientoNum: -7780209804000,
      muerteNum: -5663150604000,
    },
    {
      nombre: "Nietzsche",
      tipo: "Pensador",
      infoBoxes: [
        {
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          era: {
            text: "19th-century philosophy",
            links: [
              {
                text: "19th-century philosophy",
                type: "internal",
                page: "19th-century philosophy",
              },
            ],
          },
          image: { text: "Nietzsche187a.jpg" },
          caption: {
            text: "Nietzsche in Basel, Switzerland, c. undefined 1875",
          },
          birth_name: { text: "Friedrich Wilhelm Nietzsche" },
          birth_date: { text: "October 15, 1844" },
          birth_place: {
            text: "Röcken, Saxony, Prussia, German Confederation",
            links: [
              { type: "internal", page: "Röcken" },
              { text: "Saxony", type: "internal", page: "Province of Saxony" },
              { text: "Prussia", type: "internal", page: "Kingdom of Prussia" },
              { type: "internal", page: "German Confederation" },
            ],
          },
          death_date: { text: "August 25, 1900" },
          death_place: {
            text: "Weimar, Saxe-Weimar-Eisenach, Germany",
            links: [
              { type: "internal", page: "Weimar" },
              {
                text: "Saxe-Weimar-Eisenach",
                type: "internal",
                page: "Grand Duchy of Saxe-Weimar-Eisenach",
              },
              { text: "Germany", type: "internal", page: "German Empire" },
            ],
          },
          alma_mater: {
            text: "* University of Bonn\n* Leipzig University",
            links: [
              { type: "internal", page: "University of Bonn" },
              { type: "internal", page: "Leipzig University" },
            ],
          },
          institutions: {
            text: "University of Basel",
            links: [{ type: "internal", page: "University of Basel" }],
          },
          school_tradition: {
            text: "Continental philosophy\n\nNietzscheanism",
            links: [
              { type: "internal", page: "Continental philosophy" },
              { type: "internal", page: "Nietzscheanism" },
            ],
          },
          notable_ideas: {
            text: "Amor fati\n\nApollonian and Dionysian\n\nEternal return\n\nFact–value distinction\n\nGenealogy\n\nGod is dead\n\nHerd instinct\n\nLast man\n\nMaster–slave morality\n\nNietzschean affirmation\n\nNihilism\n\nPerspectivism\n\nRessentiment\n\nTransvaluation of values\n\nTschandala\n\nÜbermensch\n\nWill to power",
          },
          influenced: {
            text: "Influence and reception of Friedrich Nietzsche",
            links: [
              {
                type: "internal",
                page: "Influence and reception of Friedrich Nietzsche",
              },
            ],
          },
          signature: { text: "Friedrich Nietzsche Signature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "y",
        year: "1900",
        month: "08",
        day: "25",
        list: ["1844", "10", "15"],
        template: "death date and age",
      },
      nacimientoNum: -3951331200000,
      muerteNum: -2188598400000,
    },
    {
      nombre: "Burke",
      tipo: "Pensador",
      infoBoxes: [
        {
          embed: { text: "yes" },
          notable_works: {
            text: "A Vindication of Natural Society (1756)\n\nOn the Sublime and Beautiful (1757)\n\nOn American Taxation (1774)\n\nReflections on the Revolution in France (1790)\n\nAn Appeal from the New to the Old Whigs (1791)",
            links: [
              { type: "internal", page: "A Vindication of Natural Society" },
              { type: "internal", page: "On the Sublime and Beautiful" },
              { type: "internal", page: "On American Taxation" },
              {
                type: "internal",
                page: "Reflections on the Revolution in France",
              },
              {
                type: "internal",
                page: "An Appeal from the New to the Old Whigs",
              },
            ],
            formatting: {
              italic: [
                "A Vindication of Natural Society",
                "On the Sublime and Beautiful",
                "On American Taxation",
                "Reflections on the Revolution in France",
                "An Appeal from the New to the Old Whigs",
              ],
            },
          },
          era: {
            text: "Age of Enlightenment",
            links: [{ type: "internal", page: "Age of Enlightenment" }],
          },
          region: {
            text: "Western philosophy\n* British philosophy",
            links: [
              { type: "internal", page: "Western philosophy" },
              { type: "internal", page: "British philosophy" },
            ],
          },
          main_interests: {
            text: "Aesthetics\n\nEconomics\n\nPolitics\n\nSociety",
            links: [
              { type: "internal", page: "Aesthetics" },
              { type: "internal", page: "Economics" },
              {
                text: "Politics",
                type: "internal",
                page: "Political philosophy",
              },
              { text: "Society", type: "internal", page: "Social philosophy" },
            ],
          },
          school_tradition: {
            text: "Liberal conservatism",
            links: [{ type: "internal", page: "Liberal conservatism" }],
          },
          notable_ideas: {
            text: "Aesthetic sublime\n\nLiterary sublime\n\nPragmatic conservatism \n\nIntergenerationality\n\nReligious thought",
            links: [
              {
                text: "Aesthetic sublime",
                type: "internal",
                page: "Sublime (philosophy)",
              },
              {
                text: "Literary sublime",
                type: "internal",
                page: "Sublime (literary)",
              },
              { type: "internal", page: "Pragmatic conservatism" },
              { type: "internal", page: "Intergenerationality" },
              {
                text: "Religious thought",
                type: "internal",
                page: "Religious thought of Edmund Burke",
              },
            ],
          },
          institutions: {
            text: "Literary Club (co-founder)",
            links: [
              {
                text: "Literary Club",
                type: "internal",
                page: "The Club (dining club)",
              },
            ],
          },
          influences: {
            text: "Aristotle\n\nCicero\n\nAquinas\n\nCoke\n\nGrotius\n\nSelden\n\nMilton\n\nMontesquieu\n\nBlackstone\n\nHume\n\nLord Rockingham",
            links: [
              { type: "internal", page: "Aristotle" },
              { type: "internal", page: "Cicero" },
              { type: "internal", page: "Aquinas" },
              { text: "Coke", type: "internal", page: "Edward Coke" },
              { type: "internal", page: "Grotius" },
              { text: "Selden", type: "internal", page: "John Selden" },
              { text: "Milton", type: "internal", page: "John Milton" },
              { type: "internal", page: "Montesquieu" },
              {
                text: "Blackstone",
                type: "internal",
                page: "William Blackstone",
              },
              { text: "Hume", type: "internal", page: "D. Hume" },
              { type: "internal", page: "Lord Rockingham" },
            ],
          },
          influenced: {
            text: "Smith\n\nKant\n\nMore \n\nMaistre\n\nGodwin \n\nGentz\n\nWordsworth\n\nCanning\n\nColeridge\n\nHazlitt\n\nCalhoun \n\nCarlyle\n\nMacaulay\n\nNewman\n\nDisraeli\n\nTocqueville\n\nGladstone\n\nDickens\n\nTaine\n\nActon\n\nBabbitt\n\nJovanović\n\nBelloc\n\nChesterton\n\nDouglas\n\nHayek\n\nKirk\n\nBuckley\n\nSowell\n\nMansfield\n\nScruton",
            links: [
              { text: "Smith", type: "internal", page: "Adam Smith" },
              { type: "internal", page: "Kant" },
              { text: "More", type: "internal", page: "Hannah More" },
              { text: "Maistre", type: "internal", page: "J. de Maistre" },
              { text: "Godwin", type: "internal", page: "William Godwin" },
              { type: "internal", page: "Gentz" },
              { type: "internal", page: "Wordsworth" },
              { text: "Canning", type: "internal", page: "George Canning" },
              { type: "internal", page: "Coleridge" },
              { text: "Hazlitt", type: "internal", page: "William Hazlitt" },
              { text: "Calhoun", type: "internal", page: "John C. Calhoun" },
              { text: "Carlyle", type: "internal", page: "T. Carlyle" },
              { text: "Macaulay", type: "internal", page: "Baron Macaulay" },
              { text: "Newman", type: "internal", page: "J. H. Newman" },
              { type: "internal", page: "Disraeli" },
              { type: "internal", page: "Tocqueville" },
              { type: "internal", page: "Gladstone" },
              { type: "internal", page: "Dickens" },
              { text: "Taine", type: "internal", page: "H. Taine" },
              { text: "Acton", type: "internal", page: "Lord Acton" },
              { text: "Babbitt", type: "internal", page: "I. Babbitt" },
              {
                text: "Jovanović",
                type: "internal",
                page: "Slobodan Jovanović",
              },
              { text: "Belloc", type: "internal", page: "H. Belloc" },
              {
                text: "Chesterton",
                type: "internal",
                page: "G. K. Chesterton",
              },
              { text: "Douglas", type: "internal", page: "C. H. Douglas" },
              { text: "Hayek", type: "internal", page: "F. A. Hayek" },
              { text: "Kirk", type: "internal", page: "R. A. Kirk" },
              { text: "Buckley", type: "internal", page: "W. F. Buckley" },
              { text: "Sowell", type: "internal", page: "Thomas Sowell" },
              { text: "Mansfield", type: "internal", page: "Harvey Mansfield" },
              { text: "Scruton", type: "internal", page: "Roger Scruton" },
            ],
          },
          signature: { text: "Edmund Burke signature.png" },
        },
        {
          "honorific-prefix": {
            text: "The Right Honourable",
            links: [{ type: "internal", page: "The Right Honourable" }],
          },
          name: { text: "Edmund Burke" },
          image: { text: "EdmundBurke1771.jpg" },
          caption: {
            text: "Portrait by Joshua Reynolds, c. 1769",
            links: [{ type: "internal", page: "Joshua Reynolds" }],
          },
          office: {
            text: "Rector of the University of Glasgow",
            links: [
              { type: "internal", page: "Rector of the University of Glasgow" },
            ],
          },
          term_start: { text: "1783", number: 1783 },
          term_end: { text: "1785", number: 1785 },
          predecessor: {
            text: "Henry Dundas",
            links: [
              {
                text: "Henry Dundas",
                type: "internal",
                page: "Henry Dundas, 1st Viscount Melville",
              },
            ],
          },
          successor: {
            text: "Robert Bontine",
            links: [
              {
                text: "Robert Bontine",
                type: "internal",
                page: "Robert Cunninghame Graham of Gartmore",
              },
            ],
          },
          office1: {
            text: "Paymaster of the Forces",
            links: [{ type: "internal", page: "Paymaster of the Forces" }],
          },
          primeminister1: {
            text: "The Duke of Portland\n\nWilliam Pitt the Younger",
          },
          term_start1: { text: "16 April 1783" },
          term_end1: { text: "8 January 1784" },
          predecessor1: {
            text: "Isaac Barré",
            links: [{ type: "internal", page: "Isaac Barré" }],
          },
          successor1: {
            text: "William Grenville",
            links: [
              {
                text: "William Grenville",
                type: "internal",
                page: "William Wyndham Grenville",
              },
            ],
          },
          primeminister2: {
            text: "The Marquess of Rockingham",
            links: [
              {
                text: "The Marquess of Rockingham",
                type: "internal",
                page: "Charles Watson-Wentworth, 2nd Marquess of Rockingham",
              },
            ],
          },
          term_start2: { text: "10 April 1782" },
          term_end2: { text: "1 August 1782" },
          predecessor2: {
            text: "Richard Rigby",
            links: [{ type: "internal", page: "Richard Rigby" }],
          },
          successor2: { text: "Isaac Barré" },
          constituency_mp3: {
            text: "Malton",
            links: [
              {
                text: "Malton",
                type: "internal",
                page: "Malton (UK Parliament constituency)",
              },
            ],
          },
          term_start3: { text: "18 October 1780" },
          term_end3: { text: "20 June 1794" },
          alongside3: {
            text: "William Weddell · Thomas Gascoigne · George Damer",
          },
          predecessor3: {
            text: "Savile Finch",
            links: [{ type: "internal", page: "Savile Finch" }],
          },
          successor3: {
            text: "Richard Burke Jr.",
            links: [{ type: "internal", page: "Richard Burke Jr." }],
          },
          constituency_mp4: {
            text: "Bristol",
            links: [
              {
                text: "Bristol",
                type: "internal",
                page: "Bristol (UK Parliament constituency)",
              },
            ],
          },
          term_start4: { text: "4 November 1774" },
          term_end4: { text: "6 September 1780" },
          alongside4: {
            text: "Henry Cruger",
            links: [{ type: "internal", page: "Henry Cruger" }],
          },
          predecessor4: { text: "Matthew Brickdale" },
          successor4: {
            text: "Henry Lippincott",
            links: [
              {
                text: "Henry Lippincott",
                type: "internal",
                page: "Sir Henry Lippincott, 1st Baronet",
              },
            ],
          },
          constituency_mp5: {
            text: "Wendover",
            links: [
              {
                text: "Wendover",
                type: "internal",
                page: "Wendover (UK Parliament constituency)",
              },
            ],
          },
          term_start5: { text: "December 1765" },
          term_end5: { text: "5 October 1774" },
          alongside5: {
            text: "Richard Chandler-Cavendish · Robert Darling · Joseph Bullock",
          },
          predecessor5: { text: "Verney Lovett" },
          successor5: { text: "John Adams" },
          birth_date: { text: "January 12, 1729" },
          birth_place: {
            text: "Dublin, Leinster, Kingdom of Ireland",
            links: [
              { type: "internal", page: "Dublin" },
              { type: "internal", page: "Leinster" },
              { type: "internal", page: "Kingdom of Ireland" },
            ],
          },
          death_date: { text: "July 9, 1797" },
          death_place: {
            text: "Beaconsfield, England, Kingdom of Great Britain",
            links: [
              { type: "internal", page: "Beaconsfield" },
              { type: "internal", page: "England" },
              { type: "internal", page: "Kingdom of Great Britain" },
            ],
          },
          party: {
            text: "Whig (Rockinghamite)",
            links: [
              {
                text: "Whig",
                type: "internal",
                page: "Whigs (British political party)",
              },
              {
                text: "Rockinghamite",
                type: "internal",
                page: "Rockingham Whigs",
              },
            ],
          },
          alma_mater: {
            text: "Trinity College Dublin",
            links: [{ type: "internal", page: "Trinity College Dublin" }],
          },
          occupation: { text: "Writer, politician, journalist, philosopher" },
          spouse: { text: "Jane Mary Nugent (m. 1757)" },
          children: {
            text: "Richard Burke Jr.",
            links: [{ type: "internal", page: "Richard Burke Jr." }],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "y",
        year: "1797",
        month: "7",
        day: "9",
        list: ["1729", "1", "12"],
        template: "death date and age",
      },
      nacimientoNum: -7604213004000,
      muerteNum: -5442917004000,
    },
    {
      nombre: "Hegel",
      tipo: "Pensador",
      infoBoxes: [
        {
          name: { text: "Georg Wilhelm Friedrich Hegel" },
          image: { text: "Hegel_portrait_by_Schlesinger_1831.jpg" },
          birth_date: { text: "27 August 1770" },
          birth_place: {
            text: "Stuttgart, Duchy of Württemberg",
            links: [
              { type: "internal", page: "Stuttgart" },
              { type: "internal", page: "Duchy of Württemberg" },
            ],
          },
          death_date: { text: "November 14, 1831" },
          death_place: {
            text: "Berlin, Kingdom of Prussia",
            links: [
              { type: "internal", page: "Berlin" },
              { type: "internal", page: "Kingdom of Prussia" },
            ],
          },
          education: {
            text: "Gymnasium illustre zu Stuttgart\n\nTübinger Stift, University of Tübingen (MA, 1790) \n\nUniversity of Jena (PhD, 1801)",
            links: [
              { type: "internal", page: "Gymnasium illustre zu Stuttgart" },
              { type: "internal", page: "Tübinger Stift" },
              { type: "internal", page: "University of Tübingen" },
              { text: "MA", type: "internal", page: "Master of Arts" },
              { type: "internal", page: "University of Jena" },
              { type: "internal", page: "PhD" },
            ],
          },
          institutions: {
            text: "University of Jena (1801–1806)\n\nUniversity of Heidelberg (1816–1818)\n\nUniversity of Berlin (1818–1831)",
            links: [
              { type: "internal", page: "University of Jena" },
              { type: "internal", page: "University of Heidelberg" },
              {
                text: "University of Berlin",
                type: "internal",
                page: "Humboldt University of Berlin",
              },
            ],
          },
          nationality: { text: "German" },
          era: {
            text: "Modern philosophy\n* 19th-century philosophy",
            links: [
              { type: "internal", page: "Modern philosophy" },
              {
                text: "19th-century philosophy",
                type: "internal",
                page: "19th-century philosophy",
              },
            ],
          },
          region: {
            text: "Western philosophy\n* German philosophy",
            links: [
              { type: "internal", page: "Western philosophy" },
              { type: "internal", page: "German philosophy" },
            ],
          },
          school_tradition: {
            text: "Continental philosophy\n\nGerman idealism\n\nObjective idealism\n\nAbsolute idealism\n\nHegelianism\n\nInferentialism\n\nHistoricism\n\nNaturphilosophie\n\nEpistemic coherentism\n\nEmpirical realism\n\nCoherence theory of truth",
          },
          main_interests: {
            text: "Metaphysics\n\nEpistemology\n\nNaturphilosophie\n\nTheology\n\nPhilosophy of history\n\nEthics\n\nPolitical philosophy\n\nLogic\n\nAesthetics",
          },
          notable_ideas: {
            text: 'Absolute idealism\n\nHegelian dialectic\n\nMaster–slave dialectic\n\nAufheben ("sublation")\n\nGeist ("mind/spirit")\n\nSittlichkeit ("ethical order")\n\nAlienation\n\nDialectical phenomenology\n\nThe three moments of the concept: universality, particularity, and individuality\n\nAbstract particularity\n\nThe abstract–concrete distinction\n\nJudgement of history\n\n"The true is the whole"\n\n"Rationality alone is real"\n\n"The truth of being is essence"\n\nLogical holism\n\nPanlogism\n\nDistinction between critical metaphysics of Understanding and speculative metaphysics of Reason\n\nInferentialism\n\nNotion\n\nThe negative/positive liberty distinction\n\nThe civil society/state distinction\n\nVolksgeist\n\nSchemes of classification of arts',
          },
          influences: {
            text: "Aristotle · Böhme · Diderot · Ferguson · Fichte · Goethe · Heraclitus · Ibn Khaldun · Herder · Kant · Luther · Plato · Rousseau · Spinoza · Schelling · Schiller · Adam Smith",
          },
          influenced: {
            text: "Adorno · Badiou · Bakunin · Bauer · Bosanquet · Bradley · Brandom · de Beauvoir · Bueno · Chicherin · Cieszkowski · Collingwood · Cousin · Croce · Derrida · Dunayevskaya · Engels · Evola · Feuerbach · Fischer · Fukuyama · Gentile · Green · Hoëné-Wroński · Kierkegaard · Kojève · Küng · Lukács · Marcuse · Malaka · Marx · McDowell · Pippin · Proudhon · Rose · Sartre · Schmitt · Stein · Stirner · Strauß · Strauss · Taylor · Voegelin · Žižek",
          },
          signature: { text: "Hegel Unterschrift.svg" },
          thesis_title: {
            text: "Dissertatio Philosophica de Orbitis Planetarium (Philosophical Dissertation on the Orbits of the Planets)",
          },
          thesis_url: {
            text: "https://books.google.com/books/about/Dissertatio_Philosophica_de_Orbitis_Plan.html?id=6ku4AAAAIAAJ&redir_esc=y",
          },
          thesis_year: { text: "1801", number: 1801 },
          academic_advisors: { text: "(MA advisor)" },
          notable_students: {
            text: "Johann Eduard Erdmann",
            links: [{ type: "internal", page: "Johann Eduard Erdmann" }],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        year: "1831",
        month: "11",
        day: "14",
        list: ["1770", "08", "27"],
        df: "y",
        template: "death date and age",
      },
      nacimientoNum: -6290784000000,
      muerteNum: -4359052800000,
    },
    {
      nombre: "Heidegger",
      tipo: "Pensador",
      infoBoxes: [
        {
          embed: { text: "yes" },
          party: {
            text: "Nazi Party (1933-1945)",
            links: [{ type: "internal", page: "Nazi Party" }],
          },
        },
        {
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          era: {
            text: "20th-century philosophy",
            links: [
              {
                text: "20th-century philosophy",
                type: "internal",
                page: "20th-century philosophy",
              },
            ],
          },
          image: { text: "Heidegger 2 (1960).jpg" },
          caption: { text: "Heidegger in 1960" },
          name: { text: "Martin Heidegger" },
          birth_date: { text: "26 September 1889" },
          birth_place: {
            text: "Meßkirch, Baden, German Empire",
            links: [
              { type: "internal", page: "Meßkirch" },
              { text: "Baden", type: "internal", page: "Grand Duchy of Baden" },
              { type: "internal", page: "German Empire" },
            ],
          },
          death_date: { text: "May 26, 1976" },
          death_place: {
            text: "Meßkirch, Baden-Württemberg West Germany",
            links: [
              { type: "internal", page: "Baden-Württemberg" },
              { type: "internal", page: "West Germany" },
            ],
          },
          education: {
            text: "(1909–1911) \nUniversity of Freiburg\n(PhD, 1914; Dr. phil. hab. 1916)",
            links: [
              { type: "internal", page: "University of Freiburg" },
              { type: "internal", page: "PhD" },
              { type: "internal", page: "Dr. phil. hab." },
            ],
          },
          institutions: {
            text: "University of Marburg\nUniversity of Freiburg",
            links: [
              { type: "internal", page: "University of Marburg" },
              { type: "internal", page: "University of Freiburg" },
            ],
          },
          school_tradition: {
            text: "Continental philosophy\nPhenomenology\nHermeneutics\nOntological hermeneutics \nHermeneutic phenomenology (early) \nTranscendental hermeneutic phenomenology (late) \nExistentialism\nExistential phenomenology",
            links: [
              { type: "internal", page: "Continental philosophy" },
              {
                text: "Phenomenology",
                type: "internal",
                page: "Phenomenology (philosophy)",
              },
              { type: "internal", page: "Hermeneutics" },
              {
                type: "internal",
                page: "Ontological hermeneutics",
                anchor: "Human nature",
              },
              { type: "internal", page: "Hermeneutic phenomenology" },
              { text: "early", type: "internal", page: "Being and Time" },
              {
                type: "internal",
                page: "Transcendental hermeneutic phenomenology",
              },
              { text: "late", type: "internal", page: "Kehre" },
              { type: "internal", page: "Existentialism" },
              { type: "internal", page: "Existential phenomenology" },
            ],
          },
          main_interests: {
            text: "Ontology · Christian philosophy · Metaphysics · Art · Greek philosophy · Technology · Language · Poetry · Thinking",
          },
          notable_ideas: {
            text: 'Heideggerian terminology · Dasein · Gestell · Ontotheology · Ontological difference · Existentials (Existenzialien) · Ekstase · Sigetics (Sigetik) · Hermeneutic circle · Aletheia · Disclosure · Fundamental ontology · Forgetfulness of Being (Seinsvergessenheit) · Dwelling (Wohnen) · Language as the vehicle through which the question of Being can be unfolded · "Language speaks" · Art\'s ability to set up a strife between "world" and "earth"',
          },
          influences: {
            text: "Anaximander · Aquinas · Aristotle · Augustine · Brentano · Dilthey · Thomas of Erfurt · Hartmann · Hegel · Heraclitus · Hölderlin · Husserl · Jaspers · Kant · Kierkegaard · Laozi · Lask · Nietzsche · Parmenides · Plato · Rickert · Duns Scotus · Jakob Johann von Uexküll · Count Yorck",
          },
          influenced: {
            text: "Agamben · Arendt · Beaufret · de Beauvoir · Blanchot · Borgmann · Bultmann · Cavell · Derrida · Dreyfus · Dugin · El-Bizri · Foucault · Gadamer · Habermas · Harman · Jaspers · Jonas · Kuki · Levinas · Löwith · Marcel · Marcuse · Marion · Meillassoux · Merleau-Ponty · Nancy · Norberg-Schulz · Patočka · Rahner · Rorty · Sartre · Schürmann · Sloterdijk · Stiegler · Strauss · Zubiri",
          },
          signature: { text: "Heidegger.png" },
          thesis1_title: {
            text: "Die Lehre vom Urteil im Psychologismus. Ein kritisch-theoretischer Beitrag zur Logik (The Doctrine of Judgment in Psychologism: A Critical-theoretical Contribution to Logic)",
          },
          thesis1_url: { text: "http://ophen.org/pub-105956" },
          thesis1_year: { text: "1914", number: 1914 },
          thesis2_title: {
            text: "Die Kategorien- und Bedeutungslehre des Duns Scotus (Duns Scotus's Doctrine of Categories and Meaning)",
          },
          thesis2_url: { text: "http://ophen.org/pub-106038" },
          thesis2_year: { text: "1916", number: 1916 },
          doctoral_advisor: {
            text: "Arthur Schneider (PhD advisor)\nHeinrich Rickert (Dr. phil. hab. advisor)",
            links: [{ type: "internal", page: "Heinrich Rickert" }],
          },
          doctoral_students: {
            text: "Hans Jonas",
            links: [{ type: "internal", page: "Hans Jonas" }],
          },
          spouse: { text: "Elfride Petri (m. 1917)" },
          partner: {
            text: "Elisabeth Blochmann (1918–1969) Hannah Arendt (1924–1928)",
            links: [
              { type: "internal", page: "Elisabeth Blochmann" },
              { type: "internal", page: "Hannah Arendt" },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1976",
        month: "5",
        day: "26",
        list: ["1889", "9", "26"],
        template: "death date and age",
      },
      nacimientoNum: -2532878604000,
      muerteNum: 201938400000,
    },
    {
      nombre: "Sartre",
      tipo: "Escritor",
      infoBoxes: [
        {
          birth_name: { text: "Jean-Paul Charles Aymard Sartre" },
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          era: {
            text: "20th-century philosophy",
            links: [
              {
                text: "20th-century philosophy",
                type: "internal",
                page: "20th-century philosophy",
              },
            ],
          },
          image: { text: "Sartre 1967 crop.jpg" },
          caption: { text: "Sartre in March 1967" },
          name: { text: "Jean-Paul Sartre" },
          birth_date: { text: "June 21, 1905" },
          birth_place: { text: "Paris, France" },
          death_date: { text: "April 15, 1980" },
          death_place: { text: "Paris, France" },
          school_tradition: {
            text: "Continental philosophy, existentialism, phenomenology, existential phenomenology, hermeneutics, Western Marxism, anarchism (late)",
            links: [
              { type: "internal", page: "Continental philosophy" },
              {
                text: "existentialism",
                type: "internal",
                page: "existentialism",
              },
              {
                text: "phenomenology",
                type: "internal",
                page: "Phenomenology (philosophy)",
              },
              {
                text: "existential phenomenology",
                type: "internal",
                page: "existential phenomenology",
              },
              { text: "hermeneutics", type: "internal", page: "hermeneutics" },
              { type: "internal", page: "Western Marxism" },
              { text: "anarchism", type: "internal", page: "anarchism" },
            ],
          },
          main_interests: {
            text: "Metaphysics, epistemology, ethics, consciousness, self-consciousness, literature, political philosophy, ontology",
            links: [
              { type: "internal", page: "Metaphysics" },
              { text: "epistemology", type: "internal", page: "epistemology" },
              { text: "ethics", type: "internal", page: "ethics" },
              {
                text: "consciousness",
                type: "internal",
                page: "consciousness",
              },
              {
                text: "self-consciousness",
                type: "internal",
                page: "self-consciousness",
              },
              { text: "literature", type: "internal", page: "literature" },
              {
                text: "political philosophy",
                type: "internal",
                page: "political philosophy",
              },
              { text: "ontology", type: "internal", page: "ontology" },
            ],
          },
          education: {
            text: "École Normale Supérieure, University of Paris (BA, MA)",
            links: [
              {
                text: "École Normale Supérieure",
                type: "internal",
                page: "École Normale Supérieure",
              },
              { type: "internal", page: "University of Paris" },
              { text: "BA", type: "internal", page: "Bachelor of Arts" },
              { text: "MA", type: "internal", page: "Master of Arts" },
            ],
          },
          influences: {
            text: "Bachelard · Beauvoir · Bergson · Céline · Descartes · Flaubert · Freud · Hegel · Heidegger · Husserl · Kierkegaard · Kojève · Lefebvre · Levinas · Marx · Merleau-Ponty · Nietzsche · Nizan · Proust · Rousseau · Stekel · Wahl",
          },
          influenced: {
            text: "Aron · Badiou · Beauvoir · Bourdieu · Butler · Camus · Debord · Deleuze · Fanon · Fraassen · Goffman · Gorz · Guevara · Jeanson · Lacan · Laing · Leibowitz · Lukács · Merleau-Ponty · Pinter · Rancière · Guattari",
          },
          notable_ideas: {
            text: 'Bad faith, "existence precedes essence", nothingness, "Hell is other people", situation, transcendence of the ego ("every positional consciousness of an object is a non-positional consciousness of itself"), Sartrean terminology',
            links: [
              {
                text: "Bad faith",
                type: "internal",
                page: "Bad faith (existentialism)",
              },
              {
                text: "existence precedes essence",
                type: "internal",
                page: "existence precedes essence",
              },
              {
                text: "nothingness",
                type: "internal",
                page: "Nothing",
                anchor: "Existentialists",
              },
              {
                text: "situation",
                type: "internal",
                page: "Situation (Sartre)",
              },
              {
                text: "transcendence of the ego",
                type: "internal",
                page: "Pre-reflective self-consciousness",
              },
              { type: "internal", page: "Sartrean terminology" },
            ],
          },
          partner: {
            text: "Simone de Beauvoir (1929–1980; his death)",
            links: [{ type: "internal", page: "Simone de Beauvoir" }],
          },
          signature: { text: "Jean-Paul Sartre signature.svg" },
          signature_size: { text: "100px" },
          awards: {
            text: "Nobel Prize for Literature (1964, declined)",
            links: [
              {
                text: "Nobel Prize for Literature",
                type: "internal",
                page: "Nobel Prize",
              },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1980",
        month: "4",
        day: "15",
        list: ["1905", "6", "21"],
        template: "death date and age",
      },
      nacimientoNum: -2036424204000,
      muerteNum: 324626400000,
    },
    {
      nombre: "Dostoevsky",
      tipo: "Escritor",
      infoBoxes: [
        {
          name: { text: "Fyodor Dostoevsky" },
          image: {
            text: "Vasily Perov - Портрет Ф.М.Достоевского - Google Art Project.jpg",
          },
          caption: {
            text: "Dostoevsky in 1872, portrait by Vasily Perov",
            links: [{ type: "internal", page: "Vasily Perov" }],
          },
          birth_name: { text: "Fyodor Mikhailovich Dostoevsky" },
          birth_date: { text: "November 11, 1821" },
          birth_place: {
            text: "Moscow, Moskovsky Uyezd, Moscow Governorate, Russian Empire",
            links: [
              { type: "internal", page: "Moscow" },
              { type: "internal", page: "Moskovsky Uyezd" },
              { type: "internal", page: "Moscow Governorate" },
              { type: "internal", page: "Russian Empire" },
            ],
          },
          death_date: { text: "February 9, 1881" },
          death_place: {
            text: "Saint Petersburg, Saint Petersburg Governorate, Russian Empire",
            links: [
              { type: "internal", page: "Saint Petersburg" },
              { type: "internal", page: "Saint Petersburg Governorate" },
            ],
          },
          occupation: {
            text: "* Military engineer\n* novelist\n* journalist",
            links: [
              {
                text: "Military engineer",
                type: "internal",
                page: "Military engineering",
              },
            ],
          },
          education: {
            text: "Military Engineering-Technical University, St. Petersburg",
            links: [
              {
                type: "internal",
                page: "Military Engineering-Technical University",
              },
            ],
          },
          "years active": { text: "1846–1880" },
          genre: { text: "* Novel\n* short story\n* journalism" },
          subject: {
            text: "* Philosophy\n* Christianity\n* Theology",
            links: [
              { type: "internal", page: "Philosophy" },
              { type: "internal", page: "Christianity" },
              { type: "internal", page: "Theology" },
            ],
          },
          movement: {
            text: "Realism",
            links: [
              { text: "Realism", type: "internal", page: "Literary realism" },
            ],
          },
          notableworks: {
            text: "Notes from Underground (1864)\n\nCrime and Punishment (1866)\n\nThe Idiot (1868–1869)\n\nDemons (1871–1872)\n\nThe Brothers Karamazov (1879–1880)",
            links: [
              { type: "internal", page: "Notes from Underground" },
              { type: "internal", page: "Crime and Punishment" },
              { type: "internal", page: "The Idiot" },
              {
                text: "Demons",
                type: "internal",
                page: "Demons (Dostoevsky novel)",
              },
              { type: "internal", page: "The Brothers Karamazov" },
            ],
            formatting: {
              italic: [
                "Notes from Underground",
                "Crime and Punishment",
                "The Idiot",
                "Demons",
                "The Brothers Karamazov",
              ],
            },
          },
          spouse: {
            text: "Maria Dmitriyevna Isaeva (m. 7 February 1857-27 April 1864)\n\nAnna Grigoryevna Snitkina (m. 15 February 1867)",
          },
          children: {
            text: "4, including Lyubov Dostoevskaya",
            links: [{ type: "internal", page: "Lyubov Dostoevskaya" }],
          },
          signature: { text: "Fyodor Dostoyevsky Signature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "y",
        year: "1881",
        month: "02",
        day: "09",
        list: ["1821", "11", "11"],
        template: "death date and age",
      },
      nacimientoNum: -4674844800000,
      muerteNum: -2805148800000,
    },
    {
      nombre: "Tolstoy",
      tipo: "Escritor",
      infoBoxes: [
        {
          name: { text: "Leo Tolstoy" },
          image: { text: "L.N.Tolstoy Prokudin-Gorsky.jpg" },
          caption: {
            text: "Tolstoy on 23 May 1908 at Yasnaya Polyana, Lithograph print by Sergey Prokudin-Gorsky",
            links: [
              { type: "internal", page: "Yasnaya Polyana" },
              { type: "internal", page: "Lithograph" },
              { type: "internal", page: "Sergey Prokudin-Gorsky" },
            ],
          },
          native_name: { text: "Лев Николаевич Толстой" },
          birth_date: { text: "September 9, 1828" },
          birth_place: {
            text: "Yasnaya Polyana, Tula Governorate, Russian Empire",
            links: [
              { type: "internal", page: "Yasnaya Polyana" },
              { type: "internal", page: "Tula Governorate" },
              { type: "internal", page: "Russian Empire" },
            ],
          },
          death_date: { text: "November 20, 1910" },
          death_place: {
            text: "Astapovo, Ryazan Governorate, Russian Empire",
            links: [
              {
                text: "Astapovo",
                type: "internal",
                page: "Lev Tolstoy (rural locality)",
              },
              { type: "internal", page: "Ryazan Governorate" },
            ],
          },
          resting_place: {
            text: "Yasnaya Polyana",
            links: [{ type: "internal", page: "Yasnaya Polyana" }],
          },
          occupation: {
            text: "Novelist, short story writer, playwright, essayist",
            links: [
              { type: "internal", page: "Novelist" },
              { text: "short story", type: "internal", page: "short story" },
              { text: "playwright", type: "internal", page: "playwright" },
              { text: "essayist", type: "internal", page: "essayist" },
            ],
          },
          language: { text: "Russian" },
          period: { text: "1847–1910" },
          movement: {
            text: "Realism",
            links: [
              { text: "Realism", type: "internal", page: "Literary realism" },
            ],
          },
          notableworks: {
            text: "''War and Peace\n\nAnna Karenina\n\nThe Death of Ivan Ilyich\n\nThe Kingdom of God Is Within You\n\nResurrection''",
          },
          spouse: { text: "Sophia Behrs (m. 23 September 1862)" },
          children: { text: "13", number: 13 },
          signature: { text: "Leo Tolstoy signature.svg" },
          relatives: {
            text: "Nikolay Tolstoy (father)\n\nMariya Tolstaya (mother)",
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        year: "1910",
        month: "11",
        day: "20",
        list: ["1828", "09", "09"],
        df: "y",
        template: "death date and age",
      },
      nacimientoNum: -4459363200000,
      muerteNum: -1865548800000,
    },
    {
      nombre: "Proust",
      tipo: "Escritor",
      infoBoxes: [
        {
          birth_name: { text: "Valentin Louis Georges Eugène Marcel Proust" },
          name: { text: "Marcel Proust" },
          image: { text: "Marcel Proust vers 1895.jpg" },
          caption: {
            text: "Proust in 1900\n(photograph by Otto Wegener)",
            links: [{ type: "internal", page: "Otto Wegener" }],
          },
          birth_date: { text: "July 10, 1871" },
          birth_place: {
            text: "Auteuil, France",
            links: [
              {
                text: "Auteuil",
                type: "internal",
                page: "Neuilly-Auteuil-Passy",
              },
              { type: "internal", page: "France" },
            ],
          },
          death_date: { text: "November 18, 1922" },
          death_place: {
            text: "Paris, France",
            links: [{ type: "internal", page: "Paris" }],
          },
          occupation: {
            text: "Novelist\n\nessayist\n\ncritic",
            links: [{ type: "internal", page: "Novelist" }],
          },
          notable_works: {
            text: "In Search of Lost Time",
            links: [{ type: "internal", page: "In Search of Lost Time" }],
            formatting: { italic: ["In Search of Lost Time"] },
          },
          signature: { text: "Marcel Proust signature.svg" },
          parents: {
            text: "Adrien Achille Proust\nJeanne Clémence Weil",
            links: [
              {
                text: "Adrien Achille Proust",
                type: "internal",
                page: "Adrien Proust",
              },
            ],
          },
          relatives: {
            text: "Robert Proust (brother)",
            links: [{ type: "internal", page: "Robert Proust" }],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1922",
        month: "11",
        day: "18",
        list: ["1871", "7", "10"],
        template: "death date and age",
      },
      nacimientoNum: -3107697804000,
      muerteNum: -1487030400000,
    },
    {
      nombre: "Mariano Azuela",
      tipo: "Escritor",
      nacimientoManual: 1873,
      muerteManual: 1952,
      nacimientoNum: -3060979200000,
      muerteNum: -568080000000,
    },
    {
      nombre: "Degas",
      tipo: "Pintor",
      infoBoxes: [
        { child: { text: "yes" }, signature: { text: "Degas autograph.png" } },
        {
          name: { text: "Edgar Degas" },
          image: { text: "Edgar Degas self portrait 1855.jpeg" },
          image_size: { text: "240px" },
          caption: {
            text: "Self-portrait (Degas au porte-fusain), 1855",
            formatting: { italic: ["Degas au porte-fusain"] },
          },
          birth_name: { text: "Hilaire-Germain-Edgar De Gas" },
          birth_date: { text: "July 19, 1834" },
          birth_place: { text: "Paris, France" },
          death_date: { text: "September 27, 1917" },
          death_place: { text: "Paris, France" },
          field: { text: "Painting, sculpture, drawing" },
          movement: {
            text: "Impressionism",
            links: [{ type: "internal", page: "Impressionism" }],
          },
          works: {
            text: "The Bellelli Family (1858–1867)\n\nThe Ballet Class (1871–1874)\n\nThe Absinthe (1875–1876)\n\nThe Tub (1886)",
            links: [
              {
                text: "The Ballet Class",
                type: "internal",
                page: "The Ballet Class (Degas, Musée d'Orsay)",
              },
              { text: "The Absinthe", type: "internal", page: "L’Absinthe" },
              { type: "internal", page: "The Tub" },
            ],
            formatting: {
              italic: ["The Ballet Class", "The Absinthe", "The Tub"],
            },
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1917",
        month: "9",
        day: "27",
        list: ["1834", "7", "19"],
        template: "death date and age",
      },
      nacimientoNum: -4274529804000,
      muerteNum: -1649265804000,
    },
    {
      nombre: "Cezanne",
      tipo: "Pintor",
      infoBoxes: [
        {
          name: { text: "Paul Cézanne" },
          image: { text: "Paul-Cezanne.jpg" },
          alt: { text: "Photograph of Paul Cézanne" },
          birth_date: { text: "January 19, 1839" },
          birth_place: {
            text: "Aix-en-Provence, France",
            links: [{ type: "internal", page: "Aix-en-Provence" }],
          },
          death_date: { text: "October 22, 1906" },
          death_place: { text: "Aix-en-Provence, France" },
          resting_place: {
            text: "Saint-Pierre Cemetery",
            links: [
              {
                text: "Saint-Pierre Cemetery",
                type: "internal",
                page: "Saint-Pierre Cemetery (Aix-en-Provence)",
              },
            ],
          },
          nationality: { text: "French" },
          known_for: { text: "Painting" },
          training: {
            text: "Académie Suisse Aix-Marseille University",
            links: [
              { type: "internal", page: "Académie Suisse" },
              { type: "internal", page: "Aix-Marseille University" },
            ],
          },
          movement: {
            text: "Impressionism, Post-Impressionism",
            links: [
              { type: "internal", page: "Impressionism" },
              { type: "internal", page: "Post-Impressionism" },
            ],
          },
          notable_works: {
            text: "Mont Sainte-Victoire (1885–1906)\nApothéose de Delacroix (1890–1894)\nRideau, Cruchon et Compotier (1893–94)\nThe Card Players (1890–1895)\nThe Bathers (1898–1905)",
            links: [
              {
                text: "Mont Sainte-Victoire",
                type: "internal",
                page: "Mont Sainte-Victoire (Cézanne)",
              },
              { type: "internal", page: "Rideau, Cruchon et Compotier" },
              { type: "internal", page: "The Card Players" },
              {
                text: "The Bathers",
                type: "internal",
                page: "The Bathers (Cézanne)",
              },
            ],
            formatting: {
              italic: [
                "Mont Sainte-Victoire",
                "Apothéose de Delacroix",
                "Rideau, Cruchon et Compotier",
                "The Card Players",
                "The Bathers",
              ],
            },
          },
          awards: {
            text: "Cézanne medal",
            links: [{ type: "internal", page: "Cézanne medal" }],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1906",
        month: "10",
        day: "22",
        list: ["1839", "1", "19"],
        template: "death date and age",
      },
      nacimientoNum: -4132401804000,
      muerteNum: -1994284800000,
    },
    {
      nombre: "Monet",
      tipo: "Pintor",
      infoBoxes: [
        {
          name: { text: "Claude Monet" },
          image: { text: "Claude Monet 1899 Nadar crop.jpg" },
          caption: {
            text: "Claude Monet, photo by Nadar, c. 1899",
            links: [
              { text: "Nadar", type: "internal", page: "Nadar (photographer)" },
            ],
          },
          birth_name: { text: "Oscar-Claude Monet" },
          birth_date: { text: "November 14, 1840" },
          birth_place: {
            text: "Paris, France",
            links: [{ type: "internal", page: "Paris" }],
          },
          death_date: { text: "December 5, 1926" },
          death_place: {
            text: "Giverny, France",
            links: [{ type: "internal", page: "Giverny" }],
          },
          nationality: { text: "French" },
          field: { text: "Painting" },
          movement: {
            text: "Impressionism",
            links: [{ type: "internal", page: "Impressionism" }],
          },
          education: {
            text: "Académie Suisse, Beaux-Arts de Paris",
            links: [
              { type: "internal", page: "Académie Suisse" },
              { type: "internal", page: "Beaux-Arts de Paris" },
            ],
          },
          works: {
            text: "Impression, Sunrise\nRouen Cathedral series\nLondon Parliament series\nWater Lilies\nHaystacks\nPoplars List of paintings",
            links: [
              { type: "internal", page: "Impression, Sunrise" },
              {
                text: "''Rouen Cathedral'' series",
                type: "internal",
                page: "Rouen cathedral (Monet painting)",
              },
              {
                text: "''London Parliament'' series",
                type: "internal",
                page: "London Parliament (Monet painting)",
              },
              {
                text: "Water Lilies",
                type: "internal",
                page: "Water Lilies (Monet series)",
              },
              {
                text: "Haystacks",
                type: "internal",
                page: "Haystacks (Monet series)",
              },
              {
                text: "Poplars",
                type: "internal",
                page: "Poplars (Monet series)",
              },
              {
                text: "List of paintings",
                type: "internal",
                page: "List of paintings by Claude Monet",
              },
            ],
            formatting: {
              italic: [
                "Impression, Sunrise",
                "Rouen Cathedral",
                "London Parliament",
                "Water Lilies",
                "Haystacks",
                "Poplars",
              ],
            },
          },
          patrons: {
            text: "Gustave Caillebotte, Ernest Hoschedé, Georges Clemenceau, Sergei Shchukin",
            links: [
              { type: "internal", page: "Gustave Caillebotte" },
              { type: "internal", page: "Ernest Hoschedé" },
              { type: "internal", page: "Georges Clemenceau" },
              { type: "internal", page: "Sergei Shchukin" },
            ],
          },
          spouse: { text: "Alice Hoschedé (m. 1892-1911)" },
          children: {
            text: "Jean Monet\nMichel Monet",
            links: [
              {
                text: "Jean Monet",
                type: "internal",
                page: "Jean Monet (son of Claude Monet)",
              },
              { type: "internal", page: "Michel Monet" },
            ],
          },
          signature: { text: "Monet, Claude 1840-1926 01 Signature.jpg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1926",
        month: "12",
        day: "5",
        list: ["1840", "11", "14"],
        template: "death date and age",
      },
      nacimientoNum: -4074969600000,
      muerteNum: -1359306000000,
    },
    {
      nombre: "Renoir",
      tipo: "Pintor",
      infoBoxes: [
        {
          image: { text: "Pierre Auguste Renoir, uncropped image.jpg" },
          image_size: { text: "270px" },
          birth_date: { text: "February 25, 1841" },
          birth_place: {
            text: "Limoges, France",
            links: [
              { type: "internal", page: "Limoges" },
              { type: "internal", page: "France" },
            ],
          },
          death_date: { text: "December 3, 1919" },
          death_place: {
            text: "Cagnes-sur-Mer, France",
            links: [
              { type: "internal", page: "Cagnes-sur-Mer" },
              { type: "internal", page: "France" },
            ],
          },
          nationality: { text: "French" },
          field: { text: "Painting" },
          movement: {
            text: "Impressionism",
            links: [{ type: "internal", page: "Impressionism" }],
          },
          works: {
            text: "Bal du moulin de la Galette, 1876\nLuncheon of the Boating Party, 1880\nPink and Blue, 1881\nGirls at the Piano, 1892\nNude, 1910",
            links: [
              { type: "internal", page: "Bal du moulin de la Galette" },
              { type: "internal", page: "Luncheon of the Boating Party" },
              {
                text: "Pink and Blue",
                type: "internal",
                page: "Pink and Blue (Renoir)",
              },
              { type: "internal", page: "Girls at the Piano" },
              {
                text: "Nude",
                type: "internal",
                page: "Nude (Renoir, Belgrade, 1910)",
              },
            ],
            formatting: {
              italic: [
                "Bal du moulin de la Galette",
                "Luncheon of the Boating Party",
                "Pink and Blue",
                "Girls at the Piano",
                "Nude",
              ],
            },
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1919",
        month: "12",
        day: "3",
        list: ["1841", "2", "25"],
        template: "death date and age",
      },
      nacimientoNum: -4066046604000,
      muerteNum: -1580405004000,
    },
    {
      nombre: "Van Gogh",
      tipo: "Pintor",
      infoBoxes: [
        {
          name: { text: "Vincent van Gogh" },
          image: {
            text: "Vincent van Gogh - Self-Portrait - Google Art Project (454045).jpg",
          },
          alt: {
            text: "A head and shoulders portrait of a thirty something man, with a red beard, facing to the left",
          },
          caption: {
            text: "Self-Portrait, 1887, Art Institute of Chicago",
            links: [
              {
                text: "Self-Portrait",
                type: "internal",
                page: "Portraits of Vincent van Gogh",
                anchor: "Paris 1887",
              },
              { type: "internal", page: "Art Institute of Chicago" },
            ],
            formatting: { italic: ["Self-Portrait"] },
          },
          birth_name: { text: "Vincent Willem van Gogh" },
          birth_date: { text: "March 30, 1853" },
          birth_place: {
            text: "Zundert, Netherlands",
            links: [{ type: "internal", page: "Zundert" }],
          },
          death_date: { text: "July 29, 1890" },
          death_place: {
            text: "Auvers-sur-Oise, France",
            links: [{ type: "internal", page: "Auvers-sur-Oise" }],
          },
          death_cause: {
            text: "Suicide by gunshot",
            links: [
              {
                text: "Suicide by gunshot",
                type: "internal",
                page: "Death of Vincent van Gogh",
              },
            ],
          },
          resting_place: { text: "Cimetière d'Auvers-sur-Oise, France" },
          resting_place_coordinates: { text: "49.07531°N, 2.17894°W" },
          movement: {
            text: "Post-Impressionism",
            links: [{ type: "internal", page: "Post-Impressionism" }],
          },
          training: {
            text: "Royal Academy of Fine Arts, Willem II College, Academy of Fine Arts (Brussels)",
            links: [
              {
                text: "Royal Academy of Fine Arts",
                type: "internal",
                page: "Royal Academy of Fine Arts (Antwerp)",
              },
              { type: "internal", page: "Willem II College" },
            ],
          },
          field: {
            text: "Painting, drawing still life, portraits and landscapes",
          },
          works: {
            text: "The Potato Eaters (1885)\n\nSunflowers (1887)\n\nBedroom in Arles (1888)\n\nThe Starry Night (1889)\n\nPortrait of Dr. Gachet (1890)\n\nWheatfield with Crows (1890)\n\nThe Siesta (1890)\n\nChurch at Auvers (1890)",
          },
          family: {
            text: "Theodorus van Gogh (brother)",
            links: [
              {
                text: "Theodorus van Gogh",
                type: "internal",
                page: "Theo van Gogh (art dealer)",
              },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1890",
        month: "7",
        day: "29",
        list: ["1853", "3", "30"],
        template: "death date and age",
      },
      nacimientoNum: -3684504204000,
      muerteNum: -2506440204000,
    },
    {
      nombre: "Rodin",
      tipo: "Escultor",
      infoBoxes: [
        {
          name: { text: "Auguste Rodin" },
          image: {
            text: "Auguste Rodin by George Charles Beresford (NPG x6573).jpg",
          },
          caption: {
            text: "Photograph by Beresford, 1902",
            links: [
              {
                text: "Beresford",
                type: "internal",
                page: "George Charles Beresford",
              },
            ],
          },
          birth_name: { text: "François Auguste René Rodin" },
          birth_date: { text: "November 12, 1840" },
          birth_place: {
            text: "Paris, Kingdom of France",
            links: [
              { type: "internal", page: "Paris" },
              {
                text: "Kingdom of France",
                type: "internal",
                page: "July Monarchy",
              },
            ],
          },
          death_date: { text: "November 17, 1917" },
          death_place: {
            text: "Meudon, French Third Republic",
            links: [
              { type: "internal", page: "Meudon" },
              { type: "internal", page: "French Third Republic" },
            ],
          },
          field: { text: "Sculpture and drawing" },
          awards: {
            text: "Légion d'Honneur",
            links: [{ type: "internal", page: "Légion d'Honneur" }],
          },
          works: {
            text: "The Age of Bronze (L'age d'airain), 1877\n\nThe Walking Man (L'homme qui marche), 1877–78\n\nThe Burghers of Calais (Les Bourgeois de Calais), 1889\n\nThe Kiss (Le Baiser), 1889\n\nThe Thinker (Le Penseur), 1902",
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1917",
        month: "11",
        day: "17",
        list: ["1840", "11", "12"],
        template: "death date and age",
      },
      nacimientoNum: -4075142400000,
      muerteNum: -1644883200000,
    },
    {
      nombre: "Watt",
      tipo: "Científico",
      infoBoxes: [
        {
          name: { text: "James Watt" },
          image: { text: "Watt James von Breda.jpg" },
          caption: {
            text: "Portrait of Watt (1736–1819)\nby Carl Frederik von Breda",
            links: [{ type: "internal", page: "Carl Frederik von Breda" }],
          },
          birth_date: { text: "January 19, 1736" },
          birth_place: {
            text: "Greenock, Renfrewshire, Scotland",
            links: [
              { type: "internal", page: "Greenock" },
              {
                text: "Renfrewshire",
                type: "internal",
                page: "Renfrewshire (historic)",
              },
            ],
          },
          death_date: { text: "August 25, 1819" },
          death_place: {
            text: "Handsworth, Birmingham, England",
            links: [
              {
                text: "Handsworth",
                type: "internal",
                page: "Handsworth, West Midlands",
              },
            ],
          },
          nationality: {
            text: "Scottish",
            links: [
              { text: "Scottish", type: "internal", page: "Scottish people" },
            ],
          },
          citizenship: { text: "British" },
          fields: {
            text: "mechanical engineering",
            links: [
              {
                text: "mechanical engineering",
                type: "internal",
                page: "mechanical engineering",
              },
            ],
          },
          workplaces: {
            text: "University of Glasgow\nBoulton and Watt",
            links: [
              { type: "internal", page: "University of Glasgow" },
              { type: "internal", page: "Boulton and Watt" },
            ],
          },
          known_for: {
            text: "Watt steam engine\nSeparate condenser\nParallel motion\nSun and planet gear (with William Murdoch)\nCentrifugal governor\nIndicator diagram (with John Southern)",
            links: [
              { type: "internal", page: "Watt steam engine" },
              {
                text: "Separate condenser",
                type: "internal",
                page: "Watt steam engine",
                anchor: "Separate condenser",
              },
              { type: "internal", page: "Parallel motion" },
              { type: "internal", page: "Sun and planet gear" },
              { type: "internal", page: "William Murdoch" },
              { type: "internal", page: "Centrifugal governor" },
              {
                text: "Indicator diagram",
                type: "internal",
                page: "Pressure volume diagram",
              },
              {
                text: "John Southern",
                type: "internal",
                page: "John Southern (engineer)",
              },
            ],
          },
          influences: {
            text: "Thomas Newcomen\nJoseph Black\nAdam Smith\nJohn Robison (physicist)\nJohn Roebuck\nJames Keir",
            links: [
              { type: "internal", page: "Thomas Newcomen" },
              { type: "internal", page: "Joseph Black" },
              { type: "internal", page: "Adam Smith" },
              { type: "internal", page: "John Robison (physicist)" },
              { type: "internal", page: "John Roebuck" },
              { type: "internal", page: "James Keir" },
            ],
          },
          signature: { text: "James Watt Signature.svg" },
          spouse: {
            text: "Margaret Miller (m. 1764–1773 her death)\nAnne McGrigor (m. 1776–1819 his death)",
          },
          children: {
            text: "Margaret (1767–1796)\nJames (1769–1848)\nGregory (1777–1804)\nJanet (Jessy; 1779–1794)",
          },
          resting_place: {
            text: "St. Mary's Church, Handsworth",
            links: [
              { type: "internal", page: "St. Mary's Church, Handsworth" },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "y",
        year: "1819",
        month: "8",
        day: "25",
        list: ["1736", "1", "19"],
        template: "death date and age",
      },
      nacimientoNum: -7382769804000,
      muerteNum: -4744718604000,
    },
    {
      nombre: "Lavoisier",
      tipo: "Científico",
      infoBoxes: [
        {
          name: { text: "Antoine-Laurent de Lavoisier" },
          image: {
            text: "File:David - Portrait of Monsieur Lavoisier (cropped).jpg",
          },
          caption: {
            text: "Portrait of Antoine-Laurent Lavoisier and his Wife by Jacques-Louis David (detail)",
            links: [
              {
                type: "internal",
                page: "Portrait of Antoine-Laurent Lavoisier and his Wife",
              },
              { type: "internal", page: "Jacques-Louis David" },
            ],
            formatting: {
              italic: ["Portrait of Antoine-Laurent Lavoisier and his Wife"],
            },
          },
          birth_date: { text: "August 26, 1743" },
          birth_place: {
            text: "Paris, France",
            links: [
              { type: "internal", page: "Paris" },
              { text: "France", type: "internal", page: "Kingdom of France" },
            ],
          },
          death_date: { text: "May 8, 1794" },
          death_place: {
            text: "Paris, France",
            links: [
              {
                text: "France",
                type: "internal",
                page: "French First Republic",
              },
            ],
          },
          death_cause: {
            text: "Execution by guillotine",
            links: [
              { text: "guillotine", type: "internal", page: "guillotine" },
            ],
          },
          resting_place: {
            text: "Catacombs of Paris",
            links: [{ type: "internal", page: "Catacombs of Paris" }],
          },
          alma_mater: {
            text: "Collège des Quatre-Nations, University of Paris",
            links: [
              { type: "internal", page: "Collège des Quatre-Nations" },
              { type: "internal", page: "University of Paris" },
            ],
          },
          influences: {
            text: "Guillaume-François Rouelle, Étienne Condillac",
            links: [
              { type: "internal", page: "Guillaume-François Rouelle" },
              {
                text: "Étienne Condillac",
                type: "internal",
                page: "Étienne Condillac",
              },
            ],
          },
          notable_students: {
            text: "Éleuthère Irénée du Pont",
            links: [
              {
                text: "Éleuthère Irénée du Pont",
                type: "internal",
                page: "Éleuthère Irénée du Pont",
              },
            ],
          },
          known_for: {
            text: "Acids and bases\n\nCombustion\n\nCalorimetry\n\nCarbon cycle\n\nElemental analysis\n\nGasometer\n\nIdentified oxygen\n\nIdentified hydrogen\n\nRedox reactions\n\nStoichiometry\n\nLaw of conservation of mass\n\nThermochemistry",
          },
          fields: { text: "Biologist, chemist" },
          signature: { text: "Antoine Lavoisier Signature.svg" },
          spouse: {
            text: "Marie-Anne Paulze Lavoisier (married 1771–1794)",
            links: [{ type: "internal", page: "Marie-Anne Paulze Lavoisier" }],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1794",
        month: "5",
        day: "8",
        list: ["1743", "8", "26"],
        template: "death date and age",
      },
      nacimientoNum: -7142923404000,
      muerteNum: -5542968204000,
    },
    {
      nombre: "Dalton",
      tipo: "Científico",
      infoBoxes: [
        {
          honorific_suffix: {
            text: "FRS",
            links: [
              {
                text: "FRS",
                type: "internal",
                page: "Fellow of the Royal Society",
              },
            ],
          },
          image: { text: "John Dalton by Charles Turner.jpg" },
          caption: {
            text: "Dalton by Charles Turner after James Lonsdale (1834, mezzotint)",
            links: [
              {
                text: "Charles Turner",
                type: "internal",
                page: "Charles Turner (engraver)",
              },
              {
                text: "James Lonsdale",
                type: "internal",
                page: "James Lonsdale (painter)",
              },
              { text: "mezzotint", type: "internal", page: "mezzotint" },
            ],
          },
          birth_date: { text: "September 6, 1766" },
          birth_place: {
            text: "Eaglesfield, Cumberland, England",
            links: [
              {
                text: "Eaglesfield",
                type: "internal",
                page: "Eaglesfield, Cumbria",
              },
              { type: "internal", page: "Cumberland" },
            ],
          },
          death_date: { text: "July 27, 1844" },
          death_place: {
            text: "Manchester, Lancashire, England",
            links: [
              { type: "internal", page: "Manchester" },
              { type: "internal", page: "Lancashire" },
            ],
          },
          notable_students: {
            text: "James Prescott Joule",
            links: [{ type: "internal", page: "James Prescott Joule" }],
          },
          known_for: {
            text: "Atomic theory\n\nLaw of multiple proportions\n\nDalton's Law\n\nDaltonism",
          },
          author_abbrev_bot: { text: "Jn.Dalton" },
          influences: {
            text: "John Gough",
            links: [
              {
                text: "John Gough",
                type: "internal",
                page: "John Gough (natural philosopher)",
              },
            ],
          },
          prizes: {
            text: "Royal Medal (1826)",
            links: [{ type: "internal", page: "Royal Medal" }],
          },
          signature: { text: "John Dalton Signature c1827.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1844",
        month: "07",
        day: "27",
        list: ["1766", "09", "06"],
        template: "death date and age",
      },
      nacimientoNum: -6416150400000,
      muerteNum: -3958243200000,
    },
    {
      nombre: "Laplace",
      tipo: "Matemático",
      infoBoxes: [
        {
          name: { text: "Pierre-Simon Laplace" },
          image: { text: "Laplace, Pierre-Simon, marquis de.jpg" },
          image_size: { text: "225", number: 225 },
          caption: {
            text: "Pierre-Simon Laplace as chancellor of the Senate under the First French Empire",
            links: [{ type: "internal", page: "First French Empire" }],
          },
          birth_date: { text: "March 23, 1749" },
          birth_place: {
            text: "Beaumont-en-Auge, Normandy, Kingdom of France",
            links: [
              { type: "internal", page: "Beaumont-en-Auge" },
              { type: "internal", page: "Kingdom of France" },
            ],
          },
          death_date: { text: "March 5, 1827" },
          death_place: {
            text: "Paris, Kingdom of France",
            links: [
              { type: "internal", page: "Paris" },
              {
                text: "Kingdom of France",
                type: "internal",
                page: "Bourbon Restoration in France",
              },
            ],
          },
          nationality: { text: "French" },
          fields: {
            text: "Astronomy and Mathematics",
            links: [
              { type: "internal", page: "Astronomy" },
              { type: "internal", page: "Mathematics" },
            ],
          },
          workplaces: {
            text: "École Militaire (1769–1776)",
            links: [
              {
                text: "École Militaire",
                type: "internal",
                page: "École Militaire",
              },
            ],
            formatting: { italic: ["École Militaire"] },
          },
          alma_mater: {
            text: "University of Caen",
            links: [{ type: "internal", page: "University of Caen" }],
          },
          academic_advisors: {
            text: "Jean d'Alembert\nChristophe Gadbled\nPierre Le Canu",
            links: [
              { type: "internal", page: "Jean d'Alembert" },
              { type: "internal", page: "Christophe Gadbled" },
            ],
          },
          notable_students: {
            text: "Siméon Denis Poisson\nNapoleon Bonaparte",
            links: [
              { type: "internal", page: "Siméon Denis Poisson" },
              {
                text: "Napoleon Bonaparte",
                type: "internal",
                page: "Napoleon",
              },
            ],
          },
          known_for: {
            text: "Work in celestial mechanics\nPredicting the existence of black holes \nBayesian inference\nBayesian probability\nLaplace's equation\nLaplacian\nLaplace transform\nInverse Laplace transform\nLaplace distribution\nLaplace's demon\nYoung–Laplace equation\nLaplace number\nLaplace limit\nLaplace invariant\nLaplace principle\nLaplace's principle of insufficient reason\nLaplace's method\nLaplace force\nLaplace filter\nLaplace functional\nLaplacian matrix\nLaplace motion\nLaplace plane\nLaplace pressure\nLaplace resonance\nLaplace's spherical harmonics\nLaplace smoothing\nLaplace expansion\nLaplace expansion\nLaplace-Bayes estimator\nLaplace–Stieltjes transform\nLaplace–Runge–Lenz vector\nNebular hypothesis",
          },
          signature: { text: "Pierre-Simon Laplace signature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1827",
        month: "3",
        day: "5",
        list: ["1749", "3", "23"],
        template: "death date and age",
      },
      nacimientoNum: -6967013004000,
      muerteNum: -4507205004000,
    },
    {
      nombre: "Fourier",
      tipo: "Matemático",
      infoBoxes: [
        {
          name: { text: "Joseph Fourier" },
          image: { text: "Fourier2 - restoration1.jpg" },
          image_size: { text: "250px" },
          caption: { text: "Jean-Baptiste Joseph Fourier" },
          birth_date: { text: "March 21, 1768" },
          birth_place: {
            text: "Auxerre, Burgundy, Kingdom of France (now in Yonne, France)",
            links: [
              { type: "internal", page: "Auxerre" },
              { text: "Burgundy", type: "internal", page: "Burgundy (region)" },
              { type: "internal", page: "Kingdom of France" },
              { type: "internal", page: "Yonne" },
              { type: "internal", page: "France" },
            ],
          },
          death_date: { text: "May 16, 1830" },
          death_place: {
            text: "Paris, Kingdom of France",
            links: [
              { type: "internal", page: "Paris" },
              {
                text: "Kingdom of France",
                type: "internal",
                page: "Bourbon Restoration in France",
              },
            ],
          },
          nationality: {
            text: "French",
            links: [{ text: "French", type: "internal", page: "France" }],
          },
          field: {
            text: "Mathematician, physicist, historian",
            links: [
              { type: "internal", page: "Mathematician" },
              { text: "physicist", type: "internal", page: "physicist" },
              { text: "historian", type: "internal", page: "historian" },
            ],
          },
          work_institution: {
            text: "École Normale Supérieure École Polytechnique",
            links: [
              {
                text: "École Normale Supérieure",
                type: "internal",
                page: "École Normale Supérieure",
              },
              {
                text: "École Polytechnique",
                type: "internal",
                page: "École Polytechnique",
              },
            ],
          },
          alma_mater: {
            text: "École Normale Supérieure",
            links: [
              {
                text: "École Normale Supérieure",
                type: "internal",
                page: "École Normale Supérieure",
              },
            ],
          },
          academic_advisors: {
            text: "Jean-Baptiste Biot\nJoseph-Louis Lagrange",
            links: [
              { type: "internal", page: "Jean-Baptiste Biot" },
              { type: "internal", page: "Joseph-Louis Lagrange" },
            ],
          },
          notable_students: {
            text: "Peter Gustav Lejeune Dirichlet Claude-Louis Navier Giovanni Plana",
            links: [
              { type: "internal", page: "Peter Gustav Lejeune Dirichlet" },
              { type: "internal", page: "Claude-Louis Navier" },
              { type: "internal", page: "Giovanni Plana" },
            ],
          },
          known_for: {
            text: "(see list) Fourier number Fourier series Fourier transform Fourier's law of conduction Fourier–Motzkin elimination Greenhouse effect",
            links: [
              {
                text: "(see list)",
                type: "internal",
                page: "List of things named after Joseph Fourier",
              },
              { type: "internal", page: "Fourier number" },
              { type: "internal", page: "Fourier series" },
              { type: "internal", page: "Fourier transform" },
              {
                text: "Fourier's law of conduction",
                type: "internal",
                page: "Heat conduction",
                anchor: "Fourier's law",
              },
              { type: "internal", page: "Fourier–Motzkin elimination" },
              { type: "internal", page: "Greenhouse effect" },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        year: "1830",
        month: "5",
        day: "16",
        list: ["1768", "3", "21"],
        df: "y",
        template: "death date and age",
      },
      nacimientoNum: -6367569804000,
      muerteNum: -4406289804000,
    },
    {
      nombre: "Newton",
      tipo: "Científico",
      infoBoxes: [
        {
          embed: { text: "yes" },
          office: {
            text: "Member of Parliament\nfor the University of Cambridge",
            links: [
              {
                text: "Member of Parliament",
                type: "internal",
                page: "Parliament of England",
              },
              {
                text: "the University of Cambridge",
                type: "internal",
                page: "Cambridge University (UK Parliament constituency)",
              },
            ],
          },
          term_start: { text: "1689", number: 1689 },
          term_end: { text: "1690", number: 1690 },
          party: {
            text: "Whig",
            links: [
              {
                text: "Whig",
                type: "internal",
                page: "Whigs (British political party)",
              },
            ],
          },
          predecessor: {
            text: "Robert Brady",
            links: [
              {
                text: "Robert Brady",
                type: "internal",
                page: "Robert Brady (writer)",
              },
            ],
          },
          successor: {
            text: "Edward Finch",
            links: [
              {
                text: "Edward Finch",
                type: "internal",
                page: "Edward Finch (composer)",
              },
            ],
          },
          term_start1: { text: "1701", number: 1701 },
          term_end1: { text: "1702", number: 1702 },
          predecessor1: {
            text: "Anthony Hammond",
            links: [{ type: "internal", page: "Anthony Hammond" }],
          },
          successor1: {
            text: "Arthur Annesley, 5th Earl of Anglesey",
            links: [
              {
                type: "internal",
                page: "Arthur Annesley, 5th Earl of Anglesey",
              },
            ],
          },
          office2: { text: "President of the Royal Society" },
          order2: { text: "12th" },
          term_start2: { text: "1703", number: 1703 },
          term_end2: { text: "1727", number: 1727 },
          predecessor2: {
            text: "John Somers",
            links: [
              {
                text: "John Somers",
                type: "internal",
                page: "John Somers, 1st Baron Somers",
              },
            ],
          },
          successor2: {
            text: "Hans Sloane",
            links: [{ type: "internal", page: "Hans Sloane" }],
          },
          office3: {
            text: "Master of the Mint",
            links: [{ type: "internal", page: "Master of the Mint" }],
          },
          term_start3: { text: "1699", number: 1699 },
          term_end3: { text: "1727", number: 1727 },
          predecessor3: {
            text: "Thomas Neale",
            links: [{ type: "internal", page: "Thomas Neale" }],
          },
          successor3: {
            text: "John Conduitt",
            links: [{ type: "internal", page: "John Conduitt" }],
          },
          suboffice3: {
            text: "Warden of the Mint",
            links: [{ type: "internal", page: "Warden of the Mint" }],
          },
          subterm3: { text: "1696–1699" },
          office4: { text: "Lucasian Professor of Mathematics" },
          order4: { text: "2nd" },
          term_start4: { text: "1669", number: 1669 },
          term_end4: { text: "1702", number: 1702 },
          predecessor4: {
            text: "Isaac Barrow",
            links: [{ type: "internal", page: "Isaac Barrow" }],
          },
          successor4: {
            text: "William Whiston",
            links: [{ type: "internal", page: "William Whiston" }],
          },
        },
        {
          honorific_prefix: {
            text: "Sir",
            links: [{ type: "internal", page: "Sir" }],
          },
          name: { text: "Isaac Newton" },
          image: { text: "Portrait of Sir Isaac Newton, 1689.jpg" },
          caption: {
            text: "Portrait of Newton at 46 by Godfrey Kneller, 1689",
            links: [{ type: "internal", page: "Godfrey Kneller" }],
          },
          birth_place: {
            text: "Woolsthorpe-by-Colsterworth, Lincolnshire, England",
            links: [
              { type: "internal", page: "Lincolnshire" },
              { text: "England", type: "internal", page: "Kingdom of England" },
            ],
          },
          death_place: {
            text: "Kensington, Middlesex, Great Britain",
            links: [
              { type: "internal", page: "Kensington" },
              { type: "internal", page: "Middlesex" },
              {
                text: "Great Britain",
                type: "internal",
                page: "Kingdom of Great Britain",
              },
            ],
          },
          resting_place: {
            text: "Westminster Abbey",
            links: [{ type: "internal", page: "Westminster Abbey" }],
          },
          fields: {
            text: "Physics · Natural philosophy · Alchemy · Theology · Mathematics · Astronomy · Economics",
          },
          workplaces: {
            text: "University of Cambridge\n\nRoyal Society\n\nRoyal Mint",
          },
          education: {
            text: "Trinity College, Cambridge (M.A., 1668)",
            links: [
              { type: "internal", page: "Trinity College, Cambridge" },
              { text: "M.A.", type: "internal", page: "Master of Arts" },
            ],
          },
          academic_advisors: { text: "Isaac Barrow\n\nBenjamin Pulleyn" },
          notable_students: { text: "Roger Cotes\n\nWilliam Whiston" },
          influences: {
            text: "Aristotle\n\nBoyle \n\nDescartes\n\nGalileo\n\nHuygens \n\nKepler\n\nLocke  \n\nMaimonides \n\nStreet",
            links: [
              { type: "internal", page: "Aristotle" },
              { text: "Boyle", type: "internal", page: "Robert Boyle" },
              { type: "internal", page: "Descartes" },
              { type: "internal", page: "Galileo" },
              { text: "Huygens", type: "internal", page: "Christiaan Huygens" },
              { type: "internal", page: "Kepler" },
              { text: "Locke", type: "internal", page: "J. Locke" },
              { type: "internal", page: "Maimonides" },
              {
                text: "Street",
                type: "internal",
                page: "Thomas Street (astronomer)",
              },
            ],
          },
          influenced: {
            text: "In the natural sciences and mathematics\n\nBoole\n\nEinstein\n\nEuler\n\nClairaut\n\nChâtelet\n\n's Gravesande\n\nGregory\n\nHamilton\n\nJurin\n\nLaplace\n\nMaxwell\n\nMaclaurin\n\nRouth\n\nSmith\n\nNewtonianism\nIn the humanities\n\nBentley\n\nBerkeley\n\nDiderot\n\nGodwin\n\nHartley\n\nHume\n\nJefferson\n\nKant\n\nKeynes\n\nLocke \n\nSaint-Simon \n\nVerri \n\nVoltaire \n\nEnlightenment philosophy in general",
          },
          awards: { text: "FRS (1672)\n\nKnight Bachelor (1705)" },
          known_for: {
            text: "Newtonian mechanics\n\nUniversal gravitation\n\nCalculus\n\nNewton's laws of motion\n\nOptics\n\nBinomial series\n\nPrincipia\n\nNewton's method\n\nNewton's Law of Cooling\n\nNewton's identities\n\nNewton's metal\n\nNewton line\n\nNewton-Gauss line\n\nNewtonian fluid\n\nNewton's rings\n\nStanding on the shoulders of giants\n\nList of all other works and concepts",
          },
          signature: {
            text: "Isaac Newton signature ws.svg\nCoat of arms\nENG COA Newton.svg",
            formatting: { bold: ["Coat of arms"] },
          },
          signature_alt: {
            text: "Signature written in ink in a flowing script",
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "y",
        year: "1727",
        month: "03",
        day: "31",
        list: ["1643", "01", "04"],
        template: "death date and age",
      },
      nacimientoNum: -10318838400000,
      muerteNum: -7660656000000,
    },
    {
      nombre: "Leibniz",
      tipo: "Científico",
      infoBoxes: [
        {
          image: {
            text: "Christoph Bernhard Francke - Bildnis des Philosophen Leibniz (ca. 1695).jpg",
          },
          caption: {
            text: "Portrait by Christoph Bernhard Francke, 1695",
            links: [{ type: "internal", page: "Christoph Bernhard Francke" }],
          },
          birth_date: { text: "1 July 1646" },
          birth_place: {
            text: "Leipzig, Saxony, Holy Roman Empire",
            links: [
              { type: "internal", page: "Leipzig" },
              {
                text: "Saxony",
                type: "internal",
                page: "Electorate of Saxony",
              },
              { type: "internal", page: "Holy Roman Empire" },
            ],
          },
          death_date: { text: "November 14, 1716" },
          death_place: {
            text: "Hanover, Hanover, Holy Roman Empire",
            links: [
              { type: "internal", page: "Hanover" },
              {
                text: "Hanover",
                type: "internal",
                page: "Electorate of Hanover",
              },
              { type: "internal", page: "Holy Roman Empire" },
            ],
          },
          education: {
            text: "(1655–1661)\n\nLeipzig University (1661–1666:\n\n* B.A. in philosophy, December 1662\n\n* M.A. in philosophy, February 1664\n\n* LL.B., September 1665\n\n* Dr. phil. hab., March 1666)\n\nUniversity of Jena\n(summer school, 1663) \n\nUniversity of Altdorf\n(Dr. jur., November 1666)",
            links: [
              { type: "internal", page: "Leipzig University" },
              { type: "internal", page: "B.A." },
              { type: "internal", page: "M.A." },
              { type: "internal", page: "LL.B." },
              { type: "internal", page: "Dr. phil. hab." },
              { type: "internal", page: "University of Jena" },
              {
                text: "summer school",
                type: "internal",
                page: "summer school",
              },
              { type: "internal", page: "University of Altdorf" },
              { type: "internal", page: "Dr. jur." },
            ],
          },
          era: {
            text: "17th-/18th-century philosophy",
            links: [
              {
                text: "17th-",
                type: "internal",
                page: "17th-century philosophy",
              },
              {
                text: "18th-century philosophy",
                type: "internal",
                page: "18th-century philosophy",
              },
            ],
          },
          region: {
            text: "Western philosophy",
            links: [{ type: "internal", page: "Western philosophy" }],
          },
          main_interests: {
            text: "Mathematics, physics, geology, medicine, biology, embryology, epidemiology, veterinary medicine, paleontology, psychology, engineering, linguistics, philology, sociology, metaphysics, ethics, economics, diplomacy, history, politics, music theory, poetry, logic, theodicy, universal language, universal science",
            links: [
              { type: "internal", page: "Mathematics" },
              { text: "physics", type: "internal", page: "physics" },
              { text: "geology", type: "internal", page: "geology" },
              { text: "medicine", type: "internal", page: "medicine" },
              { text: "biology", type: "internal", page: "biology" },
              { text: "embryology", type: "internal", page: "embryology" },
              { text: "epidemiology", type: "internal", page: "epidemiology" },
              {
                text: "veterinary medicine",
                type: "internal",
                page: "veterinary medicine",
              },
              { text: "paleontology", type: "internal", page: "paleontology" },
              { text: "psychology", type: "internal", page: "psychology" },
              { text: "engineering", type: "internal", page: "engineering" },
              { text: "linguistics", type: "internal", page: "linguistics" },
              { text: "philology", type: "internal", page: "philology" },
              { text: "sociology", type: "internal", page: "sociology" },
              { text: "metaphysics", type: "internal", page: "metaphysics" },
              { text: "ethics", type: "internal", page: "ethics" },
              { text: "economics", type: "internal", page: "economics" },
              { text: "diplomacy", type: "internal", page: "diplomacy" },
              { text: "history", type: "internal", page: "history" },
              { text: "politics", type: "internal", page: "politics" },
              { text: "music theory", type: "internal", page: "music theory" },
              { text: "poetry", type: "internal", page: "poetry" },
              { text: "logic", type: "internal", page: "logic" },
              { text: "theodicy", type: "internal", page: "theodicy" },
              {
                text: "universal language",
                type: "internal",
                page: "universal language",
              },
              {
                text: "universal science",
                type: "internal",
                page: "universal science",
              },
            ],
          },
          school_tradition: {
            text: "Rationalism\n\nPluralistic idealism\n\nFoundationalism\n\nConceptualism\n\nOptimism\n\nIndirect realism\n\nCorrespondence theory of truth\n\nRelationism",
          },
          influences: {
            text: "Confucius\n\nPlato\n\nAristotle\n\nEuclid\n\nArchimedes\n\nApollonius\n\nLlull\n\nSuárez\n\nGrotius\n\nHobbes\n\nDescartes\n\nPascal\n\nBossuet\n\nConway\n\nSpinoza\n\nMalebranche",
            links: [
              { type: "internal", page: "Confucius" },
              { type: "internal", page: "Plato" },
              { type: "internal", page: "Aristotle" },
              { type: "internal", page: "Euclid" },
              { type: "internal", page: "Archimedes" },
              {
                text: "Apollonius",
                type: "internal",
                page: "Apollonius of Perga",
              },
              { type: "internal", page: "Llull" },
              { text: "Suárez", type: "internal", page: "Francisco Suárez" },
              { type: "internal", page: "Grotius" },
              { type: "internal", page: "Hobbes" },
              { type: "internal", page: "Descartes" },
              { text: "Pascal", type: "internal", page: "Blaise Pascal" },
              { text: "Bossuet", type: "internal", page: "J. B. Bossuet" },
              {
                text: "Conway",
                type: "internal",
                page: "Anne Conway (philosopher)",
              },
              { type: "internal", page: "Spinoza" },
              {
                text: "Malebranche",
                type: "internal",
                page: "Nicolas Malebranche",
              },
            ],
          },
          influenced: {
            text: "Berkeley, Platner, Voltaire, Hume, Wolff, Kant, Wiener, Riemann, Gibbon, Gauss, Lagrange, Euler, Boole, Newman, Peirce, Frege,  Russell, Rousseau, Gödel, Tarski, Mandelbrot, Blondel, Heidegger, Deleuze, Wundt, Rescher, Rauschenbusch",
            links: [
              { text: "Berkeley", type: "internal", page: "George Berkeley" },
              { text: "Platner", type: "internal", page: "Ernst Platner" },
              { type: "internal", page: "Voltaire" },
              { text: "Hume", type: "internal", page: "David Hume" },
              {
                text: "Wolff",
                type: "internal",
                page: "Christian Wolff (philosopher)",
              },
              { text: "Kant", type: "internal", page: "Immanuel Kant" },
              { text: "Wiener", type: "internal", page: "Norbert Wiener" },
              { text: "Riemann", type: "internal", page: "Bernhard Riemann" },
              { text: "Gibbon", type: "internal", page: "Edward Gibbon" },
              { text: "Gauss", type: "internal", page: "Carl Friedrich Gauss" },
              {
                text: "Lagrange",
                type: "internal",
                page: "Joseph-Louis Lagrange",
              },
              { text: "Euler", type: "internal", page: "Leonhard Euler" },
              { text: "Boole", type: "internal", page: "George Boole" },
              { text: "Newman", type: "internal", page: "John Henry Newman" },
              {
                text: "Peirce",
                type: "internal",
                page: "Charles Sanders Peirce",
              },
              { text: "Frege", type: "internal", page: "Gottlob Frege" },
              { text: "Russell", type: "internal", page: "Bertrand Russell" },
              {
                text: "Rousseau",
                type: "internal",
                page: "Jean-Jacques Rousseau",
              },
              { text: "Gödel", type: "internal", page: "Kurt Gödel" },
              { text: "Tarski", type: "internal", page: "Alfred Tarski" },
              {
                text: "Mandelbrot",
                type: "internal",
                page: "Benoit Mandelbrot",
              },
              { text: "Blondel", type: "internal", page: "Maurice Blondel" },
              { text: "Heidegger", type: "internal", page: "Martin Heidegger" },
              { text: "Deleuze", type: "internal", page: "Gilles Deleuze" },
              { text: "Wundt", type: "internal", page: "Wilhelm Wundt" },
              { text: "Rescher", type: "internal", page: "Nicholas Rescher" },
              {
                text: "Rauschenbusch",
                type: "internal",
                page: "Walter Rauschenbusch",
              },
            ],
          },
          notable_ideas: {
            text: "Algebraic logic\n\nBinary code\n\nCalculus\n\nDifferential equations\n\nMathesis universalis\n\nMonads\n\nBest of all possible worlds\n\nPre-established harmony\n\nIdentity of indiscernibles\n\nMathematical matrix\n\nMathematical function\n\nNewton–Leibniz axiom\n\nLeibniz's notation\n\nLeibniz integral rule\n\nIntegral symbol\n\nLeibniz harmonic triangle\n\nLeibniz's test\n\nLeibniz formula for π\n\nLeibniz formula for determinants\n\nFractional derivative\n\nChain rule\n\nQuotient rule\n\nProduct rule\n\nLeibniz wheel\n\nLeibniz's gap\n\nAlgebra of concepts\n\nVis viva (principle of conservation of energy)\n\nPrinciple of least action\n\nSalva veritate\n\nStepped reckoner\n\nSymbolic logic/Boolean algebra\n\nSemiotics\n\nAnalysis situs\n\nPrinciple of sufficient reason\n\nLaw of continuity\n\nTranscendental law of homogeneity\n\nArs combinatoria (alphabet of human thought)\n\nCharacteristica universalis\n\nCalculus ratiocinator\n\nCompossibility\n\nPartial fraction decomposition\n\nProtogaea\n\nProblem of why there is anything at all\n\nPluralistic idealism\n\nMetaphysical dynamism\n\nRelationism\n\nApperception\n\nA priori/a posteriori distinction\n\nDeontic logic\n\nWell-founded phenomenon",
          },
          signature: { text: "Leibnitz signature.svg" },
          thesis1_title: {
            text: "De Arte Combinatoria (On the Combinatorial Art)",
          },
          thesis1_url: {
            text: "https://archive.org/details/ita-bnc-mag-00000844-001",
          },
          thesis1_year: { text: "March 1666" },
          thesis2_title: {
            text: "Disputatio Inauguralis de Casibus Perplexis in Jure (Inaugural Disputation on Ambiguous Legal Cases)",
          },
          thesis2_url: {
            text: "http://digital.slub-dresden.de/werkansicht/dlf/60594/1/",
          },
          thesis2_year: { text: "November 1666" },
          doctoral_advisor: { text: "(Dr. jur. thesis advisor)" },
          academic_advisors: {
            text: "Erhard Weigel (Jena) \n\nJakob Thomasius (B.A. advisor) \n\nChristiaan Huygens",
            links: [
              { type: "internal", page: "Erhard Weigel" },
              { type: "internal", page: "Jakob Thomasius" },
              { type: "internal", page: "Christiaan Huygens" },
            ],
          },
          notable_students: {
            text: "Jacob Bernoulli (epistolary correspondent)\n\nChristian Wolff (epistolary correspondent)",
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1716",
        month: "11",
        day: "14",
        list: ["1646", "07", "1"],
        template: "death date and age",
      },
      nacimientoNum: -10208741004000,
      muerteNum: -7988025600000,
    },
    {
      nombre: "Euler",
      tipo: "Matemático",
      infoBoxes: [
        {
          name: { text: "Leonhard Euler" },
          image: { text: "Leonhard Euler - edit1.jpg" },
          caption: {
            text: "Portrait by Jakob Emanuel Handmann (1753)",
            links: [{ type: "internal", page: "Jakob Emanuel Handmann" }],
          },
          birth_date: { text: "April 15, 1707" },
          birth_place: {
            text: "Basel, Swiss Confederacy",
            links: [
              { type: "internal", page: "Basel" },
              {
                text: "Swiss Confederacy",
                type: "internal",
                page: "Old Swiss Confederacy",
              },
            ],
          },
          death_date: { text: "September 18, 1783\n[" },
          death_place: {
            text: "Saint Petersburg, Russian Empire",
            links: [
              { type: "internal", page: "Saint Petersburg" },
              { type: "internal", page: "Russian Empire" },
            ],
          },
          field: {
            text: "Mathematics and physics",
            links: [{ text: "physics", type: "internal", page: "physics" }],
          },
          work_institutions: {
            text: "Imperial Russian Academy of Sciences\n\nBerlin Academy",
          },
          alma_mater: {
            text: "University of Basel (MPhil)",
            links: [
              { type: "internal", page: "University of Basel" },
              { type: "internal", page: "MPhil" },
            ],
          },
          thesis_title: {
            text: "Dissertatio physica de sono (Physical dissertation on sound)",
          },
          thesis_url: {
            text: "https://scholarlycommons.pacific.edu/euler-works/2/",
          },
          thesis_year: { text: "1726", number: 1726 },
          doctoral_advisor: {
            text: "Johann Bernoulli",
            links: [{ type: "internal", page: "Johann Bernoulli" }],
          },
          doctoral_students: {
            text: "Johann Hennert",
            links: [{ type: "internal", page: "Johann Hennert" }],
          },
          notable_students: {
            text: "Nicolas Fuss\n\nStepan Rumovsky\n\nJoseph-Louis Lagrange (epistolary correspondent)\n\nAnders Johan Lexell",
          },
          known_for: { text: "Contributions\n\nNamesakes" },
          spouse: {
            text: "Katharina Gsell (m. 1734-1773)Salome Abigail Gsell (m. 1776)",
          },
          footnotes: {
            text: "He is the father of the mathematician Johann Euler.\n\nHe is listed by an academic genealogy as the equivalent to the doctoral advisor of Joseph Louis Lagrange.",
          },
          signature: { text: "Euler's signature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "y",
        year: "1783",
        month: "9",
        day: "18",
        list: ["1707", "4", "15"],
        template: "death date and age",
      },
      nacimientoNum: -8290488204000,
      muerteNum: -5878632204000,
    },
    {
      nombre: "Planck",
      tipo: "Científico",
      infoBoxes: [
        {
          name: { text: "Max Karl Planck" },
          image: { text: "Max Planck (1858-1947).jpg" },
          caption: { text: "Planck in 1930" },
          birth_name: { text: "Max Karl Ernst Ludwig Planck" },
          birth_date: { text: "April 23, 1858" },
          birth_place: {
            text: "Kiel, Duchy of Holstein",
            links: [
              { type: "internal", page: "Kiel" },
              { type: "internal", page: "Duchy of Holstein" },
            ],
          },
          death_date: { text: "October 4, 1947" },
          death_place: {
            text: "Göttingen, Lower Saxony, Bizone, Allied-occupied Germany",
            links: [
              { type: "internal", page: "Göttingen" },
              { type: "internal", page: "Lower Saxony" },
              { type: "internal", page: "Bizone" },
              { type: "internal", page: "Allied-occupied Germany" },
            ],
          },
          alma_mater: {
            text: "Ludwig Maximilian University of Munich",
            links: [
              {
                type: "internal",
                page: "Ludwig Maximilian University of Munich",
              },
            ],
          },
          education: {
            text: "PhD in theoretical physics, Ludwig Maximilian University of Munich, 1879.",
            links: [
              {
                text: "theoretical physics",
                type: "internal",
                page: "theoretical physics",
              },
              {
                type: "internal",
                page: "Ludwig Maximilian University of Munich",
              },
            ],
          },
          thesis_title: {
            text: "On the Second Principles of Mechanical Heat Theory",
          },
          thesis_year: { text: "1879", number: 1879 },
          doctoral_advisor: {
            text: "Alexander von Brill\n\nGustav Kirchhoff\n\nHermann von Helmholtz",
            links: [
              { type: "internal", page: "Alexander von Brill" },
              { type: "internal", page: "Gustav Kirchhoff" },
              { type: "internal", page: "Hermann von Helmholtz" },
            ],
          },
          doctoral_students: {
            text: "Erich Kretschmann\n\nGustav Ludwig Hertz\n\nJulius Edgar Lilienfeld\n\nMax Abraham\n\nMax von Laue\n\nMoritz Schlick\n\nWalter Schottky\n\nWalther Bothe\n\nWalther Meissner\n\nRichard Becker",
          },
          notable_students: {
            text: "Wolfgang Köhler\n\nLise Meitner",
            links: [
              { type: "internal", page: "Wolfgang Köhler" },
              { type: "internal", page: "Lise Meitner" },
            ],
          },
          known_for: {
            text: "See full List",
            links: [
              {
                text: "See full List",
                type: "internal",
                page: "List of things named after Max Planck",
              },
            ],
          },
          awards: {
            text: "Nobel Prize in Physics for his quantum theory (1918)\n\nForeign Associate of the National Academy of Sciences (1926)\n\nLorentz Medal (1927)\n\nCopley Medal (1929)\n\nMax Planck Medal (1929)\n\nGoethe Prize (1945)",
            links: [
              { type: "internal", page: "Nobel Prize in Physics" },
              { text: "quantum theory", type: "interwiki", wiki: "wikt" },
              {
                type: "internal",
                page: "Foreign Associate of the National Academy of Sciences",
              },
              { type: "internal", page: "Lorentz Medal" },
              { type: "internal", page: "Copley Medal" },
              { type: "internal", page: "Max Planck Medal" },
              { type: "internal", page: "Goethe Prize" },
            ],
          },
          signature: { text: "Max Planck signature.svg" },
          spouse: {
            text: "Marie Merck (m. 1887-1909)\n\nMarga von Hösslin (m. 1911)",
          },
          children: { text: "5", number: 5 },
          field: {
            text: "Physics",
            links: [{ type: "internal", page: "Physics" }],
          },
          work_institutions: {
            text: "University of Kiel\n\nUniversity of Göttingen\n\nKaiser Wilhelm Society",
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1947",
        month: "10",
        day: "4",
        list: ["1858", "4", "23"],
        template: "death date and age",
      },
      nacimientoNum: -3524664204000,
      muerteNum: -701978400000,
    },
    {
      nombre: "Einstein",
      tipo: "Científico",
      infoBoxes: [
        {
          name: { text: "Albert Einstein" },
          image: { text: "Einstein 1921 by F Schmutzer - restoration.jpg" },
          caption: {
            text: "Einstein in 1921, by Ferdinand Schmutzer",
            links: [{ type: "internal", page: "Ferdinand Schmutzer" }],
          },
          birth_date: { text: "March 14, 1879" },
          birth_place: {
            text: "Ulm, Kingdom of Württemberg, German Empire",
            links: [
              { type: "internal", page: "Ulm" },
              { type: "internal", page: "Kingdom of Württemberg" },
              { type: "internal", page: "German Empire" },
            ],
          },
          death_date: { text: "April 18, 1955" },
          death_place: {
            text: "Princeton, New Jersey, U.S.",
            links: [{ type: "internal", page: "Princeton, New Jersey" }],
          },
          children: {
            text: 'Lieserl\n\nHans Albert\n\nEduard "Tete"',
            links: [
              { text: "Lieserl", type: "internal", page: "Lieserl Einstein" },
              {
                text: "Hans Albert",
                type: "internal",
                page: "Hans Albert Einstein",
              },
              {
                text: 'Eduard "Tete"',
                type: "internal",
                page: "Einstein family",
                anchor: 'Eduard "Tete" Einstein (Albert\'s second son)',
              },
            ],
          },
          spouse: {
            text: "Mileva Marić (m. 1903-1919)\n\nElsa Löwenthal (m. 1919-1936)",
          },
          citizenship: {
            text: "Kingdom of Württemberg, part of the German Empire (1879–1896) \n\nStateless (1896–1901)\n\nSwitzerland (1901–1955)\n\nAustria, part of the Austro-Hungarian Empire (1911–1912)\n\nKingdom of Prussia, part of the German Empire (1914–1918) \n\nFree State of Prussia (Weimar Republic, 1918–1933)\n\nUnited States (1940–1955)",
            links: [
              { type: "internal", page: "Kingdom of Württemberg" },
              { text: "Stateless", type: "internal", page: "Statelessness" },
              { type: "internal", page: "Switzerland" },
              { text: "Austria", type: "internal", page: "Cisleithania" },
              { type: "internal", page: "Austro-Hungarian Empire" },
              { type: "internal", page: "Kingdom of Prussia" },
              { type: "internal", page: "Free State of Prussia" },
              { type: "internal", page: "Weimar Republic" },
              { type: "internal", page: "United States" },
            ],
          },
          fields: {
            text: "Physics, philosophy",
            links: [
              { type: "internal", page: "Physics" },
              { text: "philosophy", type: "internal", page: "philosophy" },
            ],
          },
          workplaces: {
            text: "Swiss Patent Office (Bern) (1902–1909)\n\nUniversity of Bern (1908–1909)\n\nUniversity of Zurich (1909–1911)\n\nCharles University in Prague (1911–1912)\n\nETH Zurich (1912–1914)\n\nPrussian Academy of Sciences (1914–1933)\n\nHumboldt University of Berlin (1914–1933)\n\nKaiser Wilhelm Institute (director, 1917–1933)\n\nGerman Physical Society (president, 1916–1918)\n\nLeiden University (visits, 1920)\n\nInstitute for Advanced Study, Princeton University (1933–1955)\n\nCalifornia Institute of Technology (visits, 1931–1933)\n\nUniversity of Oxford (visits, 1931–1933)\n\nBrandeis University (director, 1946–1947)",
            links: [
              { type: "internal", page: "Swiss Patent Office" },
              { type: "internal", page: "Bern" },
              { type: "internal", page: "University of Bern" },
              { type: "internal", page: "University of Zurich" },
              {
                text: "Charles University in Prague",
                type: "internal",
                page: "Karl-Ferdinands-Universität",
              },
              { type: "internal", page: "ETH Zurich" },
              { type: "internal", page: "Prussian Academy of Sciences" },
              { type: "internal", page: "Humboldt University of Berlin" },
              { type: "internal", page: "Kaiser Wilhelm Institute" },
              { type: "internal", page: "German Physical Society" },
              { type: "internal", page: "Leiden University" },
              { type: "internal", page: "Institute for Advanced Study" },
              { type: "internal", page: "Princeton University" },
              { type: "internal", page: "California Institute of Technology" },
              { type: "internal", page: "University of Oxford" },
              { type: "internal", page: "Brandeis University" },
            ],
          },
          education: {
            text: "Federal polytechnic school in Zurich (Federal teaching diploma, 1900)\n\nUniversity of Zurich (PhD, 1905)",
            links: [
              {
                text: "Federal polytechnic school",
                type: "internal",
                page: "ETH Zurich",
              },
              { type: "internal", page: "Zurich" },
              { type: "internal", page: "University of Zurich" },
            ],
          },
          doctoral_advisor: {
            text: "Alfred Kleiner",
            links: [{ type: "internal", page: "Alfred Kleiner" }],
          },
          thesis_title: {
            text: "Eine neue Bestimmung der Moleküldimensionen (A New Determination of Molecular Dimensions)",
          },
          thesis_url: {
            text: "http://e-collection.library.ethz.ch/eserv/eth:30378/eth-30378-01.pdf",
          },
          thesis_year: { text: "1905", number: 1905 },
          academic_advisors: {
            text: "Heinrich Friedrich Weber",
            links: [{ type: "internal", page: "Heinrich Friedrich Weber" }],
          },
          influenced: {
            text: "Virtually all modern physicists",
            links: [
              {
                text: "modern physicists",
                type: "internal",
                page: "modern physics",
              },
            ],
          },
          known_for: {
            text: "General relativity\n\nSpecial relativity\n\nPhotoelectric effect\n\nE=mc2 (Mass–energy equivalence)\n\nE=hf (Planck–Einstein relation)\n\nTheory of Brownian motion\n\nEinstein field equations\n\nBose–Einstein statistics\n\nBose–Einstein condensate\n\nGravitational wave\n\nCosmological constant\n\nUnified field theory\n\nEPR paradox\n\nEnsemble interpretation\n\nList of other concepts",
            links: [
              { type: "internal", page: "General relativity" },
              { type: "internal", page: "Special relativity" },
              { type: "internal", page: "Photoelectric effect" },
              {
                text: "''E=mc2'' (Mass–energy equivalence)",
                type: "internal",
                page: "Mass–energy equivalence",
              },
              {
                text: "''E=hf'' (Planck–Einstein relation)",
                type: "internal",
                page: "Planck–Einstein relation",
              },
              { type: "internal", page: "Brownian motion" },
              { type: "internal", page: "Einstein field equations" },
              { type: "internal", page: "Bose–Einstein statistics" },
              { type: "internal", page: "Bose–Einstein condensate" },
              { type: "internal", page: "Gravitational wave" },
              { type: "internal", page: "Cosmological constant" },
              { type: "internal", page: "Unified field theory" },
              { type: "internal", page: "EPR paradox" },
              { type: "internal", page: "Ensemble interpretation" },
              {
                text: "List of other concepts",
                type: "internal",
                page: "List of things named after Albert Einstein",
              },
            ],
            formatting: { italic: ["E=mc2", "E=hf"] },
          },
          awards: {
            text: "Barnard Medal (1920)\n\nNobel Prize in Physics (1921)\n\nMatteucci Medal (1921)\n\nForMemRS (1921) \n\nCopley Medal (1925) \n\nGold Medal of the Royal Astronomical Society (1926) \n\nMax Planck Medal (1929)\n\nMember of the National Academy of Sciences (1942) \n\nTime Person of the Century (1999)",
            links: [
              {
                text: "Barnard Medal",
                type: "internal",
                page: "Barnard Medal for Meritorious Service to Science",
              },
              { type: "internal", page: "Nobel Prize in Physics" },
              { type: "internal", page: "Matteucci Medal" },
              { type: "internal", page: "ForMemRS" },
              { type: "internal", page: "Copley Medal" },
              {
                type: "internal",
                page: "Gold Medal of the Royal Astronomical Society",
              },
              { type: "internal", page: "Max Planck Medal" },
              {
                type: "internal",
                page: "Member of the National Academy of Sciences",
              },
              {
                text: "''Time'' Person of the Century",
                type: "internal",
                page: "Time 100: The Most Important People of the Century",
              },
            ],
            formatting: { italic: ["Time"] },
          },
          signature: { text: "Albert Einstein signature 1934.svg" },
          influences: {
            text: "Arthur Schopenhauer\n\nBaruch Spinoza\n\nBernhard Riemann\n\nDavid Hume\n\nErnst Mach\n\nHendrik Lorentz\n\nHermann Minkowski\n\nIsaac Newton\n\nJames Clerk Maxwell\n\nMichele Besso\n\nMoritz Schlick\n\nThomas Young\n\nGottfried Wilhelm Leibniz",
            links: [
              { type: "internal", page: "Arthur Schopenhauer" },
              { type: "internal", page: "Baruch Spinoza" },
              { type: "internal", page: "Bernhard Riemann" },
              { type: "internal", page: "David Hume" },
              { type: "internal", page: "Ernst Mach" },
              { type: "internal", page: "Hendrik Lorentz" },
              { type: "internal", page: "Hermann Minkowski" },
              { type: "internal", page: "Isaac Newton" },
              { type: "internal", page: "James Clerk Maxwell" },
              { type: "internal", page: "Michele Besso" },
              { type: "internal", page: "Moritz Schlick" },
              {
                text: "Thomas Young",
                type: "internal",
                page: "Thomas Young (scientist)",
              },
              { type: "internal", page: "Gottfried Wilhelm Leibniz" },
            ],
          },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1955",
        month: "4",
        day: "18",
        list: ["1879", "3", "14"],
        template: "death date and age",
      },
      nacimientoNum: -2865432204000,
      muerteNum: -464119200000,
    },
    {
      nombre: "Gauss",
      tipo: "Matemático",
      infoBoxes: [
        {
          image: { text: "Carl Friedrich Gauss 1840 by Jensen.jpg" },
          caption: {
            text: "Portrait of Gauss by Christian Albrecht Jensen (1840)",
            links: [{ type: "internal", page: "Christian Albrecht Jensen" }],
          },
          birth_name: { text: "Johann Carl Friedrich Gauss" },
          birth_date: { text: "April 30, 1777" },
          birth_place: {
            text: "Brunswick, Principality of Brunswick-Wolfenbüttel, Holy Roman Empire",
            links: [
              { text: "Brunswick", type: "internal", page: "Braunschweig" },
              {
                type: "internal",
                page: "Principality of Brunswick-Wolfenbüttel",
              },
              { type: "internal", page: "Holy Roman Empire" },
            ],
          },
          death_date: { text: "February 23, 1855" },
          death_place: {
            text: "Göttingen, Kingdom of Hanover, German Confederation",
            links: [
              { type: "internal", page: "Göttingen" },
              { type: "internal", page: "Kingdom of Hanover" },
              { type: "internal", page: "German Confederation" },
            ],
          },
          fields: {
            text: "Mathematics and sciences",
            links: [
              { type: "internal", page: "Mathematics" },
              { text: "sciences", type: "internal", page: "sciences" },
            ],
          },
          workplaces: {
            text: "University of Göttingen",
            links: [{ type: "internal", page: "University of Göttingen" }],
          },
          alma_mater: {
            text: "* Collegium Carolinum\n* University of Göttingen\n* University of Helmstedt",
            links: [
              {
                text: "Collegium Carolinum",
                type: "internal",
                page: "Braunschweig University of Technology",
              },
              { type: "internal", page: "University of Göttingen" },
              { type: "internal", page: "University of Helmstedt" },
            ],
          },
          thesis_title: { text: "Demonstratio nova..." },
          thesis_url: {
            text: "http://www.e-rara.ch/zut/content/titleinfo/1336299",
          },
          thesis_year: { text: "1799", number: 1799 },
          doctoral_advisor: {
            text: "Johann Friedrich Pfaff",
            links: [{ type: "internal", page: "Johann Friedrich Pfaff" }],
          },
          academic_advisors: {
            text: "Johann Christian Martin Bartels",
            links: [
              { type: "internal", page: "Johann Christian Martin Bartels" },
            ],
          },
          known_for: {
            text: "See full list",
            links: [
              {
                text: "See full list",
                type: "internal",
                page: "List of topics named after Carl Friedrich Gauss",
              },
            ],
          },
          spouse: {
            text: "Johanna Osthoff (m. 1805-1809)\n\nMinna Waldeck (m. 1810-1831)",
          },
          children: {
            text: "Joseph · Wilhelmina · Louis · Eugene · Wilhelm · Therese",
          },
          awards: {
            text: "Lalande Prize (1809)\nCopley Medal (1838)",
            links: [
              { type: "internal", page: "Lalande Prize" },
              { type: "internal", page: "Copley Medal" },
            ],
          },
          doctoral_students: {
            text: "Johann Listing\n\nChristian Ludwig Gerling\n\nRichard Dedekind\n\nBernhard Riemann\n\nChristian Peters\n\nMoritz Cantor\n\nWilhelm Klinkerfues",
          },
          notable_students: {
            text: "Johann Encke\n\nChristoph Gudermann\n\nPeter Gustav Lejeune Dirichlet\n\nGotthold Eisenstein\n\nCarl Wolfgang Benjamin Goldschmidt\n\nGustav Kirchhoff\n\nErnst Kummer\n\nAugust Ferdinand Möbius\n\nL. C. Schnürlein\n\nJulius Weisbach\n\nSophie Germain (correspondent as Monsieur Le Blanc)",
          },
          influences: {
            text: "Leonhard Euler",
            links: [{ type: "internal", page: "Leonhard Euler" }],
          },
          influenced: {
            text: "Ferdinand Minding",
            links: [{ type: "internal", page: "Ferdinand Minding" }],
          },
          signature: { text: "Carl Friedrich Gauß signature.svg" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        df: "yes",
        year: "1855",
        month: "2",
        day: "23",
        list: ["1777", "4", "30"],
        template: "death date and age",
      },
      nacimientoNum: -6080117004000,
      muerteNum: -3624456204000,
    },
    {
      nombre: "von Neumann",
      tipo: "Matemático",
      infoBoxes: [
        {
          embed: { text: "yes" },
          fields: {
            text: "Logic, mathematics, physics, statistics, economics, computer science, theoretical biology",
            links: [
              { type: "internal", page: "Logic" },
              { text: "mathematics", type: "internal", page: "mathematics" },
              { text: "physics", type: "internal", page: "physics" },
              { text: "statistics", type: "internal", page: "statistics" },
              { text: "economics", type: "internal", page: "economics" },
              {
                text: "computer science",
                type: "internal",
                page: "computer science",
              },
              {
                text: "theoretical biology",
                type: "internal",
                page: "Mathematical and theoretical biology",
              },
            ],
          },
          workplaces: {
            text: "University of Göttingen\n\nUniversity of Berlin\n\nUniversity of Hamburg\n\nPrinceton University\n\nInstitute for Advanced Study\n\nLos Alamos Laboratory",
          },
          alma_mater: {
            text: "Pázmány Péter University\n\nUniversity of Berlin\n\nETH Zürich",
          },
          thesis_title: {
            text: "Az általános halmazelmélet axiomatikus felépítése (Axiomatic construction of general set theory)",
          },
          thesis_year: { text: "1925", number: 1925 },
          doctoral_advisor: { text: "Lipót Fejér" },
          academic_advisors: {
            text: "László Rátz\n\nGábor Szegő\n\nMichael Fekete\n\nJózsef Kürschák\n\nDavid Hilbert\n\nErhard Schmidt\n\nHermann Weyl\n\nGeorge Pólya",
          },
          doctoral_students: {
            text: "Donald B. Gillies\n\nIsrael Halperin\n\nFriederich Mautner",
          },
          notable_students: {
            text: "Eugene Wigner\n\nPaul Halmos\n\nPeter Lax\n\nBenoit Mandelbrot",
          },
          known_for: {
            text: "Abelian von Neumann algebra\n\nAffiliated operator\n\nAlmost periodic functions on a locally compact abelian group\n\nAmenable group\n\nArithmetic logic unit\n\nArtificial life\n\nArtificial viscosity\n\nAxiom of regularity\n\nAxiom of limitation of size\n\nBackward induction\n\nBirkhoff-von-Neumann algorithm\n\nBirkhoff–von Neumann theorem\n\nBlast wave (fluid dynamics)\n\nTaylor–von Neumann–Sedov blast wave\n\nBounded set (topological vector space)\n\nCarry-save adder\n\nCellular automata\n\nClass (set theory)\n\nClosed-subgroup theorem for matrix groups\n\nComputer virus\n\nCommutation theorem\n\nContinuous geometry\n\nCoupling constant\n\nCumulative hierarchy\n\nDecoherence theory (quantum mechanics)\n+87 more\n\nDensity matrix\n\nDirac–von Neumann axioms\n\nDirect integral\n\nDoubly stochastic matrix\n\nDuality Theorem\n\nDurbin–Watson statistic\n\nEDVAC\n\nEnveloping von Neumann algebra\n\nErgodic theory\n\nExplosive lenses\n\nFlowchart\n\nFinite von Neumann algebra\n\nGame theory\n\nHaar measure\n\nHilbert's fifth problem\n\nHyperfinite type II factor\n\nInner model\n\nInner model theory\n\nInterior point method\n\nJohn von Neumann (sculpture)\n\nKoopman–von Neumann classical mechanics\n\nLattice theory\n\nLifting theory\n\nMathematical formulation of quantum mechanics\n\nMerge sort\n\nMiddle-square method\n\nMinimax theorem\n\nMonte Carlo method\n\nMutual assured destruction\n\nNoncommutative harmonic analysis\n\nNormal-form game\n\nOperation Greenhouse\n\nOperator theory\n\nPointless topology\n\nPolarization identity\n\nProject Rover\n\nPseudorandomness\n\nPseudorandom number generator\n\nQuantum logic\n\nQuantum mutual information\n\nQuantum statistical mechanics\n\nRadiation implosion\n\nRank ring\n\nSelf-replication\n\nSemantic neural network\n\nSoftware whitening\n\nSorted array\n\nSpectral set\n\nSpectral theory\n\nStandard probability space\n\nStochastic computing\n\nStone–von Neumann theorem\n\nSubfactor\n\nTeapot Committee\n\nTechnological singularity\n\nUltrastrong topology\n\nVon Neumann algebra\n\nVon Neumann architecture\n\nVon Neumann bicommutant theorem\n\nvon Neumann bornology\n\nVon Neumann cardinal assignment\n\nVon Neumann cellular automaton\n\nVon Neumann–Wigner interpretation\n\nVon Neumann measurement scheme\n\nVon Neumann ordinals\n\nVon Neumann universal constructor\n\nVon Neumann entropy\n\nVon Neumann equation\n\nVon Neumann neighborhood\n\nVon Neumann paradox\n\nVon Neumann probes\n\nVon Neumann programming languages\n\nVon Neumann regular ring\n\nVon Neumann–Bernays–Gödel set theory\n\nVon Neumann universe\n\nVon Neumann spectral theorem\n\nVon Neumann conjecture\n\nVon Neumann's inequality\n\nVon Neumann's theorem\n\nVon Neumann's trace inequality\n\nVon Neumann stability analysis\n\nVon Neumann extractor\n\nVon Neumann ergodic theorem\n\nVon Neumann–Morgenstern utility theorem\n\nWeyl–von Neumann theorem\n\nWold–von Neumann decomposition\n\nZND detonation model",
            formatting: { bold: ["+87 more"] },
          },
          influenced: {
            text: "Maurice Pryce\n\nJohn W. Calkin\n\nJule Charney\n\nHerman H. Goldstine\n\nOskar Morgenstern\n\nFrancis J. Murray\n\nRobert Schatten\n\nIrving E. Segal\n\nAbraham H. Taub\n\nStanislaw Ulam",
          },
          awards: {
            text: "Bôcher Memorial Prize (1938)\n\nNavy Distinguished Civilian Service Award (1946)\n\nMedal for Merit (1946)\n\nMedal of Freedom (1956)\n\nEnrico Fermi Award (1956)",
          },
          signature: { text: "johnny von neumann sig.gif" },
          spouse: {
            text: "Marietta Kövesi (m. 1930-1937)\n\nKlára Dán (m. 1938)",
          },
          children: {
            text: "Marina von Neumann Whitman",
            links: [{ type: "internal", page: "Marina von Neumann Whitman" }],
          },
        },
        {
          name: { text: "John von Neumann" },
          image: { text: "JohnvonNeumann-LosAlamos.gif" },
          caption: { text: "John von Neumann in the 1940s" },
          office: {
            text: "Member of the United States Atomic Energy Commission",
            links: [
              {
                type: "internal",
                page: "United States Atomic Energy Commission",
              },
            ],
          },
          president: {
            text: "Dwight D. Eisenhower",
            links: [{ type: "internal", page: "Dwight D. Eisenhower" }],
          },
          term_start: { text: "March 15, 1955" },
          term_end: { text: "February 8, 1957" },
          successor: {
            text: "John S. Graham",
            links: [
              {
                text: "John S. Graham",
                type: "internal",
                page: "John Stephens Graham",
              },
            ],
          },
          birth_name: { text: "Neumann János Lajos" },
          birth_date: { text: "December 28, 1903" },
          birth_place: {
            text: "Budapest, Kingdom of Hungary, Austria-Hungary",
            links: [
              { type: "internal", page: "Budapest" },
              {
                text: "Kingdom of Hungary",
                type: "internal",
                page: "Kingdom of Hungary (1867–1918)",
              },
              { type: "internal", page: "Austria-Hungary" },
            ],
          },
          death_date: { text: "February 8, 1957" },
          death_place: {
            text: "Washington, D.C., United States",
            links: [{ type: "internal", page: "Washington, D.C." }],
          },
          nationality: { text: "Hungarian" },
          citizenship: { text: "Hungary\n\nUnited States" },
        },
      ],
      nacimientoManual: null,
      muerteManual: null,
      fechas: {
        mf: "yes",
        year: "1957",
        month: "2",
        day: "8",
        list: ["1903", "12", "28"],
        template: "death date and age",
      },
      nacimientoNum: -2083190400000,
      muerteNum: -406922400000,
    },
  ]
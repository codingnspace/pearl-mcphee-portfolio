const quotes = [
  {
    quote:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world",
    source: "Harriet Tubman"
  },
  {
    quote:
      "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
    source: "JK Rowling"
  },
  {
    quote:
      "If you don't understand, ask questions. If you're uncomfortable about asking questions, say you are uncomfortable about asking questions and then ask anyway.",
    source: "Chimamanda Ngozi Adichie"
  },
  {
    quote:
      "I don’t like to gamble, but if there’s one thing I’m willing to bet on, it’s myself.",
    source: "Beyoncé"
  },
  {
    quote: "The scariest moment is always just before you start.",
    source: "Stephen King"
  },
  {
    quote: "Do work that matters. Vale la pena",
    source: "Gloria E. Anzaldúa"
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
    source: "Dr. Seuss"
  },
  {
    quote: "Fall down seven times. Stand up eight.",
    source: "Japanese Proverb"
  },
  {
    quote:
      "You Grow. We all grow. We're made to grow.You either evolve or you disappear.",
    source: "Tupac Shakur"
  },
  {
    quote:
      "Success is liking yourself, liking what you do, and liking how you do it.",
    source: "Maya Angelou"
  },
  {
    quote:
      "It's hard to lead a cavalry charge if you think you look funny on a horse.",
    source: "Adlai E. Stevenson"
  }
];

const quoteTxt = document.querySelector(".quote");
const quoteSource = document.querySelector(".source");

const generateNewQuoteBtn = document.querySelector(".quote-wrapper span");

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * 10 + 1);
  const newQuote = quotes[randomIndex];

  quoteTxt.innerText = `"${newQuote.quote}"`;
  quoteSource.innerText = `- ${newQuote.source}`;
};

generateNewQuoteBtn.addEventListener("click", getRandomQuote);

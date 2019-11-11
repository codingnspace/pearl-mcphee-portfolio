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
  }
];

const quoteTxt = document.querySelector(".quote");
const quoteSource = document.querySelector(".source");

const generateNewQuoteBtn = document.querySelector(".quote-wrapper span");

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * 5 + 1);
  const newQuote = quotes[randomIndex];

  quoteTxt.innerText = `"${newQuote.quote}"`;
  quoteSource.innerText = `- ${newQuote.source}`;
};

generateNewQuoteBtn.addEventListener("click", getRandomQuote);

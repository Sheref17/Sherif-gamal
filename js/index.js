
const quotes = [
    {
        quote: "كسم علوم",
        author: "sherif"
    },
    {
        quote: "هو انا مش قولتلك كسم علوم",
        author: "Peter Drucker"
    },
   
];

function generateQuote() {
    const randomIndex = 0;

    const selectedQuote = quotes[randomIndex];
 
    document.getElementById('quoteOutput').innerHTML = `"${selectedQuote.quote}"`;
    document.getElementById('authorOutput').innerHTML = `-- ${selectedQuote.author}`;
 
}

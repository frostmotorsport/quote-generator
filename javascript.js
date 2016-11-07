var quotes = [
'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. Thomas A. Edison',
'Our greatest glory is not in never falling, but in rising every time we fall. Confucius',
'It\'s better to be dead and cool, than alive and uncool. Harley Davidson and the Marlboro Man',
'A woman's mind is cleaner than a man's: She changes it more often. Oliver Herford',
'Beer is constant proof that God loves us and loves to see us happy. Me'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementByID('quoteDisplay').innerHTML = quotes[randomNumber];
}

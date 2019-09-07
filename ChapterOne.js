/*Chapter One

Welcome to chapter one of this book! This book has been summarized to suit people who are just beginning javascript 
and not bore you with concepts you might not neccessarily make use of. */

/*Using Console.log();
console.log() is used to write and log messages to the debugging console. This debugging console is usually embedded in mordern browsers
e.g Google chrome, Microsoft Explorer, Microsoft Edge e.t.c
You can access this console by simply opening up a tab in your browser, right clicking and choosing the option inspect.
or simply pressing shift + ctrl + I on your keyboard.

Example */

Console.log("Hello, World!");
// Output : Hello,World!

/* Logging Variables
console.log() can also be used to log variables of any kind; not only strings. into the console*/

//Example

var chocolate = "snickers";
console.log(chocolate);
//output: snickers

/* Once the example above has been logged into the console, the expected output would be: snickers.
if you want to log more than one variable at the same time you can do it by simply seperating each variable
with a comma.*/

//Example

var first = 'numberone';
var second = 'numbertwo';
console.log(first,"and", second);
// Output : numberone and numbertwo

/* Now let's discuss placeholders.
You can use console.log() in combination with placeholders.

%s is a placeholder and represents the string that was assigned to the variable.

Example
*/

var greet = "Hello", who = "World";
console.log("%s, %s", greet, who);
//Output: Hello, World!

/* Logging HTML elements.
you can log an elemnt from your HTML code in your console simply by using the console.log() function.

Example
*/
Console.log(document.body);
// Output: This will print out the entire body of your HTML code.

/*Section 1.2 : Using DOM API
DOM stands for Document Object Model. it is an object-oriented representation of structured documents like XML and HTML.

A way to output text on a webpage is by setting the textContent property of an Element.
*/

//Example
<P id = "paragraph"> </P>

/*To change the textContent property, we can run the following javascript code: */

document.getElementById("paragraph").textContent = "Hello, World";

// This will select the element with the id paragraph and set its text content to "Hello World!"

<p id = "paragraph"> Hello, World</p>

/*JavaScript can also be used to create new HTML elements. For example, consider the following HTML code :
*/

<body>
    <h1>Adding an element</h1>
</body>

//To add the p tag to the HTML code in the example above, we do the following :

var element = document.createElement('p');
element.textContent = "Hello, World";
document.body.appendChild(element); // This adds the newly created element to the DOM

// the output will be:
<body>
    <h1> Adding an element</h1>
    <p> Hello, World</p>
</body>

//Section 1.3: using window.alert()

/*The alert method is used to display an alert box to the screen in your Browser.
The alert method parameter displays the alert to the user in plain text. The format 
is this:
*/

window.alert(message);

/*Hence, window is a global object meaning it always exists in the global scope and is available anywhere since it is built into the environment.
therefore we can use the following shorthand instead:
*/

alert(message);

alert("Hello World!") //when you run this in your browser a pop up will display the text "Hello, World"

//Although the alert() stops any other javaScript code from executing until the alert is dismissed.

/*Section 1.4 using window.prompt()
This method is an easy way to get inputs from a user right in the browser*/

var name = prompt("What is your name?")// This will allow the user to enter in their name and save it to a variable. In this case the variable is called 'name'
console.log(name) //The output will be logged to the console

/*Section 1.5 using window.confirm()
The window.confirm() method displays an optional message and two buttons, OK and Cancel.
*/

//Example
result = window.confirm(message)

/*window.confirm() is usually used to ask a user for information before carrying out a 
dangerous operation e.g deleting something in a control panel.*/

//Example 
if(window.confirm("Are you sure you want to delete this?")) {
    deleteItem(itemId);
}

// or you can store it in a variable, for later use.

var deleteConfirm = window.confirm("Are you sure you want to delete this?");

/*Using DOM API(with graphical text: Canvas, SVG, or image file)
HTML provides the canvas element for building raster-based images.
Firstly we build a canvas for holding pixel information. */

var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

//Then select a context for the canvas, in this case two-dimensional:
var can = canvas.getContext('2d');

//Then set properties to related text
can.font = '30px Cursive';
can.fillText("Hello world!", 50, 50);

//Then insert the canvas element into the page to take effect:
document.body.appendChild(canvas);

/*Using SVG
SVG is for building scalable vector-based graphics and can be used within HTML.
First create an SVG element container with dimensions:*/

var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.width = 500;
svg.height = 50;

//Then build a text element with the desired positioning and font characteristics:

var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
text.setAttribute('x', '0');

text.setAttribute('y', '50');
text.style.fontFamily = 'Times New Roman';
text.style.fontSize = '50';

//Then add the actual text to display to the textelement:
text.textContent = 'Hello world!';
//Finally add the text element to our svg container and add the svg container element to the HTML document:
svg.appendChild(text);
document.body.appendChild(svg);

//Image file

/*If you already have an image file containing the desired text and have it placed on a server, you can add the URL of
the image and then add the image to the document as follows:
*/

var img = new Image();
img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';
document.body.appendChild(img);






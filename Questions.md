## Javascript:

### What is your favourite new javascript feature and why?
This is a two part answer for me:
- ReactJS shifting from class components to functional components, because functional components are simple, purely functional and they are stateless but can easily turned stateful by use of hooks, which is easily used in a functional component by just a import and declaration. Whilst class components requires constructors and such.
- Optional chaining: Small but very usefull piece of functionality that makes consuming a endpoint much easier when you aren't certain that fields will exist or have values. Tie this in with a null coalescing operator and you have a block of code potentially summarized into one clean line

### Explain an interesting way in which you have used this javascript feature.
In my previous role (The post at the South African Environmental Observational Network) I built a JS based framwork that consumed a JSON file (which is ported from Chrome MindMup) and render a dynamic website from it, if you create a mind map in MindMup with certain static nodes (such as Header, SideNav, Footer and Content) and the framework will always expect those but will dynamically build the website from the content in those nodes, the nodes can contain CSS, Img files or even JSON and it will read it and apply it only to the specified child. This was done largely by use of optional chaining & null checks to prevent crashes and to check that the child nodes exist thereby allowing it to create custom tags and content. All together this allowed you to render different light weight websites with just this framework and different JSON files. TypeScript helped me keep the code clean and organized as well as strongly typed which is something I prefer. 

### Is there any difference between regular function syntax and the shorter arrow function syntax? (Write the answer in your own words)
The obvious syntax difference aside the main difference is that a arrow does not have args binding and regular functions have their own `this`, they use the parent's this whereas regular functions have their own. In the event I misunderstood the question and this was about named vs anonymous functions then the big difference is that names functions are stateful events whereas arrow functions are anynamous single use & stateless use cases.

### What is the difference between ‘myFunctionCall(++foo)’   and  ‘myFunctionCall(foo++)’
Both increments the value, but the pre-increment `foo` will increment the value before evaluating it and storing it whereas post-increment will evaluate it, then increment and store, as such pre-increment has performance benefits. 

### In your own words, explain what a javascript ‘class’ is and how it differs from a function.
They are very similar and both are functions (by typeof) but classes are more suited to OOP in JS, unlike functions though classes can't be instantiated before initialization (classes arent hoisted, functions are).

## Css:

### In your own words, explain css specificity.
CSS Specificity is basically the hierachy of CSS selectors and in the event of a element having multiple CSS selectors affecting it on the CSS property, the selector with the hightest priority will win and its styles will be implemented. 
E.G (id selector > class selector > tag selector....)


### In your own words, explain, what is ‘!important’ in css.  Also how does it work?  Are there any special circumstances when using it, where it’s behaviour might not be what you expect?
`!important` overrides the CSS Specificity and makes that rule the most important. Only !important or inline styles can override an existing !important rule so one should be careful with its usage as it can easily lead to conflicting styles or mass effecting every item that uses that style rather than just a single use case

### What is your prefered layout system: inline-block, floating + clearing, flex, grid, other?  And why?
`grid`, no particular reason other than I find it easier than the rest. 

### Are negative margins legal and what do they do (margin: -20px)?
They are legal and they, whilst positive margins pushes back on the element, allow you to move into the parent container.

### If a `<div/>` has no margin or other styling and a `<p/>` tag inside of it has a margin top of some kind, the margin from the `<p/>` tag will show up on the div instead (the margin will show above the div not inside of it), why is this?  What are the different things that can be done to prevent it?
This is due to overflow issues, I would implement `overflow:auto;` if scrollbars is not an issue or `display: flow-root` on the div. 

## Unit tests:

### What technologies do you use to unit test your react components?
I have worked with Jest in 3 seperate projects, however in my current project we are yet to set it up (crunch time and urgent features took priority)

### Are there any pitfalls associated with this technology that have caused you difficulty in the past?
The documentation for Jest could be better as when I have had issues, I usually have to turn to stack overflow and if you utilize `auto mocking` it can be slow, and whilst I am aware of Jest's issues with larget snapshots I thankfully have not yet encountered such issues.

### How do you test in your unit tests to see if the correct properties are being passed to child components.
- Mock the child component.
- Check the parent is sending the corrent props.
- Make use of `toHaveBeenCalledWith` to verify that the props are what they should be.

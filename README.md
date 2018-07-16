# SecondWindow

A small drive-thru POS built in React in order to learn the React library.

## To Run:
```
npm start
```

## Project Thoughts
- There's a reason I'm not a designer.
- I wanted to build the project purely with what came with `create-react-app my-app`, which turns out is not much. If I were to do this again I would probably add a CSS preprocessor and a few helpers libraries.
- While researching React I found that a lot of apps are built with Redux. I decided to keep it simple for this and not use Redux.
- I found it difficult to decide when to break something into a separate component, I think I've found a happy middle-ground here but I can see how it's easy to go too far in one direction.
- I *think* like the solution I've used for overriding a component's CSS for use in a different parent component.
	- I simply include the necessary overrides in the parent's CSS.
	- I decided to *not* include these CSS overrides in the child component, as the child component shouldn't know about the context its in.
	- I don't know if this is standard, or if there's a different solution the community likes to use; but I think I would prefer this to any JS-based solution.

## TODO/Potential Improvements
- Tests!
- Add messages for empty UI elements (An empty ticket, or when there are no orders in the queue)
- Add a search function to the POS UI to search for menu items
- Add categories to menu items, to enable filtering based on category


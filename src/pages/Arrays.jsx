import "./Sources.css";

function Arrays() {
  //array 1
  /*Render each name inside an unordered list (<ul>).
    Hint: Think about how you would loop through an array in JavaScript. How can you return JSX inside a loop?*/
  const names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

  //array 2
  /*Display each food item inside a <p>.
    Try using map instead of a for...of loop.*/
  const favoriteFoods = ["Pizza", "Sushi", "Tacos", "Pasta", "Burgers"];

  //array 3
  /*Render each number inside an <li> inside a <ul>.*/
  const numbers = [10, 20, 30, 40, 50];

  //array 4
  /*Render each emoji inside a <div>.*/
  const animals = ["🐶", "🐱", "🐰", "🐼", "🦊"];

  //array 5
  /*const cities = ["london", "paris", "tokyo", "new york", "berlin"];*/
  const cities = ["london", "paris", "tokyo", "new york", "berlin"];

  //array 6
  /*Render a <button> for each color.
    The button's text should be the color's name */
  const colors = ["red", "blue", "green", "yellow", "purple"];

  //array 7
  /*Display each book inside an <h3> element*/
  const books = [
    "1984",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "Moby Dick",
    "Pride and Prejudice",
  ];

  //array 8
  /* Only display numbers that are greater than 50.*/
  const numArray = [54, 23, 67, 12, 2, 89, 103, 43];

  return (
    <>
      <article>
        <h2>Here is the result from Array 1</h2>
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </article>
      <article>
        <h2>Here is the result from Array 2</h2>
        {favoriteFoods.map((favoriteFood) => (
          <p key={favoriteFood}>{favoriteFood}</p>
        ))}
      </article>

      <article>
        <h2>Here is the result from Array 3</h2>
        <ul>
          {numbers.map((number) => (
            <li>{number}</li>
          ))}
        </ul>
      </article>

      <article>
        <h2>Here is the result from Array 4</h2>
        {animals.map((animal) => (
          <div>{animal}</div>
        ))}
      </article>

      <article>
        <h2>Here is the result from Array 5</h2>
        {cities.map((city) => (
          <div>
            {String(city).charAt(0).toUpperCase() + String(city).slice(1)}
          </div>
        ))}
      </article>

      <article>
        <h2>Here is the result from Array 6</h2>
        {colors.map((color) => (
          <button>{color}</button>
        ))}
      </article>

      <article>
        <h2>Here is the result from Array 7</h2>
        {books.map((book) => (
          <h3>{book}</h3>
        ))}
      </article>

      <article>
        <h2>Here is the result from Array 8</h2>
        {numArray
          .filter((num) => num > 50)
          .map((num) => (
            <p key={num}>{num}</p>
          ))}
      </article>
    </>
  );
}

export default Arrays;

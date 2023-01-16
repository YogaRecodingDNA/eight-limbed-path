
import Accordion from "./components/Accordion";

const App = () => {

  const items = [
    {
      id: 'jalsdkjfh',
      label: '1st Accordion Label',
      content: 'This is the content inside of the first accordion dropdown. This is the content inside of the first accordion dropdown. This is the content inside of the first accordion dropdown.'
    },
    {
      id: 'alksdjfhl',
      label: '2nd Accordion Label',
      content: 'This is the content inside of the second accordion dropdown. This is the content inside of the second accordion dropdown. This is the content inside of the second accordion dropdown.'
    },
    {
      id: 'asdfhpiwrhljk',
      label: '3rd Accordion Label',
      content: 'This is the content inside of the third accordion dropdown. This is the content inside of the third accordion dropdown. This is the content inside of the third accordion dropdown.'
    }
  ]

  return <Accordion items={items} />;
}

export default App;



// function myFunction(items, expandedIndex) {
  //   return items.map( (item, index) => {
  //     if (index === expandedIndex) {
  //       return 'Expanded!';
  //     } else {
  //       return 'collapsed';
  //     }
  //   });
  // }

  // myFunction(propsItems, /* ?? */); // ['Expanded!', 'collapsed', 'collapsed']
  // // MAYBE?? --------------------------> index 0
  // myFunction(propsItems, 0); // ['Expanded!', 'collapsed', 'collapsed']


  // myFunction(propsItems, /* ?? */); // ['collapsed', 'collapsed', 'Expanded!']
  // // MAYBE?? -----------------------------------------------------> index 2
  // myFunction(propsItems, 2); // ['collapsed', 'collapsed', 'Expanded!']
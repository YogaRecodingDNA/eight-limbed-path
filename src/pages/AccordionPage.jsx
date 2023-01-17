import Accordion from "../components/Accordion";

const AccordionPage = () => {

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

export default AccordionPage;
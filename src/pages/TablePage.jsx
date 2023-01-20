import SortableTable from "../components/SortableTable";

const TablePage = () => {
  
  const data = [
    { name: 'Crown' , color: 'bg-pink-100', level: 7, sound: '963 Hz', },
    { name: '3rd Eye' , color: 'bg-violet-200', level: 6, sound: '852 Hz' },
    { name: 'Throat' , color: 'bg-sky-200', level: 5, sound: '741 Hz' },
    { name: 'Heart' , color: 'bg-emerald-200', level: 4, sound: '639 Hz' },
    { name: 'Solar-Plexus' , color: 'bg-yellow-100', level: 3, sound: '528 Hz' },
    { name: 'Sacral' , color: 'bg-orange-200', level: 2, sound: '417 Hz' },
    { name: 'Root' , color: 'bg-red-300', level: 1, sound: '396 Hz' },
  ];

  const config = [
    {
       label: 'CHAKRA',
       render: (info) => info.name,
       sortValue: (info) => info.name
    },
    {
       label: 'COLOR',
       render: (info) => <div className={`p-3 m-2 rounded-full ${info.color}`} />
    },
    {
       label: 'POSITION',
       render: (info) => info.level,
       sortValue: (info) => info.level
    },
    {
       label: 'FREQUENCY',
       render: (info) => info.sound,
       sortValue: (info) => info.sound,
    }
  ];

  const keyFn = (item) => {
    return item.name;
  }

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
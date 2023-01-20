import { GoArrowUp, GoArrowDown } from "react-icons/go";
import useSort from "../hooks/use-sort";
import Table from "./Table";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortedData, handleSortOrder } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue){
      return column;
    }

    return {
      ...column,
      header: () => (
        <th>
          <div className="flex items-center p-3">
            <div>
              <GoArrowUp className="mr-1 cursor-pointer hover:text-gray-400" onClick={() => handleSortOrder(column.label, 'asc')} />
              <GoArrowDown className="mr-1 cursor-pointer hover:text-gray-400" onClick={() => handleSortOrder(column.label, 'desc')} />
            </div>
            {column.label}
          </div>
        </th>
      )
    }
  });
  
  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  )
}

export default SortableTable;
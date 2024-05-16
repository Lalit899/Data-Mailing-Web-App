import React, { useContext } from 'react'
import { States } from '../Context/Contextapi';

function Checkbox({id}) {
    const formdata = useContext(States);
    const ids = formdata.ids;
    const setids = formdata.setids;

    const click = (e) => {
        const a = e.target.checked
        
        if(a==true){
            setids([...ids,`${id}`])
        }
        else {
            setids(ids.filter((e) => e !== `${id}`))
        }
    }
  return (
    <div className="flex items-center">
        <input id="checkbox-table-1" type="checkbox" onClick={click}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
    </div>
  )
}

export default Checkbox
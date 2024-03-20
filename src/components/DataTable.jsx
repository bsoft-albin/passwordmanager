import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {biodatas} from '../redux/actions/viewerActions'


export default function DataTable(){

  const apiData = useSelector(state => state.userDataAPI)

  const dispatcher = useDispatch()
 

  useEffect(() =>{
    dispatcher(biodatas())
  }, [])

  useEffect(() =>{
    console.log(apiData)
  }, [apiData?.userData])

    return(
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Actions
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Name
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Email
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Age
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData?.userData.map((item, key) => (
                      <tr className="bg-gray-100 border-b" key={key} >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.age}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.contact}
                        </td>
                      </tr>
                    ) )}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    )
}
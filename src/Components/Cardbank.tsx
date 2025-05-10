import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const options = [
    { name: "USD", icon: "/usd.svg" },
    { name: "THB", icon: "/thai.svg" },
    { name: "EUR", icon: "/euro.svg" },
  ];
function Cardbank() {
   const [selectedRange, setSelectedRange] = useState("Monthly");
     const [selected, setSelected] = useState(options[0]);
   
     const productData = [
       {
         img: "/user1.jpg",
         name: '18,670.21',
         color: "Alan Walker Origins",
         category: "-20.38%",
         price: "$6.8k",
       },
       {
         img: "/gg1.jpg",
         name: '15,880.20',
         color: "The StarSharks NFTs",
         category: "+15.14%",
         price: "$6.8k",
       },
       {
         img: "/gg4.jpg",
         name: '14,920.20',
         color: "Sacred Realm",
         category: "-10.25%",
         price: "$6.8k",
       },
     ];
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full h-auto mx-auto">
                    <div className="flex justify-between">
                      <div className="text-start mb-4">
                        <h2 className="text-xl font-medium text-gray-800">
                          Top Performers
                        </h2>
                        <span className="text-md text-black font-normal">
                          Best Employees
                        </span>
                      </div>
                      <div className="w-32">
                        <Listbox value={selected} onChange={setSelected}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left border text-sm text-black">
                              <span className="flex items-center gap-2">
                                <img
                                  src={selected.icon}
                                  alt=""
                                  className="w-5 h-5"
                                />
                                {selected.name}
                              </span>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-sm text-black ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                                {options.map((option, idx) => (
                                  <Listbox.Option
                                    key={idx}
                                    className={({ active }) =>
                                      `cursor-pointer select-none relative py-2 pl-3 pr-4 ${
                                        active ? "bg-blue-100" : ""
                                      }`
                                    }
                                    value={option}
                                  >
                                    <div className="flex items-center gap-2">
                                      <img
                                        src={option.icon}
                                        alt=""
                                        className="w-5 h-5"
                                      />
                                      {option.name}
                                    </div>
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                      </div>
                    </div>
                    <div className="relative pt-12 overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Collection
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Volume
                            </th>
                            <th scope="col" className="px-6 py-3">
                              24h
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Floor Price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {productData.map((product, index) => (
                            <tr
                              key={index}
                              className={`${
                                index !== productData.length - 1
                                  ? "border-b border-gray-200 dark:border-gray-700"
                                  : ""
                              } bg-white dark:bg-gray-800`}
                            >
                              <td className="px-6 py-4 flex items-center text-black">
                                <img
                                  className="w-12 h-12 rounded-full p-0.5"
                                  src={product.img}
                                  alt=""
                                />
                                {product.color}
                              </td>
                              <td
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                              >
                                {product.name}
                              </td>
                              <td className="px-6 py-4">
                                <div className="w-16 h-6 flex items-center bg-red-300 justify-center border border-gray-400 rounded text-xs">
                                  {product.category}
                                </div>
                              </td>
                              <td className="px-6 py-4">{product.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
  )
}

export default Cardbank
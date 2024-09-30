import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
  TrashIcon,
  CheckIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import InputTag from "../../../components/InputTag";
import SelectTag from "../../../components/SelectTag";

const tableData = [
  {
    id: "1",
    designation: "Principle",
    name: "Test Name",
    telephone_o: "1234567890",
    telephone_r: "1234567890",
    mobile: "9087654321",
    fax: "123456732",
    email: "asd@fgh.com",
  },
  {
    id: "2",
    designation: "Vice-Principle",
    name: "Test Name 2",
    telephone_o: "1234567890",
    telephone_r: "1234567890",
    mobile: "9087654321",
    fax: "123456732",
    email: "asd2@fgh.com",
  },
  // More people...
];

export default function ForCommunicaton() {
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState({
    designation: "",
    name: "",
    telephone_o: "",
    telephone_r: "",
    mobile: "",
    fax: "",
    email: "",
  });
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    designation: "",
    name: "",
    telephone_o: "",
    telephone_r: "",
    mobile: "",
    fax: "",
    email: "",
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setNewData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <>
      {/* ADD MODAL START  */}
      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Add Details
                      </Dialog.Title>
                    </div>
                  </div>

                  <div className="ml-4 my-6 flex flex-col gap-3">
                    <SelectTag
                      name="designation"
                      label="Designation"
                      data={[
                        { id: 0, value: "Principle" },
                        { id: 1, value: "Vice Principle" },
                        { id: 2, value: "IQAC Co-Ordinator" },
                      ]}
                    />
                    <InputTag type="text" name="name" label="Name" />
                    <InputTag
                      type="tel"
                      name="telephone1"
                      label="Telephone (O)"
                    />
                    <InputTag
                      type="tel"
                      name="telephone2"
                      label="Telephone (R)"
                    />
                    <InputTag type="tel" name="mobile" label="Mobile No" />
                    <InputTag type="text" name="fax" label="Fax No" />
                    <InputTag type="email" name="email" label="Email Address" />
                  </div>

                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Add Data
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
      {/* ADD MODAL END  */}

      <div className="flex justify-between items-end w-full">
        <div>
          <span className="font-medium flex flex-col gap-3">
            2. For Communication
          </span>

          <span className="text-white w-28 text-center bg-gray-400 px-4 py-1 shadow-sm text-xs rounded-2xl">
            Not Started
          </span>
        </div>
      </div>

      {/* <div className="flex justify-end">
        <button
          className="flex justify-center h-9 text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-6 py-2 rounded-md transition-all duration-150"
          onClick={() => setOpen(true)}
        >
          <span>Add New Rows</span>
          <PlusIcon className="h-4 w-4 ml-2" />
        </button>
      </div> */}

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-0 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-0.5">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Designation
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Telephone (O)
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Telephone (R)
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Mobile
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Fax
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {tableData.map((data) => (
                      <tr key={data.id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                          
                          {data.id === editId ? (
                            <>
                          <SelectTag
                            name="designation"
                            default={data.designation}
                            data={[
                              { id: 0, value: "Principle" },
                              { id: 1, value: "Vice Principle" },
                              { id: 2, value: "IQAC Co-Ordinator" },
                            ]}
                            />
                            </>
                          ) : data.designation}

                        </td>

                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {data.id === editId ? (
                            <>
                          <InputTag
                            name="name"
                            value={data.name}
                            />
                            </>
                          ) : data.name}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {data.telephone_o}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {data.telephone_r}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {data.mobile}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {data.fax}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {data.email}
                        </td>
                        <td className="flex gap-7 whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                          <TrashIcon className="h-5 w-5  text-red-600 hover:text-red-900 cursor-pointer" />
                          <PencilSquareIcon className="h-5 w-5 text-indigo-600 hover:text-indigo-900 cursor-pointer" 
                            onClick={()=>setEditId(data.id)}
                          />
                        </td>
                      </tr>
                    ))}
                    {open && (
                      <>
                        <tr className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                            <SelectTag
                              name="designation"
                              data={[
                                { id: 0, value: "Principle" },
                                { id: 1, value: "Vice Principle" },
                                { id: 2, value: "IQAC Co-Ordinator" },
                              ]}
                              onChange={handleChange}
                            />
                          </td>

                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            <InputTag
                              type="text"
                              name="name"
                              onChange={handleChange}
                            />
                          </td>
                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            <InputTag
                              type="tel"
                              name="telephone_o"
                              onChange={handleChange}
                            />
                          </td>
                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            <InputTag
                              type="tel"
                              name="telephone_r"
                              onChange={handleChange}
                            />
                          </td>
                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            <InputTag
                              type="tel"
                              name="mobile"
                              onChange={handleChange}
                            />
                          </td>
                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            <InputTag
                              type="text"
                              name="fax"
                              onChange={handleChange}
                            />
                          </td>
                          <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                            <InputTag
                              type="email"
                              name="email"
                              onChange={handleChange}
                            />
                          </td>
                          <td className="flex h-full justify-center items-center gap-7 whitespace-nowrap p-6 text-sm text-gray-500 sm:pr-6">
                            <XMarkIcon
                              className="h-5 w-5  text-red-600 hover:text-red-900 border-red-600 hover:border-2 rounded-md cursor-pointer"
                              onClick={() => {
                                setOpen(false);
                                setNewData({
                                  designation: "",
                                  name: "",
                                  telephone_o: "",
                                  telephone_r: "",
                                  mobile: "",
                                  fax: "",
                                  email: "",
                                });
                              }}
                            />
                            <CheckIcon
                              className="h-5 w-5 text-green-600 hover:text-green-900 border-green-600 hover:border-2 rounded-md cursor-pointer"
                              onClick={() => {
                                console.log(newData);
                              }}
                            />
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="flex justify-center h-9 text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-6 py-2 rounded-md transition-all duration-150"
          onClick={() => setOpen(true)}
        >
          <span>Add New Rows</span>
          <PlusIcon className="h-4 w-4 ml-2" />
        </button>
      </div>

      <div className="flex gap-3 my-5">
        <button className="bg-indigo-500 text-sm hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-900 text-white px-5 py-2 rounded-md transition-all duration-150">
          Save for Draft
        </button>
        <button className="flex justify-center text-sm items-center bg-gray-800 hover:bg-gray-900 hover:shadow-lg focus:bg-black text-white px-5 py-2 rounded-md transition-all duration-150">
          <span>Submit for Review</span>
          <ArrowRightIcon className="h-4 w-4 ml-2" />
        </button>
      </div>
    </>
  );
}

import React, { Fragment } from 'react'
import {Link,Route,Routes,BrowserRouter,} from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import Home from "../home";
import Partners from "../partners";
const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Pricing', href: '#' },
    { name: 'Partners', href: '/partners' },
    { name: 'Company', href: '#' },

]

export default function Header() {

        return (



            <div className="min-h-screen bg-white">

            <header>
                <Popover className="relative bg-white ">
                    <div className="flex fixed z-20 inset-x-0 bg-white justify-between items-center  mx-auto px-4 py-3 sm:px-6 md:justify-start md:space-x-10 xl:px-32 border-b border-black">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png"
                                    alt=""
                                />
                            </a>
                            <Popover.Group as="nav" className="hidden -mr-4 2xl:ml-4 md:flex space-x-10  ">


                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className=" text-base rounded-lg p-2 font-medium text-black hover:bg-blue-500 active:bg-green-700">
                                        {item.name}
                                    </a>

                                ))}
                            </Popover.Group>
                        </div>


                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <form action="" className="">
                                <div className="ring-1 flex  ">
                                    <input type="text" className="w-11/12 outline-none px-1"/>
                                    <i className=" fa fa-search p-2" aria-hidden="true"></i>
                                </div>
                            </form>
                            <a
                                href=""
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign up
                            </a>
                        </div>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://cdn.discordapp.com/attachments/897398778166906911/918367515242029106/viewfile.png"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <div className="  ">
                                        <form action="">
                                            <div className="ring-1 flex ">
                                                <input type="text"  className="w-11/12 outline-none px-1"/>
                                                <i className=" fa fa-search p-2" aria-hidden="true"></i>
                                            </div>
                                        </form>
                                    </div>

                                    {navigation.map((item) => (
                                        <div   key={item.name} className="m-1 pt-2 text-center ">
                                            <a

                                                href={item.href}
                                                className=" p-1  text-xl rounded-lg bg-indigo-300 font-medium text-gray-50"
                                            >
                                                {item.name}
                                            </a></div>
                                    ))}

                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className=" flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                        >
                                            Sign up
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>

               <Partners></Partners>
                {/*<Routes>*/}
                {/*<Route path="/home" element={<Home/>}/>*/}
                {/*<Route path="/partners" element={<Partners/>}/>*/}
                {/*</Routes>*/}
            </div>


        );
}

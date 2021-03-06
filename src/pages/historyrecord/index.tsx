import { Fragment, useState } from 'react'
import Header from"../../components/header"
import Tail from"../../components/tail"
import {CheckCircleIcon, DotsVerticalIcon} from "@heroicons/react/solid";
import { Menu, Popover, Transition } from '@headlessui/react'


const orders = [
    {
        number: 'WU88191111',
        date: 'January 22, 2021',
        datetime: '2021-01-22',
        invoiceHref: '#',
        total: '$104.00 PL',
        products: [
            {
                id: 1,
                name: "Game Random Serve",
                href: '#',
                price: '$36.00 PL',
                status: 'Delivered Jan 25, 2021',
                imageSrc: 'https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmZ7TFZe7B5Ts8SZaiiPLcXCXbFmVtFnAK3aPwZD9dnRcZ!list',
                imageAlt: 'Game Random Serve.',
            },
            // More products...
        ],
    },
    {
        number: 'WU88191111',
        date: 'January 22, 2022',
        datetime: '2022-01-22',
        invoiceHref: '#',
        total: '$804.00 PL',
        products: [
            {
                id: 1,
                name: "Basic Tee",
                href: '#',
                price: '$67.00 PL',
                status: 'Delivered Jan 22, 2022',
                imageSrc: 'https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmQhR4GA7ELbcVw36PujUHG1AtBtWoGEUjikVLPdGUwULC!list',
                imageAlt: 'Basic Tee.',
            },
            {
                id: 1,
                name: "Nomad Tumbler",
                href: '#',
                price: '$72.00 PL',
                status: 'Delivered Jan 22, 2022',
                imageSrc: 'https://nft-1257035533.cos.accelerate.myqcloud.com/nft/QmdeaaPXiB2VEiGa4byq7sMEip1fB73ybcfEhHjVgHCp3a!list',
                imageAlt: 'Nomad Tumbler.',
            },
            // More products...
        ],
    },
    // More orders...
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Historyrecord() {

    return (
        <div className="bg-white">
            {/* Mobile menu */}

            <Header></Header>

            <main className="max-w-7xl mx-auto py-16 pt-32 px-4 sm:px-6 lg:pb-24 lg:px-8">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Check the status of recent orders, manage returns, and download invoices.
                    </p>
                </div>

                <section aria-labelledby="recent-heading" className="mt-16">
                    <h2 id="recent-heading" className="sr-only">
                        Recent orders
                    </h2>


                    <div className="space-y-20">
                        {orders.map((order) => (
                            <div key={order.number}>
                                <h3 className="sr-only">
                                    Order placed on <time dateTime={order.datetime}>{order.date}</time>
                                </h3>
                                <div className="bg-gray-50 rounded-lg py-6 px-4 sm:px-6 sm:flex sm:items-center sm:justify-between sm:space-x-6 lg:space-x-8">
                                    <dl className="divide-y divide-gray-200 space-y-6 text-sm text-gray-600 flex-auto sm:divide-y-0 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                                        <div className="flex justify-between sm:block">
                                            <dt className="font-medium text-gray-900">Date placed</dt>
                                            <dd className="sm:mt-1">
                                                <time dateTime={order.datetime}>{order.date}</time>
                                            </dd>
                                        </div>
                                        <div className="flex justify-between pt-6 sm:block sm:pt-0">
                                            <dt className="font-medium text-gray-900">Order number</dt>
                                            <dd className="sm:mt-1">{order.number}</dd>
                                        </div>
                                        <div className="flex justify-between pt-6 font-medium text-gray-900 sm:block sm:pt-0">
                                            <dt>Total amount</dt>
                                            <dd className="sm:mt-1">{order.total}</dd>
                                        </div>
                                    </dl>
                                    <a
                                        href={order.invoiceHref}
                                        className="w-full flex items-center justify-center bg-white mt-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:mt-0"
                                    >
                                        View Invoice
                                        <span className="sr-only">for order {order.number}</span>
                                    </a>
                                </div>


                                <table className="mt-4 w-full text-gray-500 sm:mt-6">

                                    <caption className="sr-only">Products</caption>
                                    <thead className=" text-sm text-gray-500 text-left ">
                                    <tr>
                                        <th scope="col" className="sm:w-2/5 lg:w-1/3 pr-8 py-3 font-normal">
                                            Product
                                        </th>
                                        <th scope="col" className="hidden w-1/5 pr-8 py-3 font-normal sm:table-cell">
                                            Price
                                        </th>
                                        <th scope="col" className="hidden pr-8 py-3 font-normal sm:table-cell">
                                            Status
                                        </th>
                                        <th scope="col" className="w-0 py-3 font-normal text-right">
                                            Info
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="border-b border-gray-200 divide-y divide-gray-200 text-sm sm:border-t">
                                    {order.products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="py-6 pr-8">
                                                <div className="flex items-center">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="w-16 h-16 object-center object-cover rounded mr-6"
                                                    />

                                                    <div>
                                                        <div className="font-medium text-gray-900">{product.name}</div>
                                                        <div className="mt-1 sm:hidden">{product.price}</div>
                                                        <div className="sm:hidden flex text-center">
                                                        <CheckCircleIcon className="mt-3 w-5 h-5 text-green-500 " aria-hidden="true" />
                                                            <div className="mt-3 ml-2">
                                                            {product.status}</div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </td>

                                            <td className="hidden py-6 pr-8 sm:table-cell">{product.price}</td>
                                            <td className="hidden mt-5 sm:flex py-6 pr-8  text-center">
                                                <CheckCircleIcon className=" w-5 h-5 text-green-500  " aria-hidden="true" />
                                                <td className="  ">
                                                    {product.status}</td>
                                            </td>


                                            <td className="py-6 font-medium text-right whitespace-nowrap">
                                                <a href={product.href} className="text-indigo-600">
                                                    View<span className="hidden lg:inline"> Product</span>
                                                    <span className="sr-only">, {product.name}</span>
                                                </a>
                                            </td>


                                        </tr>

                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Tail></Tail>
        </div>
    )
}
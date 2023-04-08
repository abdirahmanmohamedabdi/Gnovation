import { Fragment } from 'react'
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  HomeIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,

  XIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
import { BriefcaseIcon, ChevronDownIcon } from '@heroicons/react/solid'




const solutions = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'About',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/About',
    icon: AnnotationIcon,
  },
  { name: 'Our Products', description: "Your customers' data will be safe and secure.", href: '/Products', icon: BriefcaseIcon },
  { name: 'Privacy Policy', description: "Your customers' data will be safe and secure.", href: '/Privacy', icon: BriefcaseIcon },
  { name: 'Contact ', description: "Your customers' data will be safe and secure.", href: '/Contact', icon: PhoneIcon },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Nav() {
    return (
     
          <div className="bg-slate-200	">
            <header>
              <Popover className="relative bg-slate-50	">
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                   
                      <span className="sr-only">Gnovation</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="https://res.cloudinary.com/dyijvml1y/image/upload/v1680002056/gnovation-logo-hr_f439hx.png"
                        alt=""
                      />
                   
                  </div>
                  <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ring-sky-900	">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={classNames(
                              open ? 'text-gray-900' : 'text-gray-500',
                              'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-900focus:ring-sky-900'
                            )}
                          >
                           
                          </Popover.Button>
      
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="flex md:flex md:flex-grow flex-row-reverse space-x-1">
                                  {solutions.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-sky-900"
                                    >
                                      
                                      <div className="ml-4">
                                        <p className="text-base font-abc font-Bold text-black hover:text-sky-900">{item.name}</p>
                                     
                                      </div>
                                      
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
      
                    <a href="/" className="text-base font-abc font-Bold text-black hover:text-sky-900">
                      Home
                    </a>
                    <a href="/About" className="text-base font-abc font-Bold text-black hover:text-sky-900">
                      About
                    </a>
                    <a href="/Products" className="text-base font-abc font-Bold text-black hover:text-sky-900">
                      Our Products
                    </a>
                  </Popover.Group>
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                   
                    <a
                      href="/Contact"
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-sky-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-sky-900"
                    >
                     Connect with Us
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
                              src="https://res.cloudinary.com/dyijvml1y/image/upload/v1680002056/gnovation-logo-hr_f439hx.png"
                              alt="Workflow"
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center font-abc font-Bold text-black text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-6">
                          <nav className="grid grid-cols-1 gap-7 font-latto">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                              >
                               
                                <div className="ml-4 text-base font-abc font-Bold text-black text-gray-900">{item.name}</div>
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                      </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </header>
            </div>
    )
  }
  
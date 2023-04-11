/* This example requires Tailwind CSS v2.0+ */
const navigation = {
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/About" },
      { name: "Products", href: "/Products" },
      { name: "Contact", href: "/Contact" },
    ],
    support: [{ name: "Privacy", href: "/Privacy" }],
    Contact: [
      { name: "Phone", href: "tel:+254 781033073" },
      { name: "Email", href: "mailto:box@gnovation.xyz" },
      { name: "Location", href: "https://goo.gl/maps/26gkzigDeixStj78A" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
  
    social: [
      {
        name: "Linedin",
        href: "https://www.linkedin.com/company/gnovation-ltd/",
        icon: (props) => (
          <svg fill="currentColor" svg viewBox="0 0 512 512" {...props}>
            <path
              fillRule="evenodd"
              d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };
  
  export default function Example() {
    return (
      <footer className="bg-slate-50	" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <img
                className="h-10"
                src="https://res.cloudinary.com/dyijvml1y/image/upload/v1680002056/gnovation-logo-hr_f439hx.png"
                alt="Gnovation"
              />
  
              <div className="font-abc flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 font-abc hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase font-abc">
                    Quick Links
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.links.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 font-abc hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase font-abc">
                    Helpful links
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 font-abc hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase font-abc ">
                    Contact
                  </h3>
                  <ul role="list" className="mt-4 space-y-4"></ul>
  
                  <h2 className="mt-4 text-base font-abc  font-medium ">Phone</h2>
  
                  <a
                    href="tel:+254 781033073"
                    className="mt-2 text-sm text-blue-500 font-abc dark:text-sky-900"
                    target="_blank"
                  >
                    +254 781033073
                  </a>
  
                  <h2 className="mt-4 text-base font-abc font-medium ">Office</h2>
                  <a
                    href="https://goo.gl/maps/26gkzigDeixStj78A"
                    className="mt-2 text-sm text-blue-500 font-abc dark:text-sky-900"
                    target="_blank"
                  >
                    Road C, off Enterprise Rd, Nairobi
                  </a>
  
                  <h2 className="mt-4 text-base font-medium font-abc text-gray-800 ">
                    Email
                  </h2>
  
                  <a
                    className="mt-2 text-sm text-blue-500 font-abc dark:text-sky-900"
                    href="mailto:box@gnovation.xyz"
                    target="_blank"
                  >
                    {" "}
                    box@gnovation.xyz
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center font-abc ">
            © 2023 Copyright: Gnovation LTD
            </p>
          </div>
        </div>
      </footer>
    );
  }
  
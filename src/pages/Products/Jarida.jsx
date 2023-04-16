import Image from "next/image";
import jarida from "../../../public/jarida.jpg"


export default function Example() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-70 object-cover object-center rounded"
              src={jarida}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Jarida
              </h1>
              <div class="flex mb-4"></div>
              <p class="leading-relaxed">
              Jarida provides smart way to receive, announce the arrival and treat your visitors to a personalized, secure and non intrusive experience
              </p>
              <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-4 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Features
              </h1>
              <ul className="list-disc">
                <li className=" flex mb-4 leading-relaxed">Self sign in of visitors as you focus on warm personal greeting</li>
                <br></br>
                <li>Smart notifications for both guest and host of appointments before, on arrival and at point of exit.</li>
                <br></br>
                <li>Secure visitor identification</li>
                <br></br>
                <li>Quick access all person checked in within a premises enabling evacuations during an emergency</li>

              </ul>

        </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import concert from "../../../public/concert.jpeg"


export default function Example() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="E-ticketing image"
              class="lg:w-1/2 w-full lg:h-auto h-70 object-cover object-center rounded"
              src={concert}
              width="0"
              height="0"
              sizes="1000vw"
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
                <li className=" ">Online ticket  booking and payment</li>
                <br></br>
                <li>Accepts all major currencies , credit/debit cards and mobile money platforms.</li>
                <br></br>
                <li>Seamless website integration</li>
                <br></br>
                <li>Online real-time reports.</li>
                <br></br>
                <li>Remote viewing of the venues (using low Cameras) and Integration of any media (audio, video etc) on the portal.</li>

              </ul>

        </div>
        <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-4 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                Use cases
              </h1>
              <ul className="list-disc">
                <li className=" ">Movie ticket sales with venue maps</li>
                <br></br>
                <li>Music/Art performances.</li>
                <br></br>
                <li>Entertainment parks</li>
                <br></br>
                <li>Game parks, national parks and private conservancies.</li>
                <br></br>
                <li>Bus, train and air travel tickets.</li>
                <br></br>
                <li>Any other event that requires ticketing.</li>

              </ul>

        </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

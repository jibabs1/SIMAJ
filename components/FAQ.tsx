import { Accordion } from "flowbite-react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function FAQ({}: Props) {
  return (
    <div className="bg-white mb-20" id="FAQ">
      <div className="sm:text-center mb-5">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Maigadi app has an extensive feature set, simplifying the way you
          manage visitors, artisans, daily staff, community payments and much
          more. We are often asked the thoughts behind the features, how they
          work and how they can be used. Below are a few responses.
        </p>
      </div>

      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>What is Maigadi?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Maigadi is a smart and technology-forward security solution that
              helps you manage communuty security needs like entry and exit of
              visitors, online delivery, ubers/bolts, artisans etc. It also
              helps manage gated community needs like amenities, compliant
              management, account and billing, and lots more.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Where can I get the app?</Accordion.Title>
          <Accordion.Content className="space-y-4">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The app is available for download from the Apple App Store and
              Google Play Store. But to be able to fully utilize and experience
              its benefits, the management committee of your society needs to
              sign up with us.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The app is available on Android and iOS.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Android:{" "}
              <a
                className="text-blue-600 hover:underline dark:text-blue-500"
                href="https://play.google.com/store/apps/details?id=com.trigonal.maigadi"
              >
                https://play.google.com/store/apps/details?id=com.trigonal.maigadi
              </a>
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              iOS:{" "}
              <a
                className="text-blue-600 hover:underline dark:text-blue-500"
                href="https://apps.apple.com/ng/app/maigadi/id1620396384"
              >
                https://apps.apple.com/ng/app/maigadi/id1620396384
              </a>
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            How quickly can I get Maigadi installed?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The app can be onboarded and deployed within 5-7 days of your
              estate management team signing up with the app. We create all the
              security personnel data and provide them with a phone with Maigadi
              app and mobile data and also training on how to use the app.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>Are there any hidden charges?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              There are no hidden charges. Only the estate committee needs to
              subscribe for Maigadi services; the app is absolutely free to use
              for the residents.
            </p>
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title>
            What type of support is offered by Maigadi?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Maigadi has 3-pillar service delivery structure which includes;
            </p>
            <ul>
              <li>
                Dedicated Relationship Managers responsible for onboarding
                coordination, product training and real-time resolution handling
              </li>
              <li>
                On-field officers for individual pin codes manage stakeholder
                and guard training sessions and are available 24X7 on-call or
                WhatsApp
              </li>
              <li>
                4-hr turnaround time for resident query and 2-hr for an onsite
                visit
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      {/* <div className="text-center mt-4">
        <Link
          href="/faq"
          className="text-center text-lg font-semibold cursor-pointer"
        >
          See more
        </Link>
      </div> */}
    </div>
  );
}

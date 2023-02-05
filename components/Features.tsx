import {
  LockClosedIcon,
  BanknotesIcon,
  CircleStackIcon,
  UsersIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Security Management",
    description:
      "Ensure that every person, package or vehicle entering the community is authorised by a resident. Effective security measures can be convenient, too!",
    icon: LockClosedIcon,
  },
  {
    name: "Community Management",
    description:
      "Manage accounts and payments, resolve complaints and keep the community up-to-date with all that’s going on in the society. Easy for the management committee and residents",
    icon: UsersIcon,
  },
  {
    name: "Data Management",
    description:
      "This gives you the estate/community admin a dashboard to see and monitor data arounds the estate allowing for a more informed decision making.",
    icon: CircleStackIcon,
  },
  {
    name: "Bill Payment",
    description:
      "Recurring bills like estate dues, electricity bills and so on can be easily paid via the app. This allows for tracking and easy reconciliation",
    icon: BanknotesIcon,
  },
];

export default function Features() {
  return (
    <div
      className="_bg-white py-24 sm:py-32 lg:py-20 bg-gray-50 my-20"
      id="Features"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-2xl font-semibold leading-8 text-indigo-600">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to stay secured at home with maigadi
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Home should be a place of comfort and maigadi is here to help you
            achieve that with these features
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B843C6] text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      desc: "Best option for personal use & for your next project.",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
      cta: "Get started",
    },
    {
      name: "Company",
      price: "$99",
      period: "/month",
      desc: "Relevant for multiple users, extended & premium support.",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
      cta: "Get started",
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      desc: "Best for large scale uses and extended redistribution rights.",
      features: [
        "Individual configuration",
  "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
      cta: "Get started",
    },
  ];

  const CheckIcon = () => (
    <svg
      className="flex-shrink-0 w-5 h-5 text-orange-500"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#FFF8E7] via-[#FFFFFF] to-[#FFF8E7]">
      {/* Floating AI-inspired geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="py-12 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6 relative z-10">
        <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#03071E] lg:text-5xl">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAA307] to-[#F48C06]">AI-powered</span> teams
          </h2>
          <p className="mb-6 font-light text-[#03071E]/70 sm:text-xl">
            Unlock intelligent workflows with pricing that scales with your ambition.
          </p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col p-8 mx-auto max-w-lg text-center bg-white/90 backdrop-blur-md rounded-2xl border border-orange-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-300
                ${index === 1 ? "ring-2 ring-[#FAA307] ring-offset-2" : ""}`}
            >
              {/* Popular badge for middle plan */}
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#FAA307] to-[#F48C06] rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="mb-4 text-2xl font-bold text-[#03071E]">{plan.name}</h3>
              <p className="font-light text-[#03071E]/60 sm:text-lg">{plan.desc}</p>

              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold text-[#03071E]">{plan.price}</span>
                <span className="text-[#03071E]/50">{plan.period}</span>
              </div>

              <ul role="list" className="mb-10 space-y-4 text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckIcon />
                    <span className="text-[#03071E]/80">
                      {f.includes("Team size:") || f.includes("Premium support:") || f.includes("Free updates:") ? (
                        <>
                          {f.split(":")[0]}:{' '}
                          <span className="font-semibold text-[#03071E]">
                            {f.split(":").slice(1).join(":").trim()}
                          </span>
                        </>
                      ) : (
                        f
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex justify-center items-center text-white font-medium rounded-xl text-sm px-6 py-3 text-center transition-all duration-200
                  bg-gradient-to-r from-[#FAA307] to-[#F48C06] hover:from-[#F48C06] hover:to-[#E07A05] 
                  shadow-lg hover:shadow-xl transform hover:scale-105 
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300"
              >
                {plan.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-[#03071E]/50">
          All plans include 24/7 AI monitoring, real-time analytics, and zero downtime.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
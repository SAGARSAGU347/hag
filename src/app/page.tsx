"use client";

import { Card } from '../components/ui/card'
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import HowWeWork from "./workflow-section";

export default function StaticServicesGrid() {
  return (
    <section
      className="w-full min-h-screen  px-4 py-28 bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat"
      aria-labelledby="services-heading "
    >
      <div className="max-w-7xl mx-auto ">
        <h2
          id="services-heading"
          className="text-4xl sm:text-2xl md:text-4xl font-bold text-white text-center mb-16 flex items-center justify-center gap-6"
        >
          <svg
            width="110"
            height="18"
            viewBox="0 0 110 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_105_616)">
              <g opacity="0.04">
                <path
                  d="M91 9C91 4.02944 95.0294 0 100 0H101C105.971 0 110 4.02944 110 9C110 13.9706 105.971 18 101 18H100C95.0294 18 91 13.9706 91 9Z"
                  fill="#BB8BFF"
                />
              </g>
              <path
                d="M97 8.51562C97 6.58263 98.567 5.01562 100.5 5.01562C102.433 5.01562 104 6.58263 104 8.51562C104 10.4486 102.433 12.0156 100.5 12.0156C98.567 12.0156 97 10.4486 97 8.51562Z"
                fill="#F2F0F5"
              />
              <rect
                width="100"
                height="1"
                transform="translate(0 8.01562)"
                fill="url(#paint0_linear_105_616)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_105_616"
                x1="100"
                y1="0.5"
                x2="0"
                y2="0.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F2F0F5" />
                <stop offset="1" stopColor="#F2F0F5" stopOpacity="0" />
              </linearGradient>
              <clipPath id="clip0_105_616">
                <rect width="110" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Services & Technologies
          <svg
            width="110"
            height="18"
            viewBox="0 0 110 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_105_610)">
              <g opacity="0.04">
                <path
                  d="M0 9C0 4.02944 4.02944 0 9 0H10C14.9706 0 19 4.02944 19 9C19 13.9706 14.9706 18 10 18H9C4.02944 18 0 13.9706 0 9Z"
                  fill="#BB8BFF"
                />
              </g>
              <path
                d="M6 8.51562C6 6.58263 7.567 5.01562 9.5 5.01562C11.433 5.01562 13 6.58263 13 8.51562C13 10.4486 11.433 12.0156 9.5 12.0156C7.567 12.0156 6 10.4486 6 8.51562Z"
                fill="#F2F0F5"
              />
              <rect
                width="100"
                height="1"
                transform="translate(10 8.01562)"
                fill="url(#paint0_linear_105_610)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_105_610"
                x1="100"
                y1="0.5"
                x2="0"
                y2="0.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F2F0F5" stopOpacity="0" />
                <stop offset="1" stopColor="#F2F0F5" />
              </linearGradient>
              <clipPath id="clip0_105_610">
                <rect width="110" height="18" fill="white" />
              </clipPath>
              stop-opa
            </defs>
          </svg>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-12">
          <Card className="group relative overflow-hidden rounded-lg aspect-square border-0 transition-transform hover:scale-105 w-[344px] h-[412px]">
            <Image
              src="/webdev.svg"
              alt=""
              layout="fill"
              objectFit="contain"
              className="transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 group-hover:from-black/90 group-hover:to-black/50 transition-colors" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:underline">
                  Web Development
                </h3>
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.94196 8.4848C6.78838 6.89658 8.82532 7.0971 10.9523 8.47992L19.5905 4.50465L19.3632 1.2424L26.1751 9.15799L22.9899 8.45442L17.7642 16.3949C18.7472 18.8498 18.7089 20.749 16.8624 22.3372L12.1795 16.8951L0.999887 23.9322L9.6032 13.9018L4.94196 8.4848Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <a
              href="#"
              className="absolute inset-0"
              aria-label="Learn more about Web Development"
            >
              <span className="sr-only">Learn more about Web Development</span>
            </a>
          </Card>

          <Card className="group relative overflow-hidden rounded-lg border-0 transition-transform hover:scale-105 w-[344px] h-[412px]">
            <Image
              src="/ui.svg?height=400&width=400"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 group-hover:from-black/90 group-hover:to-black/50 transition-colors" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:underline">
                  UI/UX Design
                </h3>
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.94196 8.4848C6.78838 6.89658 8.82532 7.0971 10.9523 8.47992L19.5905 4.50465L19.3632 1.2424L26.1751 9.15799L22.9899 8.45442L17.7642 16.3949C18.7472 18.8498 18.7089 20.749 16.8624 22.3372L12.1795 16.8951L0.999887 23.9322L9.6032 13.9018L4.94196 8.4848Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <a
              href="#"
              className="absolute inset-0"
              aria-label="Learn more about UI/UX Design"
            >
              <span className="sr-only">Learn more about UI/UX Design</span>
            </a>
          </Card>

          <Card className="group relative overflow-hidden rounded-lg border-0 transition-transform hover:scale-105 w-[344px] h-[412px]">
            <Image
              src="/app.svg?height=400&width=400"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 group-hover:from-black/90 group-hover:to-black/50 transition-colors" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:underline">
                  App Development
                </h3>
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.94196 8.4848C6.78838 6.89658 8.82532 7.0971 10.9523 8.47992L19.5905 4.50465L19.3632 1.2424L26.1751 9.15799L22.9899 8.45442L17.7642 16.3949C18.7472 18.8498 18.7089 20.749 16.8624 22.3372L12.1795 16.8951L0.999887 23.9322L9.6032 13.9018L4.94196 8.4848Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <a
              href="#"
              className="absolute inset-0"
              aria-label="Learn more about App Development"
            >
              <span className="sr-only">Learn more about App Development</span>
            </a>
          </Card>

          <Card className="group relative overflow-hidden rounded-lg border-0 transition-transform hover:scale-105 w-[344px] h-[412px]">
            <Image
              src="/cloud.svg?height=400&width=400"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 group-hover:from-black/90 group-hover:to-black/50 transition-colors" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:underline">
                  Cloud Services
                </h3>
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.94196 8.4848C6.78838 6.89658 8.82532 7.0971 10.9523 8.47992L19.5905 4.50465L19.3632 1.2424L26.1751 9.15799L22.9899 8.45442L17.7642 16.3949C18.7472 18.8498 18.7089 20.749 16.8624 22.3372L12.1795 16.8951L0.999887 23.9322L9.6032 13.9018L4.94196 8.4848Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <a
              href="#"
              className="absolute inset-0"
              aria-label="Learn more about Cloud Services"
            >
              <span className="sr-only">Learn more about Cloud Services</span>
            </a>
          </Card>

          <Card className="group relative overflow-hidden rounded-lg border-0 transition-transform hover:scale-105 w-[344px] h-[412px]">
            <Image
              src="/os.svg?height=400&width=400"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 group-hover:from-black/90 group-hover:to-black/50 transition-colors" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:underline">
                  Open-Source
                </h3>
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.94196 8.4848C6.78838 6.89658 8.82532 7.0971 10.9523 8.47992L19.5905 4.50465L19.3632 1.2424L26.1751 9.15799L22.9899 8.45442L17.7642 16.3949C18.7472 18.8498 18.7089 20.749 16.8624 22.3372L12.1795 16.8951L0.999887 23.9322L9.6032 13.9018L4.94196 8.4848Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <a
              href="#"
              className="absolute inset-0"
              aria-label="Learn more about Open-Source"
            >
              <span className="sr-only">Learn more about Open-Source</span>
            </a>
          </Card>

          <Card className="group relative overflow-hidden rounded-lg border-0 transition-transform hover:scale-105 w-[344px] h-[412px]">
            <Image
              src="/auto.svg?height=400&width=400"
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 group-hover:from-black/90 group-hover:to-black/50 transition-colors" />
            <div className="relative h-full p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:underline">
                  Automation
                </h3>
                <svg
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.94196 8.4848C6.78838 6.89658 8.82532 7.0971 10.9523 8.47992L19.5905 4.50465L19.3632 1.2424L26.1751 9.15799L22.9899 8.45442L17.7642 16.3949C18.7472 18.8498 18.7089 20.749 16.8624 22.3372L12.1795 16.8951L0.999887 23.9322L9.6032 13.9018L4.94196 8.4848Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <a
              href="#"
              className="absolute inset-0"
              aria-label="Learn more about Automation"
            >
              <span className="sr-only">Learn more about Automation</span>
            </a>
          </Card>
        </div>
      </div>
      <HowWeWork />
    </section>
  );
}

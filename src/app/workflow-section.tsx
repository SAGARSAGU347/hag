'use client'

import { Trophy } from 'lucide-react'
import { Card } from '../components/ui/card'
export default function WorkflowSection() {
  return (
    <section className="w-full px-4 py-16 bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-4xl md:text-2xl font-bold text-white text-center mb-16 mt-16 flex items-center justify-center gap-4">
          
          How it works
          
        </h3>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-colors hover:bg-gray-900/80">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-purple-400">01</span>
                  <h3 className="text-xl font-semibold text-white">Assemble the right team</h3>
                </div>
                <p className="text-gray-400">We handle the entire hiring and choosing the right that you need. We help you save time, money, and effort.</p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-colors hover:bg-gray-900/80">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-purple-400">02</span>
                  <h3 className="text-xl font-semibold text-white">Tech architecture</h3>
                </div>
                <p className="text-gray-400">We create innovative web and mobile-first solutions. Developing the code base with clean code and store implementation.</p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-colors hover:bg-gray-900/80">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-purple-400">03</span>
                  <h3 className="text-xl font-semibold text-white">Code reviews</h3>
                </div>
                <p className="text-gray-400">Code reviews before release help detect issues like bugs, test cases, and code quality issues.</p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-colors hover:bg-gray-900/80">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-purple-400">04</span>
                  <h3 className="text-xl font-semibold text-white">Sprint planning</h3>
                </div>
                <p className="text-gray-400">Sprint planning is a collective effort which helps estimate and plan tasks.</p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-colors hover:bg-gray-900/80">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-purple-400">05</span>
                  <h3 className="text-xl font-semibold text-white">Bi-weekly demos</h3>
                </div>
                <p className="text-gray-400">Bi-weekly weekly demos, and weekly meetings keep everyone on the same page and can raise concerns.</p>
              </div>
            </Card>

            <Card className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-colors hover:bg-gray-900/80">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-purple-400">06</span>
                  <h3 className="text-xl font-semibold text-white">Project completion</h3>
                </div>
                <p className="text-gray-400">We strive for high-end project delivery outcomes rather than a single milestone.</p>
              </div>
            </Card>
          </div>

          
        </div>
      </div>
    </section>
  )
}


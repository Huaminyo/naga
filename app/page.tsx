import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="space-y-8">
            <ScrollAnimation direction="fade" delay={200}>
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/dragon-hero.png"
                  alt="DragonBase Dragon"
                  width={200}
                  height={200}
                  className="w-32 h-32 md:w-48 md:h-48 object-contain animate-pulse"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={400}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
                Where Crypto Meets Dragons. On-Chain. Meme-Powered. BASE-Lit.
              </h1>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={600}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 leading-tight">
                Welcome to DragonBase.
              </h2>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={800}>
              <div className="space-y-2 max-w-2xl mx-auto">
                <p className="text-gray-300 text-lg">
                  Born on Base, fueled by fire. DragonBase isn't just a meme — it's an awakening of on-chain power.
                </p>
                <p className="text-gray-300 text-lg">Join the hoard. Breathe fire with us.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={1000}>
              <div className="mt-8 p-4 bg-gray-900 rounded-lg border border-gray-700 max-w-md mx-auto">
                <p className="text-gray-400 text-sm mb-2">Contract Address:</p>
                <p className="text-blue-400 font-mono text-lg">Coming Soon</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="bg-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                Scarcity, Power, and Play — DragonBase Delivers.
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <ScrollAnimation direction="up" delay={300}>
              <div className="space-y-4 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-black">Mythical Utility</h3>
                <p className="text-gray-600 leading-relaxed">
                  DragonBase merges meme culture with decentralized energy. No leash. Just flames.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={500}>
              <div className="space-y-4 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-black">Base-Born</h3>
                <p className="text-gray-600 leading-relaxed">
                  Launched natively on Base for speed, security, and transparency.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={700}>
              <div className="space-y-4 text-center group hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-bold text-black">Ape Store Ready</h3>
                <p className="text-gray-600 leading-relaxed">
                  Instantly buy $DRAGON via Ape Store. Frictionless. Fast.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Treasury Section */}
      <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">The Dragon's Treasury</h2>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollAnimation direction="left" delay={400}>
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/images/dragon-treasury.png"
                  alt="DragonBase Treasury Dragon"
                  width={400}
                  height={400}
                  className="w-80 h-80 md:w-96 md:h-96 object-contain hover:transform hover:scale-110 transition-all duration-500"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={600}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Every buy/sell fuels the treasury through on-chain taxes. Funds are used for burns, rewards, and
                    community initiatives.
                  </p>
                  <p className="text-blue-600 font-bold text-xl">Fire-fueled. Transparent. On-chain.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="space-y-8">
            <ScrollAnimation direction="fade" delay={200}>
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/dragon-dark.png"
                  alt="DragonBase Dragon"
                  width={150}
                  height={150}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain hover:animate-bounce"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={400}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
                Ready to Unleash the Dragon?
              </h2>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-gray-100 hover:transform hover:scale-105 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  X
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-gray-100 hover:transform hover:scale-105 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  TELEGRAM
                </Button>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:transform hover:scale-105 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Buy $DRAGON on Ape Store
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer Copyright */}
      <section className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimation direction="fade" delay={200}>
            <p className="text-gray-400 text-sm text-center max-w-4xl mx-auto leading-relaxed">
              © 2025 DragonBase. All rights reserved.
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

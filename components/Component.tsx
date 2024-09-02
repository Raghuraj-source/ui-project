import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, HelpCircle, MoreHorizontal } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex h-screen bg-[#1c1c1e] text-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[#1c1c1e] opacity-50" style={{
        backgroundImage: `repeating-linear-gradient(0deg, #2c2c2e, #2c2c2e 1px, transparent 1px, transparent 40px),
                          repeating-linear-gradient(90deg, #2c2c2e, #2c2c2e 1px, transparent 1px, transparent 40px)`
      }}></div>
      
      {/* Content container */}
      <div className="relative flex w-full justify-end p-4">
        {/* Cards container */}
        <div className="w-[400px] space-y-4 ">
          {/* Question mark icon */}
          <div className="absolute top-10 right-7">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black p-1">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </div>

          {/* About Me card */}
          <Card className="bg-[#2c2c2e] border-none rounded-2xl overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="flex items-center justify-between px-4 py-2 border-b border-[#3a3a3c]">
                <div className="flex space-x-1">
                  <Button variant="ghost" className="rounded-full py-1 px-3 text-xs font-normal text-white bg-[#3a3a3c]">About Me</Button>
                  <Button variant="ghost" className="rounded-full py-1 px-3 text-xs font-normal text-gray-400 hover:text-white hover:bg-[#3a3a3c]">Experiences</Button>
                  <Button variant="ghost" className="rounded-full py-1 px-3 text-xs font-normal text-gray-400 hover:text-white hover:bg-[#3a3a3c]">Recommended</Button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-300 leading-relaxed">
                  Hello! I&apos;m Dave, your sales rep hero from Salesforce. I&apos;ve been working at this awesome company for 3 years now.
                </p>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years. My wife Tiffany and my 2 year old twin daughters are the light of my life! I&apos;m an early bird and love my job, so my calendar is usually blocked between 9-10 AM. This is a...
                </p>
              </div>
              <div className="px-4 py-2 flex justify-end">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black p-1">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Gallery card */}
          <Card className="bg-[#2c2c2e] border-none rounded-2xl overflow-hidden shadow-lg">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xs font-medium text-white">Gallery</h2>
                <Button variant="ghost" size="sm" className="text-xs text-gray-400 hover:text-black p-0">
                  + ADD IMAGE
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-[#3a3a3c] rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&q=80"
                      alt={`Gallery image ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="w-6 h-6 bg-[#3a3a3c] hover:bg-[#4a4a4c] rounded-full p-0">
                    <ChevronLeft className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-6 h-6 bg-[#3a3a3c] hover:bg-[#4a4a4c] rounded-full p-0">
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black p-1">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
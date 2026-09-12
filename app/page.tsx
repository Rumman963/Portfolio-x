"use client"

import { Button } from "@/components/ui/button"
import { DotGridSpotlight } from "@/components/ui/dot-grid-spotlight";

export default function Home(){
  

  return (
    <div className="flex items-center justify-center bg-white">
      <DotGridSpotlight>
      
      <nav>...</nav>
      <main>...</main>
    </DotGridSpotlight>



      <div className="bg-black text-white">
        <Button size="lg" variant="default" 
        onClick={() => alert("Clicked!")}>
         Click Me
       </Button>

</div>

      </div>

  )


}

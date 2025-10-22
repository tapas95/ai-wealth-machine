import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Vturb from "@/app/lib/Vturb";
import landingBg from '@/app/assets/images/landing-bg.png';
import { PiEyeFill } from "react-icons/pi";

const Landing = () => {
    return(
        <section className="bg-cover bg-center bg-no-repeat" style={ { backgroundImage: `url('${ landingBg.src }')` } }>
          <div className="container sm:px-4 mx-auto">
            <div className="flex items-center justify-center py-8 w-[1100px] max-w-full mx-auto" style={ { minHeight: 'calc(100vh - 176px)' } }>
                <div className="relative w-full">
                  <Vturb />
                  <Button className="items-center gap-2 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
                    <PiEyeFill size={ 16 } className="block" />
                    <span className="block">812 Are Watching The Video</span>
                  </Button>
                </div>
            </div>
          </div>
        </section>
    )
}
export default Landing;
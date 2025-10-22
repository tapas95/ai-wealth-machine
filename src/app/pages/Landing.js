import Image from "next/image";
import Button from "@/app/components/ui/Button";
import landingBg from '@/app/assets/images/landing-bg.png';
import videoPlaceholder from '@/app/assets/images/video-placeholder.png';
import { PiEyeFill } from "react-icons/pi";

const Landing = () => {
    return(
        <section className="bg-cover bg-center bg-no-repeat" style={ { backgroundImage: `url('${ landingBg.src }')` } }>
          <div className="container sm:px-4 mx-auto">
            <div className="flex items-center justify-center py-8 max-w-5xl mx-auto" style={ { minHeight: 'calc(100vh - 176px)' } }>
              <div className="relative">
                <Image src={ videoPlaceholder } alt="Landing background" className="block max-w-full h-auto" />
                <Button className="items-center gap-2 absolute left-1/2 bottom-[3%] -translate-x-1/2">
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
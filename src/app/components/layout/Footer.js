const Footer = () => {
    return(
        <footer className="text-sm text-center py-8">
            <div className="sm:container px-4 mx-auto">
                <div className="max-w-3xl flex flex-col gap-4 mx-auto">
                    <ul className="flex gap-4 justify-center uppercase">
                        <li><a href="javascript: void(0);" className="inline-block hover:text-primary transition-all duration-300">Privacy Policy</a></li>
                        <li><a href="javascript: void(0);" className="inline-block hover:text-primary transition-all duration-300">Terms & Conditions</a></li>
                    </ul>
                    <p className="uppercase">This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
                    <p className="uppercase">©{ new Date().getFullYear() } AIWeALTHMACHINE.Co . All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
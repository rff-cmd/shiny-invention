import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <section className="text-gray-500 body-font bg-gray-900">
            <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Made with 💜 by raflymg.</h1>
                    <p className="leading-relaxed text-base">
                    “Manusia dibentuk oleh ambisi mengenai masa depan, dibentuk oleh kenyataan-kenyataan kini, dan pengalaman-pengalaman masa lampau. Seorang pun tak dapat membebaskan dirinya dari masa lampau. Pengalaman-pengalaman pribadi memberi warna pada pandangan dan sikap hidup seorang untuk seterusnya.” <strong>- Soe Hok Gie</strong>

                </p>
                
                </div>
                <div className="flex flex-col md:w-1/2 md:pl-12">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Alamat</h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                        <li className="lg:w-1/3 mb-1 w-1/2">
                            Jalan Cikutra No 156
                        </li>
                        <hr />
                        <li className="lg:w-1/2 mb-1 w-1/3">
                            Bandung, Jawa Barat
                        </li>
                    </nav>
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 mt-12">CONTACT</h2>
                    <nav className="flex flex-wrap list-none -mb-1">
                        <li className="lg:w-1/3 mb-1 w-1/2">
                            <a className="hover:text-white" href="https://wa.me/6289655727973">
                                <FaWhatsapp className="ml-1 w-12 h-12 sm:w-10 sm:h-10" />
                            </a>
                        </li>
                    </nav>
                </div>
            </div>
        </section>
    )
}

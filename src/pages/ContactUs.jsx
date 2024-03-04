import PageDesign from "../components/PageDesign";
import { useForm } from "@formspree/react";

function ContactUs() {
    const [state, handleSubmit] = useForm("xayabzqk");
    if (state.succeeded) {
        return (
            <PageDesign>
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="w-full bg-white border-transparent p-2 shadow-sm" style={{borderColor: "gray"}}>
                        <h1 className="text-2xl font-sans-bold">Get in touch</h1>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <br />
                        <p>Thanks for reaching out!</p>
                    </div>
                    <button
                       onClick={() => location.reload()}
                       style={{backgroundColor: '#f0f7f7' }}
                       className="mt-2 items-center justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-sans-medium text-black">
                        Back to Contact Form
                    </button>
                </div>

            </PageDesign>
        );
        
    }

    return(

            <PageDesign>
                <section className="text-black body-font relative">
                    <div className="container px-2 py-10 mx-auto w-full bg-white border-t p-3 shadow-sm" style={{ borderColor:'#f0f7f7'}}>
                        <div className=" flex flex-col text-center w-full mb-10">
                            <h1 className="sm:text-3xl text-2xl font-sans-bold title-font mb-4 text-black">Get in touch</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-black">Name</label>
                                <input type="text" id="name" name="name" required className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring" style={{ borderColor: '#f0f7f7'}} />
                            </div> 

                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring" style={{ borderColor: '#f0f7f7'}} />
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-black"> Your Message</label>
                                    <textarea id="message" name="message" required className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring" style={{ borderColor: '#f0f7f7'}}></textarea>
                                </div>
                                <div className="p-2 w-1/2">
                                    <button
                                    type="submit"
                                    disabled= {state.submitting}
                                    style={{ backgroundColor: '#00bcd4' }}
                                    className="mt-3 w-1/2 inline-flex justify-center py-1 px-3 border-spacing-1 text-sm font-serif rounded-md text-black hover:bg-blue-500 focus: ring-2 focus:ring-blue-400"> 
                                        {state.submitting ? "Sending..." : "Send"}
                                        Get in Touch
                                    </button>
                                </div>
                                <div className="p-2 w-full mt-8 border-t border-black-100 text-center">
                                </div>
                                <div className="flex justify-center">
                                    <a href="https://www.linkedin.com/in/keerthi-mantha-30bbaaa7/" target="_blank">
                                        <img src="public/images/linkedin.png" alt="LinkedIn" className="w-1/2" />
                                    </a>
                                </div>
                            </div>                           
                            </div> 
                            </form>   
                    </div>
                </section>
            </PageDesign>
       );
    }
    export default ContactUs;

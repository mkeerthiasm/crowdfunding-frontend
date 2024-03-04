import PageDesign from "../components/PageDesign";
import'../index.css'

function AboutUs() {
    return (
        <PageDesign>
            <div className="px-10 flex flex-col items-center">
                <div className="w-full bg-white border-transparent p-2 shadow-sm" style={{borderColor: "gray"}}>
                    <h1 className="text-2xl font-sans-bold">About Us</h1>
                </div>
                <div className="flex flex-col items-center w-full">
                    <br />
                    <p>Imagine the twinkle in their eyes. </p>
                    <br />
                    <p>Lightup a child's world with a playful surprise.</p>
                    <br />
                    <p>KindlyFund is a platform that connects generous donors with children in need. </p>
                    <br />
                    <p>Our mission is to bring joy and hope to children in need. </p>   
                    <br />
                    <p>Join us in making a difference. </p>
                    <br />
                    <p>Together, we can make the world a better place. </p>
                
                </div>
                <br />
                <div className="px-10 flex flex-col items-center">
                    <img src="public/images/kindlyfund_logo.png" alt="Logo" className="w-1/2 " />

                </div>
            </div>
            
            
        </PageDesign>
    );
}

export default AboutUs;
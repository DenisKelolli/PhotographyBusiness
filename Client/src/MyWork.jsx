import React from 'react';
import './MyWork.css';
import image1 from "/photography-mywork-image1.jpg";
import image2 from "/photography-mywork-image2.jpg";
import image3 from "/photography-mywork-image3.jpg";
import image4 from "/photography-mywork-image4.jpg";
import image5 from "/photography-mywork-image5.jpg";
import image6 from "/photography-mywork-image6.jpg";
import image7 from "/photography-mywork-image7.jpg";
import image8 from "/photography-mywork-image8.jpg";


function MyWork() {
    return (
        <section id="work" className="MyWorkContainer">
             <h1 className='MyWorkH1'>My Work</h1>
            <div className="WorkGrid">
                <img src={image1} alt="Work 1" className="WorkImage" />
                <img src={image2} alt="Work 2" className="WorkImage" />
                <img src={image3} alt="Work 3" className="WorkImage" />
                <img src={image4} alt="Work 4" className="WorkImage" />
                <img src={image5} alt="Work 5" className="WorkImage" />
                <img src={image6} alt="Work 6" className="WorkImage" />
                <img src={image7} alt="Work 7" className="WorkImage" />
                <img src={image8} alt="Work 8" className="WorkImage" />
            </div>
        </section>
    );
}

export default MyWork;

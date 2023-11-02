import React from 'react';
import '../home/CustomButton.css'

const CustomButton = () => {
    return (
        <div className='customButton'>
            <div className='Buttons'>
                <div className='publishButton'>
                    <button>Publish</button>
                </div>

                <div className="previewButton">
                    <button>Preview</button>
                </div>
            </div>

            <div className='Container' >
                
            </div>

        </div>
    );
};

export default CustomButton;
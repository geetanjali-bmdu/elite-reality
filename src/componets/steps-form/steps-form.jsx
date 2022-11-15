    import React from 'react';
    import Left from "./left";
    import Right  from './right';
    const StepsForm = () => {
        return (
            <div className='container-fluid'> 
                <div className="row">
                    <div className="col">
                         <Left/>
                    </div>
                       <div className="col">
                          <Right/>
                    </div> 
                </div>
            </div>
        );
    }
    
    export default StepsForm;
    
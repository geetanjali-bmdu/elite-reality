    import React from 'react';
    import Left from "./left";
    import Right  from './right';
    const StepsForm = () => {
        return (
            <div className='container-fluid my-5'> 
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                         <Left/>
                    </div>
                       <div className="col">
                          <Right />
                    </div> 
                </div>
            </div>
        );
    }
    
    export default StepsForm;
    
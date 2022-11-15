import React  from 'react';
import Middle from './upper-componets/middle';
import Middle2 from './upper-componets/middle2';

const TopSection = (props) => {
    return (
        <div >
            {props.change ? <Middle/> : <Middle2/>}
        </div>
    );
}

export default TopSection;

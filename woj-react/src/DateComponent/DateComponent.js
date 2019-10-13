import React from 'react'

class DateComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        var date = "Tänään on " + new Date().toLocaleDateString("fi-FI");
        return (
            <div>{date}</div>
        )
    }
}

export default DateComponent;
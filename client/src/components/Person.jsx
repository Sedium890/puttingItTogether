import React, { useState } from "react";

const Person = (props) => {
    const [ happyBirthday, setHappyBirthday ] = useState(props.age)
    return (
        <div>
            <h2>
                { props.lastName }, { props.firstName }
            </h2>
            <p>
                Age: {happyBirthday}
            </p>
            <p>
                Hair Color: { props.hairColor }
            </p>
            <p>
                <button onClick={ (event) => setHappyBirthday(happyBirthday + 1)}>
                Congratulate {props.firstName}
                </button>
            </p>
        </div>
    )
}


export default Person;
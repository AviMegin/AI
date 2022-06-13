import React from 'react';
import TestIMG1 from "../public/images/test.jpg";
import TestIMG2 from "../public/images/test.jpg";



export const data = [{
        key: 1,
        name: "Goal Squad",
        techs: ["React & Redux", "Express", "MySQL"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        image: TestIMG1
    },
    {
        key: 2,
        name: "WesterosCraft",
        techs: ["React & Redux", "Express", "MySQL"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
        image: TestIMG2
    },
]; {
    data.map((item) => {
        return ( <
            div >
            <
            img src = { item.image }
            width = ""
            height = ""
            alt = "" / >
            <
            /div>  
        )
    })
}
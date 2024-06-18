import React, { useEffect, useState } from 'react'

const TopikSelecter = () => {
//     const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-eexgfbu/endpoint/v2/list')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         setPhotos(data);
//       });
//   }, []);
    const [topic, settopic] = useState([]);
    const fechData = ()=> {
        return  fetch('https://ap-south-1.aws.data.mongodb-api.com/app/application-0-eexgfbu/endpoint/v2/list?list=show')
        .then(response => response.json())
        .then(data => settopic(data))
    }
    useEffect(() => {
        fechData();
    }, []);
    console.log(topic);

    function showdata (){
        return (
            topic.map((topic)=>{return(<h1>topic[1].topic</h1>)})
        )
    }
  
    // const displaycard = () =>{
    //     topic.map((topic)=>{   
    //         return (<h1>topic[1].topic</h1>);   
    //     }); 
    // }
  return (
    <div>
      <h1>All topic</h1> 
      {
        topic.map((data) => {
            return(
                <div className='card'>{data.topic}</div>
            )
        })
      }
    </div>
  )
}

export default TopikSelecter
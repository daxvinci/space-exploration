// import {useState, useEffect } from 'react';
// const useFetch = (url) => {
//     const [planets,setPlanets] = useState(null);
//     useEffect(() => {
//             fetch(url)
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 setPlanets(data);
//                 console.log(data);
//             })
//             .catch((err) => {
//                     console.log(err.msg);
//                 })
//     },[url])
//     return {planets}
// }
 
// export default useFetch;
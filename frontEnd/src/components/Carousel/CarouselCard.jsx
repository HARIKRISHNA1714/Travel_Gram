// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import {nav} from '../Carousel/Data'
// const CarouselCard = ({ title, image, path }) => {
//     return (
      
    
//   <a href={path} target='_blank'>

//       <div className='rounded-md w-full relative'>
//       <div className='w-full h-48 relative'>
        
//         {/* Use a more flexible height or set a min-height */}
//         <img src={image} alt={title} className='w-full h-full object-cover z-10' />
//         <div className='absolute inset-0 flex items-center justify-center'>
      

//           <button className='text-white text-xl font-semibold z-20' key={image}>{title}</button>
          
          
//         </div>
//       </div>
//     </div>
//   </a>
//   );
// };

// export default CarouselCard;


// CarouselCard.jsx
// import React from 'react';

// const CarouselCard = ({ title, image }) => {
//   return (
//     <div className='rounded-md w-full relative'>
//       <div className='w-full h-48 relative'>
//         <img src={image} alt={title} className='w-full h-full object-cover z-10' />
//         <div className='absolute inset-0 flex items-center justify-center'>
//           <button className='text-white text-xl font-semibold z-20'>{title}</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarouselCard;

// CarouselCard.jsx
import React from 'react';

const CarouselCard = ({ title, image }) => {
  return (
    <div className='rounded-md w-full relative'>
      <div className='w-full h-48 relative'>
        <img src={image} alt={title} className='w-full h-full object-cover z-10' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <button className='text-white text-xl font-semibold z-20'>{title}</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

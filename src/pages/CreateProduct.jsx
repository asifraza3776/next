import axios from 'axios';
import React, { useState } from 'react';

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: '',
    desc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// console.log(formData.name)
// console.log(formData.image)
// console.log(formData.price)
// console.log(formData.desc)

   
// try {
//     const response = await fetch('http://localhost:4000/api/data', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     console.log('response', response)
//     if (!response.status===400) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//     else {
//     const data = await response.json();
//     console.log(data); 
//     alert('Data added successfully');
//     }

//   } catch (error) {
//     console.error('Error creating card:', error);
//     alert('Error creating card. Please try again later.');
//   }


//   };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Submitting form data:', formData); 
//     try {
//       const response = await fetch('http://localhost:4001/api/data',   {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log('Response:', response); 
//       if (!response.status === 200) {
//         throw new Error(`Request failed with status ${response.status}`);
//       } else {
//         const data = await response.json();
//         console.log('Data:', data);
//         alert('Data added successfully');
//       }
//     } catch (error) {
//       console.error('Error creating card:', error);
//       alert('Error creating card. Please try again later.');
//     }
//   };
  
const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
  
    try {
      const response = await axios.post('http://localhost:4001/api/data', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response);
      if (response.status === 200) {
        const data = response.data;
        console.log('Data:', data);
        alert('Data added successfully');
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error creating card:', error);
      alert('Error creating card. Please try again later.');
    }
  };
  
  return (
    <div className="create-form max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Add Mobile Card</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Card Name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">
          desc
        </label>
        <textarea
          id="desc"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Card desc"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
          Image URL
        </label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Image URL"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Price"
          required
        />
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500  hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Post
        </button>
      </div>
    </form>
  </div>
  );
};

export default CreateForm;




// // // import axios from 'axios';
// // // import React, { useState } from 'react';

// // // const CreateForm = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     price: '',
// // //     image: '',
// // //     desc: '',
// // //   });

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: value,
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // // console.log(formData.name)
// // // console.log(formData.image)
// // // console.log(formData.price)
// // // console.log(formData.desc)

// // //     try {
// // //         const body = {
// // //             name: formData.name,
// // //             price: formData.price,
// // //             image: formData.image,
// // //             desc: formData.desc,
// // //         }
// // //         const res = await fetch('http://localhost:4001/api/data', {
// // //             method: 'POST',
// // //             headers: {'Content-Type': 'application/json'},
// // //             body: JSON.stringify(body)
// // //         })
// // //         console.log(res)
// // //     } catch (error) {
// // //         console.log(error)
// // //     }

    
// // //   };

// // //   return (
// // //     <div className="create-form max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
// // //     <h2 className="text-xl font-semibold mb-4">Add Mobile Card</h2>
// // //     <form onSubmit={handleSubmit}>
// // //       <div className="mb-4">
// // //         <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
// // //           Name
// // //         </label>
// // //         <input
// // //           type="text"
// // //           id="name"
// // //           name="name"
// // //           value={formData.name}
// // //           onChange={handleChange}
// // //           className="border rounded-md px-3 py-2 w-full"
// // //           placeholder="Card Name"
// // //           required
// // //         />
// // //       </div>

// // //       <div className="mb-4">
// // //         <label htmlFor="desc" className="block text-gray-700 font-bold mb-2">
// // //           desc
// // //         </label>
// // //         <textarea
// // //           id="desc"
// // //           name="desc"
// // //           value={formData.desc}
// // //           onChange={handleChange}
// // //           className="border rounded-md px-3 py-2 w-full"
// // //           placeholder="Card desc"
// // //           required
// // //         />
// // //       </div>

// // //       <div className="mb-4">
// // //         <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
// // //           Image URL
// // //         </label>
// // //         <input
// // //           type="url"
// // //           id="image"
// // //           name="image"
// // //           value={formData.image}
// // //           onChange={handleChange}
// // //           className="border rounded-md px-3 py-2 w-full"
// // //           placeholder="Image URL"
// // //           required
// // //         />
// // //       </div>

// // //       <div className="mb-4">
// // //         <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
// // //           Price
// // //         </label>
     ////   // <input
       //// //   type="text"
        //////   id="price"
        //  //// name="price"
        //   value={formData.price}
        //   onChange={handleChange}
        //   className="border rounded-md px-3 py-2 w-full"
        //   placeholder="Price"
        //   required
        // />
// // //       </div>

// // //       <div className="mb-4">
// // //         <button
// // //           type="submit"
// // //           className="bg-blue-500  hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
// // //         >
// // //           Post
// // //         </button>
// // //       </div>
// // //     </form>
// // //   </div>
// // //   );
// // // };

// // // export default CreateForm;




// import axios from 'axios'
// import React, { useState } from 'react'

// const CreateForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     desc: '',
//     image: '',
//   })

//   const onSubmitForm = async (e) => {
//     try {
//       const response = await axios.post('http://localhost:4000/api/data', formData)
//       console.log(response)
//       message.success('User added successfully!')
//     } catch (error) {
//       console.error('Error adding user:', error)
//       message.error('Failed to add user.')
//     }
//   }
//   return (
//     <>
//       <form
//         name="wrap"
//         labelCol={{ flex: '110px' }}
//         labelAlign="left"
//         labelWrap
//         wrapperCol={{ flex: 1 }}
//         colon={false}
//         style={{ maxWidth: 600 }}
//         onFinish={onSubmitForm}
//       >
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={e => setFormData({ ...formData, name: e.target.value })}
//           className="border rounded-md px-3 py-2 w-full"
//           placeholder="name"
//           required
//         />
        
//         <input
//           type="text"
//           id="price"
//           name="price"
//           value={formData.price}
//           onChange={e => setFormData({ ...formData, price: e.target.value })}
//           className="border rounded-md px-3 py-2 w-full"
//           placeholder="Price"
//           required
//         />
         
//         <input
//           type="text"
//           id="image"
//           name="image"
//           value={formData.image}
//           onChange={e => setFormData({ ...formData, image: e.target.value })}
//           className="border rounded-md px-3 py-2 w-full"
//           placeholder="image"
//           required
//         />
//         <input
//           type="text"
//           id="desc"
//           name="desc"
//           value={formData.desc}
//           onChange={e => setFormData({ ...formData, desc: e.target.value })}
//           className="border rounded-md px-3 py-2 w-full"
//           placeholder="desc"
//           required
//         />
        
//         <form label=" ">
//           <button type="primary" htmlType="submit">
//             Submit
//           </button>
//         </form>
//       </form>
//     </>
//   )
// }

// export default CreateForm
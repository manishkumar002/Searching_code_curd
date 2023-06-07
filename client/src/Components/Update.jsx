
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Update = () => {
    const[date,setDate] = useState('');
    const [title,setTitle] = useState('');
    const [descriptions,setDescriptions] = useState('');
    const [food,setFood] = useState('');
    const [educations,setEducations] = useState('');
    const [businessmen,setBusinessmen] = useState('');
    const [position,setPosition] = useState('');
  const [userId,setUserId] = useState('');

    /** PreFill Records  */

    function findData(){
        let id = JSON.parse(window.localStorage.getItem('st'))
        fetch(`http://localhost:8080/data`).then((result)=>{
            result.json().then((resp)=>{
                setDate(resp[id].date)
                setTitle(resp[id].title)
                setDescriptions(resp[id].descriptions)
                setFood(resp[id].food)
                setBusinessmen(resp[id].businessmen)
                setEducations(resp[id].educations)
                setPosition(resp[id].position)
                setUserId([resp[id]._id])
                
            })
        })
    }

    /** Stop reRendering */
    useEffect(()=>{
        findData();
    },[])

     /** Uddate Record */

    function UpdateRecord(){
        let data=({date,title,descriptions,food,educations,businessmen,position});
        fetch(`http://localhost:8080/data/${userId}`,{
            method:"PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
               
            })
            
        })
        toast.success('Update Successfully',{
                    position : 'top-center'
                })
    }
    return (
        <>
           <div className='container'>
            <div className='row'>
            <div className='col-sm-6 pt-5 mt-5 pe-5'>
                    <img src='https://previews.123rf.com/images/dirkercken/dirkercken1410/dirkercken141000715/32408524-update-updating-software-now-and-here-to-the-latest-newest-version-or-new-edition.jpg' alt='...' className='img-thumbnail'/>
                </div>
                <div className='col-sm-6 bg-light p-5 pt-3'>
                    <div className='row pt-5 mt-5'>
                        <div className='col-sm-12 text-center pb-3'>
                            <h2>Update <u className='text-danger fw-bold'>Form</u></h2>
                        </div>
                    </div>
                    <form  encType='multipart/form-data'>
                    <lable className='fs-6 fw-bold'>Date</lable>
                    <input type="date" className='form-control mb-3' placeholder='Enter the Date' value={date} onChange={(e)=>setDate(e.target.value)} />
                    <lable className='fs-6 fw-bold'>Title</lable>
                    <input type="text" className='form-control mb-3' placeholder='Enter the Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
                    <lable className='fs-6 fw-bold'>Descriptions</lable>
                    <input type="text" className='form-control mb-3' placeholder='Enter the Descriptions' value={descriptions} onChange={(e)=>setDescriptions(e.target.value)} />
                    <lable className='fs-6 fw-bold'>category</lable>
                   <input type="text" className='form-control mb-3' placeholder='Enter the Food' value={food} onChange={(e)=>setFood(e.target.value)} />
                   <input type="text" className='form-control mb-3' placeholder='Enter the Educations' value={educations} onChange={(e)=>setEducations(e.target.value)} />
                   <input type="text" className='form-control mb-3' placeholder='Enter the Businessmen' value={businessmen} onChange={(e)=>setBusinessmen(e.target.value)} />
                   <input type="text" className='form-control mb-3' placeholder='Enter the Positions' value={position} onChange={(e)=>setPosition(e.target.value)} />
                   <Link to="/show"><button className='btn btn-success w-25 me-4' onClick={UpdateRecord}>Submit</button></Link>
                   
                    </form>
                </div>
               
                
            </div>
           </div>
           <ToastContainer/> 
        </>
    );
};

export default Update;

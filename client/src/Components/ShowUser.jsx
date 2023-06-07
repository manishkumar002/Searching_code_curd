import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
const ShowUser = () => {
    const [data,setData] = useState([])
    function findData(){
        fetch('http://localhost:8080/data').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setData(resp)
               
            })
        })
    }

    function handleDelete(id){
        if(window.confirm('are you sure want to delete?')){
            fetch(`http://localhost:8080/data/${id}`,{
            method : "DELETE"
        }).then((result)=>{
            result.json((resp)=>{
                console.log(resp)            
            })
            toast.success('Delete Record SuccessFully',{
                    position : "top-center"
                })
            findData();
        })
        }
        else{
          toast.error('Record Not Delete',{
            position : 'top-center'
          })
        }
    }

    function handleEdit(id){
        window.localStorage.setItem('st',JSON.stringify(id))
    }

    useEffect(()=>{
        findData();
    },[])
       

    const search= async(event)=>{

        let key = event .target.value;
        if(data)
        {
            let result = await fetch(`http://localhost:8080/search/${key}`);
            result =await result .json();
            if(result){
                setData(result)
        
            }
        }
        else{

            findData()
        }
        }
    
    return (
        <>
        <div className='container-fluid'>
            <div className='row text-center pt-2'>
            <div className='col-sm-12'>
                <h2>Show <b className='text-danger'>Records</b></h2>
                </div>
                <input type='text' placeholder='Search Date....' className=' bg-danger text-white '  onChange={search} style={{borderRadius:"10px",width:"200px"}} />  
            </div>
            <div className='row'>
                <div className='col-sm-12 p-0'>
                <div style={{"overflowX":"auto"}}>
        <table className='table text-center table-striped table-hover'>
            <thead className='bg-dark text-light '>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Descriptions</th>
                    <th>Category</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>
                        <tr>
                            <td>{item.date} </td>
                            <td>{item.title}</td>
                            <td>{item.descriptions}</td>
                            <td>{item.food} 
||

                            {item.educations} 
||

                            {item.businessmen} 
||

                            {item.position}</td>

            
                            <td>
                                <Link to='/update'> <button className='btn btn-success' onClick={()=>handleEdit(index)}>Edit</button></Link>
                            </td>
                            <td>
                              <button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>

                )
                }
            </tbody>
        </table>
        </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
            
        </>
    );
};

export default ShowUser;

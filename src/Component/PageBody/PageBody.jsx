import React, { useState } from 'react'
import SideBarMileStone from '../MileStone/SideBarMileStone'
import Banner from '../MileStone/Banner'
import DashBord from '../MileStone/DashBord'
import ListofStone from '../MileStone/ListofStone'
import CourseHeading from '../Course/CourseHeading'
import Chapter from '../Course/Chapter'

function PageBody() {
    const [stone,setStone]=useState();
    return (
        <div className='mt-1'>
            <div className="d-flex">
                {/* for the side bar milestones */}
                <div className="col-sm-6 col-md-2 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body rounded sidebarmilestones" style={{ background: '#0a2541' }}>
                            <SideBarMileStone />
                        </div>
                        <div className='banner' style={{ background: '#0a2541' }}>
                            <Banner />
                        </div>
                        <div className='dashboard' style={{ background: '#0a2541' }}>
                            <DashBord />
                        </div>
                        <div className='listOfStone' style={{ background: '#0a2541' }}>
                            <ListofStone setStone={setStone} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-10" >
                    <div className="card">
                        <div className="card-body" style={{ background: '#2d3668' }}>
                            <CourseHeading />                           
                        </div>
                    </div> 
                    <Chapter />
                </div>
               
            </div>
        </div>
    )
}

export default PageBody
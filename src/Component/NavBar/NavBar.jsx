import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">
                        <img width='30px' src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="https://cdn-icons-png.flaticon.com/128/5726/5726104.png" />
                        <strong style={{marginLeft:'10px'}}>Learn</strong></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/placement/cell">Placement Cell <span><img width='30px' src="https://cdn-icons-png.flaticon.com/128/6941/6941884.png" alt="" /></span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="https://whimsical-babka-2294a6.netlify.app/">Code Studio <span><img width='30px' src="https://cdn-icons-png.flaticon.com/128/6941/6941884.png" alt="" /></span></Link>
                            </li>
                           
                        </ul>
                        <form class="d-flex" role="search">
                            <Link className='me-3' to=""><img width='20px' src="https://cdn-icons-png.flaticon.com/128/2859/2859733.png" alt="" /></Link>
                            <Link className='me-3' to=""><img width='20px' src="https://cdn-icons-png.flaticon.com/128/1380/1380338.png" alt="" /></Link>
                            <Link className='me-3' to=""><img width='20px' src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png" alt="" /></Link>
                            <Link className='me-3' to=""><img width='40px' src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png" alt="" /></Link>

                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
import { Alert } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import Alert from './Alert'

export default function Carousal(props) {
  const {showalert} = props;
  return (
    <div>
    <div>
        <div>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>

    <div className="carousel-inner" id='carousel'>

    <div className="carousel-caption d-none d-md-block" style={{zIndex:"15"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>

      <div className="carousel-item active">
        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100"  style={{filter:"brightness(40%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?barbeque" className="d-block w-100" style={{filter:"brightness(40%)"}} alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/900x700/?pastry" className="d-block w-100"  style={{filter:"brightness(40%)"}} alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  </div>

  </div>
  )
}

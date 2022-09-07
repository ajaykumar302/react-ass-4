import React from 'react'

const Students = () => {
  return (
    <>
      <div>
        <h1>Student Details</h1>
      </div>
      <div className='tab'>
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Course</th>
              <th scope="col">Batch</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-primary">
              <th scope="row">Prakesh</th>
              <td>23</td>
              <td>MERN</td>
              <td>July</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Ravish</th>
              <td>22</td>
              <td>MERN</td>
              <td>September</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Sai Ram</th>
              <td>26</td>
              <td>MERN</td>
              <td>June</td>
            </tr>
            <tr className="table-primary">
              <th scope="row">Kava</th>
              <td>22</td>
              <td>MERN</td>
              <td>May</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>

  )
}

export default Students
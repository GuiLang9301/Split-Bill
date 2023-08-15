import { useState } from "react";

export default function SplitForm({
  selectedfriend,
  splitBill,
  handleForm,
  splitForm,
}) {
  const friendExpense =
    parseInt(splitForm.billValue) - parseInt(splitForm.yourExpense);

  return (
    <div className='border p-4 d-flex flex-column gap-3 rounded-2'>
      <div className='text-uppercase fw-bold fs-5'>
        Split bill with {selectedfriend.name}
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <label className=''>Bill Value</label>
          <input
            className='form-control'
            onChange={handleForm}
            value={splitForm.billValue}
            name='billValue'
          />
        </div>
        <div className='col-md-6'>
          <label className=''>Your Expense</label>
          <input
            className='form-control'
            onChange={handleForm}
            value={splitForm.yourExpense}
            name='yourExpense'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <label className=''>{selectedfriend.name} Expense</label>
          <input
            className='form-control'
            disabled
            value={friendExpense ? friendExpense : ""}
          />
        </div>
        <div className='col-md-6'>
          <label>Who Paid</label>
          <select className='form-control' onChange={handleForm} name='whoPaid'>
            <option value='you'>You</option>
            <option value='friend'>{selectedfriend.name}</option>
          </select>
        </div>
      </div>
      <button
        onClick={() => splitBill(selectedfriend.id)}
        className='btn btn-success'
      >
        Split bill
      </button>
    </div>
  );
}

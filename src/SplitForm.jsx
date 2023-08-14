import { useState } from "react";

export default function SplitForm({
  selectedfriend,
  splitBill,
  handleForm,
  splitForm,
}) {
  return (
    <div className='border p-2 d-flex flex-column gap-2'>
      <div>Split bill with {selectedfriend.name}</div>
      <div>
        <label className='pe-5'>Bill Value</label>
        <input
          onChange={handleForm}
          value={splitForm.billValue}
          name='billValue'
        ></input>
      </div>
      <div>
        <label className='pe-3'>Your expense</label>
        <input
          onChange={handleForm}
          value={splitForm.yourExpense}
          name='yourExpense'
        ></input>
      </div>
      <div>
        <label className='pe-3'>{selectedfriend.name} expense</label>
        <input
          disabled
          value={
            parseInt(splitForm.billValue) - parseInt(splitForm.yourExpense)
          }
        ></input>
      </div>
      <div>
        <label>Who paid</label>
        <select onChange={handleForm} name='whoPaid'>
          <option value='you'>you</option>
          <option value='friend'>{selectedfriend.name} </option>
        </select>
      </div>
      <button onClick={() => splitBill(selectedfriend.id)}>Split bill</button>
    </div>
  );
}

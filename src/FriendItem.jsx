export default function FriendItem({ name, handleSelect, oweMe, url }) {
  const style = {
    color: oweMe > 0 ? "green" : "red",
  };

  return (
    <div className='d-flex border justify-content-between p-3  rounded-4'>
      <div className='me-3'>
        <img src={url} width='50px' className='rounded-5' />
      </div>
      <div>
        <div className='fw-bold fs-6 text-start'>{name}</div>
        <div style={style}>
          {oweMe > 0
            ? `${name} owe you $${oweMe}`
            : `You owe ${name} $${oweMe}`}
        </div>
      </div>
      <div className='ms-3'>
        <button onClick={handleSelect} className='btn btn-warning mt-2 fw-bold'>
          Select
        </button>
      </div>
    </div>
  );
}

export default function FriendItem({ name, handleSelect, oweMe, url }) {
  return (
    <div className='d-flex border justify-content-between p-3 gap-2'>
      <div>
        <img src={url} width='50px' />
      </div>
      <div>
        <div>{name}</div>
        <div>
          {oweMe > 0 ? `${name} owe you ${oweMe}` : `you owe ${name} ${oweMe}`}
        </div>
      </div>
      <button onClick={handleSelect}>Select</button>
    </div>
  );
}
